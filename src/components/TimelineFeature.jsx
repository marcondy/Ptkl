import FeatureSection from './ui/FeatureSection'
import appLightPlans from '../assets/screenshots/app_light_plans.jpg'

export default function TimelineFeature() {
  const Screen = () => <img src={appLightPlans} alt="Timeline UI" className="h-full w-full rounded-[1.25rem] object-cover" />

  return (
    <FeatureSection
      id="timeline"
      label="PILLAR 2: PRECISION"
      title="Surgical Protocol Precision."
      body="Move beyond rudimentary habit trackers. Engineer your cycles with multi-week visual timelines and granular dose segmenting down to the microgram (mcg) and International Unit (IU). Integrated vial and ampoule math automatically forecasts your inventory, ensuring you never miss a dose or scramble for a re-order."
      screen={Screen}
    />
  )
}
