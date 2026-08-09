import ContentBlock from './ContentBlock.jsx'
import sobreMiPhoto from '../assets/photos/sobre-mi.png'

function About() {
  return (
    <ContentBlock
      id="sobre-mi"
      title="Sobre mí"
      image={sobreMiPhoto}
      imageAlt="Dra. Marta Bedmar Noguerol"
      imagePosition="left"
      alwaysOpen
    >
      <p>
        Estudié medicina por curiosidad y elegí psiquiatría por candorosa
        vocación. Aprendo y disfruto cada día de mis pacientes, pero
        prefiero llegar antes y más lejos, así que comparto lo que sé,
        insto a pensar, y organizo cursos que incitan al cambio.
      </p>
    </ContentBlock>
  )
}

export default About
