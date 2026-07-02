import FeatureSection from './ui/FeatureSection'
import NotificationsScreen from './screenshots/NotificationsScreen'

export default function RemindersFeature() {
  return (
    <FeatureSection
      id="reminders"
      label="REMINDERS"
      title="Per-item alarms on your schedule"
      body="Set daily reminders tied to each item in your active plan. Bell indicators per compound, custom hour and minute — respects your notification preferences. Never miss a scheduled entry."
      screen={NotificationsScreen}
    />
  )
}
