import { motion } from 'framer-motion'

export default function PhoneFrame({
  children,
  theme = 'dark',
  className = '',
  size = 'md',
  interactive = true,
}) {
  const sizes = {
    sm: 'max-w-[200px] rounded-[1.75rem] p-1.5',
    md: 'max-w-[260px] rounded-[2.25rem] p-2',
    lg: 'max-w-[300px] rounded-[2.5rem] p-2',
  }

  const bezel =
    theme === 'light'
      ? 'border-neutral-200 bg-neutral-100 shadow-xl shadow-neutral-300/40'
      : 'border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/60'

  const Wrapper = interactive ? motion.div : 'div'
  const motionProps = interactive
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { type: 'spring', stiffness: 320, damping: 24 },
      }
    : {}

  return (
    <Wrapper
      className={`relative w-full overflow-hidden ${sizes[size]} border ${bezel} ${className}`}
      {...motionProps}
    >
      {children}
    </Wrapper>
  )
}
