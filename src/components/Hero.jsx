import { motion } from 'framer-motion'
import PlayStoreBadge from './ui/PlayStoreBadge'
import PhoneFrame from './ui/PhoneFrame'
import TimelineScreen from './screenshots/TimelineScreen'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-hyperia-cyan/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-[300px] w-[300px] rounded-full bg-hyperia-magenta/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-hyperia-green/30 bg-hyperia-green/5 px-4 py-2 font-mono text-xs text-hyperia-green">
              <span className="h-1.5 w-1.5 rounded-full bg-hyperia-green shadow-[0_0_8px_#39FF14]" />
              OFFLINE BY DEFAULT
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-hyperia-text sm:text-5xl lg:text-[3.25rem]">
              Build your plan once.
              <br />
              <span className="bg-gradient-to-r from-hyperia-cyan to-hyperia-magenta bg-clip-text text-transparent">
                Share it in one tap.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-hyperia-muted">
              Hyperia is the offline protocol journal for people who plan in phases—and
              post in forums without rebuilding everything in a spreadsheet.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PlayStoreBadge href="#waitlist" />
              <motion.a
                href="#share"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl border border-hyperia-border px-6 py-3 text-sm font-medium text-hyperia-text transition-colors hover:border-hyperia-magenta/40 hover:text-hyperia-magenta"
              >
                See how sharing works →
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-hyperia-muted">
              {['No account', '100% local', 'Forum-ready exports', 'Android'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-hyperia-cyan">▸</span>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneFrame theme="dark" size="lg" className="glow-cyan">
              <TimelineScreen theme="dark" />
            </PhoneFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
