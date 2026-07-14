import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import FeatureGrid from './components/FeatureGrid'
import Sharing from './components/Sharing'
import PrivacyPillar from './components/PrivacyPillar'
import HyperiaPro from './components/HyperiaPro'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import Manifesto from './components/Manifesto'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white antialiased">
      <SplashScreen />
      <Navbar />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Hero />
        <Problem />
        <Solution />
        <FeatureGrid />
        <Sharing />
        <PrivacyPillar />
        <HyperiaPro />
        <Manifesto />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}
