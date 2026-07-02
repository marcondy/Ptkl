import FeatureSection from './ui/FeatureSection'
import LibraryScreen from './screenshots/LibraryScreen'

export default function LibraryFeature() {
  return (
    <FeatureSection
      id="library"
      label="ITEM LIBRARY"
      title="Community CSV catalog import"
      body="Build your personal item library. Import community preset lists from CSV URLs, search entries, and filter by class or route. Your catalog stays local — portable and sovereign."
      screen={LibraryScreen}
      reverse
      className="bg-[#0a0a0a]"
    />
  )
}
