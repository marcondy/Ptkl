import AppChrome, { useTheme } from '../ui/AppChrome'

export default function LibraryScreen({ theme = 'dark' }) {
  const t = useTheme(theme)
  const btnBg = theme === 'light' ? 'bg-hyperia-purple text-white' : 'bg-hyperia-teal text-black'

  const items = [
    { name: 'Catalog item A', type: 'ORAL' },
    { name: 'Catalog item B', type: 'INJECTABLE', active: true },
    { name: 'Catalog item C', type: 'ORAL' },
  ]

  return (
    <div className={`${t.shell} pb-3`}>
      <AppChrome theme={theme} compact />

      <div className={`mx-3 mt-2 rounded-xl border p-3 ${t.card}`}>
        <p className={`mb-2 text-[8px] font-bold tracking-widest ${t.text}`}>CATALOG MANAGEMENT</p>
        <div className={`mb-2 rounded-lg border px-2 py-1.5 text-[7px] ${t.muted} ${t.border}`}>
          <span className="text-[6px]">URL</span>
          <p className={`truncate ${t.text}`}>https://example.com/catalog.json</p>
        </div>
        <div className={`rounded-md py-1.5 text-center text-[7px] font-bold ${btnBg}`}>FETCH</div>
      </div>

      <div className="px-3 pt-2">
        <p className={`mb-2 text-[7px] font-bold tracking-widest ${t.muted}`}>ITEM LIBRARY</p>
        <div className={`mb-2 rounded-lg border px-2 py-1.5 text-[7px] ${t.muted} ${t.border}`}>
          Search Library…
        </div>
        {items.map((item) => (
          <div
            key={item.name}
            className={`mb-1.5 flex items-center justify-between rounded-lg border px-2.5 py-2 ${
              item.active
                ? theme === 'light'
                  ? 'border-hyperia-purple/40 bg-hyperia-purple/5'
                  : 'border-hyperia-teal/40 bg-hyperia-teal/5'
                : `${t.border} ${theme === 'light' ? 'bg-white' : 'bg-neutral-900/50'}`
            }`}
          >
            <div>
              <p className={`text-[8px] font-medium ${t.text}`}>{item.name}</p>
              <p className={`text-[6px] tracking-wider ${t.muted}`}>{item.type}</p>
            </div>
            <span className={`text-[8px] ${t.muted}`}>✎</span>
          </div>
        ))}
      </div>
    </div>
  )
}
