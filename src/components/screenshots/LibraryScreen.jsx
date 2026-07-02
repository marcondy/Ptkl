import AppChrome, { useTheme } from '../ui/AppChrome'

export default function LibraryScreen({ theme = 'dark' }) {
  const t = useTheme(theme)

  return (
    <div className={`${t.shell} pb-3`}>
      <AppChrome theme={theme} compact />

      <div className={`mx-3 mt-2 rounded-2xl border p-3 ${t.card}`}>
        <p className={`mb-2 font-mono text-[8px] font-bold tracking-widest ${t.text}`}>CATALOG MANAGEMENT</p>
        <div className={`mb-2 rounded-lg border px-2 py-1.5 font-mono text-[7px] ${t.muted} ${t.border}`}>
          <span className="text-[6px]">CSV URL</span>
          <p className={`truncate ${t.text}`}>community-catalog.csv</p>
        </div>
        <div className="rounded-lg bg-[#00ffcc] py-2 text-center font-mono text-[7px] font-bold text-black">
          IMPORT CSV
        </div>
      </div>

      <div className="px-3 pt-2">
        <p className={`mb-2 font-mono text-[7px] font-bold tracking-widest ${t.muted}`}>ITEM LIBRARY</p>
        <div className={`mb-2 flex gap-1`}>
          {['ALL', 'ORAL', 'INJ'].map((f, i) => (
            <span
              key={f}
              className={`rounded-full border px-2 py-0.5 font-mono text-[6px] ${
                i === 0 ? 'border-[#00ffcc]/40 bg-[#00ffcc]/10 text-[#00ffcc]' : `${t.border} ${t.muted}`
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        {['Catalog item A', 'Catalog item B', 'Catalog item C'].map((name, i) => (
          <div
            key={name}
            className={`mb-1.5 flex items-center justify-between rounded-xl border px-2.5 py-2 ${
              i === 1 ? 'border-[#00ffcc]/30 bg-[#00ffcc]/5' : 'border-white/10 bg-[#121212]'
            }`}
          >
            <p className={`font-mono text-[8px] ${t.text}`}>{name}</p>
            <span className={`text-[8px] ${t.muted}`}>✎</span>
          </div>
        ))}
      </div>
    </div>
  )
}
