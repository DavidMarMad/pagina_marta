import gafas from '../assets/art/gafas.png'
import casitas from '../assets/art/casitas.png'
import cuadricula from '../assets/art/cuadricula.png'
import figura from '../assets/art/figura.png'
import cerezas from '../assets/art/cerezas.png'
import isla from '../assets/art/isla.png'
import './ArtMotif.css'

const images = { gafas, casitas, cuadricula, figura, cerezas, isla }

function ArtMotif({ variant, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`art-motif art-motif--${variant} ${className}`.trim()}
      style={{ backgroundImage: `url(${images[variant]})` }}
    />
  )
}

export default ArtMotif
