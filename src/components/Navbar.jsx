import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageContainer from './ui/PageContainer'

const links = [
  { label: 'Share', href: '#share' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all ${
        scrolled
          ? 'border-b border-hyperia-border/60 bg-hyperia-bg/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <PageContainer>
        <nav className="flex min-w-0 items-center justify-between gap-3 py-4">
          <a
            href="#"
            className="shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-hyperia-cyan sm:text-sm sm:tracking-[0.18em]"
          >
            HYPERIA
          </a>

          <div className="hidden min-w-0 items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest text-hyperia-muted transition-colors hover:text-hyperia-text"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 rounded-lg border border-hyperia-cyan/40 bg-hyperia-cyan/10 px-3 py-2 font-mono text-[10px] font-medium text-hyperia-cyan sm:px-4 sm:text-xs"
          >
            <span className="sm:hidden">GET APP</span>
            <span className="hidden sm:inline">GET THE APP</span>
          </motion.a>
        </nav>
      </PageContainer>
    </motion.header>
  )
}
