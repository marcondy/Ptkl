import AppChrome, { useTheme } from '../ui/AppChrome'

export default function NotificationsScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  return (
    <div className={`${t.shell} min-h-[400px]`}>
      <AppChrome theme={theme} compact />

      <div className="mx-2 mt-3 overflow-hidden rounded-t-2xl border border-white/10 bg-[#121212]">
        <div className="bg-[#00ffcc] px-3 py-2.5 text-center font-mono text-[8px] font-bold tracking-widest text-black">
          NOTIFICATION SETTINGS
        </div>

        <div className="p-3">
          <p className={`text-[8px] leading-relaxed ${t.muted}`}>
            Per-item reminder. Set daily alarm for active plan items.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="text-center">
              <p className="font-mono text-[7px] text-zinc-500">HOUR</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-zinc-600">−</span>
                <span className="font-mono text-2xl font-medium text-white">08</span>
                <span className="text-zinc-600">+</span>
              </div>
            </div>
            <span className="mt-4 text-xl text-zinc-600">:</span>
            <div className="text-center">
              <p className="font-mono text-[7px] text-zinc-500">MINUTE</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-zinc-600">−</span>
                <span className="font-mono text-2xl font-medium text-white">00</span>
                <span className="text-zinc-600">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 pt-0">
          <div className="rounded-lg bg-[#00ffcc] py-3 text-center font-mono text-[8px] font-bold tracking-wider text-black">
            SCHEDULE NOTIFICATIONS
          </div>
        </div>
      </div>
    </div>
  )
}
