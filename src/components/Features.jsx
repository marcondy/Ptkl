import { useState } from 'react'
import { motion } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PhoneFrame from './ui/PhoneFrame'
import TimelineScreen from './screenshots/TimelineScreen'
import ShareScreen from './screenshots/ShareScreen'
import InventoryScreen from './screenshots/InventoryScreen'
import LibraryScreen from './screenshots/LibraryScreen'

const features = [
  {
    id: 'timeline',
    title: 'Visual timelines',
    description:
      'See your full protocol at a glance — progress bars, phase blocks, and status dots. Details expand only when you need them.',
    screen: TimelineScreen,
    span: 'lg:col-span-2 lg:row-span-2',
    size: 'lg',
    theme: 'dark',
  },
  {
    id: 'export',
    title: 'Export anywhere',
    description:
      'Markdown or ASCII. One tap to copy. Share on your terms — nothing leaves your device until you paste it.',
    screen: ShareScreen,
    span: 'lg:col-span-1',
    size: 'sm',
    theme: 'light',
  },
  {
    id: 'inventory',
    title: 'Inventory forecast',
    description:
      'Dashed forecast panels calculate remaining supply across your entire plan. Always know what\'s left.',
    screen: InventoryScreen,
    span: 'lg:col-span-1',
    size: 'sm',
    theme: 'dark',
  },
  {
    id: 'library',
    title: 'Personal library',
    description:
      'Build a local catalog. Import from JSON or add custom items — stored on-device, editable anytime.',
    screen: LibraryScreen,
    span: 'lg:col-span-2',
    size: 'md',
    theme: 'dark',
  },
]

function CopyDemo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-hyperia-teal/30 bg-hyperia-teal/10 px-4 py-2 text-xs font-medium text-hyperia-teal transition-colors hover:bg-hyperia-teal/20"
    >
      {copied ? '✓ Copied to clipboard' : 'Try copy interaction →'}
    </motion.button>
  )
}

export default function Features() {
  return (
    <section id="features" className="border-t border-white/5 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem className="mb-8">
          <p className="mb-2 text-xs font-medium tracking-[0.2em] text-hyperia-teal">
            CAPABILITIES
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            A workspace, not a spreadsheet
          </h2>
          <p className="mt-2 max-w-xl text-base text-neutral-400">
            Progressive disclosure keeps the primary task visible. Secondary controls stay
            tucked away until you reach for them.
          </p>
        </MotionItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {features.map((feature, i) => {
            const Screen = feature.screen
            return (
              <MotionItem
                key={feature.id}
                delay={i * 0.06}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-hyperia-card/40 transition-colors hover:border-white/10 hover:bg-hyperia-card/70 ${feature.span}`}
              >
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>
                  {feature.id === 'export' && <CopyDemo />}
                </div>

                <div className="border-t border-white/5 bg-black/20 px-4 pb-4 pt-4">
                  <PhoneFrame
                    theme={feature.theme}
                    size={feature.size}
                    className="mx-auto opacity-90 transition-opacity group-hover:opacity-100"
                  >
                    <Screen theme={feature.theme} />
                  </PhoneFrame>
                </div>
              </MotionItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}
