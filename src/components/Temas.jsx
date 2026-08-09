import ContentBlock from './ContentBlock.jsx'

function Temas() {
  return (
    <ContentBlock
      id="temas"
      title="Mis Temas Preferidos"
      imageAlt="Foto pendiente"
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
