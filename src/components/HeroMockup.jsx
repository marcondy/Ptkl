import { motion } from 'framer-motion'

function TimelineItem({ name, dose, color, glow = false }) {
  return (
    <div className="relative flex gap-3 pl-1">
      <div className="flex flex-col items-center">
        <div
          className={`h-2.5 w-2.5 rounded-full ${color} ${
            glow ? 'shadow-[0_0_8px_rgba(45,212,191,0.6)]' : ''
          }`}
        />
        <div className="w-px flex-1 bg-neutral-700" />
      </div>
      <div className="mb-3 flex-1 rounded-xl border border-neutral-800 bg-neutral-900/80 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-white">{name}</p>
            <p className="text-[10px] text-neutral-500">{dose}</p>
          </div>
          <div className="flex gap-2 text-neutral-600">
            <span className="text-xs">⋮</span>
            <span className="text-xs">⌄</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[320px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-full bg-hyperia-teal/10 blur-3xl" />

      {/* Phone frame */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-950 p-2 shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[2rem] bg-[#0f1115]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-[10px] font-bold tracking-[0.15em] text-hyperia-teal">
              HYPERIA
            </span>
            <div className="flex items-center gap-2">
              <span className="rounded border border-hyperia-teal/30 bg-hyperia-teal/10 px-1 py-px text-[7px] font-semibold tracking-wider text-hyperia-teal">
                PREMIUM
              </span>
              <span className="text-[10px] text-neutral-500">🔔</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="mx-4 mt-2 flex rounded-lg bg-neutral-900 p-0.5">
            {['ACTIVE', 'SCHEDULED', 'PAST'].map((tab, i) => (
              <div
                key={tab}
                className={`flex-1 rounded-md py-1.5 text-center text-[8px] font-semibold tracking-wider ${
                  i === 0
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-500'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Main card */}
          <div className="m-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[11px] font-bold tracking-wide text-white">
                PEPTIDE STACK
              </p>
              <div className="flex gap-2 text-neutral-600">
                <span className="text-xs">⋮</span>
                <span className="text-xs">⌃</span>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2">
              {[
                { label: 'TOTAL WEEKS', value: '12 Wks' },
                { label: 'START DATE', value: '2026-05-01' },
                { label: 'STATUS', value: 'ACTIVE' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[7px] tracking-wider text-neutral-500">
                    {item.label}
                  </p>
                  <p className="font-mono text-[9px] font-medium text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-1.5 text-[7px] tracking-wider text-neutral-500">
              TIMELINE PROGRESS
            </p>
            <div className="mb-1 h-2 overflow-hidden rounded-full bg-neutral-800">
              <div className="h-full w-[75%] rounded-full bg-hyperia-teal shadow-[0_0_12px_rgba(45,212,191,0.5)]" />
            </div>
            <p className="text-right font-mono text-[8px] text-hyperia-teal">
              Week 09/12
            </p>
          </div>

          {/* Timeline */}
          <div className="px-4 pb-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[8px] font-semibold tracking-wider text-neutral-400">
                PLAN TIMELINE
              </p>
              <span className="rounded border border-neutral-700 px-1.5 py-0.5 text-[7px] text-neutral-500">
                + ADD ITEM
              </span>
            </div>

            <TimelineItem
              name="Retatrutide"
              dose="1.75 mg"
              color="bg-hyperia-teal"
              glow
            />
            <TimelineItem
              name="BPC-157"
              dose="5 mcg"
              color="bg-emerald-400"
              glow
            />
            <TimelineItem name="GHK-Cu" dose="2 mg" color="bg-blue-400" />
          </div>

          {/* FAB */}
          <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-hyperia-teal text-lg font-light text-black shadow-[0_4px_24px_rgba(45,212,191,0.4)]">
            +
          </div>
        </div>
      </div>
    </motion.div>
  )
}
