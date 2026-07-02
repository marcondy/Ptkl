import { motion } from 'framer-motion'

export default function PhoneFrame({
  children,
  theme = 'dark',
  className = '',
  size = 'md',
  interactive = true,
}) {
  const sizes = {
    sm: 'w-full max-w-[min(200px,calc(100vw-2.5rem))] rounded-[1.75rem] p-1.5',
    md: 'w-full max-w-[min(260px,calc(100vw-2.5rem))] rounded-[2.25rem] p-2',
    lg: 'w-full max-w-[min(300px,calc(100vw-2.5rem))] rounded-[2.5rem] p-2',
  }

  const bezel =
    theme === 'light'
      ? 'border-neutral-200 bg-neutral-100 shadow-xl shadow-neutral-300/40'
      : 'border-hyperia-border bg-hyperia-surface shadow-2xl shadow-black/60'

  const Wrapper = interactive ? motion.div : 'div'
  const motionProps = interactive
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { type: 'spring', stiffness: 320, damping: 24 },
      }
    : {}

  return (
    <Wrapper
      className={`relative mx-auto min-w-0 overflow-hidden ${sizes[size]} border ${bezel} ${className}`}
      {...motionProps}
    >
      {children}
    </Wrapper>
  )
}
