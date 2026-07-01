import AppChrome, { useTheme } from '../ui/AppChrome'

export default function InventoryScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  const items = [
    { name: 'Item A', dose: '250 IU', active: true },
    { name: 'Item B', dose: '40 mg', active: false },
  ]

  const forecast = [
    ['Supply A', '840 mg'],
    ['Supply B', '1200 mg'],
    ['Supply C', '5000 IU'],
  ]

  return (
    <div className={`${t.shell} pb-3`}>
      <AppChrome theme={theme} compact />

      <div className="space-y-2 px-3 pt-2">
        {items.map((item) => (
          <div key={item.name} className={`flex gap-2`}>
            <div className="flex flex-col items-center pt-2">
              <div
                className={`h-2 w-2 rounded-full ${item.active ? t.dot : 'bg-neutral-600'} ${
                  item.active ? 'shadow-[0_0_6px_rgba(45,212,191,0.5)]' : ''
                }`}
              />
              <div className={`w-px flex-1 ${theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-700'}`} />
            </div>
            <div className={`flex-1 rounded-lg border px-2.5 py-2 ${t.card}`}>
              <p className={`text-[9px] font-semibold ${t.text}`}>{item.name}</p>
              <p className={`text-[8px] ${t.muted}`}>{item.dose}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`mx-3 mt-2 rounded-lg border border-dashed p-2.5 font-mono text-[7px] ${t.border} ${theme === 'light' ? 'bg-neutral-50' : 'bg-neutral-900/40'}`}>
        <p className={`mb-2 text-[6px] tracking-widest ${t.muted}`}>INVENTORY FORECAST</p>
        {forecast.map(([name, qty]) => (
          <div
            key={name}
            className={`flex justify-between border-b py-1 last:border-0 ${theme === 'light' ? 'border-neutral-200' : 'border-neutral-800'}`}
          >
            <span className={t.muted}>{name}</span>
            <span className={t.accent}>{qty}</span>
          </div>
        ))}
      </div>

      <div className="mx-3 mt-2">
        <div className={`rounded-lg py-2 text-center text-[7px] font-bold tracking-wider ${theme === 'light' ? 'bg-hyperia-purple text-white' : 'bg-hyperia-teal text-black'}`}>
          SHARE TIMELINE
        </div>
      </div>
    </div>
  )
}
