import FeatureSection from './ui/FeatureSection'
import AppScreen from './ui/AppScreen'
import { motion } from 'framer-motion'
import appCatalog from '../assets/screenshots/app_catalog.jpg'
import appSharePlan from '../assets/screenshots/app_share_plan.jpg'

export default function LibraryFeature() {
  const Screen = () => (
    <div className="relative flex min-w-0 justify-center">
      <AppScreen theme="dark" size="lg" className="glow-neon !p-0 overflow-hidden">
        <motion.img 
          src={appCatalog} 
          alt="Community Catalog UI" 
          className="h-full w-full object-cover origin-bottom"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </AppScreen>
      <div className="absolute -bottom-8 -right-4 hidden sm:block lg:-right-10">
        <AppScreen theme="dark" size="sm" interactive={false} className="!p-0 overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)]">
          <img src={appSharePlan} alt="Share Plan UI" className="h-full w-full object-cover" />
        </AppScreen>
      </div>
    </div>
  )

  return (
    <FeatureSection
      id="library"
      label="PILLAR 3: PROTOCOL UPLINK"
      title="Community Source."
      body="Plug directly into elite collective intelligence. Seamlessly pull in peer-reviewed community catalogs via CSV, or export your exact cycle math into clean, ASCII-formatted tables ready for forum tear-downs. It's community-sourced performance, standardized."
      screen={Screen}
      reverse
      disableFrame={true}
      className="bg-[#050507]"
    />
  )
}
