import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Curriculum from './components/Curriculum.jsx'
import Divulgacion from './components/Divulgacion.jsx'
import Temas from './components/Temas.jsx'
import Jornadas from './components/Jornadas.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Divulgacion />
      <Curriculum />
      <Temas />
      <Jornadas />
      <Contact />
    </div>
  )
}

export default App
