import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Premium from './components/Premium'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-hyperia-bg text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Premium />
      </main>
      <Footer />
    </div>
  )
}
