/**
 * GET /api/auth/patreon
 * Starts the Patreon OAuth flow. No prior session required —
 * Patreon IS the login method for PatreonCRM.
 */

export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const PATREON_CLIENT_ID = process.env.PATREON_CLIENT_ID!
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!

export async function GET(request: NextRequest) {
  const state = crypto.randomBytes(16).toString('hex')

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: PATREON_CLIENT_ID,
    redirect_uri: `${APP_URL}/api/auth/callback/patreon`,
    scope: [
      'identity',
      'identity[email]',
      'campaigns',
      'campaigns.members',
      'campaigns.members[email]',
    ].join(' '),
    state,
  })

  const response = NextResponse.redirect(
    `https://www.patreon.com/oauth2/authorize?${params}`
  )

  response.cookies.set('patreon_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  })

  return response
}
