import { motion } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import SectionLabel, { SectionTitle } from './ui/SectionLabel'

const freeFeatures = [
  '1 active plan',
  'Up to 4 items per plan',
  'Active tab only',
  'Local reminders',
  'CSV export (basic)',
]

const proFeatures = [
  'Unlimited active plans',
  'Unlimited items per plan',
  'Scheduled & Past tabs',
  'Full CSV backup & restore',
  'Scope toggles for restore',
  'Hyperia Pro badge',
]

const tiers = [
  {
    name: 'FOUNDATION',
    price: 'Free',
    period: 'Forever local',
    desc: 'Start logging. One plan, four items, active tab.',
    highlight: false,
  },
  {
    name: 'MAINTENANCE',
    price: '$2.99',
    period: '/ month',
    desc: 'Unlimited plans and items. Scheduled & past tabs.',
    highlight: false,
  },
  {
    name: 'QUARTERLY',
    price: '$14.99',
    period: '/ 3 mo',
    desc: 'Full Pro access. CSV backup & restore included.',
    highlight: true,
  },
]

export default function HyperiaPro() {
  return (
    <section id="pro" className="border-t border-white/10 py-16 lg:py-24">
      <PageContainer>
        <MotionItem className="text-center">
          <SectionLabel className="text-center">HYPERIA PRO</SectionLabel>
          <SectionTitle className="mx-auto mt-3 max-w-xl">
            Become a sovereign individual
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
            Pro unlocks unlimited plans, scheduled and past tabs, and full CSV backup & restore.
            Empower optimized individuals — full privacy, optional sharing.
          </p>
        </MotionItem>

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <MotionItem
              key={tier.name}
              delay={i * 0.06}
              className={`rounded-2xl border p-6 ${
                tier.highlight
                  ? 'border-[#00ffcc]/40 bg-[#00ffcc]/5 glow-neon'
                  : 'border-white/10 bg-[#121212]'
              }`}
            >
              <p className="font-mono text-[10px] tracking-widest text-[#00ffcc]">{tier.name}</p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {tier.price}
                <span className="text-sm font-normal text-zinc-500">{tier.period}</span>
              </p>
              <p className="mt-3 text-sm text-zinc-400">{tier.desc}</p>
            </MotionItem>
          ))}
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-2">
          <MotionItem delay={0.1} className="rounded-2xl border border-white/10 bg-[#121212] p-6">
            <p className="font-mono text-[10px] tracking-widest text-zinc-500">FREE</p>
            <ul className="mt-4 space-y-2">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="text-[#00ffcc]">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </MotionItem>

          <MotionItem delay={0.14} className="rounded-2xl border border-[#00ffcc]/30 bg-[#00ffcc]/5 p-6">
            <p className="font-mono text-[10px] tracking-widest text-[#00ffcc]">PRO</p>
            <ul className="mt-4 space-y-2">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <span className="text-[#00ffcc]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </MotionItem>
        </div>

        <MotionItem delay={0.18} className="mt-10 text-center">
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex rounded-xl bg-[#00ffcc] px-10 py-3.5 font-mono text-xs font-semibold tracking-wide text-black glow-neon"
          >
            UPGRADE TO HYPERIA PRO
          </motion.a>
        </MotionItem>
      </PageContainer>
    </section>
  )
}
