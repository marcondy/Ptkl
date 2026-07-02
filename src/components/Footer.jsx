import PageContainer from './ui/PageContainer'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hyperia-border py-10 sm:py-12">
      <PageContainer>
        <div className="grid min-w-0 gap-8 text-center sm:gap-10 lg:grid-cols-3 lg:text-left">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.18em] text-hyperia-cyan">
              HYPERIA
            </p>
            <p className="mt-2 text-sm text-hyperia-muted">
              Build once. Share cleanly. Offline by default.
            </p>
            <a
              href="https://gethyperia.com"
              className="mt-3 inline-block font-mono text-xs text-hyperia-cyan hover:underline"
            >
              gethyperia.com
            </a>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-mono text-xs tracking-widest text-hyperia-muted">LEGAL</p>
            <p className="mt-3 text-xs leading-relaxed text-hyperia-muted">
              <strong className="text-hyperia-text">Disclaimer:</strong> Hyperia is a personal
              logging and journal application. It does not provide medical advice, diagnosis, or
              treatment recommendations. Always seek advice from a qualified healthcare provider
              before starting or modifying any health-related plan.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-mono text-xs tracking-widest text-hyperia-muted">PRIVACY</p>
            <p className="mt-3 text-xs leading-relaxed text-hyperia-muted">
              Hyperia stores data locally on your device. We do not operate user accounts or
              cloud storage for plan data.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                { label: 'Disclaimer', href: '#' },
                { label: 'Privacy', href: '#' },
                { label: 'Contact', href: 'mailto:hello@gethyperia.com' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs tracking-wider text-hyperia-muted transition-colors hover:text-hyperia-cyan"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-hyperia-border pt-8 text-center text-xs text-hyperia-muted">
          © {year} Hyperia. All rights reserved.
        </p>
      </PageContainer>
    </footer>
  )
}
