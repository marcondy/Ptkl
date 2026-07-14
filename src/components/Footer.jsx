export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-[var(--color-hyperia-border)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>HYPERIA</div>
          <p className="text-[var(--color-hyperia-text-dim)] text-sm">
            &copy; {new Date().getFullYear()} Sovereign Utilities. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-[var(--color-hyperia-text-dim)] hover:text-[var(--color-hyperia-neon)] transition-colors p-2 border border-transparent hover:border-[var(--color-hyperia-neon)]/30 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="#" className="text-[var(--color-hyperia-text-dim)] hover:text-[var(--color-hyperia-neon)] transition-colors p-2 border border-transparent hover:border-[var(--color-hyperia-neon)]/30 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"/><path d="M13 14v4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4l-3-3z"/></svg>
            <span className="sr-only">Telegram</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
