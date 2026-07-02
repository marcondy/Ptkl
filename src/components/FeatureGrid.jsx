import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'

const features = [
  {
    id: 'timeline',
    title: 'Visual timeline',
    description:
      'Active, scheduled, and past plans at a glance. Dark, focused UI with progress bars and phase blocks.',
    tag: 'TIMELINE',
  },
  {
    id: 'frequency',
    title: 'Complex frequencies',
    description:
      'Daily, weekly, custom every-N-days intervals. Week-range segments with changing doses over time.',
    tag: 'PLANNING',
  },
  {
    id: 'reminders',
    title: 'Smart reminders',
    description:
      "Notifications tied to each item's frequency within your active plan. Respects your preferences.",
    tag: 'REMINDERS',
  },
  {
    id: 'library',
    title: 'Library & templates',
    description:
      'Import community preset lists from JSON URLs or build your own custom item library.',
    tag: 'LIBRARY',
  },
  {
    id: 'inventory',
    title: 'Inventory forecast',
    description:
      "Vial math and container estimates per plan. Know what you'll need before you run out.",
    tag: 'FORECAST',
  },
  {
    id: 'backup',
    title: 'Backup & restore',
    description:
      'Hyperia Pro: full offline JSON export/import. Never lose years of logs when switching phones.',
    tag: 'PRO',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <SectionHeader
            eyebrow="PLAN LIKE A PRO"
            title="Built for complex multi-item plans"
            description="Multiple items per plan, week ranges, changing doses, and custom intervals — not a generic notes app."
          />
        </MotionItem>

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <MotionItem
              key={feature.id}
              delay={i * 0.05}
              className="group min-w-0 rounded-xl border border-hyperia-border bg-hyperia-card/50 p-4 transition-colors hover:border-hyperia-cyan/30 hover:bg-hyperia-card sm:p-6"
            >
              <span className="font-mono text-[10px] tracking-widest text-hyperia-magenta">
                {feature.tag}
              </span>
              <h3 className="mt-3 text-base font-semibold text-hyperia-text">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hyperia-muted">
                {feature.description}
              </p>
            </MotionItem>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
