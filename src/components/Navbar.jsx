import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-hyperia-border/60 bg-hyperia-bg/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="font-mono text-sm font-semibold tracking-[0.18em] text-hyperia-cyan">
          HYPERIA
        </a>

        <div className="hidden items-center gap-8 md:flex">
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
          className="rounded-lg border border-hyperia-cyan/40 bg-hyperia-cyan/10 px-4 py-2 font-mono text-xs font-medium text-hyperia-cyan"
        >
          GET THE APP
        </motion.a>
      </nav>
    </motion.header>
  )
}
