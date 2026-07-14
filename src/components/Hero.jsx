import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-subtle z-0"></div>
      
      {/* Neon glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-hyperia-neon)]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-hyperia-neon)]/30 bg-[var(--color-hyperia-neon)]/5 text-[var(--color-hyperia-neon)] mono-label">
            V 2.0 PROTOCOL INITIATED
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Your Journey.<br />
            <span className="text-[var(--color-hyperia-neon)]">Your Data.</span><br />
            Your Rules.
          </h1>
          
          <p className="text-xl text-[var(--color-hyperia-text-dim)] mb-12 max-w-2xl mx-auto leading-relaxed">
            The unified, private, offline-first protocol planner and workout logger for sovereign individuals. Optimize your stack. Log your workouts. Own your data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.gethyperia.app" className="glow-neon px-8 py-4 bg-[var(--color-hyperia-neon)] text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 mono-label inline-block">
              GET APP
            </a>
            <a href="#manifesto" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-white/50 transition-colors duration-300 mono-label inline-block">
              READ THE MANIFESTO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
