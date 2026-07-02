import { motion } from 'framer-motion'
import PageContainer from './ui/PageContainer'
import AppScreen from './ui/AppScreen'
import TimelineScreen from './screenshots/TimelineScreen'
import PlansListScreen from './screenshots/PlansListScreen'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-subtle" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00ffcc]/[0.03] blur-3xl" />

      <PageContainer className="relative">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 text-center lg:text-left"
          >
            <p className="font-mono text-xs font-bold tracking-[0.25em] text-[#00ffcc]">HYPERIA</p>

            <h1 className="mt-4 text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Become a sovereign individual.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
              Private, offline-first plan journal. Log protocols and timelines on your device —
              optional CSV backup and share when you choose.
            </p>

            <div id="download" className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                href="#pro"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl bg-[#00ffcc] px-8 py-3.5 font-mono text-xs font-semibold tracking-wide text-black glow-neon"
              >
                GET ON GOOGLE PLAY
              </motion.a>
              <a
                href="#timeline"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-8 py-3.5 font-mono text-xs text-zinc-300 transition-colors hover:border-[#00ffcc]/30 hover:text-[#00ffcc]"
              >
                EXPLORE FEATURES →
              </a>
            </div>

            <p className="mt-6 font-mono text-[10px] tracking-wider text-zinc-600">
              NOT MEDICAL ADVICE · LOCAL BY DEFAULT · NO ACCOUNT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative flex min-w-0 justify-center lg:justify-end"
          >
            <AppScreen theme="dark" size="xl" className="glow-neon">
              <TimelineScreen theme="dark" />
            </AppScreen>
            <div className="absolute -bottom-2 -left-2 hidden sm:block lg:-left-6">
              <AppScreen theme="dark" size="sm" interactive={false}>
                <PlansListScreen theme="dark" />
              </AppScreen>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
