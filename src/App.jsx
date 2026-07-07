import Hero from './components/Hero.jsx'
import FeaturedTalks from './components/FeaturedTalks.jsx'
import GeneralCatalog from './components/GeneralCatalog.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <FeaturedTalks />
      <GeneralCatalog />
      <About />
      <Contact />
    </div>
  )
}

export default App
