export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold tracking-[0.2em] text-hyperia-teal">
              HYPERIA
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              © {year} Hyperia. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Backup & Restore', href: '#' },
              { label: 'Disclaimer', href: '#' },
              { label: 'About', href: '#' },
              { label: 'gethyperia.com', href: 'https://gethyperia.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-medium tracking-widest text-neutral-500 transition-colors hover:text-white"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
