# Hyperia Landing Page

A premium, responsive landing page for [Hyperia](https://gethyperia.com) — precision protocol management for complex supplement and peptide stacks.

Built with React, Vite, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ (22 recommended)
- npm

### Setup Commands

```bash
# Clone the repository
git clone https://github.com/marcondy/ptkl.git
cd ptkl

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Scaffold from Scratch

If you're starting a new project with the same stack:

```bash
npm create vite@latest hyperia-landing -- --template react
cd hyperia-landing
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install framer-motion
```

Then configure Tailwind in `vite.config.js` and add `@import 'tailwindcss'` to `src/index.css`.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run preview` | Preview production build |

## GitHub Pages Deployment

### 1. Configure the base path

In `vite.config.js`, set `base` to your repository name:

```js
export default defineConfig({
  base: '/ptkl/', // Change to '/' if using a custom domain
})
```

### 2. Enable GitHub Pages

1. Go to your repository **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 3. Deploy

The included workflow (`.github/workflows/deploy.yml`) automatically builds and deploys on every push to `main`.

To deploy manually:

```bash
npm run build
# Upload the `dist/` folder to GitHub Pages
```

### 4. Custom domain (optional)

If using `gethyperia.com`:

1. Set `base: '/'` in `vite.config.js`
2. Add a `public/CNAME` file containing `gethyperia.com`
3. Configure DNS with your domain provider

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Glassmorphism navigation
│   ├── Hero.jsx         # Hero section with CTA
│   ├── HeroMockup.jsx   # App UI phone mockup
│   ├── Features.jsx     # Bento-style feature grid
│   ├── Premium.jsx      # Hyperia+ premium section
│   ├── Footer.jsx       # Footer with links
│   └── MotionSection.jsx # Reusable scroll animations
├── App.jsx
├── main.jsx
└── index.css            # Tailwind theme & globals
```

## Design

The landing page mirrors Hyperia's app aesthetic:

- **Dark theme** with teal accent (`#2DD4BF`)
- **Typography:** Inter (UI) + JetBrains Mono (data)
- **Features:** Visual timelines, inventory forecast, Markdown/ASCII export, smart library, daily reminders

## License

See [LICENSE](LICENSE).
