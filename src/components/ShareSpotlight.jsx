import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'

const namedExport = `| Item       | Weeks | Frequency    | Dose    |
|------------|-------|--------------|---------|
| Compound A | 1–12  | Every 5 days | 1.75 mg |
| Compound B | 1–12  | Daily        | 5 mcg   |
| Compound C | 6–12  | 5×/week      | 2 mg    |

— Hyperia+ · gethyperia.com`

const anonExport = `| Item    | Weeks | Frequency    | Dose    |
|---------|-------|--------------|---------|
| Item 01 | 1–12  | Every 5 days | 1.75 mg |
| Item 02 | 1–12  | Daily        | 5 mcg   |
| Item 03 | 6–12  | 5×/week      | 2 mg    |

— Hyperia+ · gethyperia.com`

export default function ShareSpotlight() {
  const [anonymized, setAnonymized] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="share" className="overflow-hidden py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <SectionHeader
            eyebrow="SHARE WITHOUT THE HASSLE"
            title="Forum-ready exports in one tap"
            description="I kept rebuilding the same plan in spreadsheets every time I wanted to share it online. Hyperia exists so you build the plan once—and share a clean, readable version instantly."
          />
        </MotionItem>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-2">
          <MotionItem delay={0.08} className="min-w-0 space-y-4">
            <div className="rounded-xl border border-hyperia-border bg-hyperia-card p-4 sm:p-6">
              <p className="font-mono text-xs tracking-wider text-hyperia-magenta">BEFORE</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-hyperia-border bg-hyperia-bg p-3 font-mono text-[9px] leading-relaxed text-hyperia-muted blur-[1px] select-none sm:p-4 sm:text-[10px]">
                <p className="truncate">week,dose,freq,notes,compound,vial</p>
                <p>1,1.75,e5d,am,item_a,,</p>
                <p>1,5,daily,pm,item_b,,</p>
                <p>6,2,5xwk,,item_c,,</p>
                <p className="text-hyperia-magenta">#REF! #REF!</p>
              </div>
              <p className="mt-3 text-sm text-hyperia-muted">
                Messy spreadsheet — hard to read, impossible to paste cleanly.
              </p>
            </div>

            <div className="rounded-xl border border-hyperia-cyan/30 bg-hyperia-cyan/5 p-4 glow-cyan sm:p-6">
              <p className="font-mono text-xs tracking-wider text-hyperia-cyan">AFTER</p>
              <p className="mt-3 text-sm text-hyperia-muted">
                Clean markdown table — formatted for Reddit, Discord, and communities.
              </p>
            </div>
          </MotionItem>

          <MotionItem delay={0.12} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-hyperia-border bg-hyperia-card">
              <div className="flex flex-col gap-3 border-b border-hyperia-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="font-mono text-xs font-semibold tracking-widest text-hyperia-cyan">
                  EXPORT PREVIEW
                </p>
                <button
                  type="button"
                  onClick={() => setAnonymized(!anonymized)}
                  className={`w-fit rounded-full border px-3 py-1 font-mono text-[10px] transition-colors ${
                    anonymized
                      ? 'border-hyperia-green/50 bg-hyperia-green/10 text-hyperia-green'
                      : 'border-hyperia-border text-hyperia-muted hover:text-hyperia-text'
                  }`}
                >
                  {anonymized ? 'ANONYMIZER ON' : 'ANONYMIZER OFF'}
                </button>
              </div>

              <div className="min-w-0 p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={anonymized ? 'anon' : 'named'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-full overflow-x-auto rounded-lg border border-hyperia-border bg-hyperia-bg p-3 font-mono text-[9px] leading-relaxed whitespace-pre text-hyperia-muted sm:p-4 sm:text-[11px]"
                  >
                    {anonymized ? anonExport : namedExport}
                  </motion.pre>
                </AnimatePresence>

                <motion.button
                  type="button"
                  onClick={handleCopy}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 w-full rounded-lg bg-hyperia-cyan py-3 font-mono text-[10px] font-semibold tracking-wider text-black sm:text-xs"
                >
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY TO CLIPBOARD'}
                </motion.button>
              </div>
            </div>
          </MotionItem>
        </div>

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Reddit-ready tables',
              desc: 'Markdown export with compound, weeks, frequency, and dose columns.',
            },
            {
              title: 'Anonymizer mode',
              desc: 'Share structure publicly without revealing exact item names.',
            },
            {
              title: 'Branded footer',
              desc: 'Every export links back to gethyperia.com. Hyperia+ on premium exports.',
            },
          ].map((item, i) => (
            <MotionItem
              key={item.title}
              delay={0.1 + i * 0.05}
              className="min-w-0 rounded-xl border border-hyperia-border bg-hyperia-card/60 p-4 sm:p-6"
            >
              <h3 className="font-mono text-sm font-semibold text-hyperia-cyan">{item.title}</h3>
              <p className="mt-2 text-sm text-hyperia-muted">{item.desc}</p>
            </MotionItem>
          ))}
        </div>

        <MotionItem
          delay={0.2}
          className="mt-8 rounded-2xl border border-hyperia-magenta/20 bg-hyperia-magenta/5 p-6 sm:p-8"
        >
          <p className="font-mono text-xs tracking-widest text-hyperia-magenta">BUILT FOR COMMUNITIES</p>
          <p className="mt-3 text-sm text-hyperia-muted sm:text-base">
            Reddit-friendly formatting. Anonymizer for public posts. Optional link back to
            gethyperia.com on every export — so your community finds the tool without you
            selling it in every thread.
          </p>
        </MotionItem>
      </PageContainer>
    </section>
  )
}
