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
        <h1 className="hero__name">Dra Marta Bedmar Noguerol. PhD</h1>
        <p className="hero__specialty">
          Psiquiatra. Psiquiatra infantojuvenil. Profesora y divulgadora.
        </p>
        <p className="hero__quote">
          &ldquo;La infancia es para siempre. Cuidémosla&rdquo;
          <br />- Marta Bedmar Noguerol.
        </p>
      </div>
    </section>
  )
}

export default Hero
