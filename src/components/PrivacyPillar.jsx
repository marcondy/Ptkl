import { motion } from 'framer-motion';

export default function PrivacyPillar() {
  return (
    <section id="privacy" className="py-24 relative overflow-hidden bg-[var(--color-hyperia-surface)] border-y border-[var(--color-hyperia-border)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-hyperia-surface)_0%,_black_100%)]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-hyperia-red)]/10 border border-[var(--color-hyperia-red)]/30 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--color-hyperia-red)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          
          <h2 className="text-sm text-[var(--color-hyperia-red)] mono-label mb-4 tracking-widest">DATA SOVEREIGNTY</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            No Cloud.<br />No Accounts.<br />No Tracking.
          </h3>
          
          <div className="p-6 card-dark border-[var(--color-hyperia-red)]/20 bg-black max-w-2xl mx-auto relative overflow-hidden">
             {/* Security lines */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-hyperia-red)] to-transparent opacity-50"></div>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-hyperia-red)] to-transparent opacity-50"></div>

            <p className="text-lg text-white font-medium mb-2">Your data stays exactly where it belongs: on your device.</p>
            <p className="text-[var(--color-hyperia-text-dim)]">
              Hyperia operates entirely offline. We do not have servers. We do not have a database of your protocols. We cannot see, share, or sell your information. Period.
            </p>
          </div>

          {/* Backup Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mt-16"
          >
            <div className="relative border-gray-900 border-[10px] md:border-[12px] rounded-[2.5rem] h-[550px] w-[260px] md:h-[600px] md:w-[280px] shadow-[0_0_40px_rgba(255,51,102,0.15)] overflow-hidden bg-black">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-3xl w-32 mx-auto"></div>
              <img src="/screenshots/mockup_3.jpg" alt="Hyperia Backup & Restore View" className="w-full h-full object-cover relative z-10" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
