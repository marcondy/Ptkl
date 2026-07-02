import AppChrome, { useTheme } from '../ui/AppChrome'

function ItemRow({ name, dose, borderColor, t }) {
  return (
    <div className={`mb-2 rounded-xl border-l-2 ${borderColor} border border-white/10 bg-[#121212] px-2.5 py-2 ${t.card}`}>
      <p className={`font-mono text-[9px] font-semibold ${t.text}`}>{name}</p>
      <p className={`text-[8px] ${t.muted}`}>{dose}</p>
    </div>
  )
}

export default function TimelineScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  return (
    <div className={`${t.shell} relative pb-4`}>
      <AppChrome theme={theme} />

      <div className={`m-3 rounded-2xl border p-3 ${t.card}`}>
        <div className="mb-2 flex items-center justify-between">
          <p className={`font-mono text-[10px] font-bold tracking-wide ${t.text}`}>PROTOCOL PLAN</p>
          <span className={`text-[8px] ${t.muted}`}>⌃</span>
        </div>

        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: 'TOTAL WEEKS', value: '12 Wks' },
            { label: 'START DATE', value: '2026-05-01' },
            { label: 'STATUS', value: 'ACTIVE' },
          ].map((item) => (
            <div key={item.label}>
              <p className={`font-mono text-[6px] tracking-wider ${t.muted}`}>{item.label}</p>
              <p className={`font-mono text-[8px] ${t.text}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <p className={`mb-1 font-mono text-[6px] tracking-wider ${t.muted}`}>TIMELINE PROGRESS</p>
        <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-[#18181b]">
          <div className={`h-full w-[75%] rounded-full ${t.progress} shadow-[0_0_8px_rgba(0,255,204,0.4)]`} />
        </div>
        <p className={`text-right font-mono text-[7px] ${t.accent}`}>Week 09/12</p>
      </div>

      <div className="px-3">
        <p className={`mb-2 font-mono text-[7px] font-semibold tracking-wider ${t.muted}`}>PLAN TIMELINE</p>
        <ItemRow name="Item A" dose="1.75 mg · Wks 1–12" borderColor="border-l-[#00ffcc]" t={t} />
        <ItemRow name="Item B" dose="5 mcg · Daily" borderColor="border-l-[#e040fb]" t={t} />
        <ItemRow name="Item C" dose="2 mg · 5×/wk" borderColor="border-l-[#39ff14]" t={t} />
      </div>

      <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00ffcc] text-lg text-black shadow-[0_0_16px_rgba(0,255,204,0.4)]">
        +
      </div>
    </div>
  )
}
