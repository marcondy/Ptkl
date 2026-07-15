import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-subtle opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse md:flex-row">
          
          {/* Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 flex justify-center w-full"
          >
            <div className="relative border-gray-900 border-[10px] md:border-[12px] rounded-[2.5rem] h-[550px] w-[260px] md:h-[600px] md:w-[280px] shadow-2xl overflow-hidden glow-neon bg-black">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-3xl w-32 mx-auto"></div>
              <img src="/screenshots/mockup_2.jpg" alt="Hyperia Plans View" className="w-full h-full object-cover relative z-10" />
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
