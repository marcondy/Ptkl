import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'

const problems = [
  { label: 'Messy spreadsheets', desc: 'Rebuild the same table every time you want to share' },
  { label: 'Unstructured notes', desc: 'No week ranges, frequencies, or dose phases' },
  { label: 'Unreadable screenshots', desc: 'Forums hate blurry phone pics' },
  { label: 'Copy-paste walls', desc: 'Ugly text blocks that lose structure' },
]

export default function ProblemSolution() {
  return (
    <section className="border-y border-hyperia-border/50 bg-hyperia-surface/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem>
          <SectionHeader
            eyebrow="THE PROBLEM"
            title="Spreadsheets weren't built for sharing"
            description="Most people still track complex multi-phase plans in tools that break the moment you want to post online."
          />
        </MotionItem>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, i) => (
            <MotionItem
              key={item.label}
              delay={i * 0.06}
              className="rounded-xl border border-hyperia-border bg-hyperia-card/50 p-6"
            >
              <p className="font-mono text-xs tracking-wider text-hyperia-magenta">✕</p>
              <h3 className="mt-3 text-base font-semibold text-hyperia-text">{item.label}</h3>
              <p className="mt-2 text-sm text-hyperia-muted">{item.desc}</p>
            </MotionItem>
          ))}
        </div>

        <MotionItem delay={0.2} className="mt-8 rounded-2xl border border-hyperia-cyan/20 bg-hyperia-cyan/5 p-8 text-center">
          <p className="font-mono text-sm tracking-wider text-hyperia-cyan">HYPERIA SOLVES</p>
          <p className="mt-3 text-xl font-semibold text-hyperia-text sm:text-2xl">
            Structured plan building + one-tap shareable exports + optional anonymization
          </p>
        </MotionItem>
      </div>
    </section>
  )
}
