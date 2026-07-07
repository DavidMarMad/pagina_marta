import { UserRound } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__portrait">
        {/* TODO: reemplazar por foto real de la Dra. Bedmar */}
        <UserRound className="hero__portrait-icon" strokeWidth={1} />
      </div>

      <div className="hero__content">
        <h1 className="hero__name">Dra. Marta Bedmar Noguerol</h1>
        <p className="hero__specialty">
          Psiquiatra · Conferenciante internacional · Consultora de salud mental
        </p>
        <p className="hero__quote">
          &ldquo;Redefiniendo el bienestar mental en la era de la alta productividad&rdquo;
        </p>
      </div>
    </section>
  )
}

export default Hero
