import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import ScreenDisplay from './ui/ScreenDisplay'
import { appScreens } from '../data/screenshots'

const showcaseGrid = [
  { key: 'timeline', span: 'sm:col-span-2 lg:col-span-5 lg:row-span-2', size: 'xl', dynamic: true },
  { key: 'shareDark', span: 'lg:col-span-3', size: 'md' },
  { key: 'inventoryDark', span: 'lg:col-span-4', size: 'md' },
  { key: 'libraryDark', span: 'lg:col-span-4', size: 'md' },
  { key: 'plansListDark', span: 'lg:col-span-3', size: 'md' },
  { key: 'notificationsDark', span: 'lg:col-span-3', size: 'md' },
]

export default function AppShowcase() {
  const [mode, setMode] = useState('dark')

  return (
    <section id="showcase" className="overflow-hidden border-y border-hyperia-border/50 bg-hyperia-surface/30 py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.18em] text-hyperia-cyan sm:text-xs">
                THE APP
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-hyperia-text sm:text-3xl lg:text-4xl">
                See Hyperia in action
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-hyperia-muted sm:mx-0 sm:text-base">
                Dark teal and light purple themes — every screen from your app.
              </p>
            </div>

            <div className="flex shrink-0 justify-center rounded-full border border-hyperia-border bg-hyperia-card p-1">
              {['dark', 'light'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMode(option)}
                  className={`relative rounded-full px-5 py-2 font-mono text-xs font-medium capitalize ${
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
            className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-12"
          >
            {showcaseGrid.map((slot) => {
              const screenKey =
                slot.dynamic && mode === 'light' ? 'timelineLight' : slot.key === 'timeline' ? 'timelineDark' : slot.key
              const screen = appScreens[screenKey]

              return (
                <div key={`${mode}-${slot.key}`} className={`min-w-0 ${slot.span}`}>
                  <div className="h-full rounded-2xl border border-hyperia-border bg-hyperia-card/50 p-4">
                    <p className="mb-3 font-mono text-[10px] tracking-widest text-hyperia-muted uppercase">
                      {screen.label}
                    </p>
                    <ScreenDisplay screen={screen} size={slot.size} />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </PageContainer>
    </section>
  )
}
