import { Client } from 'pg'

/**
 * Create a one-off pg Client connected directly to Postgres.
 * This bypasses PostgREST entirely, avoiding schema-cache issues.
 * Always call client.end() when done.
 */
export async function getPgClient(): Promise<Client> {
  const client = new Client({
    connectionString: process.env.SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()
  return client
}
