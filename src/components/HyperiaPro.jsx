import { motion } from 'framer-motion';

export default function HyperiaPro() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-subtle opacity-30"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-sm text-[var(--color-hyperia-magenta)] mono-label mb-4">LEVEL UP</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Unlock Hyperia Pro
        </h3>
        <p className="text-lg text-[var(--color-hyperia-text-dim)] mb-12 max-w-2xl mx-auto">
          For the power users demanding absolute optimization. Upgrade to Pro for unlimited protocol plans, automated encrypted local backups, and advanced dose calculators.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark p-8 flex flex-col items-center border-[var(--color-hyperia-border)] hover:border-white/20 transition-colors"
          >
            <h4 className="text-2xl font-bold mb-2">Quarterly</h4>
            <div className="text-[var(--color-hyperia-text-dim)] mb-6">Billed every 3 months</div>
            <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-mono)' }}>$14.99</div>
            <button className="w-full py-3 bg-[var(--color-hyperia-surface)] border border-[var(--color-hyperia-border)] text-white rounded font-semibold hover:bg-white/5 transition-colors mono-label">
              SELECT TIER
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark p-8 flex flex-col items-center border-[var(--color-hyperia-magenta)]/50 relative overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(224, 64, 251, 0.15)' }}
          >
            <div className="absolute top-0 w-full bg-[var(--color-hyperia-magenta)] text-black text-xs font-bold py-1 mono-label text-center">
              OPTIMAL CHOICE
            </div>
            <h4 className="text-2xl font-bold mb-2 mt-4 text-white">Annual</h4>
            <div className="text-[var(--color-hyperia-text-dim)] mb-6">Save 40% immediately</div>
            <div className="text-4xl font-bold mb-6 text-[var(--color-hyperia-magenta)]" style={{ fontFamily: 'var(--font-mono)' }}>$35.99</div>
            <button className="w-full py-3 bg-[var(--color-hyperia-magenta)] text-black rounded font-semibold hover:bg-white transition-colors mono-label">
              SELECT TIER
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
