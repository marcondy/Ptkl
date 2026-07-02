import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PrivacyPillar from './components/PrivacyPillar'
import TimelineFeature from './components/TimelineFeature'
import LibraryFeature from './components/LibraryFeature'
import RemindersFeature from './components/RemindersFeature'
import BackupFeature from './components/BackupFeature'
import HyperiaPro from './components/HyperiaPro'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white antialiased">
      <Navbar />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Hero />
        <PrivacyPillar />
        <TimelineFeature />
        <LibraryFeature />
        <RemindersFeature />
        <BackupFeature />
        <HyperiaPro />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}
