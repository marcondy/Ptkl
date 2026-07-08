import FeatureSection from './ui/FeatureSection'

export default function LibraryFeature() {
  const Screen = () => <img src="/screenshots/app_dark_plans_toast.jpg" alt="Protocol Uplink UI" className="h-full w-full rounded-[1.25rem] object-cover" />

  return (
    <FeatureSection
      id="library"
      label="PILLAR 3: PROTOCOL UPLINK"
      title="Open-Source Performance."
      body="Plug directly into elite collective intelligence. Seamlessly pull in peer-reviewed community protocols via JSON, or export your exact cycle math into clean, ASCII-formatted tables ready for forum tear-downs. It's open-source performance, standardized."
      screen={Screen}
      reverse
      className="bg-[#050507]"
    />
  )
}
