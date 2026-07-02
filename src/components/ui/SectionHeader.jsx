export default function SectionHeader({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-medium tracking-[0.2em] text-hyperia-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-hyperia-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-hyperia-muted ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
