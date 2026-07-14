import ArtMotif from './ArtMotif.jsx'
import suenoPantallasSalud from '../assets/carteles/sueno-pantallas-salud.jpg'
import tecnologiaSalud from '../assets/carteles/tecnologia-salud.jpg'
import './FeaturedTalks.css'

const talks = [
  {
    image: suenoPantallasSalud,
    alt: 'Cartel IV Jornada Sueño, pantallas y salud',
  },
  {
    image: tecnologiaSalud,
    alt: 'Cartel Jornada Son, tecnologia i salut en la infància i l’adolescència',
  },
]

function FeaturedTalks() {
  return (
    <section className="featured-talks">
      <ArtMotif variant="cuadricula" />
      <ArtMotif variant="isla" />
      <h2 className="featured-talks__title">Conferencias Destacadas</h2>

      <div className="featured-talks__grid">
        {talks.map(({ image, alt }) => (
          <article className="talk-card" key={image}>
            <img className="talk-card__image" src={image} alt={alt} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedTalks
