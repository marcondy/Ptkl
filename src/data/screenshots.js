// Screen registry — built from the Hyperia screenshots you shared in chat.
// Set useImages: true once PNGs are in /public/screenshots/ (see README there).

import TimelineScreen from '../components/screenshots/TimelineScreen'
import ShareScreen from '../components/screenshots/ShareScreen'
import InventoryScreen from '../components/screenshots/InventoryScreen'
import LibraryScreen from '../components/screenshots/LibraryScreen'
import PlansListScreen from '../components/screenshots/PlansListScreen'
import SettingsScreen from '../components/screenshots/SettingsScreen'
import NotificationsScreen from '../components/screenshots/NotificationsScreen'

export const useImages = false

export const appScreens = {
  timelineDark: {
    component: TimelineScreen,
    image: 'timeline-dark.png',
    theme: 'dark',
    label: 'Timeline & progress',
    alt: 'Hyperia dark mode protocol timeline',
    position: 'top center',
  },
  timelineLight: {
    component: TimelineScreen,
    image: 'timeline-light.png',
    theme: 'light',
    label: 'Timeline & progress',
    alt: 'Hyperia light mode protocol timeline',
    position: 'top center',
  },
  shareDark: {
    component: ShareScreen,
    image: 'share-dark.png',
    theme: 'dark',
    label: 'Share export',
    alt: 'Hyperia share plan ASCII export',
    position: 'top center',
  },
  shareLight: {
    component: ShareScreen,
    image: 'share-light.png',
    theme: 'light',
    label: 'Share export',
    alt: 'Hyperia light mode share plan',
    position: 'top center',
  },
  inventoryDark: {
    component: InventoryScreen,
    image: 'inventory-dark.png',
    theme: 'dark',
    label: 'Inventory forecast',
    alt: 'Hyperia inventory forecast',
    position: 'top center',
  },
  libraryDark: {
    component: LibraryScreen,
    image: 'library-dark.png',
    theme: 'dark',
    label: 'Item library',
    alt: 'Hyperia catalog and library',
    position: 'top center',
  },
  plansListDark: {
    component: PlansListScreen,
    image: 'plans-list-dark.png',
    theme: 'dark',
    label: 'Your plans',
    alt: 'Hyperia active plans list',
    position: 'top center',
  },
  settingsDark: {
    component: SettingsScreen,
    image: 'settings-dark.png',
    theme: 'dark',
    label: 'Settings',
    alt: 'Hyperia settings',
    position: 'top center',
  },
  notificationsDark: {
    component: NotificationsScreen,
    image: 'notifications-dark.png',
    theme: 'dark',
    label: 'Reminders',
    alt: 'Hyperia notification settings',
    position: 'top center',
  },
}

export function screenshotUrl(filename) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}screenshots/${filename}`
}
