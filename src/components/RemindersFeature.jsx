import FeatureSection from './ui/FeatureSection'
import AppScreen from './ui/AppScreen'
import appNotificationsDark from '../assets/screenshots/app_notifications_dark.jpg'
import appItemDetails from '../assets/screenshots/app_item_details.jpg'

export default function RemindersFeature() {
  const Screen = () => (
    <div className="relative flex min-w-0 justify-center">
      <AppScreen theme="dark" size="lg" className="glow-neon !p-0 overflow-hidden">
        <img src={appItemDetails} alt="Reminders UI" className="h-full w-full object-cover" />
      </AppScreen>
      <div className="absolute -bottom-8 -right-4 hidden sm:block lg:-right-8">
        <AppScreen theme="dark" size="sm" interactive={false} className="!p-0 overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)]">
          <img src={appNotificationsDark} alt="Notification Settings UI" className="h-full w-full object-cover" />
        </AppScreen>
      </div>
    </div>
  )

  return (
    <FeatureSection
      id="reminders"
      label="REMINDERS"
      title="Per-item alarms on your schedule"
      body="Set daily reminders tied to each item in your active plan. Bell indicators per compound, custom hour and minute — respects your notification preferences. Never miss a scheduled entry."
      screen={Screen}
      disableFrame={true}
    />
  )
}
