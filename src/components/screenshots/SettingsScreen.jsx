import AppChrome, { useTheme } from '../ui/AppChrome'

function Toggle({ on, theme }) {
  return (
    <div
      className={`h-5 w-9 rounded-full p-0.5 transition-colors ${on ? 'bg-[#2dd4bf]' : 'bg-neutral-700'}`}
    >
      <div
        className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${on ? 'translate-x-4' : ''}`}
      />
    </div>
  )
}

export default function SettingsScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  const settings = [
    { label: 'Enable Notifications', on: true },
    { label: 'Haptic Feedback', on: true },
    { label: 'Light Theme', on: false },
  ]

  return (
    <div className={`${t.shell} relative min-h-[420px]`}>
      <AppChrome theme={theme} compact />

      <div className="mx-2 mt-3 overflow-hidden rounded-t-2xl border border-b-0 border-neutral-800 bg-[#1a1a1a]">
        <div className="bg-[#2dd4bf] px-3 py-2.5 text-center text-[8px] font-bold tracking-widest text-black">
          SETTINGS
        </div>

        <div className="space-y-0 p-3">
          {settings.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between border-b border-neutral-800 py-3 last:border-0"
            >
              <span className={`text-[9px] ${t.text}`}>{s.label}</span>
              <Toggle on={s.on} theme={theme} />
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 p-3">
          <div className="rounded-lg bg-neutral-800 py-2.5 text-center text-[8px] font-bold tracking-wider text-white">
            CLOSE
          </div>
        </div>
      </div>
    </div>
  )
}
