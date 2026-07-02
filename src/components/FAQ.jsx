import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionItem } from './MotionSection'
import SectionHeader from './ui/SectionHeader'
import PageContainer from './ui/PageContainer'

const faqs = [
  {
    q: 'Is Hyperia medical advice?',
    a: 'No. Hyperia is an offline journal and logging tool only. It does not provide medical advice, recommendations, or suggestions. Always consult a qualified healthcare professional.',
  },
  {
    q: 'Does Hyperia sync to the cloud?',
    a: 'No. All data is stored locally on your device. We do not operate user accounts or cloud storage for plan data.',
  },
  {
    q: 'Can I share my plan without revealing item names?',
    a: 'Yes. Anonymizer mode replaces names with generic labels while keeping your schedule structure intact — weeks, frequency, and dose columns stay readable.',
  },
  {
    q: 'What formats can I share?',
    a: 'Reddit and markdown-style table exports optimized for forums and communities. One tap to copy to clipboard.',
  },
  {
    q: 'Is there a free version?',
    a: 'Yes. Free includes 1 active plan and up to 4 items. Hyperia Pro unlocks unlimited plans, unlimited items, inventory forecasting, and backup/restore.',
  },
  {
    q: 'Can I import community preset lists?',
    a: 'Yes. Fetch item libraries from a JSON URL in the in-app catalog, or create your own custom entries.',
  },
  {
    q: 'What happens if I switch phones?',
    a: 'Hyperia Pro users can export a full JSON backup and restore on a new device. Everything stays offline — you control the file.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-hyperia-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full min-w-0 items-start justify-between gap-4 py-4 text-left sm:py-5"
      >
        <span className="min-w-0 flex-1 text-sm font-medium text-hyperia-text sm:text-base">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="mt-0.5 shrink-0 font-mono text-lg text-hyperia-cyan"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed text-hyperia-muted sm:pb-5">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 lg:py-24">
      <PageContainer narrow>
        <MotionItem>
          <SectionHeader eyebrow="FAQ" title="Common questions" />
        </MotionItem>

        <MotionItem
          delay={0.08}
          className="mt-12 min-w-0 rounded-2xl border border-hyperia-border bg-hyperia-card px-4 sm:px-6"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </MotionItem>
      </PageContainer>
    </section>
  )
}
