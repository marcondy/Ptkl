import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'

const pillars = [
  {
    icon: '◉',
    title: 'Offline-first',
    description: 'All data lives on your device. Open the app and track — no connection required.',
  },
  {
    icon: '◎',
    title: 'No account. No cloud.',
    description:
      "We don't operate user accounts or server-side profiles. Your plan data never leaves your phone.",
  },
  {
    icon: '◇',
    title: 'Share on your terms',
    description: 'Export when you want to. Stay private by default. Sharing is never forced.',
  },
]

const specs = [
  { label: 'Data storage', value: 'Local only' },
  { label: 'Account required', value: 'None' },
  { label: 'Cloud sync', value: 'Never' },
  { label: 'Plan analytics', value: 'None' },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="border-y border-hyperia-border/50 bg-hyperia-surface/50 py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <SectionHeader
            eyebrow="YOUR PLAN, YOUR DEVICE"
            title="Privacy by design"
            description="Your data never leaves your phone. Hyperia is built for people who refuse cloud-synced health data."
            align="left"
          />
        </MotionItem>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-2">
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            {specs.map((spec, i) => (
              <MotionItem
                key={spec.label}
                delay={i * 0.05}
                className="min-w-0 rounded-xl border border-hyperia-border bg-hyperia-card p-3 sm:p-4"
              >
                <p className="font-mono text-[10px] text-hyperia-muted sm:text-xs">{spec.label}</p>
                <p className="mt-2 font-mono text-sm font-medium text-hyperia-green sm:text-base">
                  {spec.value}
                </p>
              </MotionItem>
            ))}
          </div>

          <div className="min-w-0 space-y-4">
            {pillars.map((pillar, i) => (
              <MotionItem
                key={pillar.title}
                delay={i * 0.08}
                className="flex min-w-0 gap-3 rounded-xl border border-hyperia-border bg-hyperia-card/60 p-4 sm:gap-4 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hyperia-cyan/30 bg-hyperia-cyan/10 font-mono text-sm text-hyperia-cyan">
                  {pillar.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-hyperia-text">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-hyperia-muted">
                    {pillar.description}
                  </p>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
