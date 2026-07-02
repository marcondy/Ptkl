import { motion } from 'framer-motion'
import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PlayStoreBadge from './ui/PlayStoreBadge'

const freeFeatures = [
  '1 active plan',
  'Up to 4 items per plan',
  'Visual timeline',
  'Forum-ready exports',
  'Anonymizer mode',
  'Local reminders',
]

const proFeatures = [
  'Unlimited active plans',
  'Unlimited items per plan',
  'Full backup & restore (JSON)',
  'Inventory forecasting',
  'Library import from JSON',
  'Hyperia+ branded exports',
]

const plans = [
  { period: 'Monthly', price: '$2.99', per: '/ month', save: null },
  { period: '6 months', price: '$14.99', per: '/ 6 mo', save: 'Save 16%' },
  { period: 'Yearly', price: '$23.99', per: '/ year', save: 'Save 33%', best: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem>
          <SectionHeader
            eyebrow="HYPERIA PRO"
            title="Start free. Upgrade when you need more."
            description="Free tier covers the essentials. Pro unlocks unlimited plans, items, and full backup & restore."
          />
        </MotionItem>

        {/* Free vs Pro comparison */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <MotionItem delay={0.05}>
            <div className="rounded-2xl border border-hyperia-border bg-hyperia-card p-8">
              <p className="font-mono text-xs tracking-widest text-hyperia-muted">FREE</p>
              <p className="mt-2 text-3xl font-semibold text-hyperia-text">$0</p>
              <p className="mt-1 text-sm text-hyperia-muted">Forever local. No account.</p>
              <ul className="mt-8 space-y-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-hyperia-muted">
                    <span className="text-hyperia-cyan">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <PlayStoreBadge href="#waitlist" className="mt-8 w-full justify-center" />
            </div>
          </MotionItem>

          <MotionItem delay={0.1}>
            <div className="relative rounded-2xl border border-hyperia-cyan/40 bg-hyperia-cyan/5 p-8 glow-cyan">
              <span className="absolute -top-3 right-6 rounded-full bg-hyperia-cyan px-3 py-1 font-mono text-[10px] font-semibold text-black">
                RECOMMENDED
              </span>
              <p className="font-mono text-xs tracking-widest text-hyperia-cyan">HYPERIA PRO</p>
              <p className="mt-2 text-3xl font-semibold text-hyperia-text">From $2.99</p>
              <p className="mt-1 text-sm text-hyperia-muted">Unlimited plans. Full backup.</p>
              <ul className="mt-8 space-y-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-hyperia-text">
                    <span className="text-hyperia-green">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-hyperia-cyan py-3 font-mono text-xs font-semibold tracking-wider text-black"
              >
                UPGRADE TO HYPERIA PRO
              </motion.a>
            </div>
          </MotionItem>
        </div>

        {/* Pricing tiers */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <MotionItem
              key={plan.period}
              delay={0.12 + i * 0.04}
              className={`rounded-xl border p-6 text-center ${
                plan.best
                  ? 'border-hyperia-green/40 bg-hyperia-green/5'
                  : 'border-hyperia-border bg-hyperia-card'
              }`}
            >
              {plan.save && (
                <span
                  className={`font-mono text-[10px] ${
                    plan.best ? 'text-hyperia-green' : 'text-hyperia-magenta'
                  }`}
                >
                  {plan.save}
                </span>
              )}
              <p className="mt-2 font-mono text-xs text-hyperia-muted">{plan.period}</p>
              <p className="mt-2 text-2xl font-semibold text-hyperia-text">
                {plan.price}
                <span className="text-sm font-normal text-hyperia-muted">{plan.per}</span>
              </p>
              {plan.best && (
                <p className="mt-2 font-mono text-[10px] text-hyperia-green">BEST VALUE</p>
              )}
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
