import { createClient } from '@supabase/supabase-js'

// Admin client — server-side only, created inside the function so it
// never runs at module-init time (avoids build errors when env vars
// are evaluated before Next.js injects them).
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}
