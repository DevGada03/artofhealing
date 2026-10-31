import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingTools from './components/FloatingTools'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Book from './pages/Book'
import Socials from './pages/Socials'
import PhysicalHealing from './pages/PhysicalHealing'
import Psychotherapy from './pages/Psychotherapy'
import SpiritualGrowth from './pages/SpiritualGrowth'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/physical-healing" element={<PhysicalHealing />} />
          <Route path="/services/psychotherapy" element={<Psychotherapy />} />
          <Route path="/services/spiritual-growth" element={<SpiritualGrowth />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <FloatingTools />
      <Footer />
    </div>
  )
}

export default App
