import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — PatreonCRM',
}

const EFFECTIVE_DATE = 'September 2026'
const CONTACT_EMAIL = 'hello@patreoncrm.com'

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using PatreonCRM (&quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by
              these Terms of Service. If you do not agree, do not use the Service.
              PatreonCRM is not affiliated with, endorsed by, or in any way officially connected with Patreon, Inc.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              PatreonCRM is a retention management tool for Patreon creators. It connects to your Patreon account
              via OAuth, analyses your patron membership data, generates health scores, flags at-risk patrons,
              and enables automated win-back email campaigns. The Service is intended for use by adult creators
              with active Patreon accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Account Registration and Patreon OAuth</h2>
            <p>
              To use the Service, you must connect your Patreon account via OAuth 2.0. By doing so, you authorise
              PatreonCRM to access the membership data Patreon makes available through their official API,
              including patron membership status, pledge history, tier information, and patron email addresses
              (accessed at the time of sending win-back emails only).
            </p>
            <p className="mt-3">
              You are responsible for maintaining the security of your account and for all activity that occurs
              under your account. You must notify us immediately at {CONTACT_EMAIL} if you suspect unauthorised access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Use the Service to send spam, unsolicited communications, or communications that violate Patreon&apos;s terms of service</li>
              <li>Attempt to access any other creator&apos;s patron data</li>
              <li>Reverse engineer, decompile, or extract source code from the Service</li>
              <li>Use the Service for any unlawful purpose or in violation of applicable law</li>
              <li>Resell, sublicense, or commercially exploit any part of the Service without our written consent</li>
              <li>Use automated scripts or bots to access the Service</li>
            </ul>
            <p className="mt-3">
              We reserve the right to terminate or suspend accounts that violate these terms without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Email Communications</h2>
            <p>
              If you enable the win-back email feature, you authorise PatreonCRM to send emails to your patrons
              on your behalf according to the templates and conditions you configure. You remain solely responsible
              for the content of win-back emails, their compliance with applicable law (including CAN-SPAM, GDPR,
              and similar regulations), and ensuring your patrons have appropriate consent to receive marketing
              communications.
            </p>
            <p className="mt-3">
              PatreonCRM enforces a default limit of one win-back email per patron per 30-day period. You must
              not configure the Service in a way that constitutes harassment of your patrons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Subscriptions and Billing</h2>
            <p>
              Paid plans (Pro and Scale) are billed monthly. Prices are listed in USD. Subscriptions automatically
              renew unless cancelled before the renewal date. You can cancel your subscription at any time from
              your account settings; cancellation takes effect at the end of the current billing period.
            </p>
            <p className="mt-3">
              We use Stripe for payment processing. Your card details are held by Stripe and are never stored on
              our servers. See our Refund Policy for details on refunds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>
              The Service, including its design, software, algorithms, and content (excluding your patron data),
              is owned by PatreonCRM and protected by applicable intellectual property law. You may not reproduce,
              distribute, or create derivative works without our express written permission.
            </p>
            <p className="mt-3">
              You retain full ownership of your patron data. By using the Service, you grant us a limited licence
              to process that data solely for the purpose of providing the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimers and Limitation of Liability</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express
              or implied. We do not warrant that the Service will be uninterrupted, error-free, or that health
              scores or churn predictions will be accurate. Patron retention is influenced by many factors outside
              our control.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by applicable law, PatreonCRM shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of revenue, patrons, or
              data, arising from your use of or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless PatreonCRM, its founders, employees, and agents from any
              claims, losses, liabilities, and expenses (including legal fees) arising from your use of the
              Service, your violation of these Terms, or your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Termination</h2>
            <p>
              You may delete your account at any time from Settings → Delete Account, which permanently removes
              your Patreon connection and all associated patron data. We may suspend or terminate your account
              for violation of these Terms.
            </p>
            <p className="mt-3">
              Upon termination, your right to use the Service ceases immediately. Sections 7, 8, 9, and 11
              survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Spain, without regard to
              conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the
              courts of Palma de Mallorca, Spain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes by email or
              by posting a notice in the dashboard. Continued use of the Service after changes take effect
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">© 2026 PatreonCRM · Not affiliated with Patreon, Inc.</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/terms" className="text-orange-400">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
