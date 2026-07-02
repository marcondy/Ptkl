export default function PlayStoreBadge({ className = '', href = '#waitlist' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-xl border border-hyperia-border bg-hyperia-card px-5 py-3 transition-all hover:border-hyperia-cyan/40 hover:glow-cyan ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3.6 1.8c-.3.2-.5.6-.5 1v18.4c0 .4.2.8.5 1 .3.2.7.2 1 .1l10.2-5.9V7.6L4.6 1.7c-.3-.2-.7-.2-1 0zm12.8 7.3v2.2l3.5-2-3.5-2v1.8zm0-3.5l5.2 3c.6.3.9 1 .6 1.6-.2.4-.6.7-1 .7-.2 0-.4 0-.6-.1l-4.2-2.4v-2.8zM16.4 18.1l-4.2-2.4v5.5l4.2-2.4c.6-.3.9-1 .6-1.6-.2-.4-.4-.6-.6-.7z"
        />
      </svg>
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-wider text-hyperia-muted">Get it on</p>
        <p className="text-sm font-semibold text-hyperia-text">Google Play</p>
      </div>
    </a>
  )
}
