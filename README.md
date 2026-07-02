# Hyperia Marketing Site

Marketing website for [Hyperia](https://gethyperia.com) — a privacy-first Android app for planning, tracking, and sharing structured multi-item protocols offline.

**Build your plan once. Share it in one tap.**

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
npm run build
```

## Site Sections

1. **Hero** — Primary message + Google Play CTA + app mockup
2. **Problem / Solution** — Spreadsheets vs Hyperia
3. **Share spotlight** — Interactive export preview with anonymizer toggle
4. **Privacy** — Local-only, no account
5. **Feature grid** — Timeline, frequency, reminders, library, inventory, backup
6. **How it works** — 3 steps
7. **Pricing** — Free vs Hyperia Pro comparison + pricing tiers
8. **Testimonials** — Beta user placeholders
9. **FAQ** — Accordion
10. **Waitlist** — Email capture + Play Store badge
11. **Footer** — Disclaimer, privacy, contact

## Deployment (GitHub Pages)

Set `base` in `vite.config.js`:
- Project site: `/Ptkl/`
- Custom domain (`gethyperia.com`): `/`

Enable **Settings → Pages → GitHub Actions** for automatic deploys on push to `main`.

## Screenshots

App screenshots live in `public/screenshots/`. The site crops them to portrait inside phone frames using `object-fit: cover`.

| File | Used in |
|------|---------|
| `timeline-dark.png` | Hero, App showcase (dark), Features |
| `timeline-light.png` | App showcase (light toggle) |
| `share-dark.png` | Share spotlight, App showcase |
| `inventory-dark.png` | Features, App showcase |
| `library-dark.png` | Features, App showcase |
| `plans-list-dark.png` | Features, App showcase |

**To use your own exports:** replace any PNG in `public/screenshots/` (keep the same filename), or edit `src/data/screenshots.js` to point to new files. Portrait crops (~9:19.5) work best; landscape images are center-cropped automatically.


- **Colors:** Near-black bg, neon cyan `#00FFFF`, magenta `#E040FB`, green `#39FF14`
- **Fonts:** JetBrains Mono (labels), Inter (body)
- **Tone:** Confident, minimal, technical — not clinical, not hype

## License

See [LICENSE](LICENSE).
