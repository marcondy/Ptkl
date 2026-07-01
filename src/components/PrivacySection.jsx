import { MotionItem } from './MotionSection'

const pillars = [
  {
    icon: '◉',
    title: 'Offline-first',
    description:
      'Plans live on your device. Open the app, track your protocol — no connection required.',
  },
  {
    icon: '◎',
    title: 'Zero cloud lock-in',
    description:
      'No accounts, no sync servers. Your data never leaves your phone unless you choose to export it.',
  },
  {
    icon: '◇',
    title: 'Export on your terms',
    description:
      'Share via Markdown or ASCII when you want to — copy to clipboard, paste anywhere. Nothing is uploaded.',
  },
]

const specs = [
  { label: 'Data stored', value: 'Locally' },
  { label: 'Account required', value: 'None' },
  { label: 'Network to track', value: 'Optional' },
  { label: 'Sharing method', value: 'You control' },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <MotionItem>
            <p className="mb-2 text-xs font-medium tracking-[0.2em] text-hyperia-teal">
              PRIVACY BY DESIGN
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Your protocols stay yours
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              Hyperia is built for people who take data ownership seriously. Track complex
              schedules with clinical precision — without handing your information to a cloud.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-xs text-neutral-500">{spec.label}</p>
                  <p className="mt-1 font-mono text-base font-medium text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </MotionItem>

          <div className="grid gap-4">
            {pillars.map((pillar, i) => (
              <MotionItem
                key={pillar.title}
                delay={i * 0.08}
                className="group rounded-2xl border border-white/5 bg-hyperia-card/60 p-6 transition-colors hover:border-hyperia-teal/20 hover:bg-hyperia-card"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hyperia-teal/10 font-mono text-sm text-hyperia-teal transition-transform group-hover:scale-105">
                    {pillar.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
