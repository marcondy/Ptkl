import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-subtle opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse md:flex-row">
          
          {/* Visual Order */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full card-dark p-6 flex flex-col justify-center order-2 md:order-1 glow-neon"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 bg-[var(--color-hyperia-surface)] p-4 rounded-lg border border-[var(--color-hyperia-border)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-hyperia-teal)] animate-pulse"></div>
                <div className="flex-1">
                  <p className="text-white font-medium">Hypertrophy Cycle Alpha</p>
                  <p className="text-[var(--color-hyperia-text-dim)] font-mono text-xs mt-1">Status: ACTIVE // Day 14 of 90</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[var(--color-hyperia-surface)] p-4 rounded-lg border border-[var(--color-hyperia-border)] opacity-70">
                <div className="w-2 h-2 rounded-full bg-[var(--color-hyperia-text-dim)]"></div>
                <div className="flex-1">
                  <p className="text-white font-medium">Nootropic Stack Beta</p>
                  <p className="text-[var(--color-hyperia-text-dim)] font-mono text-xs mt-1">Status: ARCHIVED</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[var(--color-hyperia-surface)] p-4 rounded-lg border border-[var(--color-hyperia-border)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-hyperia-neon)] glow-neon"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-hyperia-neon)] font-medium">Protocol Compiled Successfully.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-sm text-[var(--color-hyperia-neon)] mono-label mb-4 tracking-widest">SYSTEM RESTORED</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Order.<br />Precision.<br />Control.
            </h3>
            <p className="text-lg text-[var(--color-hyperia-text-dim)] mb-6 leading-relaxed">
              Hyperia was built to bring order to chaos. A dedicated, local-first utility designed specifically for protocol documentation and sharing.
            </p>
            <p className="text-lg text-[var(--color-hyperia-text-dim)] leading-relaxed">
              No more digging through old forum posts. Define your stack, track your dosages, map your workouts, and log your progress—all in one unified format that belongs entirely to you.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
