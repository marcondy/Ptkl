import { MotionItem } from './MotionSection'

const premiumFeatures = [
  'Unlimited active stacks',
  'ASCII & Markdown export',
  'Inventory forecasting',
  'Catalog sync from JSON',
  'Cloud backup & restore',
  'Priority notifications',
]

export default function Premium() {
  return (
    <section id="premium" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem>
          <div className="relative overflow-hidden rounded-3xl border border-hyperia-teal/20 bg-gradient-to-br from-hyperia-card to-neutral-950 p-8 sm:p-12 lg:p-16">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-hyperia-teal/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex rounded-md border border-hyperia-teal/30 bg-hyperia-teal/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-hyperia-teal">
                  HYPERIA+
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built for serious protocol management
                </h2>
                <p className="mt-4 text-neutral-400 leading-relaxed">
                  Unlock the full power of Hyperia with premium tools designed
                  for power users who demand precision, portability, and
                  reliability across every cycle.
                </p>
                <a
                  href="https://gethyperia.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-hyperia-teal px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-hyperia-teal/90 hover:shadow-[0_0_32px_rgba(45,212,191,0.35)]"
                >
                  Upgrade to Premium
                  <span>→</span>
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {premiumFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hyperia-teal/20 text-[10px] text-hyperia-teal">
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
