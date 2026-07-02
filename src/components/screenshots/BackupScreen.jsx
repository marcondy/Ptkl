import AppChrome, { useTheme } from '../ui/AppChrome'

export default function BackupScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  const scopes = [
    { label: 'Active plans', on: true },
    { label: 'Scheduled plans', on: true },
    { label: 'Past plans', on: false },
    { label: 'Item library', on: true },
  ]

  return (
    <div className={`${t.shell} pb-3`}>
      <AppChrome theme={theme} compact />

      <div className={`mx-3 mt-2 rounded-2xl border p-3 ${t.card}`}>
        <p className={`mb-3 font-mono text-[8px] font-bold tracking-widest ${t.text}`}>BACKUP & RESTORE</p>

        <div className="space-y-2">
          {scopes.map((s) => (
            <div key={s.label} className="flex items-center justify-between py-1">
              <span className={`font-mono text-[8px] ${t.text}`}>{s.label}</span>
              <div
                className={`h-4 w-7 rounded-full p-0.5 ${s.on ? 'bg-[#00ffcc]' : 'bg-zinc-700'}`}
              >
                <div
                  className={`h-3 w-3 rounded-full bg-white ${s.on ? 'translate-x-3' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-[#00ffcc]/30 bg-[#00ffcc]/5 py-2 text-center font-mono text-[7px] font-bold text-[#00ffcc]">
            DOWNLOAD CSV BACKUP
          </div>
          <div className="rounded-lg border border-white/10 py-2 text-center font-mono text-[7px] text-zinc-400">
            UPLOAD CSV RESTORE
          </div>
        </div>

        <p className={`mt-3 text-center font-mono text-[6px] ${t.muted}`}>
          Local file only · No cloud sync
        </p>
      </div>
    </div>
  )
}
