import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PatreonCRM — Patron Retention for Creators',
  description: 'Track patron health, flag churn risk, and win back lapsing patrons automatically.',
  openGraph: {
    title: 'PatreonCRM',
    description: 'The retention CRM built for Patreon creators.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
