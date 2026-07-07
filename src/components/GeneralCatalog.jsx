import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './GeneralCatalog.css'

// TODO: sustituir por el listado real de temas de la Dra. Bedmar
const topics = [
  {
    title: 'Gestión del Estrés y Prevención del Burnout Corporativo',
    description:
      'Herramientas clínicas para identificar señales tempranas de agotamiento y sostener el rendimiento sin comprometer la salud mental del equipo.',
  },
  {
    title: 'Comunicación Consciente en Equipos Directivos',
    description:
      'Cómo la escucha activa y la regulación emocional mejoran la toma de decisiones y reducen la fricción en entornos de alta exigencia.',
  },
  {
    title: 'Salud Mental Femenina y Liderazgo',
    description:
      'Un análisis clínico de los factores específicos que afectan a las mujeres en posiciones de liderazgo y estrategias para abordarlos.',
  },
  {
    title: 'Mindfulness y Neurociencia Aplicada',
    description:
      'Fundamentos científicos de la atención plena y su aplicación práctica en la reducción de la ansiedad y la mejora del foco.',
  },
  {
    title: 'Inteligencia Emocional para la Toma de Decisiones',
    description:
      'Cómo el reconocimiento y la gestión de las emociones inciden directamente en la calidad de las decisiones estratégicas.',
  },
]

function GeneralCatalog() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="general-catalog">
      <h2 className="general-catalog__title">Otros Temas de Conferencia</h2>

      <div className="general-catalog__list">
        {topics.map(({ title, description }, index) => {
          const isOpen = openIndex === index
          return (
            <div className="catalog-item" key={title}>
              <button
                type="button"
                className="catalog-item__header"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
              >
                <span className="catalog-item__title">{title}</span>
                <ChevronDown
                  className="catalog-item__chevron"
                  data-open={isOpen}
                  strokeWidth={1.5}
                />
              </button>

              {isOpen && (
                <p className="catalog-item__description">{description}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GeneralCatalog
