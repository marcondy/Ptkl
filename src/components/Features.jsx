import { MotionItem } from './MotionSection'

const features = [
  {
    title: 'Visual Timelines',
    description:
      'Track every compound in your stack with a chronological timeline, progress bars, and color-coded status indicators.',
    span: 'lg:col-span-2',
    visual: 'timeline',
  },
  {
    title: 'Inventory Forecast',
    description:
      'Know exactly how much you have left. Dashed-border forecast panels calculate remaining quantities across your entire cycle.',
    span: 'lg:col-span-1',
    visual: 'inventory',
  },
  {
    title: 'Export Anywhere',
    description:
      'Share plans in Markdown or ASCII format. Copy to clipboard and paste into forums, messages, or docs instantly.',
    span: 'lg:col-span-1',
    visual: 'export',
  },
  {
    title: 'Smart Library',
    description:
      'Build a personal catalog of compounds. Fetch from JSON endpoints or add custom items with route and dosage metadata.',
    span: 'lg:col-span-1',
    visual: 'library',
  },
  {
    title: 'Daily Reminders',
    description:
      'Set precise notification times for compound administration. Never miss a dose with scheduled push alerts.',
    span: 'lg:col-span-1',
    visual: 'notifications',
  },
]

function FeatureVisual({ type }) {
  switch (type) {
    case 'timeline':
      return (
        <div className="mt-6 space-y-2">
          {[
            { name: 'Retatrutide 1.75 mg', w: 'w-[85%]', color: 'bg-hyperia-teal' },
            { name: 'BPC-157 5 mcg', w: 'w-[60%]', color: 'bg-emerald-400' },
            { name: 'GHK-Cu 2 mg', w: 'w-[40%]', color: 'bg-blue-400' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${item.color}`} />
              <div className="flex-1">
                <p className="text-[11px] text-neutral-400">{item.name}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-800">
                  <div
                    className={`h-full rounded-full ${item.color} opacity-60 ${item.w}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'inventory':
      return (
        <div className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/50 p-4 font-mono text-[11px]">
          <p className="mb-3 text-[9px] tracking-widest text-neutral-500">
            INVENTORY FORECAST
          </p>
          {[
            ['Testosterone Enanthate', '840 mg'],
            ['Primobolan Depot', '1200 mg'],
            ['HCG', '5000 IU'],
          ].map(([name, qty]) => (
            <div
              key={name}
              className="flex justify-between border-b border-neutral-800 py-1.5 last:border-0"
            >
              <span className="text-neutral-400">{name}</span>
              <span className="text-hyperia-teal">{qty}</span>
            </div>
          ))}
        </div>
      )

    case 'export':
      return (
        <div className="mt-6">
          <div className="mb-3 flex gap-2">
            <span className="rounded-full border border-neutral-700 px-3 py-1 text-[10px] text-neutral-500">
              Markdown
            </span>
            <span className="rounded-full border border-hyperia-teal/50 bg-hyperia-teal/10 px-3 py-1 text-[10px] text-hyperia-teal">
              ASCII
            </span>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 font-mono text-[9px] leading-relaxed text-neutral-500">
            <p className="text-neutral-400">Hyperia+ | peptide stack</p>
            <p>========================</p>
            <p>Retatrutide</p>
            <p className="pl-2">Wks 1-12 | Every 5 Days | 1.75 mg</p>
            <p className="mt-1 text-hyperia-teal/60">gethyperia.com</p>
          </div>
        </div>
      )

    case 'library':
      return (
        <div className="mt-6 space-y-2">
          {[
            { name: 'Arimidex', type: 'ORAL' },
            { name: 'BPC-157', type: 'INJECTABLE', active: true },
            { name: 'Aromasin', type: 'ORAL' },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
                item.active
                  ? 'border-hyperia-teal/40 bg-hyperia-teal/5'
                  : 'border-neutral-800 bg-neutral-900/50'
              }`}
            >
              <div>
                <p className="text-[11px] font-medium text-white">{item.name}</p>
                <p className="text-[9px] tracking-wider text-neutral-500">
                  {item.type}
                </p>
              </div>
              <span className="text-[10px] text-neutral-600">✎</span>
            </div>
          ))}
        </div>
      )

    case 'notifications':
      return (
        <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          <p className="mb-3 text-[9px] tracking-widest text-neutral-500">
            DAILY REMINDER
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-[8px] text-neutral-500">HOUR</p>
              <p className="font-mono text-2xl font-medium text-white">08</p>
            </div>
            <span className="text-xl text-neutral-600">:</span>
            <div className="text-center">
              <p className="text-[8px] text-neutral-500">MINUTE</p>
              <p className="font-mono text-2xl font-medium text-white">00</p>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-hyperia-teal py-2 text-center text-[10px] font-semibold tracking-wider text-black">
            SCHEDULE NOTIFICATIONS
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionItem className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-hyperia-teal">
            FEATURES
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything your protocol needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            From cycle planning to inventory forecasting, Hyperia handles the
            complexity so you can focus on execution.
          </p>
        </MotionItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <MotionItem
              key={feature.title}
              delay={i * 0.08}
              className={`group rounded-2xl border border-white/5 bg-hyperia-card/50 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-hyperia-card ${feature.span}`}
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
              <FeatureVisual type={feature.visual} />
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  )
}
