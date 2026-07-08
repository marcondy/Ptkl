import FeatureSection from './ui/FeatureSection'
import { motion } from 'framer-motion'
import appCatalog from '../assets/screenshots/app_catalog.jpg'

export default function LibraryFeature() {
  const Screen = () => (
    <motion.img 
      src={appCatalog} 
      alt="Community Catalog UI" 
      className="h-full w-full rounded-[1.25rem] object-cover"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
  )

  return (
    <FeatureSection
      id="library"
      label="PILLAR 3: PROTOCOL UPLINK"
      title="Community Source."
      body="Plug directly into elite collective intelligence. Seamlessly pull in peer-reviewed community catalogs via CSV, or export your exact cycle math into clean, ASCII-formatted tables ready for forum tear-downs. It's community-sourced performance, standardized."
      screen={Screen}
      reverse
      className="bg-[#050507]"
    />
  )
}
