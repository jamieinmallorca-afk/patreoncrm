/**
 * GET /api/auth/patreon
 * Redirects the user to Patreon OAuth.
 */

export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { getSession } from '@/lib/session'

const PATREON_CLIENT_ID = process.env.PATREON_CLIENT_ID!
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!

export async function GET(request: NextRequest) {
  const session = getSession()
  if (!session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

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
