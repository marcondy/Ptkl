import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import AppScreenshot from './ui/AppScreenshot'
import { screenshots } from '../data/screenshots'

export default function AppShowcase() {
  const [mode, setMode] = useState('dark')
  const timeline = mode === 'light' ? screenshots.timelineLight : screenshots.timelineDark

  return (
    <section id="showcase" className="overflow-hidden border-y border-hyperia-border/50 bg-hyperia-surface/30 py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.18em] text-hyperia-cyan sm:text-xs sm:tracking-[0.2em]">
                THE APP
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-hyperia-text sm:text-3xl lg:text-4xl">
                See Hyperia in action
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-hyperia-muted sm:mx-0 sm:text-base">
                Real screens from the app — dark and light themes, built for focused planning.
              </p>
            </div>

            <div className="flex shrink-0 justify-center rounded-full border border-hyperia-border bg-hyperia-card p-1">
            {['dark', 'light'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                className={`relative rounded-full px-5 py-2 font-mono text-xs font-medium capitalize transition-colors ${
                  mode === option ? '' : 'text-hyperia-muted hover:text-hyperia-text'
                }`}
              >
                {mode === option && (
                  <motion.span
                    layoutId="showcase-theme"
                    className={`absolute inset-0 rounded-full ${
                      option === 'light' ? 'bg-hyperia-magenta' : 'bg-hyperia-cyan'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    mode === option ? (option === 'light' ? 'text-white' : 'text-black') : ''
                  }`}
                >
                  {option}
                </span>
              </button>
            ))}
            </div>
          </div>
        </MotionItem>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
          >
            <div className="min-w-0 sm:col-span-2 lg:col-span-5 lg:row-span-2">
              <div className="rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4 sm:p-5">
                <p className="mb-4 font-mono text-[10px] tracking-widest text-hyperia-muted sm:text-xs">
                  TIMELINE & PROGRESS
                </p>
                <AppScreenshot
                  src={timeline.src}
                  alt={timeline.alt}
                  theme={timeline.theme}
                  size="xl"
                  position={timeline.position}
                  className="mx-auto glow-cyan"
                />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-3">
              <div className="h-full rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4">
                <p className="mb-3 font-mono text-[10px] tracking-widest text-hyperia-muted sm:text-xs">
                  SHARE EXPORT
                </p>
                <AppScreenshot
                  src={screenshots.shareDark.src}
                  alt={screenshots.shareDark.alt}
                  theme="dark"
                  size="md"
                  position="top center"
                />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-4">
              <div className="h-full rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4">
                <p className="mb-3 font-mono text-[10px] tracking-widest text-hyperia-muted sm:text-xs">
                  INVENTORY FORECAST
                </p>
                <AppScreenshot
                  src={screenshots.inventoryDark.src}
                  alt={screenshots.inventoryDark.alt}
                  theme="dark"
                  size="md"
                  position="top center"
                />
              </div>
            </div>

            <div className="min-w-0 sm:col-span-1 lg:col-span-4">
              <div className="h-full rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4">
                <p className="mb-3 font-mono text-[10px] tracking-widest text-hyperia-muted sm:text-xs">
                  ITEM LIBRARY
                </p>
                <AppScreenshot
                  src={screenshots.libraryDark.src}
                  alt={screenshots.libraryDark.alt}
                  theme="dark"
                  size="md"
                  position="top center"
                />
              </div>
            </div>

            <div className="min-w-0 sm:col-span-1 lg:col-span-3">
              <div className="h-full rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4">
                <p className="mb-3 font-mono text-[10px] tracking-widest text-hyperia-muted sm:text-xs">
                  YOUR PLANS
                </p>
                <AppScreenshot
                  src={screenshots.plansListDark.src}
                  alt={screenshots.plansListDark.alt}
                  theme="dark"
                  size="md"
                  position="top center"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </PageContainer>
    </section>
  )
}
