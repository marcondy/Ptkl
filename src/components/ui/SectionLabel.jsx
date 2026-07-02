export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`mono-label text-hyperia-neon ${className}`}>{children}</p>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`mt-3 text-2xl font-semibold tracking-tight text-hyperia-text sm:text-3xl ${className}`}>
      {children}
    </h2>
  )
}

export function SectionBody({ children, className = '' }) {
  return (
    <p className={`mt-4 max-w-lg text-sm leading-relaxed text-hyperia-text-dim sm:text-base ${className}`}>
      {children}
    </p>
  )
}
