import { GraduationCap, Stethoscope, Globe } from 'lucide-react'
import ArtMotif from './ArtMotif.jsx'
import './About.css'


const credentials = [
  { icon: Stethoscope, label: 'Psiquiatra infantojuvenil · Hospital Son Espases (2006–actualidad)' },
  { icon: GraduationCap, label: 'Profesora asociada de Psiquiatría · UIB' },
  { icon: Globe, label: 'Divulgadora: prensa, TV y talleres escolares' },
]

function About() {
  return (
    <section className="about">
      <ArtMotif variant="casitas" />
      <ArtMotif variant="figura" />
      <h2 className="about__title">Sobre la Dra. Bedmar</h2>

      <div className="about__bio">
        <p>
          Estudié medicina por curiosidad y elegí psiquiatría por candorosa
          vocación. Aprendo y disfruto cada día de mis pacientes, pero
          prefiero llegar antes y más lejos, así que comparto lo que sé,
          insto a pensar, y organizo cursos que incitan al cambio.
        </p>
      </div>

      <ul className="about__credentials">
        {credentials.map(({ icon: Icon, label }) => (
          <li className="about__credential" key={label}>
            <Icon className="about__credential-icon" strokeWidth={1.25} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
