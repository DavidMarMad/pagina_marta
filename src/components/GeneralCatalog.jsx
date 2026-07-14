import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ArtMotif from './ArtMotif.jsx'
import './GeneralCatalog.css'

// TODO: sustituir por la descripción real de cada tema
const topics = [
  {
    title: 'Entrevistas y Charlas',
    description: 'TODO: descripción pendiente.',
  },
  {
    title: 'TDAH',
    description: 'TODO: descripción pendiente.',
  },
  {
    title: 'Ayuda del Entorno Familiar',
    description: 'TODO: descripción pendiente.',
  },
  {
    title: 'Otros Temas de Conferencia',
    description: 'TODO: descripción pendiente.',
  },
]

function GeneralCatalog() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="general-catalog">
      <ArtMotif variant="gafas" />
      <ArtMotif variant="cerezas" />

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
