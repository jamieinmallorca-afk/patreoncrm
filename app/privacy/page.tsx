import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — PatreonCRM',
}

const EFFECTIVE_DATE = 'September 2026'
const CONTACT_EMAIL = 'hello@patreoncrm.com'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-500">◆</span>
          <span className="font-bold text-lg tracking-tight">PatreonCRM</span>
        </Link>
        <Link
          href="/api/auth/patreon"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Connect Patreon
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <div className="space-y-8 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who we are</h2>
            <p>
              PatreonCRM (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a patron retention tool for Patreon creators.
              We are not affiliated with or endorsed by Patreon, Inc. For privacy questions, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. What data we collect</h2>

            <h3 className="font-semibold text-white/90 mb-2 mt-4">Data about you (the creator)</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>Your Patreon user ID, display name, and email address (obtained via OAuth at login)</li>
              <li>Your Patreon campaign ID and campaign name</li>
              <li>Your subscription plan and billing status (via Stripe)</li>
              <li>Usage data: dashboard activity, features used, session timestamps</li>
            </ul>

            <h3 className="font-semibold text-white/90 mb-2 mt-6">Data about your patrons</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>Patron Patreon user IDs</li>
              <li>Membership status (active, declined, former)</li>
              <li>Pledge amounts and tier history</li>
              <li>Membership start date, last charge date, and lapse history</li>
              <li>Patron email addresses — <strong className="text-white">fetched in real time when a win-back email is sent, then immediately discarded. We do not store patron email addresses.</strong></li>
            </ul>

            <h3 className="font-semibold text-white/90 mb-2 mt-6">Data we do not collect</h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>Per-post engagement (likes, comments, views) — Patreon does not expose this via their API</li>
              <li>Your patrons&apos; full names (unless Patreon provides this via their API in future)</li>
              <li>Payment card details (handled entirely by Stripe)</li>
              <li>Any data beyond what Patreon&apos;s official API permits us to access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How we use your data</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide the Service: calculating patron health scores, flagging at-risk patrons, and enabling win-back email campaigns</li>
              <li>To authenticate you and maintain your session</li>
              <li>To manage your subscription via Stripe</li>
              <li>To send you product updates and important service notices (you can opt out of marketing emails)</li>
              <li>To improve the Service through aggregated, anonymised usage analytics</li>
            </ul>
            <p className="mt-4">
              We do not sell your data or your patrons&apos; data to third parties. We do not use patron data
              for advertising or any purpose other than providing the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Legal basis for processing (GDPR)</h2>
            <p>If you are in the European Economic Area, our legal bases for processing are:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li><strong className="text-white/90">Contract</strong> — processing necessary to provide the Service you signed up for</li>
              <li><strong className="text-white/90">Legitimate interests</strong> — analytics and fraud prevention (we balance these against your rights)</li>
              <li><strong className="text-white/90">Legal obligation</strong> — where required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data storage and security</h2>
            <p>
              Creator and patron data is stored on Supabase infrastructure, which is SOC 2 Type II compliant
              and hosted in the EU (Ireland, AWS eu-west-1). Data is encrypted in transit (TLS) and at rest.
              Stripe processes all payment card data under PCI DSS compliance — we never see or store card numbers.
            </p>
            <p className="mt-3">
              We employ industry-standard security practices but cannot guarantee absolute security.
              If we become aware of a data breach that affects you, we will notify you within 72 hours in
              accordance with GDPR requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data sharing</h2>
            <p>We share data only with the following service providers, and only as necessary to operate the Service:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li><strong className="text-white/90">Supabase</strong> — database and authentication hosting</li>
              <li><strong className="text-white/90">Stripe</strong> — payment processing and subscription management</li>
              <li><strong className="text-white/90">Resend</strong> — transactional email delivery (win-back emails and service notifications)</li>
              <li><strong className="text-white/90">Vercel</strong> — application hosting and deployment</li>
            </ul>
            <p className="mt-4">
              All providers are bound by data processing agreements. We do not share data with
              advertisers, data brokers, or any other third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your patron data obligations</h2>
            <p>
              When you use PatreonCRM to send win-back emails to your patrons, you become a data controller
              for those communications. You are responsible for ensuring your use complies with applicable
              privacy law, including GDPR, CAN-SPAM, and any other regulations relevant to your location and
              your patrons&apos; locations. PatreonCRM acts as a data processor on your behalf for these emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Data retention</h2>
            <p>
              We retain your account data and patron data for as long as your account is active. If you delete
              your account (Settings → Delete Account), all data is permanently deleted within 30 days.
              Stripe may retain billing records for up to 7 years as required by financial regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li><strong className="text-white/90">Access</strong> — request a copy of the data we hold about you</li>
              <li><strong className="text-white/90">Rectification</strong> — correct inaccurate data</li>
              <li><strong className="text-white/90">Erasure</strong> — delete your account and all associated data</li>
              <li><strong className="text-white/90">Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong className="text-white/90">Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong className="text-white/90">Restriction</strong> — restrict processing in certain circumstances</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>.
              We will respond within 30 days. You also have the right to lodge a complaint with your local
              data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Cookies</h2>
            <p>
              We use a single session cookie (<code className="bg-white/10 px-1 rounded text-xs">patreoncrm_session</code>)
              to keep you logged in. We do not use tracking cookies, advertising pixels, or third-party analytics
              cookies. No cookie consent banner is required beyond this disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by email. The &quot;Effective date&quot; at the top of this page reflects when the current version took effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
            <p>
              Privacy questions, data requests, or concerns:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">© 2026 PatreonCRM · Not affiliated with Patreon, Inc.</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-orange-400">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
