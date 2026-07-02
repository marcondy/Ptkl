import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'

const steps = [
  {
    step: '01',
    title: 'Create your plan',
    description:
      'Name it, set your start date and total weeks. Active, scheduled, or past — organized from day one.',
  },
  {
    step: '02',
    title: 'Add items & phases',
    description:
      'Per-item dose, unit, frequency, and week ranges. Color coding, categories, and custom every-N-day intervals.',
  },
  {
    step: '03',
    title: 'Share or stay private',
    description:
      'Export a forum-ready table in one tap — or keep everything local. Anonymize names for public posts.',
  },
]

export default function HowItWorks() {
  return (
    <section className="border-y border-hyperia-border/50 bg-hyperia-surface/50 py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="Three steps. Zero cloud."
            description="Build once. Share cleanly. Stay sovereign."
          />
        </MotionItem>

        <div className="mt-12 grid min-w-0 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((item, i) => (
            <MotionItem key={item.step} delay={i * 0.08} className="min-w-0">
              <div className="h-full rounded-xl border border-hyperia-border bg-hyperia-card p-6 sm:p-8">
                <span className="font-mono text-3xl font-bold text-hyperia-cyan/30">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-hyperia-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-hyperia-muted">
                  {item.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
