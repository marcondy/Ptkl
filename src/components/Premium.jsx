import { MotionItem } from './MotionSection'

const premiumFeatures = [
  'Unlimited active plans',
  'ASCII & Markdown export',
  'Inventory forecasting',
  'Local catalog import',
  'Encrypted local backup',
  'On-device reminders',
]

export default function Premium() {
  return (
    <section id="premium" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem>
          <div className="relative overflow-hidden rounded-2xl border border-hyperia-teal/15 bg-gradient-to-br from-hyperia-card via-hyperia-surface to-hyperia-bg p-8 lg:p-12">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-hyperia-teal/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <span className="inline-flex rounded-md border border-hyperia-teal/30 bg-hyperia-teal/10 px-2 py-1 text-xs font-bold tracking-[0.15em] text-hyperia-teal">
                  HYPERIA+
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Premium tools. Still private.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                  Advanced forecasting, unlimited plans, and encrypted local backups —
                  without trading your privacy for convenience.
                </p>
                <a
                  href="https://gethyperia.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-hyperia-teal px-8 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_32px_rgba(45,212,191,0.3)]"
                >
                  Upgrade to Hyperia+
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {premiumFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-hyperia-teal/15 text-xs text-hyperia-teal">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionItem>
      </div>
    </section>
  )
}
