import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set to your repository name for GitHub Pages project sites.
  // For a custom domain (gethyperia.com), change this to '/'.
  base: '/Ptkl/',
})
