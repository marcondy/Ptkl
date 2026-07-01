import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScreenshotShowcase from './components/ScreenshotShowcase'
import Features from './components/Features'
import PrivacySection from './components/PrivacySection'
import Premium from './components/Premium'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-hyperia-bg text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ScreenshotShowcase />
        <Features />
        <PrivacySection />
        <Premium />
      </main>
      <Footer />
    </div>
  )
}
