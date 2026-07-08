import FeatureSection from './ui/FeatureSection'
import appLightPlansToast from '../assets/screenshots/app_light_plans_toast.jpg'

export default function BackupFeature() {
  const Screen = () => <img src={appLightPlansToast} alt="Backup UI" className="h-full w-full rounded-[1.25rem] object-cover" />

  return (
    <FeatureSection
      id="backup"
      label="BACKUP & RESTORE"
      title="JSON portability — not cloud sync"
      body="Download a full JSON backup or restore from file. Scope toggles for active, scheduled, past plans, and your library. Switch phones without losing years of logs — you control the file."
      screen={Screen}
      reverse
      className="bg-[#050507]"
    />
  )
}
