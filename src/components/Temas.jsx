import ContentBlock from './ContentBlock.jsx'
import temasPhoto from '../assets/photos/temas.jpg'

function Temas() {
  return (
    <ContentBlock
      id="temas"
      title="Mis Temas Preferidos"
      image={temasPhoto}
      imageAlt="Dra. Marta Bedmar Noguerol"
      imagePosition="right"
    >
      <ul>
        <li>Sueño y Salud Mental.</li>
        <li>
          Pantallas y Salud Mental (TDAH, TEA, Ansiedad, TCA, Sexualidad,
          suicidio).
        </li>
        <li>Psiquiatría y psiquiatría infantojuvenil.</li>
        <li>Educar en positivo.</li>
      </ul>
    </ContentBlock>
  )
}

export default Temas
