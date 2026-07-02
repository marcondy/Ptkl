// App screenshot assets in /public/screenshots/
// Replace any file to update the site — keep portrait-oriented crops for best results.

export const screenshots = {
  timelineDark: {
    src: 'timeline-dark.png',
    alt: 'Hyperia dark mode timeline with protocol plan progress',
    theme: 'dark',
    position: 'top center',
  },
  timelineLight: {
    src: 'timeline-light.png',
    alt: 'Hyperia light mode timeline with protocol plan',
    theme: 'light',
    position: 'top center',
  },
  shareDark: {
    src: 'share-dark.png',
    alt: 'Hyperia share plan export with ASCII preview',
    theme: 'dark',
    position: 'top center',
  },
  inventoryDark: {
    src: 'inventory-dark.png',
    alt: 'Hyperia inventory forecast view',
    theme: 'dark',
    position: 'top center',
  },
  libraryDark: {
    src: 'library-dark.png',
    alt: 'Hyperia catalog management and item library',
    theme: 'dark',
    position: 'top center',
  },
  plansListDark: {
    src: 'plans-list-dark.png',
    alt: 'Hyperia active plans list view',
    theme: 'dark',
    position: 'top center',
  },
}

export function screenshotUrl(filename) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}screenshots/${filename}`
}
