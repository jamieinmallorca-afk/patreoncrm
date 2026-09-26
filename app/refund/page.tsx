import Link from 'next/link'

export const metadata = {
  title: 'Refund Policy — PatreonCRM',
}

const EFFECTIVE_DATE = 'September 2026'
const CONTACT_EMAIL = 'hello@patreoncrm.com'

export default function RefundPage() {
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
        <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <div className="space-y-8 text-white/70 leading-relaxed">

          <section className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
            <p className="text-orange-300 font-semibold mb-2">The short version</p>
            <p className="text-sm">
              If you&apos;re not happy in your first 14 days on a paid plan, email us and we&apos;ll refund your first payment, no questions asked.
              After 14 days, refunds are considered case by case.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14-Day Money-Back Guarantee</h2>
            <p>
              All new Pro and Scale plan subscribers are covered by a 14-day money-back guarantee from the date
              of their first payment. If you decide PatreonCRM isn&apos;t right for you within the first 14 days,
              contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>{' '}
              with the subject line &quot;Refund Request&quot; and we will issue a full refund of your first payment.
              No forms, no justification required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Refunds After 14 Days</h2>
            <p>
              After the initial 14-day period, payments are generally non-refundable. However, we consider
              refund requests case by case. Circumstances where we will typically issue a refund or credit include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>You were charged in error (e.g. after cancellation)</li>
              <li>A confirmed technical outage prevented you from using the Service for a significant period</li>
              <li>Duplicate charges caused by a billing error on our side</li>
            </ul>
            <p className="mt-4">
              We do not issue refunds for partial months, unused features, or because you forgot to cancel before
              the renewal date. We will always remind you 7 days before a subscription renewal if there is a
              price change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Free Trial</h2>
            <p>
              The Pro plan includes a 14-day free trial. You will not be charged until the trial period ends.
              You can cancel at any time during the trial from Settings → Subscription with no charge.
              If you do not cancel before the trial ends, your card will be charged for the first monthly period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cancellations</h2>
            <p>
              You can cancel your subscription at any time from Settings → Subscription in your dashboard.
              Cancellation takes effect at the end of your current billing period — you retain access to paid
              features until then. We do not offer prorated refunds for the remaining days of a billing period
              after cancellation.
            </p>
            <p className="mt-3">
              After cancellation, your account downgrades to the Free plan. Your data is retained for 90 days
              in case you decide to reactivate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How Refunds Are Processed</h2>
            <p>
              Approved refunds are returned to the original payment method via Stripe within 5–10 business days,
              depending on your bank. You will receive an email confirmation once the refund is issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Account Deletion</h2>
            <p>
              Deleting your account (Settings → Delete Account) does not automatically trigger a refund.
              If you want a refund alongside deleting your account, please email us first so we can process
              the refund before the account data is removed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              To request a refund or ask about billing, email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:underline">{CONTACT_EMAIL}</a>{' '}
              with the subject &quot;Refund Request&quot; and your account email address. We aim to respond within
              one business day.
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="text-orange-400">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
