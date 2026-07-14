import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-32 relative overflow-hidden bg-[var(--color-hyperia-bg)] border-t border-[var(--color-hyperia-border)]">
      <div className="absolute inset-0 grid-subtle opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm text-[var(--color-hyperia-neon)] mono-label mb-4 tracking-[0.3em]">INITIATING DIRECTIVE</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
              The Manifesto
            </h3>
            <div className="w-24 h-1 bg-[var(--color-hyperia-neon)] mx-auto glow-neon"></div>
          </div>

          <div className="space-y-16 text-lg text-[var(--color-hyperia-text-dim)] leading-relaxed font-mono text-sm md:text-base">
            
            <div className="relative pl-8 border-l border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-neon)] transition-colors duration-500">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[var(--color-hyperia-neon)] rounded-full glow-neon"></div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>I. Data Sovereignty</h4>
              <p>
                In an era of ubiquitous surveillance and data harvesting, true ownership is radical. We reject the premise that our most sensitive biological, psychological, and optimization data should reside on servers we do not control. The cloud is not a convenience; it is a vulnerability. Hyperia is built on the absolute conviction that your data is yours. Local-first is not a feature—it is the foundation of sovereignty.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-neon)] transition-colors duration-500">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[var(--color-hyperia-neon)] rounded-full glow-neon"></div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>II. Optimization over Normalcy</h4>
              <p>
                We refuse to accept the baseline. The human machine is capable of extraordinary output when systematically tuned. We measure, we iterate, and we protocolize our routines. From hypertrophic cycles to nootropic stacks, we believe in the methodical documentation of inputs to master our outputs. Hyperia is the instrument for this pursuit.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-neon)] transition-colors duration-500">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[var(--color-hyperia-neon)] rounded-full glow-neon"></div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>III. Anti-Fragile Systems</h4>
              <p>
                A protocol that depends on a subscription to a third-party server is inherently fragile. If a company fails, if servers go offline, or if internet access is severed, your progress should not halt. We build in plaintext. We export in universal formats. We ensure that your system of optimization outlives any single piece of software.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[var(--color-hyperia-border)] hover:border-[var(--color-hyperia-neon)] transition-colors duration-500">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[var(--color-hyperia-neon)] rounded-full glow-neon"></div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>IV. Order from Chaos</h4>
              <p>
                The current state of protocol sharing is unacceptable. Fragmented forum threads, encrypted messaging groups, and disorganized spreadsheets breed confusion and error. Hyperia establishes a unified, clean, and uncompromising standard. We bring surgical precision to the chaotic art of human optimization.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
