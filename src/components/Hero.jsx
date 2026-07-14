import ArtMotif from './ArtMotif.jsx'
import draMarta from '../assets/photos/dra-marta.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <ArtMotif variant="cerezasHero" />
      <div className="hero__portrait">
        <img src={draMarta} alt="Dra. Marta Bedmar Noguerol" />
      </div>

      <div className="hero__content">
        <h1 className="hero__name">Dra. Marta Bedmar Noguerol</h1>
        <p className="hero__specialty">
          Psiquiatra · Conferenciante internacional · Consultora de salud mental
        </p>
        <p className="hero__quote">
          &ldquo;El impacto del entorno digital en la salud mental de los jóvenes&rdquo;
        </p>
      </div>
    </section>
  )
}

export default Hero
