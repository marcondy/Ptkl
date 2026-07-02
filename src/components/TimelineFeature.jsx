import FeatureSection from './ui/FeatureSection'
import TimelineScreen from './screenshots/TimelineScreen'

export default function TimelineFeature() {
  return (
    <FeatureSection
      id="timeline"
      label="TIMELINE"
      title="Active, scheduled, and past — one scrubber"
      body="Organize plans across Active, Scheduled, and Past tabs. Week scrubber, progress tracking, and item cards with color-coded borders. Dense, precise layout built for complex timelines."
      screen={TimelineScreen}
    />
  )
}
