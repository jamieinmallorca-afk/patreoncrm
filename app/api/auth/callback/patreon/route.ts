/**
 * GET /api/auth/callback/patreon
 * Handles the Patreon OAuth callback. Uses a direct pg connection
 * to bypass PostgREST schema-cache issues on the free Supabase plan.
 */

export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getPgClient } from '@/lib/db'
import { setSession } from '@/lib/session'

const PATREON_CLIENT_ID = process.env.PATREON_CLIENT_ID!
const PATREON_CLIENT_SECRET = process.env.PATREON_CLIENT_SECRET!
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!
const REDIRECT_URI = `${APP_URL}/api/auth/callback/patreon`

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const storedState = request.cookies.get('patreon_oauth_state')?.value

  if (!code || !state || state !== storedState) {
    console.error('[patreon callback] state mismatch or missing code', { code: !!code, state, storedState })
    return NextResponse.redirect(new URL('/?error=patreon_oauth', request.url))
  }

  // ── 1. Exchange code for tokens ──────────────────────────────────────────
  const tokenRes = await fetch('https://www.patreon.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: PATREON_CLIENT_ID,
      client_secret: PATREON_CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    }),
  })

  if (!tokenRes.ok) {
    console.error('[patreon callback] token exchange failed', tokenRes.status, await tokenRes.text())
    return NextResponse.redirect(new URL('/?error=patreon_token', request.url))
  }

  const tokens = await tokenRes.json() as {
    access_token: string
    refresh_token: string
    expires_in: number
  }

  // ── 2. Fetch Patreon identity ────────────────────────────────────────────
  const identityRes = await fetch(
    'https://www.patreon.com/api/oauth2/v2/identity?fields[user]=full_name,email&include=campaign',
    { headers: { Authorization: `Bearer ${tokens.access_token}` } }
  )

  if (!identityRes.ok) {
    console.error('[patreon callback] identity failed', identityRes.status, await identityRes.text())
    return NextResponse.redirect(new URL(`/?error=patreon_identity`, request.url))
  }

  const identity = await identityRes.json() as {
    data: { id: string; attributes: { full_name?: string; email?: string } }
    included?: Array<{ id: string; type: string }>
  }

  const patreonUserId = identity.data.id
  const patreonUsername =
    identity.data.attributes.full_name ||
    identity.data.attributes.email ||
    patreonUserId
  const campaignId = identity.included?.find(i => i.type === 'campaign')?.id ?? null

  const tokenExpiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString()

  // ── 3. Upsert profile + platform_connections via direct pg ────────────────
  const pg = await getPgClient()
  let profileId: string

  try {
    // Check for existing connection
    const existing = await pg.query<{ profile_id: string }>(
      `SELECT profile_id FROM platform_connections
       WHERE platform = 'patreon' AND platform_user_id = $1
       LIMIT 1`,
      [patreonUserId]
    )

    if (existing.rows.length > 0) {
      profileId = existing.rows[0].profile_id
    } else {
      // Create a new profile
      const newProfile = await pg.query<{ id: string }>(
        `INSERT INTO profiles (x_user_id, x_username, onboarding_completed, created_at, updated_at)
         VALUES ($1, $2, true, NOW(), NOW())
         RETURNING id`,
        [patreonUserId, patreonUsername]
      )
      profileId = newProfile.rows[0].id
    }

    // Upsert the platform connection
    await pg.query(
      `INSERT INTO platform_connections
         (profile_id, platform, platform_user_id, access_token, refresh_token, token_expires_at, metadata, updated_at)
       VALUES ($1, 'patreon', $2, $3, $4, $5, $6, NOW())
       ON CONFLICT (profile_id, platform)
       DO UPDATE SET
         platform_user_id = EXCLUDED.platform_user_id,
         access_token     = EXCLUDED.access_token,
         refresh_token    = EXCLUDED.refresh_token,
         token_expires_at = EXCLUDED.token_expires_at,
         metadata         = EXCLUDED.metadata,
         updated_at       = NOW()`,
      [
        profileId,
        patreonUserId,
        tokens.access_token,
        tokens.refresh_token,
        tokenExpiresAt,
        JSON.stringify({ campaign_id: campaignId }),
      ]
    )
  } catch (err) {
    console.error('[patreon callback] db error', err)
    return NextResponse.redirect(new URL('/?error=db_error', request.url))
  } finally {
    await pg.end()
  }

  // ── 4. Set session and redirect ──────────────────────────────────────────
  const response = NextResponse.redirect(new URL('/dashboard?connected=patreon', request.url))
  response.cookies.delete('patreon_oauth_state')
  setSession(response, { userId: profileId, patreonUsername })
  return response
}
