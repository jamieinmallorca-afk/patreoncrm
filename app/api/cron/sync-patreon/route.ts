/**
 * POST /api/cron/sync-patreon
 * Called by Vercel Cron daily. Syncs patron lists and recalculates health scores.
 */

export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

const CRON_SECRET = process.env.CRON_SECRET

interface PatreonMember {
  id: string
  attributes: {
    full_name: string
    email: string
    patron_status: string
    last_charge_date: string | null
    last_charge_status: string | null
    lifetime_support_cents: number
    currently_entitled_amount_cents: number
    pledge_relationship_since: string | null
  }
}

function calcHealthScore(attrs: PatreonMember['attributes']): number {
  let health = 100
  const daysSinceCharge = attrs.last_charge_date
    ? Math.floor((Date.now() - new Date(attrs.last_charge_date).getTime()) / 86_400_000)
    : 999
  if (daysSinceCharge > 60) health -= 40
  else if (daysSinceCharge > 30) health -= 20
  if (attrs.last_charge_status && attrs.last_charge_status !== 'Paid') health -= 30
  const monthsAsPatron = attrs.pledge_relationship_since
    ? (Date.now() - new Date(attrs.pledge_relationship_since).getTime()) / (30 * 86_400_000)
    : 0
  if (monthsAsPatron < 1) health -= 10
  return Math.max(0, Math.min(100, health))
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (CRON_SECRET && auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = createAdminClient()
  const { data: connections, error } = await db
    .from('platform_connections')
    .select('profile_id, access_token, metadata')
    .eq('platform', 'patreon')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!connections?.length) return NextResponse.json({ ok: true, synced: 0 })
  let totalSynced = 0
  for (const conn of connections) {
    const campaignId = (conn.metadata as { campaign_id?: string })?.campaign_id
    if (!campaignId || !conn.access_token) continue
    const url =
      `https://www.patreon.com/api/oauth2/v2/campaigns/${campaignId}/members` +
      `?fields[member]=full_name,email,patron_status,last_charge_date,last_charge_status,` +
      `lifetime_support_cents,currently_entitled_amount_cents,pledge_relationship_since` +
      `&page[count]=500`
    const membersRes = await fetch(url, { headers: { Authorization: `Bearer ${conn.access_token}` } })
    if (!membersRes.ok) { console.error(`[sync-patreon] fetch failed`, await membersRes.text()); continue }
    const membersData = await membersRes.json() as { data: PatreonMember[] }
    const activeMembers = (membersData.data ?? []).filter(m => m.attributes.patron_status === 'active_patron')
    if (!activeMembers.length) continue
    const rows = activeMembers.map(m => ({
      profile_id: conn.profile_id,
      platform: 'patreon',
      platform_user_id: m.id,
      x_user_id: m.id,
      x_username: m.attributes.full_name || m.attributes.email || m.id,
      display_name: m.attributes.full_name || m.attributes.email || m.id,
      health_score: calcHealthScore(m.attributes),
      subscriber_metadata: {
        email: m.attributes.email,
        patron_status: m.attributes.patron_status,
        last_charge_date: m.attributes.last_charge_date,
        last_charge_status: m.attributes.last_charge_status,
        lifetime_support_cents: m.attributes.lifetime_support_cents,
        currently_entitled_amount_cents: m.attributes.currently_entitled_amount_cents,
      },
    }))
    const { error: upsertErr } = await db
      .from('subscribers')
      .upsert(rows, { onConflict: 'profile_id,platform,platform_user_id' })
    if (upsertErr) console.error(`[sync-patreon] upsert error`, upsertErr)
    else totalSynced += rows.length
  }
  return NextResponse.json({ ok: true, totalSynced })
}
