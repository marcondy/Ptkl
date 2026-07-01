const themes = {
  light: {
    shell: 'bg-[#f9fafb]',
    card: 'bg-white border-neutral-200/80 shadow-sm',
    text: 'text-neutral-900',
    muted: 'text-neutral-500',
    accent: 'text-hyperia-purple',
    accentBg: 'bg-hyperia-purple',
    accentSoft: 'bg-hyperia-purple/10 text-hyperia-purple border-hyperia-purple/20',
    tabTrack: 'bg-neutral-100',
    tabActive: 'bg-white text-neutral-900 shadow-sm',
    tabInactive: 'text-neutral-500',
    border: 'border-neutral-200',
    dot: 'bg-hyperia-purple',
  },
  dark: {
    shell: 'bg-[#0f1115]',
    card: 'bg-[#1a1d23] border-neutral-800',
    text: 'text-white',
    muted: 'text-neutral-500',
    accent: 'text-hyperia-teal',
    accentBg: 'bg-hyperia-teal',
    accentSoft: 'bg-hyperia-teal/10 text-hyperia-teal border-hyperia-teal/30',
    tabTrack: 'bg-neutral-900',
    tabActive: 'bg-neutral-800 text-white shadow-sm',
    tabInactive: 'text-neutral-500',
    border: 'border-neutral-800',
    dot: 'bg-hyperia-teal',
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
        <span className={`text-[9px] font-bold tracking-[0.18em] ${t.accent}`}>
          HYPERIA
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className={`rounded border px-1 py-px text-[6px] font-semibold tracking-wider ${t.accentSoft}`}
          >
            PREMIUM
          </span>
          <span className={`text-[9px] ${t.muted}`}>🔔</span>
          {!compact && (
            <span className={`text-[7px] font-medium tracking-widest ${t.muted}`}>
              LIBRARY
            </span>
          )}
        </div>
      </div>

      <div className={`${compact ? 'mx-3 mt-1.5' : 'mx-4 mt-2'} flex rounded-lg ${t.tabTrack} p-0.5`}>
        {['ACTIVE', 'SCHEDULED', 'PAST'].map((tab, i) => (
          <div
            key={tab}
            className={`flex-1 rounded-md py-1 text-center text-[7px] font-semibold tracking-wider ${
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
