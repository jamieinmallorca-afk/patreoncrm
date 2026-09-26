/**
 * GET /api/auth/callback/patreon
 * Handles the OAuth callback from Patreon. Stores tokens in platform_connections.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { getSession } from '@/lib/session'

const PATREON_CLIENT_ID = process.env.PATREON_CLIENT_ID!
const PATREON_CLIENT_SECRET = process.env.PATREON_CLIENT_SECRET!
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!
const REDIRECT_URI = `${APP_URL}/api/auth/callback/patreon`

export async function GET(request: NextRequest) {
  const session = getSession()
  if (!session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const storedState = request.cookies.get('patreon_oauth_state')?.value

  if (!code || !state || state !== storedState) {
    return NextResponse.redirect(new URL('/dashboard?error=patreon_oauth', request.url))
  }

  // Exchange code for tokens
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
    console.error('[patreon callback] token exchange failed', await tokenRes.text())
    return NextResponse.redirect(new URL('/dashboard?error=patreon_token', request.url))
  }

  const tokens = await tokenRes.json() as {
    access_token: string
    refresh_token: string
    expires_in: number
  }

  // Fetch creator identity + campaign ID
  const identityRes = await fetch(
    'https://www.patreon.com/api/oauth2/v2/identity' +
    '?fields[user]=full_name,email' +
    '&include=campaign' +
    '&fields[campaign]=id',
    { headers: { Authorization: `Bearer ${tokens.access_token}` } }
  )

  if (!identityRes.ok) {
    return NextResponse.redirect(new URL('/dashboard?error=patreon_identity', request.url))
  }

  const identity = await identityRes.json() as {
    data: { id: string; attributes: { full_name: string; email: string } }
    included?: Array<{ id: string; type: string }>
  }

  const patreonUserId = identity.data.id
  const campaignId = identity.included?.find(i => i.type === 'campaign')?.id ?? null

  const db = createAdminClient()

  await db.from('platform_connections').upsert(
    {
      profile_id: session.userId,
      platform: 'patreon',
      platform_user_id: patreonUserId,
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      token_expires_at: new Date(Date.now() + tokens.expires_in * 1000).toISOString(),
      metadata: { campaign_id: campaignId },
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'profile_id,platform' }
  )

  const response = NextResponse.redirect(
    new URL('/dashboard?connected=patreon', request.url)
  )
  response.cookies.delete('patreon_oauth_state')
  return response
}
