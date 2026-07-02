import AppChrome, { useTheme } from '../ui/AppChrome'

export default function PlansListScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  return (
    <div className={`${t.shell} relative min-h-[380px] pb-4`}>
      <AppChrome theme={theme} />

      <div className="space-y-2 px-3 pt-2">
        {[
          { name: 'PROTOCOL PLAN', date: '2026-05-01', weeks: '12 Wks', border: 'border-[#00ffcc]/40' },
          { name: 'SCHEDULED BLOCK', date: '2026-08-01', weeks: '8 Wks', border: 'border-[#e040fb]/40' },
        ].map((plan) => (
          <div key={plan.name} className={`rounded-2xl border ${plan.border} bg-[#0f0f0f] p-3`}>
            <p className={`font-mono text-[10px] font-bold ${t.text}`}>{plan.name}</p>
            <p className={`mt-1 font-mono text-[8px] ${t.muted}`}>
              {plan.date} · {plan.weeks}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
