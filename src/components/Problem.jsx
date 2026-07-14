import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-hyperia-bg)] border-y border-[var(--color-hyperia-border)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm text-[var(--color-hyperia-red)] mono-label mb-4 tracking-widest">ERROR 404: SYSTEM CHAOS</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Fragmented data.<br />Zero privacy.
            </h3>
            <p className="text-lg text-[var(--color-hyperia-text-dim)] mb-6 leading-relaxed">
              We were tired of sharing complex protocols via messy Reddit threads, scattered spreadsheets, and unsecure notes apps. 
            </p>
            <p className="text-lg text-[var(--color-hyperia-text-dim)] leading-relaxed">
              Tracking your stacks, cycles, and optimizations in plain text leaves your most sensitive personal data exposed to the cloud, big tech, and prying eyes. It's disorganized, unsafe, and decidedly un-sovereign.
            </p>
          </motion.div>

          {/* Visual Chaos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-2xl border border-[var(--color-hyperia-red)]/30 bg-[var(--color-hyperia-surface)] p-6 overflow-hidden flex flex-col justify-center"
          >
            {/* Background glitch effect wrapper */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--color-hyperia-red) 2px, var(--color-hyperia-red) 4px)' }}></div>
            
            <div className="space-y-4 relative z-10 transform -rotate-2">
              <div className="bg-black/80 border border-white/10 p-4 rounded-lg blur-[1px]">
                <p className="text-[var(--color-hyperia-text-dim)] font-mono text-sm">User_992: "Hey guys what's the half-life of..."</p>
              </div>
              <div className="bg-[var(--color-hyperia-red)]/10 border border-[var(--color-hyperia-red)]/50 p-4 rounded-lg transform translate-x-4">
                <p className="text-[var(--color-hyperia-red)] font-mono text-sm">WARN: Unencrypted spreadsheet sync detected on Google Drive.</p>
              </div>
              <div className="bg-black/80 border border-white/10 p-4 rounded-lg blur-[2px] transform -translate-x-2">
                <p className="text-[var(--color-hyperia-text-dim)] font-mono text-sm">"I lost my cycle notes from last year..."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
