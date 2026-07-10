import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageContainer from './ui/PageContainer'
import logo from '../assets/logo.svg'

const links = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Library', href: '#library' },
  { label: 'Pro', href: '#pro' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all ${
        scrolled ? 'border-b border-white/10 bg-black/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <PageContainer>
        <nav className="flex min-w-0 items-center justify-between gap-3 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Hyperia Logo" className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#00E5FF] sm:text-sm">
              HYPERIA
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-widest text-zinc-500 transition-colors hover:text-white"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <motion.a
            href="#download"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 rounded-lg border border-[#00ffcc]/40 bg-[#00ffcc]/10 px-3 py-2 font-mono text-[10px] font-medium text-[#00ffcc] sm:px-4 sm:text-xs"
          >
            GET APP
          </motion.a>
        </nav>
      </PageContainer>
    </header>
  )
}
