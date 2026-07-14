# Hyperia Landing Page

Marketing website for [Hyperia](https://gethyperia.com) — the unified, private, offline-first protocol planner for sovereign individuals.

**Your Journey. Your Data. Your Rules.**

## Design System

The app utilizes a Cyberpunk-Minimalist aesthetic to enforce the concept of "Sovereign Logging" and "Data Sovereignty".

| Token | Value |
|-------|-------|
| `--color-hyperia-bg` | `#050507` |
| `--color-hyperia-surface` | `#121216` |
| `--color-hyperia-neon` | `#00E5FF` |
| `--color-hyperia-teal` | `#00FF66` |
| `--color-hyperia-magenta`| `#e040fb` |
| `--color-hyperia-red` | `#FF3366` |
| Font UI | Inter, Outfit (Headings) |
| Font labels | JetBrains Mono |

*Dark theme default. Monospace uppercase section labels. Grid-subtle backgrounds with neon glow effects.*

## Structure

1. **Hero** — "Your Journey. Your Data. Your Rules", CTA, glitch/glow effects.
2. **The Problem** — Fragmented data, messy spreadsheets, zero privacy.
3. **The Solution** — Hyperia: Order, Precision, Control.
4. **Feature Grid** — Protocol Planner, Local-First Privacy, Integrated Workout Tracker, Dose Calculator, Body-Map Tracking, Universal Sharing.
5. **Universal Export** — "Share to Show, Share to Use" via ASCII, Markdown, and CSV.
6. **Data Sovereignty (Privacy)** — No Cloud. No Accounts. No Tracking.
7. **Hyperia Pro** — Quarterly / Annual tiers for unlimited optimization.
8. **Disclaimer** — Not medical advice.
9. **Footer** — Community links (Telegram/X) and copyright.

## Development

```bash
npm install
npm run dev
npm run build
```

The layout is built with React, Tailwind CSS v4, and `framer-motion` for micro-animations.

## Deploy

GitHub Pages: set `base` in `vite.config.js`, enable Actions source in repo Settings → Pages.
