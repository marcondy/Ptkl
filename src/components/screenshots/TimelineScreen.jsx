import AppChrome, { useTheme } from '../ui/AppChrome'

function TimelineRow({ name, dose, color, glow, t, theme }) {
  return (
    <div className="relative flex gap-2 pl-0.5">
      <div className="flex flex-col items-center">
        <div
          className={`h-2 w-2 rounded-full ${color} ${
            glow
              ? theme === 'light'
                ? 'shadow-[0_0_6px_rgba(93,92,222,0.5)]'
                : 'shadow-[0_0_6px_rgba(45,212,191,0.5)]'
              : ''
          }`}
        />
        <div className={`w-px flex-1 ${theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-700'}`} />
      </div>
      <div className={`mb-2 flex-1 rounded-xl border px-2.5 py-2 ${t.card}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-[9px] font-semibold ${t.text}`}>{name}</p>
            <p className={`text-[8px] ${t.muted}`}>{dose}</p>
          </div>
          <div className={`flex gap-1.5 text-[8px] ${t.muted}`}>
            <span>⋮</span>
            <span>⌄</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TimelineScreen({ theme = 'dark' }) {
  const t = { ...useTheme(theme), theme }
  const progressGlow =
    theme === 'light'
      ? 'shadow-[0_0_10px_rgba(93,92,222,0.35)]'
      : 'shadow-[0_0_10px_rgba(45,212,191,0.35)]'

  const items = [
    {
      name: 'Item A',
      dose: '1.75 mg',
      color: theme === 'light' ? 'bg-[#5d5cde]' : 'bg-[#2dd4bf]',
      glow: true,
    },
    { name: 'Item B', dose: '5 mcg', color: 'bg-emerald-400', glow: true },
    { name: 'Item C', dose: '2 mg', color: 'bg-blue-400', glow: false },
  ]

  return (
    <div className={`${t.shell} relative pb-4`}>
      <AppChrome theme={theme} />

      <div className={`m-3 rounded-2xl border p-3 ${t.card}`}>
        <div className="mb-2 flex items-center justify-between">
          <p className={`font-mono text-[10px] font-bold tracking-wide ${t.text}`}>PEPTIDE STACK</p>
          <div className={`flex gap-1.5 text-[8px] ${t.muted}`}>
            <span>⋮</span>
            <span>⌃</span>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: 'TOTAL WEEKS', value: '12 Wks' },
            { label: 'START DATE', value: '2026-05-01' },
            { label: 'STATUS', value: 'ACTIVE' },
          ].map((item) => (
            <div key={item.label}>
              <p className={`text-[6px] tracking-wider ${t.muted}`}>{item.label}</p>
              <p className={`font-mono text-[8px] font-medium ${t.text}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <p className={`mb-1 text-[6px] tracking-wider ${t.muted}`}>TIMELINE PROGRESS</p>
        <div
          className={`mb-1 h-2 overflow-hidden rounded-full ${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'}`}
        >
          <div className={`h-full w-[75%] rounded-full ${t.progress} ${progressGlow}`} />
        </div>
        <p className={`text-right font-mono text-[7px] ${t.accent}`}>Week 09/12</p>
      </div>

      <div className="px-3">
        <div className="mb-1.5 flex items-center justify-between">
          <p className={`text-[7px] font-semibold tracking-wider ${t.muted}`}>PLAN TIMELINE</p>
          <span className={`rounded border px-1.5 py-px text-[6px] ${t.muted} ${t.border}`}>
            + ADD ITEM
          </span>
        </div>
        {items.map((item) => (
          <TimelineRow key={item.name} {...item} t={t} theme={theme} />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2dd4bf] text-lg text-black shadow-lg">
        +
      </div>
    </div>
  )
}
