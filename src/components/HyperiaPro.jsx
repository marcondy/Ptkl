import { motion } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import SectionLabel, { SectionTitle } from './ui/SectionLabel'
import AppScreen from './ui/AppScreen'
import appPricing from '../assets/screenshots/app_pricing.jpg'

const freeFeatures = [
  '1 active plan',
  'Up to 4 items per plan',
  'Active tab only',
  'Local reminders',
  'JSON export (basic)',
]

const proFeatures = [
  'Unlimited active plans',
  'Unlimited items per plan',
  'Scheduled & Past tabs',
  'Full JSON backup & restore',
  'Scope toggles for restore',
  'Hyperia Pro badge',
]

const tiers = [
  {
    name: 'MAINTENANCE',
    price: '$3.99',
    period: '/ mo',
    desc: '$3.99 billed monthly. Tactical support for dynamic forecasting.',
    highlight: false,
  },
  {
    name: 'QUARTERLY',
    price: '$3.33',
    period: '/ mo',
    desc: 'Best value. $9.99 billed every 3 months. The Cycle Tier.',
    highlight: true,
  },
  {
    name: 'FOUNDATION',
    price: '$2.50',
    period: '/ mo',
    desc: '$29.99 billed annually. The permanent stack.',
    highlight: false,
  },
]

export default function HyperiaPro() {
  return (
    <section id="pro" className="border-t border-white/10 py-16 lg:py-24">
      <PageContainer>
        <MotionItem className="text-center">
          <SectionLabel className="text-center">HYPERIA PRO</SectionLabel>
          <SectionTitle className="mx-auto mt-3 max-w-xl font-heading">
            Invest in your protocol.
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
            Hyperia Pro isn't a subscription; it's the cost of doing business at the elite level. Unlock dynamic inventory forecasting, forum exports, and advanced analytics.
          </p>
        </MotionItem>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {tiers.map((tier, i) => (
                <MotionItem
                  key={tier.name}
                  delay={i * 0.06}
                  className={`rounded-2xl border p-6 ${
                    tier.highlight
                      ? 'border-[#00E5FF]/40 bg-[#00E5FF]/5 glow-neon sm:col-span-2 lg:col-span-1 xl:col-span-2'
                      : 'border-white/10 bg-[#121212]'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-widest text-[#00E5FF]">{tier.name}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {tier.price}
                    <span className="text-sm font-normal text-zinc-500">{tier.period}</span>
                  </p>
                  <p className="mt-3 text-sm text-zinc-400">{tier.desc}</p>
                </MotionItem>
              ))}
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <MotionItem delay={0.1} className="rounded-2xl border border-white/10 bg-[#121212] p-6">
                <p className="font-mono text-[10px] tracking-widest text-zinc-500">FREE</p>
                <ul className="mt-4 space-y-2">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                      <span className="text-[#00E5FF]">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </MotionItem>
    
              <MotionItem delay={0.14} className="rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 p-6">
                <p className="font-mono text-[10px] tracking-widest text-[#00E5FF]">PRO</p>
                <ul className="mt-4 space-y-2">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                      <span className="text-[#00E5FF]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </MotionItem>
            </div>
          </div>

          <MotionItem delay={0.12} className="flex justify-center lg:justify-end">
            <AppScreen theme="dark" size="lg" className="glow-neon !p-0 overflow-hidden">
              <img src={appPricing} alt="Hyperia Pro Pricing" className="h-full w-full object-cover" />
            </AppScreen>
          </MotionItem>
        </div>

        <MotionItem delay={0.18} className="mt-16 text-center">
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex rounded-xl bg-[#00E5FF] px-10 py-3.5 font-mono text-xs font-semibold tracking-wide text-black glow-neon"
          >
            UPGRADE TO HYPERIA PRO
          </motion.a>
        </MotionItem>
      </PageContainer>
    </section>
  )
}
