import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ShareSpotlight from './components/ShareSpotlight'
import PrivacySection from './components/PrivacySection'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-hyperia-bg text-hyperia-text antialiased">
      <Navbar />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Hero />
        <ProblemSolution />
        <ShareSpotlight />
        <PrivacySection />
        <FeatureGrid />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
