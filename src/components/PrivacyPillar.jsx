import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import SectionLabel, { SectionTitle, SectionBody } from './ui/SectionLabel'

const specs = [
  { label: 'Storage', value: 'On device' },
  { label: 'Account', value: 'None' },
  { label: 'Cloud sync', value: 'Never' },
  { label: 'Share', value: 'Optional JSON' },
]

export default function PrivacyPillar() {
  return (
    <section id="privacy" className="border-y border-white/10 bg-[#0f0f0f] py-16 lg:py-20">
      <PageContainer>
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <MotionItem>
            <SectionLabel>PILLAR 1: SOVEREIGNTY</SectionLabel>
            <SectionTitle>Unbreakable Data Sovereignty.</SectionTitle>
            <SectionBody>
              Your protocol is nobody's business but your own. Hyperia operates 100% offline with zero cloud sync, no account creation, and no data harvesting. Every log, every dose, and every workout routine is stored strictly on-device in a local database. Absolute discretion for the modern athlete.
            </SectionBody>
          </MotionItem>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            {specs.map((spec, i) => (
              <MotionItem
                key={spec.label}
                delay={i * 0.05}
                className="rounded-2xl border border-white/10 bg-[#121212] p-4"
              >
                <p className="font-mono text-[10px] tracking-wider text-zinc-500">{spec.label}</p>
                <p className="mt-2 font-mono text-sm font-medium text-[#00E5FF]">{spec.value}</p>
              </MotionItem>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
