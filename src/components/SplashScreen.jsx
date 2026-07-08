import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          >
            <circle cx="40" cy="10" r="12" fill="#00FFFF" />
            <circle cx="66" cy="55" r="12" fill="#FF00FF" />
            <circle cx="14" cy="55" r="12" fill="rgba(0,255,255,0.8)" />
          </motion.svg>
          
          <div className="mt-6 font-mono text-[28px] font-bold tracking-[6px] text-[#EEEEEE]">
            HYPERIA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
