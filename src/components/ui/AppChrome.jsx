const themes = {
  light: {
    shell: 'bg-[#f9f9fb]',
    card: 'bg-white border-neutral-200/80',
    text: 'text-neutral-900',
    muted: 'text-neutral-500',
    accent: 'text-[#4f46e5]',
    accentBg: 'bg-[#4f46e5]',
    accentSoft: 'bg-[#4f46e5]/10 text-[#4f46e5] border-[#4f46e5]/25',
    tabTrack: 'bg-neutral-100',
    tabActive: 'bg-white text-neutral-900 shadow-sm',
    tabInactive: 'text-neutral-500',
    border: 'border-neutral-200',
    progress: 'bg-[#4f46e5]',
  },
  dark: {
    shell: 'bg-black',
    card: 'bg-[#0f0f0f] border-white/10',
    text: 'text-white',
    muted: 'text-zinc-500',
    accent: 'text-[#00ffcc]',
    accentBg: 'bg-[#00ffcc]',
    accentSoft: 'bg-[#00ffcc]/10 text-[#00ffcc] border-[#00ffcc]/25',
    tabTrack: 'bg-[#18181b]',
    tabActive: 'bg-[#121212] text-white shadow-sm border border-white/5',
    tabInactive: 'text-zinc-500',
    border: 'border-white/10',
    progress: 'bg-[#00ffcc]',
  },
}

export function useTheme(theme) {
  return themes[theme] ?? themes.dark
}

export default function AppChrome({ theme = 'dark', compact = false }) {
  const t = useTheme(theme)

  return (
    <>
      <div className={`flex items-center justify-between ${compact ? 'px-3 pt-2' : 'px-4 pt-3'}`}>
        <span className={`font-mono text-[9px] font-bold tracking-[0.18em] ${t.accent}`}>
          HYPERIA
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`rounded border px-1 py-px font-mono text-[6px] font-semibold tracking-wider ${t.accentSoft}`}>
            PREMIUM
          </span>
          <span className={`text-[9px] ${t.muted}`}>🔔</span>
          {!compact && (
            <span className={`font-mono text-[7px] font-medium tracking-widest ${t.muted}`}>LIBRARY</span>
          )}
        </div>
      </div>

      <div className={`${compact ? 'mx-3 mt-1.5' : 'mx-4 mt-2'} flex rounded-lg ${t.tabTrack} p-0.5`}>
        {['ACTIVE', 'SCHEDULED', 'PAST'].map((tab, i) => (
          <div
            key={tab}
            className={`flex-1 rounded-md py-1 text-center font-mono text-[7px] font-semibold tracking-wider ${
              i === 0 ? t.tabActive : t.tabInactive
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    </>
  )
}
