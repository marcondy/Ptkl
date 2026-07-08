import PageContainer from './ui/PageContainer'

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="border-t border-white/10 bg-[#0f0f0f] py-12">
      <PageContainer narrow>
        <p className="font-mono text-[10px] tracking-widest text-[#00ffcc]">DISCLAIMER</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Hyperia is a personal logging and journal application. It does not provide medical advice,
          diagnosis, or treatment recommendations. Always consult a qualified healthcare professional
          before starting or modifying any health-related plan.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          Hyperia stores data locally on your device. We do not operate user accounts or cloud storage
          for plan data. JSON backup and share are optional and under your control.
        </p>
      </PageContainer>
    </section>
  )
}
