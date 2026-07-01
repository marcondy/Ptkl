import { motion } from 'framer-motion'
import PhoneFrame from './ui/PhoneFrame'
import TimelineScreen from './screenshots/TimelineScreen'
import ShareScreen from './screenshots/ShareScreen'

const trustPoints = [
  'Works offline',
  'No account',
  'Local storage',
  'You choose to share',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-hyperia-teal/[0.07] blur-3xl" />
        <div className="absolute top-32 -right-16 h-[320px] w-[320px] rounded-full bg-hyperia-purple/[0.06] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-hyperia-teal/20 bg-hyperia-teal/5 px-4 py-2 text-xs font-medium text-hyperia-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-hyperia-teal" />
              Private · Offline · On your device
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3rem] lg:leading-[1.08]">
              Protocol tracking
              <br />
              <span className="text-neutral-400">without the cloud</span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-neutral-400 lg:mx-0">
              Hyperia is a local-first workspace for complex schedules, inventory forecasts,
              and clean exports — designed for privacy, built for precision.
            </p>

            <div
              id="cta"
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <motion.a
                href="https://gethyperia.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-hyperia-teal px-8 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(45,212,191,0.3)] transition-shadow hover:shadow-[0_0_32px_rgba(45,212,191,0.3)] sm:w-auto"
              >
                Get Hyperia
              </motion.a>
              <motion.a
                href="#showcase"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm hover:border-white/20 hover:bg-white/10 sm:w-auto"
              >
                View the app
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="text-hyperia-teal">✓</span>
                  {point}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Dual phone hero — dark primary, light offset */}
          <div className="relative mx-auto h-[420px] w-full max-w-[400px] lg:mx-0 lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 z-20 w-[58%]"
            >
              <PhoneFrame theme="dark" size="md">
                <TimelineScreen theme="dark" />
              </PhoneFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16, y: 32 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-16 left-0 z-10 w-[52%]"
            >
              <PhoneFrame theme="light" size="sm">
                <ShareScreen theme="light" />
              </PhoneFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-hyperia-bg/80 px-4 py-2 text-xs text-neutral-400 backdrop-blur-md"
            >
              <span className="text-hyperia-teal">●</span> Dark &{' '}
              <span className="text-hyperia-purple">●</span> Light themes
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
