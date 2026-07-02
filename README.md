# Hyperia Marketing Site

Marketing website for [Hyperia](https://gethyperia.com) — private, offline-first plan journal for protocols and timelines.

**Become a sovereign individual.**

## Design system

| Token | Value |
|-------|-------|
| `--color-hyperia-bg` | `#000000` |
| `--color-hyperia-card` | `#121212` |
| `--color-hyperia-neon` | `#00FFCC` |
| `--color-hyperia-teal` | `#2DD4BF` |
| `--color-hyperia-indigo` (light) | `#4F46E5` |
| Font UI | Inter |
| Font labels | JetBrains Mono |

Dark theme default. Monospace uppercase section labels. 16px rounded cards, 10% white borders.

## Sections

1. Hero — wordmark, sovereignty tagline, Play CTA, phone mockups
2. Privacy — offline journal pillar
3. Timeline — Active / Scheduled / Past
4. Library — CSV catalog import
5. Reminders — per-item alarms
6. Backup & Restore — CSV download/upload, scope toggles
7. Hyperia Pro — Foundation / Maintenance / Quarterly tiers
8. Disclaimer — not medical advice
9. Footer — gethyperia.com

## Development

```bash
npm install
npm run dev
npm run build
```

App UI mockups in `src/components/screenshots/` match the Android app screenshots.

## Deploy

GitHub Pages: set `base` in `vite.config.js`, enable Actions source in repo Settings → Pages.
