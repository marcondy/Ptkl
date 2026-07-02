import AppChrome, { useTheme } from '../ui/AppChrome'

export default function NotificationsScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  return (
    <div className={`${t.shell} relative min-h-[420px]`}>
      <AppChrome theme={theme} compact />

      <div className="mx-2 mt-3 overflow-hidden rounded-t-2xl border border-neutral-800 bg-[#1a1a1a]">
        <div className="bg-[#2dd4bf] px-3 py-2.5 text-center text-[8px] font-bold tracking-widest text-black">
          NOTIFICATION SETTINGS
        </div>

        <div className="p-3">
          <p className={`text-[8px] leading-relaxed ${t.muted}`}>
            Set a daily reminder time for your compound administration within your active plan.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-[7px] text-neutral-500">HOUR</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-neutral-600">−</span>
                <span className="font-mono text-2xl font-medium text-white">08</span>
                <span className="text-neutral-600">+</span>
              </div>
            </div>
            <span className="text-xl text-neutral-600">:</span>
            <div className="text-center">
              <p className="text-[7px] text-neutral-500">MINUTE</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-neutral-600">−</span>
                <span className="font-mono text-2xl font-medium text-white">00</span>
                <span className="text-neutral-600">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 pt-0">
          <div className="rounded-lg bg-[#2dd4bf] py-3 text-center text-[8px] font-bold tracking-wider text-black">
            SCHEDULE NOTIFICATIONS
          </div>
        </div>
      </div>
    </div>
  )
}
