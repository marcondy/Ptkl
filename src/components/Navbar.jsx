import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Premium', href: '#premium' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-hyperia-bg/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="text-sm font-bold tracking-[0.2em] text-hyperia-teal transition-colors group-hover:text-white">
            HYPERIA
          </span>
          <span className="rounded-md border border-hyperia-teal/30 bg-hyperia-teal/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-hyperia-teal">
            PREMIUM
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-neutral-400 transition-colors hover:text-white"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="rounded-full bg-hyperia-teal px-4 py-2 text-xs font-semibold tracking-wide text-black transition-all hover:bg-hyperia-teal/90 hover:shadow-[0_0_24px_rgba(45,212,191,0.35)]"
        >
          Get Started
        </a>
      </nav>
    </motion.header>
  )
}
