import { motion } from 'framer-motion'

const sizes = {
  sm: 'w-full max-w-[min(180px,calc(100vw-2.5rem))] rounded-[1.75rem] p-1.5',
  md: 'w-full max-w-[min(240px,calc(100vw-2.5rem))] rounded-[2rem] p-2',
  lg: 'w-full max-w-[min(280px,calc(100vw-2.5rem))] rounded-[2.25rem] p-2',
  xl: 'w-full max-w-[min(300px,calc(100vw-2rem))] rounded-[2.5rem] p-2.5',
}

export default function PhoneFrame({
  children,
  theme = 'dark',
  className = '',
  size = 'md',
  interactive = true,
}) {
  const bezel =
    theme === 'light'
      ? 'border-neutral-200 bg-neutral-100 shadow-xl'
      : 'border-white/10 bg-[#0f0f0f] shadow-2xl shadow-black/80'

  const Wrapper = interactive ? motion.div : 'div'
  const motionProps = interactive
    ? { whileHover: { y: -4 }, transition: { type: 'spring', stiffness: 320, damping: 24 } }
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
