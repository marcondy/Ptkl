import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'
import AppScreenshot from './ui/AppScreenshot'
import { screenshots } from '../data/screenshots'

const features = [
  {
    id: 'timeline',
    title: 'Visual timeline',
    description:
      'Active, scheduled, and past plans at a glance. Dark, focused UI with progress bars and phase blocks.',
    tag: 'TIMELINE',
    shot: screenshots.timelineDark,
  },
  {
    id: 'frequency',
    title: 'Complex frequencies',
    description:
      'Daily, weekly, custom every-N-days intervals. Week-range segments with changing doses over time.',
    tag: 'PLANNING',
    shot: screenshots.plansListDark,
  },
  {
    id: 'reminders',
    title: 'Smart reminders',
    description:
      "Notifications tied to each item's frequency within your active plan. Respects your preferences.",
    tag: 'REMINDERS',
    shot: null,
  },
  {
    id: 'library',
    title: 'Library & templates',
    description:
      'Import community preset lists from JSON URLs or build your own custom item library.',
    tag: 'LIBRARY',
    shot: screenshots.libraryDark,
  },
  {
    id: 'inventory',
    title: 'Inventory forecast',
    description:
      "Vial math and container estimates per plan. Know what you'll need before you run out.",
    tag: 'FORECAST',
    shot: screenshots.inventoryDark,
  },
  {
    id: 'backup',
    title: 'Backup & restore',
    description:
      'Hyperia Pro: full offline JSON export/import. Never lose years of logs when switching phones.',
    tag: 'PRO',
    shot: null,
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
              className={`group min-w-0 overflow-hidden rounded-xl border border-hyperia-border bg-hyperia-card/50 transition-colors hover:border-hyperia-cyan/30 hover:bg-hyperia-card ${
                feature.shot ? 'flex flex-col' : ''
              }`}
              delay={i * 0.05}
            >
              <div className="p-4 sm:p-6">
                <span className="font-mono text-[10px] tracking-widest text-hyperia-magenta">
                  {feature.tag}
                </span>
                <h3 className="mt-3 text-base font-semibold text-hyperia-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hyperia-muted">
                  {feature.description}
                </p>
              </div>

              {feature.shot && (
                <div className="mt-auto border-t border-hyperia-border bg-black/20 px-3 pb-3 pt-3">
                  <AppScreenshot
                    src={feature.shot.src}
                    alt={feature.shot.alt}
                    theme={feature.shot.theme}
                    size="sm"
                    position={feature.shot.position}
                    interactive={false}
                    className="opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              )}
            </MotionItem>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
