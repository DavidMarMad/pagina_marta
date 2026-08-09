import { useState } from 'react'
import { ChevronDown, X, ImageIcon } from 'lucide-react'
import ArtMotif from './ArtMotif.jsx'
import './ContentBlock.css'

function ContentBlock({
  id,
  eyebrow,
  title,
  image,
  imageAlt,
  imagePosition = 'left',
  defaultOpen = false,
  alwaysOpen = false,
  motifs = [],
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen || alwaysOpen)

  return (
    <section
      id={id}
      className="content-block"
      data-image-position={imagePosition}
    >
      {motifs.map((variant) => (
        <ArtMotif key={variant} variant={variant} />
      ))}

      <div className="content-block__media">
        {image ? (
          <img src={image} alt={imageAlt} loading="lazy" />
        ) : (
          <div className="content-block__placeholder" role="img" aria-label={imageAlt}>
            <ImageIcon strokeWidth={1} />
            <span>{imageAlt}</span>
          </div>
        )}
      </div>

      <div className="content-block__body">
        {eyebrow && <span className="content-block__eyebrow">{eyebrow}</span>}

        {alwaysOpen ? (
          <h2>{title}</h2>
        ) : (
          <button
            type="button"
            className="content-block__toggle"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <h2>{title}</h2>
            <ChevronDown
              className="content-block__chevron"
              data-open={isOpen}
              strokeWidth={1.5}
            />
          </button>
        )}

        {isOpen && (
          <div className="content-block__content">
            {children}
            {!alwaysOpen && (
              <button
                type="button"
                className="content-block__close"
                onClick={() => setIsOpen(false)}
              >
                <X size={14} strokeWidth={1.5} />
                Cerrar
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ContentBlock
