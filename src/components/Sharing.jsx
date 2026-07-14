import { motion } from 'framer-motion';

export default function Sharing() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-[var(--color-hyperia-neon)] mono-label mb-4">UNIVERSAL EXPORT</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Share to Show.<br />Share to Use.
          </h3>
          <p className="text-lg text-[var(--color-hyperia-text-dim)] leading-relaxed">
            Forget proprietary formats. Hyperia exports your protocols into standard, readable formats that anyone can view, or seamlessly import back into the app.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-dark p-6 flex flex-col h-full bg-[#0a0a0f]"
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
              <span className="mono-label text-white">ASCII_VIEW.TXT</span>
              <span className="text-[var(--color-hyperia-text-dim)] text-xs">Plaintext</span>
            </div>
            <pre className="text-[10px] sm:text-xs text-[var(--color-hyperia-teal)] font-mono overflow-x-hidden leading-tight flex-1">
{`+------------------------+
| HYPERIA PROTOCOL ALPHA |
+------------------------+
Wk 1-4: Comp A [50mg/d]
Wk 1-8: Comp B [200mg/w]
Wk 4-8: Comp C [25mg/d]
> Notes: Morning dose.`}
            </pre>
            <p className="text-sm text-[var(--color-hyperia-text-dim)] mt-6">
              Perfect for quick pasting into Reddit forums or Telegram chats. Zero formatting lost.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-dark p-6 flex flex-col h-full bg-[#0a0a0f] border-[var(--color-hyperia-neon)]/30 glow-neon"
          >
            <div className="flex justify-between items-center mb-4 border-b border-[var(--color-hyperia-neon)]/20 pb-4">
              <span className="mono-label text-[var(--color-hyperia-neon)]">PROTOCOL.MD</span>
              <span className="text-[var(--color-hyperia-neon)] text-xs">Rich Text</span>
            </div>
            <div className="text-xs text-[var(--color-hyperia-text-dim)] font-mono flex-1 space-y-2">
              <p><span className="text-white"># Protocol Alpha</span></p>
              <p><span className="text-[var(--color-hyperia-neon)]">## Schedule</span></p>
              <p>- **Week 1-4**: Comp A `50mg/day`</p>
              <p>- **Week 1-8**: Comp B `200mg/wk`</p>
            </div>
            <p className="text-sm text-[var(--color-hyperia-text-dim)] mt-6">
              Share beautiful, structured markdown documentation directly to GitHub gists or personal wikis.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-dark p-6 flex flex-col h-full bg-[#0a0a0f]"
          >
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
              <span className="mono-label text-white">DATA_EXPORT.CSV</span>
              <span className="text-[var(--color-hyperia-text-dim)] text-xs">Spreadsheet</span>
            </div>
            <pre className="text-[10px] sm:text-xs text-[var(--color-hyperia-text-dim)] font-mono overflow-x-hidden leading-tight flex-1">
{`Week,Compound,Dose,Freq
1,CompA,50mg,Daily
1,CompB,200mg,Weekly
2,CompA,50mg,Daily
2,CompB,200mg,Weekly`}
            </pre>
            <p className="text-sm text-[var(--color-hyperia-text-dim)] mt-6">
              Export raw data for advanced personal analysis in Excel or custom Python scripts.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
