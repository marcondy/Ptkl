import { motion } from 'framer-motion'
import { screenshotUrl } from '../../data/screenshots'

const sizes = {
  sm: 'w-full max-w-[min(180px,calc(100vw-2.5rem))] rounded-[1.75rem] p-1.5',
  md: 'w-full max-w-[min(240px,calc(100vw-2.5rem))] rounded-[2.25rem] p-2',
  lg: 'w-full max-w-[min(280px,calc(100vw-2.5rem))] rounded-[2.5rem] p-2',
  xl: 'w-full max-w-[min(320px,calc(100vw-2rem))] rounded-[2.75rem] p-2.5',
}

/** Renders a real screenshot PNG from /public/screenshots/ inside a phone frame. */
export default function AppScreenshotImage({
  src,
  alt,
  theme = 'dark',
  size = 'md',
  position = 'top center',
  className = '',
  interactive = true,
  priority = false,
}) {
  const bezel =
    theme === 'light'
      ? 'border-neutral-200 bg-neutral-100 shadow-xl shadow-neutral-300/30'
      : 'border-hyperia-border bg-hyperia-surface shadow-2xl shadow-black/50'

  const Wrapper = interactive ? motion.div : 'div'
  const motionProps = interactive
    ? { whileHover: { y: -4, scale: 1.01 }, transition: { type: 'spring', stiffness: 320, damping: 24 } }
    : {}

  return (
    <Wrapper
      className={`relative mx-auto min-w-0 overflow-hidden ${sizes[size]} border ${bezel} ${className}`}
      {...motionProps}
    >
      <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-[#0f1115]">
        <img
          src={screenshotUrl(src)}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </Wrapper>
  )
}
