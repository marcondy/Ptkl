import AppChrome, { useTheme } from '../ui/AppChrome'

export default function ShareScreen({ theme = 'dark' }) {
  const t = useTheme(theme)
  const headerBg = theme === 'light' ? 'bg-hyperia-purple' : 'bg-hyperia-teal'
  const headerText = theme === 'light' ? 'text-white' : 'text-black'
  const activeTab = theme === 'light' ? 'border-hyperia-purple/50 text-hyperia-purple bg-hyperia-purple/10' : 'border-hyperia-teal/50 text-hyperia-teal bg-hyperia-teal/10'

  return (
    <div className={`${t.shell} relative pb-2`}>
      <AppChrome theme={theme} compact />

      <div className={`mx-2 mt-2 overflow-hidden rounded-xl border ${t.border}`}>
        <div className={`px-3 py-2 text-center text-[8px] font-bold tracking-widest ${headerBg} ${headerText}`}>
          SHARE PLAN
        </div>

        <div className="p-2.5">
          <div className="mb-2 flex gap-1.5">
            <span className={`rounded-full border px-2 py-0.5 text-[7px] ${t.muted} ${t.border}`}>
              Markdown
            </span>
            <span className={`rounded-full border px-2 py-0.5 text-[7px] ${activeTab}`}>
              ASCII
            </span>
          </div>

          <div className={`rounded-lg border p-2 font-mono text-[7px] leading-relaxed ${t.muted} ${theme === 'light' ? 'border-neutral-200 bg-neutral-50' : 'border-neutral-800 bg-neutral-950'}`}>
            <p className={t.text}>Hyperia+ | protocol plan</p>
            <p>========================</p>
            <p>Foundation block</p>
            <p className="pl-1.5">Wks 1-4 | Daily | —</p>
            <p>Maintenance window</p>
            <p className="pl-1.5">Wks 5-10 | 5x/wk | —</p>
            <p className={`mt-1 ${t.accent} opacity-70`}>gethyperia.com</p>
          </div>

          <button
            type="button"
            className={`mt-2 w-full rounded-lg py-2 text-[7px] font-bold tracking-wider ${headerBg} ${headerText}`}
          >
            COPY TO CLIPBOARD
          </button>
        </div>
      </div>
    </div>
  )
}
