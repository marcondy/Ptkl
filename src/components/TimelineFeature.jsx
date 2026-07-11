import FeatureSection from './ui/FeatureSection'
import appCalculator from '../assets/screenshots/app_calculator.jpg'

export default function TimelineFeature() {
  const Screen = () => <img src={appCalculator} alt="Dose Calculator UI" className="h-full w-full rounded-[1.25rem] object-cover" />

  return (
    <FeatureSection
      id="timeline"
      label="PILLAR 2: PRECISION"
      title="Unified One-Tap Dashboard."
      body="Move beyond rudimentary habit trackers. Engineer your cycles alongside your workout splits. Log your daily dose or workout with a single tap. Life happens—if you miss a day, toggle the Shift Missed Day engine and your entire schedule seamlessly slides forward. No overlaps, no broken streaks."
      screen={Screen}
    />
  )
}
