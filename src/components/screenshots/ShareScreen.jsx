import AppChrome, { useTheme } from '../ui/AppChrome'

export default function ShareScreen({ theme = 'dark' }) {
  const t = useTheme(theme)
  const headerBg = theme === 'light' ? 'bg-[#5d5cde]' : 'bg-[#2dd4bf]'
  const headerText = theme === 'light' ? 'text-white' : 'text-black'
  const activeTab =
    theme === 'light'
      ? 'border-[#5d5cde]/50 text-[#5d5cde] bg-[#5d5cde]/10'
      : 'border-[#2dd4bf]/50 text-[#2dd4bf] bg-[#2dd4bf]/10'

  return (
    <div className={`${t.shell} relative pb-3`}>
      <AppChrome theme={theme} compact />

      <div className={`mx-2 mt-2 overflow-hidden rounded-xl border ${t.border}`}>
        <div
          className={`px-3 py-2.5 text-center text-[8px] font-bold tracking-widest ${headerBg} ${headerText}`}
        >
          SHARE PLAN
        </div>

        <div className="p-2.5">
          <div className="mb-2 flex gap-1.5">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[7px] ${theme === 'light' ? activeTab : `${t.muted} ${t.border}`}`}
            >
              Markdown
            </span>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[7px] ${theme === 'dark' ? activeTab : `${t.muted} ${t.border}`}`}
            >
              ASCII
            </span>
          </div>

          <div
            className={`rounded-lg border p-2 font-mono text-[7px] leading-relaxed ${t.muted} ${theme === 'light' ? 'border-neutral-200 bg-neutral-50' : 'border-neutral-800 bg-[#0a0a0a]'}`}
          >
            <p className={t.text}>Hyperia+ | peptide stack</p>
            <p>========================</p>
            <p>Item A</p>
            <p className="pl-1.5">Wks 1-12 | Every 5 Days | 1.75 mg</p>
            <p>Item B</p>
            <p className="pl-1.5">Wks 1-12 | Daily | 5 mcg</p>
            <p className={`mt-1.5 ${t.accent} opacity-80`}>gethyperia.com</p>
          </div>

          <button
            type="button"
            className={`mt-2.5 w-full rounded-lg py-2.5 text-[7px] font-bold tracking-wider ${headerBg} ${headerText}`}
          >
            COPY TO CLIPBOARD
          </button>
        </div>
      </div>
    </div>
  )
}
