import { Brain, Sparkles } from 'lucide-react'
import './FeaturedTalks.css'

const talks = [
  {
    icon: Brain,
    title: 'Liderazgo Humano en la Era de la IA',
    description:
      'Cómo sostener la resiliencia mental y la cohesión de equipos de alta productividad frente a la aceleración tecnológica.',
  },
  {
    icon: Sparkles,
    title: 'La Ciencia del Bienestar Emocional',
    description:
      'Estrategias clínicas, validadas y aplicadas al entorno corporativo, para gestionar la carga emocional en organizaciones exigentes.',
  },
]

function FeaturedTalks() {
  return (
    <section className="featured-talks">
      <h2 className="featured-talks__title">Conferencias Destacadas</h2>

      <div className="featured-talks__grid">
        {talks.map(({ icon: Icon, title, description }) => (
          <article className="talk-card" key={title}>
            <Icon className="talk-card__icon" strokeWidth={1.25} />
            <h3 className="talk-card__title">{title}</h3>
            <p className="talk-card__description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedTalks
