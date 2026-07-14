import { motion } from 'framer-motion';

export default function HyperiaPro() {
  return (
    <section id="pro" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-subtle opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-sm text-[var(--color-hyperia-neon)] mono-label mb-4">LEVEL UP</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Unlock Hyperia Pro
        </h3>
        <p className="text-lg text-[var(--color-hyperia-text-dim)] mb-12 max-w-2xl mx-auto">
          For the power users demanding absolute optimization. Upgrade to Pro for unlimited protocol plans, automated encrypted local backups, and advanced dose calculators.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Maintenance Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark p-8 flex flex-col items-center border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-teal)]/30 transition-colors"
          >
            <h4 className="text-2xl font-bold mb-2">Maintenance</h4>
            <div className="text-[var(--color-hyperia-text-dim)] mb-6 text-sm">Billed monthly</div>
            <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-mono)' }}>$3.99</div>
            <button className="w-full mt-auto py-3 bg-[var(--color-hyperia-surface)] border border-[var(--color-hyperia-border)] text-white rounded font-semibold hover:bg-white/5 transition-colors mono-label">
              SELECT TIER
            </button>
          </motion.div>

          {/* Foundation Tier (Optimal) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark p-8 flex flex-col items-center border-[var(--color-hyperia-neon)]/50 relative overflow-hidden transform md:-translate-y-4 glow-neon"
          >
            <div className="absolute top-0 w-full bg-[var(--color-hyperia-neon)] text-black text-xs font-bold py-1 mono-label text-center">
              FOUNDATION (OPTIMAL)
            </div>
            <h4 className="text-2xl font-bold mb-2 mt-4 text-white">Annual</h4>
            <div className="text-[var(--color-hyperia-text-dim)] mb-6 text-sm">Billed once a year</div>
            <div className="text-4xl font-bold mb-6 text-[var(--color-hyperia-neon)]" style={{ fontFamily: 'var(--font-mono)' }}>$29.99</div>
            <button className="w-full mt-auto py-3 bg-[var(--color-hyperia-neon)] text-black rounded font-semibold hover:bg-white transition-colors mono-label glow-neon">
              SELECT TIER
            </button>
          </motion.div>

          {/* Quarterly Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark p-8 flex flex-col items-center border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-teal)]/30 transition-colors"
          >
            <h4 className="text-2xl font-bold mb-2">Quarterly</h4>
            <div className="text-[var(--color-hyperia-text-dim)] mb-6 text-sm">Billed every 3 months</div>
            <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-mono)' }}>$9.99</div>
            <button className="w-full mt-auto py-3 bg-[var(--color-hyperia-surface)] border border-[var(--color-hyperia-border)] text-white rounded font-semibold hover:bg-white/5 transition-colors mono-label">
              SELECT TIER
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
