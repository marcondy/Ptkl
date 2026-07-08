import PageContainer from './ui/PageContainer'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <PageContainer>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-bold tracking-[0.2em] text-[#00ffcc]">HYPERIA</p>
            <p className="mt-2 font-mono text-[10px] text-zinc-600">
              © {year} · Local · Optional share · JSON portable
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'gethyperia.com', href: 'https://gethyperia.com' },
              { label: 'Disclaimer', href: '#disclaimer' },
              { label: 'Community JSON', href: 'https://github.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] tracking-widest text-zinc-500 transition-colors hover:text-[#00ffcc]"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
