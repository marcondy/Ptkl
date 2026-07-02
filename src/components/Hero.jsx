import { motion } from 'framer-motion'
import PlayStoreBadge from './ui/PlayStoreBadge'
import AppScreenshot from './ui/AppScreenshot'
import PageContainer from './ui/PageContainer'
import { screenshots } from '../data/screenshots'

export default function Hero() {
  const shot = screenshots.timelineDark

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[min(700px,100vw)] -translate-x-1/2 rounded-full bg-hyperia-cyan/[0.04] blur-3xl sm:h-[500px]" />
      <div className="pointer-events-none absolute top-40 -right-8 h-[240px] w-[240px] rounded-full bg-hyperia-magenta/[0.04] blur-3xl sm:right-0 sm:h-[300px] sm:w-[300px]" />

      <PageContainer className="relative">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-hyperia-green/30 bg-hyperia-green/5 px-4 py-2 font-mono text-[10px] text-hyperia-green sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hyperia-green shadow-[0_0_8px_#39FF14]" />
                OFFLINE BY DEFAULT
              </p>
            </div>

            <h1 className="text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-hyperia-text sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              Build your plan once.
              <br />
              <span className="bg-gradient-to-r from-hyperia-cyan to-hyperia-magenta bg-clip-text text-transparent">
                Share it in one tap.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-hyperia-muted sm:text-base lg:mx-0">
              Hyperia is the offline protocol journal for people who plan in phases—and
              post in forums without rebuilding everything in a spreadsheet.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <PlayStoreBadge href="#waitlist" className="w-full justify-center sm:w-auto" />
              <motion.a
                href="#share"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-xl border border-hyperia-border px-6 py-3 text-sm font-medium text-hyperia-text transition-colors hover:border-hyperia-magenta/40 hover:text-hyperia-magenta sm:w-auto"
              >
                See how sharing works →
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-hyperia-muted sm:gap-x-6 sm:text-xs lg:justify-start">
              {['No account', '100% local', 'Forum-ready exports', 'Android'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-hyperia-cyan">▸</span>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative flex min-w-0 justify-center lg:justify-end"
          >
            <AppScreenshot
              src={shot.src}
              alt={shot.alt}
              theme={shot.theme}
              size="xl"
              position={shot.position}
              priority
              className="glow-cyan"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full border border-hyperia-border bg-hyperia-bg/90 px-4 py-2 font-mono text-[10px] text-hyperia-muted backdrop-blur-md sm:text-xs"
            >
              Actual app screenshot
            </motion.div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
