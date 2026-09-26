import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export interface Session {
  userId: string
  patreonUsername: string
}

const COOKIE_NAME = 'patreoncrm_session'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export function createSessionCookie(session: Session): string {
  return Buffer.from(JSON.stringify(session)).toString('base64')
}

export function parseSessionCookie(value: string): Session {
  return JSON.parse(Buffer.from(value, 'base64').toString()) as Session
}

export function setSession(response: NextResponse, session: Session) {
  response.cookies.set(COOKIE_NAME, createSessionCookie(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })
}

export function getSession(): Session | null {
  try {
    const cookieStore = cookies()
    const cookie = cookieStore.get(COOKIE_NAME)
    if (!cookie?.value) return null
    return parseSessionCookie(cookie.value)
  } catch {
    return null
  }
}
