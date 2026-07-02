const themes = {
  light: {
    shell: 'bg-[#f9fafb]',
    card: 'bg-white border-neutral-200/80 shadow-sm',
    text: 'text-neutral-900',
    muted: 'text-neutral-500',
    accent: 'text-hyperia-magenta',
    accentBg: 'bg-hyperia-magenta',
    accentSoft: 'bg-hyperia-magenta/10 text-hyperia-magenta border-hyperia-magenta/20',
    tabTrack: 'bg-neutral-100',
    tabActive: 'bg-white text-neutral-900 shadow-sm',
    tabInactive: 'text-neutral-500',
    border: 'border-neutral-200',
    dot: 'bg-hyperia-magenta',
  },
  dark: {
    shell: 'bg-[#0a0a0f]',
    card: 'bg-[#16161f] border-hyperia-border',
    text: 'text-hyperia-text',
    muted: 'text-hyperia-muted',
    accent: 'text-hyperia-cyan',
    accentBg: 'bg-hyperia-cyan',
    accentSoft: 'bg-hyperia-cyan/10 text-hyperia-cyan border-hyperia-cyan/30',
    tabTrack: 'bg-hyperia-card',
    tabActive: 'bg-hyperia-surface text-hyperia-text shadow-sm',
    tabInactive: 'text-hyperia-muted',
    border: 'border-hyperia-border',
    dot: 'bg-hyperia-cyan',
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
          <span
            className={`rounded border px-1 py-px font-mono text-[6px] font-semibold tracking-wider ${t.accentSoft}`}
          >
            PRO
          </span>
          <span className={`text-[9px] ${t.muted}`}>🔔</span>
          {!compact && (
            <span className={`font-mono text-[7px] font-medium tracking-widest ${t.muted}`}>
              LIBRARY
            </span>
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
