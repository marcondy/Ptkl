import FeatureSection from './ui/FeatureSection'
import BackupScreen from './screenshots/BackupScreen'

export default function BackupFeature() {
  return (
    <FeatureSection
      id="backup"
      label="BACKUP & RESTORE"
      title="CSV portability — not cloud sync"
      body="Download a full CSV backup or restore from file. Scope toggles for active, scheduled, past plans, and your library. Switch phones without losing years of logs — you control the file."
      screen={BackupScreen}
      reverse
      className="bg-[#0a0a0a]"
    />
  )
}
