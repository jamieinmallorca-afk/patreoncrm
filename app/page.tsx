import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Connect Patreon',
    desc: 'One-click OAuth. We read your membership data via Patreon\'s official API — nothing beyond what they permit.',
  },
  {
    number: '02',
    title: 'See who\'s at risk',
    desc: 'Every patron gets a health score based on pledge history, tier changes, and lapse patterns. At-risk patrons surface automatically.',
  },
  {
    number: '03',
    title: 'Win them back',
    desc: 'Review and approve a personalised win-back email. We send it once — you stay in full control.',
  },
]

const features = [
  {
    icon: '📊',
    title: 'Patron Health Scores',
    desc: 'Daily scores for every patron based on pledge consistency, tier changes, and engagement drift. Know who\'s wavering before they cancel.',
  },
  {
    icon: '🚨',
    title: 'Churn-Risk Flagging',
    desc: 'At-risk patrons are automatically flagged and sorted by urgency. Stop checking spreadsheets — the dashboard tells you who needs attention.',
  },
  {
    icon: '✉️',
    title: 'Automated Win-Back Emails',
    desc: 'Triggered emails go out only after you review the template. Max one per patron per 30 days. You\'re always in control.',
  },
  {
    icon: '📈',
    title: 'Retention Trends',
    desc: 'Track churn rate, average patron lifetime, and MRR at risk over time. Know if your retention is improving week over week.',
  },
  {
    icon: '🔔',
    title: 'Early-Warning Alerts',
    desc: 'Get notified when a long-term patron\'s pledge pattern changes — before they hit the cancel button.',
  },
  {
    icon: '📋',
    title: 'Patron Timeline',
    desc: 'A full history of every patron\'s pledge events, tier changes, and lapses. Context before you reach out.',
  },
]

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For creators just getting started.',
    features: [
      'Up to 100 patrons',
      'Health scores updated daily',
      'Churn-risk flagging',
      '7-day pledge history',
      'Email digest (weekly)',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'For growing creators who can\'t afford silent churn.',
    features: [
      'Up to 1,000 patrons',
      'Everything in Free',
      'Automated win-back emails',
      '90-day pledge history',
      'Retention trend charts',
      'Early-warning alerts',
      'Priority support',
    ],
    cta: 'Start Pro — free 14-day trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$79',
    period: '/month',
    desc: 'For established creators with large patron bases.',
    features: [
      'Up to 5,000 patrons',
      'Everything in Pro',
      'Full pledge history',
      'Bulk patron export',
      'Custom email templates',
      'Dedicated onboarding',
    ],
    cta: 'Start Scale',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'What exactly is the health score based on?',
    a: 'Pledge history, tier changes, lapse and recovery patterns, and how long someone has been a patron — all from Patreon\'s official API. We\'re upfront that we don\'t have per-post likes or comment data (Patreon doesn\'t expose that through their API). The score is designed to catch behavioural drift before it becomes a cancellation.',
  },
  {
    q: 'Will PatreonCRM email my patrons?',
    a: 'Only if you set it up — and only after you review the template. Win-back emails are off by default. When enabled, we send at most one per patron per 30 days. You can pause or disable them any time.',
  },
  {
    q: 'Who are the win-back emails sent from?',
    a: 'Currently from a PatreonCRM sending address. We recommend personalising the template so it sounds like you. Custom sending domains (so emails show your own address) are on the roadmap for Pro.',
  },
  {
    q: 'What happens when I hit my patron limit on the free plan?',
    a: 'You can still log in and see your dashboard — new health score updates and automated emails pause until you upgrade. No data is deleted.',
  },
  {
    q: 'Is my patron data safe?',
    a: 'We store patron IDs, membership status, and pledge metadata. We do not store your patrons\' email addresses on our servers — emails are fetched in real time when a win-back is triggered, then discarded. We use Supabase (SOC 2 compliant) for storage and never sell or share your data.',
  },
  {
    q: 'Can I delete everything?',
    a: 'Yes. Settings → Delete Account removes your Patreon connection, all synced patron data, and your account permanently. No waiting period.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-500">◆</span>
          <span className="font-bold text-lg tracking-tight">PatreonCRM</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors hidden sm:block">How it works</Link>
          <Link href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors hidden sm:block">Pricing</Link>
          <Link
            href="/api/auth/patreon"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Connect Patreon
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-sm text-orange-400 font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          The retention CRM Patreon never built
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Stop losing patrons<br />
          <span className="text-orange-500">before you even notice.</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          PatreonCRM scores every patron daily, flags who&apos;s at risk of churning, and sends
          automated win-back emails — all on autopilot. Connect in under 2 minutes.
        </p>
        <p className="text-sm text-white/40 mb-10">
          Built on Patreon&apos;s official API · No spreadsheets · No Zapier
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/api/auth/patreon"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Connect Patreon free →
          </Link>
          <Link
            href="#how-it-works"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/40">Free up to 100 patrons · No credit card required · &lt;2 min to connect</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Set up in under 2 minutes</h2>
        <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
          No integrations to configure. No CSVs to import. PatreonCRM reads your membership data directly.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-4xl font-black text-orange-500/20 font-mono mb-3">{step.number}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need to retain patrons</h2>
        <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
          Built specifically for Patreon creators. Not a generic CRM with a Patreon plugin bolted on.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, creator-friendly pricing</h2>
        <p className="text-white/50 text-center mb-16">One retained patron per month covers the cost of Pro.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border ${
                t.highlight
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <div className="text-xs font-semibold text-orange-500 bg-orange-500/20 rounded-full px-3 py-1 inline-block mb-4">
                  Most popular
                </div>
              )}
              <div className="mb-1">
                <span className="text-3xl font-bold font-mono">{t.price}</span>
                <span className="text-white/50 text-sm">{t.period}</span>
              </div>
              <p className="text-white/40 text-xs mb-2">{t.desc}</p>
              <ul className="space-y-2 mb-8 mt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/api/auth/patreon"
                className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                  t.highlight
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Privacy blurb */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-white/50 leading-relaxed">
            🔒 <strong className="text-white/80">Your data stays yours.</strong> We connect via Patreon&apos;s official OAuth and read only what they permit.
            We never contact your patrons without your approval, and win-back emails only send after you review the template.
            Disconnect and delete all your data from Settings at any time.
          </p>
        </div>
      </section>

      {/* Founder note */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white/70 text-lg leading-relaxed italic mb-6">
            &ldquo;I built PatreonCRM after watching my own patron count quietly bleed for three months before I noticed.
            Patreon sends you a &lsquo;you lost a patron&rsquo; email. It doesn&apos;t tell you the five who are about to leave.
            This tool does.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold">
              J
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">James</p>
              <p className="text-white/40 text-xs">Creator & founder, PatreonCRM</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Common questions</h2>
        <p className="text-white/50 text-center mb-12">You&apos;re handing over your patron list via OAuth — you deserve straight answers.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">{faq.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA footer */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to stop the silent churn?</h2>
        <p className="text-white/50 mb-8">Connect in under 2 minutes. Free up to 100 patrons.</p>
        <Link
          href="/api/auth/patreon"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-xl transition-colors text-lg"
        >
          Connect Patreon free →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">© 2026 PatreonCRM · Not affiliated with Patreon, Inc.</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
