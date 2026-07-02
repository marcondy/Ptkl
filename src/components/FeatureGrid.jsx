import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'
import ScreenDisplay from './ui/ScreenDisplay'
import { appScreens } from '../data/screenshots'

const features = [
  {
    id: 'timeline',
    title: 'Visual timeline',
    description: 'Active, scheduled, and past plans at a glance. Progress bars and phase blocks.',
    tag: 'TIMELINE',
    screen: 'timelineDark',
  },
  {
    id: 'frequency',
    title: 'Complex frequencies',
    description: 'Daily, weekly, custom every-N-days intervals with week-range segments.',
    tag: 'PLANNING',
    screen: 'plansListDark',
  },
  {
    id: 'reminders',
    title: 'Smart reminders',
    description: "Notifications tied to each item's frequency. Respects your preferences.",
    tag: 'REMINDERS',
    screen: 'notificationsDark',
  },
  {
    id: 'library',
    title: 'Library & templates',
    description: 'Import community preset lists from JSON URLs or build your own library.',
    tag: 'LIBRARY',
    screen: 'libraryDark',
  },
  {
    id: 'inventory',
    title: 'Inventory forecast',
    description: 'Vial math and container estimates per plan.',
    tag: 'FORECAST',
    screen: 'inventoryDark',
  },
  {
    id: 'backup',
    title: 'Backup & restore',
    description: 'Hyperia Pro: full offline JSON export/import when switching phones.',
    tag: 'PRO',
    screen: 'settingsDark',
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
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-hyperia-border bg-hyperia-card/50 hover:border-hyperia-cyan/30"
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

              <div className="mt-auto border-t border-hyperia-border bg-black/20 px-3 pb-3 pt-3">
                <ScreenDisplay
                  screen={appScreens[feature.screen]}
                  size="sm"
                  interactive={false}
                  className="opacity-90 transition-opacity group-hover:opacity-100"
                />
              </div>
            </MotionItem>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
