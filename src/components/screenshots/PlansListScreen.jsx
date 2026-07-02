import AppChrome, { useTheme } from '../ui/AppChrome'

export default function PlansListScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  const plans = [
    { name: 'PEPTIDE STACK', date: '2026-05-01', weeks: '12 Wks' },
    { name: 'MY FIRST CYCLE', date: '2026-01-15', weeks: '16 Wks' },
  ]

  return (
    <div className={`${t.shell} relative min-h-[420px] pb-4`}>
      <AppChrome theme={theme} />

      <div className="space-y-3 px-3 pt-2">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-2xl border p-4 ${t.card}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className={`font-mono text-[11px] font-bold tracking-wide ${t.text}`}>
                  {plan.name}
                </p>
                <p className={`mt-1.5 font-mono text-[8px] ${t.muted}`}>
                  {plan.date} | {plan.weeks}
                </p>
              </div>
              <div className={`flex gap-2 text-[8px] ${t.muted}`}>
                <span>⋮</span>
                <span>⌄</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2dd4bf] text-xl font-light text-black shadow-[0_4px_20px_rgba(45,212,191,0.35)]">
        +
      </div>
    </div>
  )
}
