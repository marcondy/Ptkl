import { motion } from 'framer-motion'
import HeroMockup from './HeroMockup'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-hyperia-teal/5 blur-3xl" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-hyperia-purple/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-hyperia-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                Protocol management, reimagined
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Precision tracking for{' '}
                <span className="bg-gradient-to-r from-hyperia-teal to-emerald-300 bg-clip-text text-transparent">
                  complex stacks
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-400 lg:mx-0 lg:text-lg">
                Hyperia organizes peptide cycles, dosing schedules, and inventory
                forecasts — then exports your plan in Markdown or ASCII for
                seamless sharing.
              </p>

              <div
                id="cta"
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="https://gethyperia.com"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-hyperia-teal px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-hyperia-teal/90 hover:shadow-[0_0_32px_rgba(45,212,191,0.35)] sm:w-auto"
                >
                  Start Your Stack
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 sm:w-auto"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 lg:justify-start">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-hyperia-teal">✓</span>
                  Visual timelines
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-hyperia-teal">✓</span>
                  Inventory forecast
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-hyperia-teal">✓</span>
                  One-tap export
                </span>
              </div>
            </motion.div>
          </div>

          {/* Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
