export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.redirect(
    new URL('/', process.env.NEXT_PUBLIC_APP_URL!)
  )
  response.cookies.set('patreoncrm_session', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return response
}
