import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'

const quotes = [
  {
    text: 'Finally stopped copy-pasting my spreadsheet into Reddit. One tap and it looks clean.',
    author: 'Beta tester',
    role: 'Community member',
  },
  {
    text: 'The anonymizer is exactly what I needed — structure without exposing private item names.',
    author: 'Beta tester',
    role: 'Privacy-focused user',
  },
  {
    text: 'Offline-first sold me. No account, no cloud, just my plans on my phone.',
    author: 'Beta tester',
    role: 'Early adopter',
  },
]

export default function Testimonials() {
  return (
    <section className="border-y border-hyperia-border/50 bg-hyperia-surface/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem>
          <SectionHeader
            eyebrow="EARLY FEEDBACK"
            title="Built with beta users"
            description="Placeholder quotes from early testers. Real testimonials coming at launch."
          />
        </MotionItem>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <MotionItem
              key={q.author}
              delay={i * 0.08}
              className="rounded-xl border border-hyperia-border bg-hyperia-card p-6"
            >
              <p className="text-sm leading-relaxed text-hyperia-muted">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-6 border-t border-hyperia-border pt-4">
                <p className="font-mono text-xs font-medium text-hyperia-cyan">{q.author}</p>
                <p className="mt-1 text-xs text-hyperia-muted">{q.role}</p>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
