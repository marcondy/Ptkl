import { useState } from 'react'
import { motion } from 'framer-motion'
import { MotionItem } from './MotionSection'
import PageContainer from './ui/PageContainer'
import PlayStoreBadge from './ui/PlayStoreBadge'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24">
      <PageContainer>
        <MotionItem>
          <div className="relative overflow-hidden rounded-2xl border border-hyperia-cyan/30 bg-gradient-to-br from-hyperia-card to-hyperia-surface p-6 glow-cyan sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-hyperia-cyan/10 blur-3xl" />

            <div className="relative grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center">
              <div className="min-w-0 text-center lg:text-left">
                <p className="font-mono text-xs tracking-widest text-hyperia-cyan">GET HYPERIA</p>
                <h2 className="mt-3 text-2xl font-semibold text-hyperia-text sm:text-3xl">
                  Available on Android
                </h2>
                <p className="mt-4 text-sm text-hyperia-muted sm:text-base">
                  Get notified when Hyperia launches on Google Play — plus sharing tips for
                  clean forum posts.
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <PlayStoreBadge href="#waitlist" className="w-full justify-center sm:w-auto" />
                </div>
              </div>

              <div className="min-w-0">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-hyperia-green/40 bg-hyperia-green/10 p-6 text-center"
                  >
                    <p className="font-mono text-sm text-hyperia-green">✓ YOU&apos;RE ON THE LIST</p>
                    <p className="mt-2 text-sm text-hyperia-muted">
                      We&apos;ll notify you at launch. No spam — unsubscribe anytime.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full min-w-0 rounded-xl border border-hyperia-border bg-hyperia-bg px-4 py-3 text-sm text-hyperia-text placeholder:text-hyperia-muted focus:border-hyperia-cyan/50 focus:outline-none focus:ring-1 focus:ring-hyperia-cyan/30"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-xl bg-hyperia-cyan py-3 font-mono text-xs font-semibold tracking-wider text-black"
                    >
                      JOIN WAITLIST
                    </motion.button>
                    <p className="text-center text-xs text-hyperia-muted lg:text-left">
                      Your email is only used for launch updates. Never sold or shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </MotionItem>
      </PageContainer>
    </section>
  )
}
