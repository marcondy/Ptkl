import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function MotionSection({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}) {
  return (
    <Component className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        custom={delay}
        variants={variants}
      >
        {children}
      </motion.div>
    </Component>
  )
}

export function MotionItem({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
