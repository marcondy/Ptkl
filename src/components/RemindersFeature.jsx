import FeatureSection from './ui/FeatureSection'
import appNotificationsDark from '../assets/screenshots/app_notifications_dark.jpg'

export default function RemindersFeature() {
  const Screen = () => <img src={appNotificationsDark} alt="Reminders UI" className="h-full w-full rounded-[1.25rem] object-cover" />

  return (
    <FeatureSection
      id="reminders"
      label="REMINDERS"
      title="Per-item alarms on your schedule"
      body="Set daily reminders tied to each item in your active plan. Bell indicators per compound, custom hour and minute — respects your notification preferences. Never miss a scheduled entry."
      screen={Screen}
    />
  )
}
