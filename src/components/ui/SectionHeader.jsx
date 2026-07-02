export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left'
      ? 'text-center lg:text-left'
      : align === 'right'
        ? 'text-center lg:text-right'
        : 'text-center'

  const descClass =
    align === 'center'
      ? 'mx-auto max-w-2xl'
      : align === 'left'
        ? 'mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'
        : 'mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:max-w-xl'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.18em] text-hyperia-cyan sm:text-xs sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-hyperia-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm leading-relaxed text-hyperia-muted sm:text-base ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  )
}
