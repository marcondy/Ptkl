import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PhoneFrame from './ui/PhoneFrame'
import TimelineScreen from './screenshots/TimelineScreen'
import ShareScreen from './screenshots/ShareScreen'
import InventoryScreen from './screenshots/InventoryScreen'
import LibraryScreen from './screenshots/LibraryScreen'

export default function ScreenshotShowcase() {
  const [mode, setMode] = useState('dark')

  return (
    <section id="showcase" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.2em] text-hyperia-teal">
              THE WORKSPACE
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              See it in both themes
            </h2>
            <p className="mt-2 max-w-md text-base text-neutral-400">
              Light for clarity. Dark for focus. Same precision, stored locally on your device.
            </p>
          </div>

          <div className="flex shrink-0 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
            {['light', 'dark'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                className={`relative rounded-full px-5 py-2 text-xs font-medium capitalize transition-colors ${
                  mode === option ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {mode === option && (
                  <motion.span
                    layoutId="theme-pill"
                    className={`absolute inset-0 rounded-full ${
                      option === 'light' ? 'bg-hyperia-purple' : 'bg-hyperia-teal'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className={`relative z-10 ${mode === option ? (option === 'light' ? 'text-white' : 'text-black') : ''}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </MotionItem>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]"
          >
            {/* Primary — timeline */}
            <div className="lg:col-span-5 lg:row-span-2">
              <div className={`rounded-2xl border p-4 ${mode === 'light' ? 'border-neutral-200/20 bg-[#f4f4f5]/5' : 'border-white/5 bg-white/[0.02]'}`}>
                <p className="mb-4 text-xs text-neutral-500">Visual timeline & progress</p>
                <PhoneFrame theme={mode} size="lg" className="mx-auto">
                  <TimelineScreen theme={mode} />
                </PhoneFrame>
              </div>
            </div>

            {/* Secondary row */}
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              <div className={`rounded-2xl border p-4 ${mode === 'light' ? 'border-neutral-200/20 bg-[#f4f4f5]/5' : 'border-white/5 bg-white/[0.02]'}`}>
                <p className="mb-3 text-xs text-neutral-500">Share & export</p>
                <PhoneFrame theme={mode} size="sm" className="mx-auto">
                  <ShareScreen theme={mode} />
                </PhoneFrame>
              </div>

              <div className={`rounded-2xl border p-4 ${mode === 'light' ? 'border-neutral-200/20 bg-[#f4f4f5]/5' : 'border-white/5 bg-white/[0.02]'}`}>
                <p className="mb-3 text-xs text-neutral-500">Inventory forecast</p>
                <PhoneFrame theme={mode} size="sm" className="mx-auto">
                  <InventoryScreen theme={mode} />
                </PhoneFrame>
              </div>

              <div className={`rounded-2xl border p-4 ${mode === 'light' ? 'border-neutral-200/20 bg-[#f4f4f5]/5' : 'border-white/5 bg-white/[0.02]'}`}>
                <p className="mb-3 text-xs text-neutral-500">Item library</p>
                <PhoneFrame theme={mode} size="sm" className="mx-auto">
                  <LibraryScreen theme={mode} />
                </PhoneFrame>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
