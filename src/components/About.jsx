import { GraduationCap, Stethoscope, Globe } from 'lucide-react'
import ArtMotif from './ArtMotif.jsx'
import './About.css'

// TODO: sustituir por credenciales reales de la Dra. Bedmar
const credentials = [
  { icon: GraduationCap, label: 'Doctora en Medicina y Cirugía' },
  { icon: Stethoscope, label: 'Especialista en Psiquiatría' },
  { icon: Globe, label: 'Conferenciante en más de 20 países' },
]

function About() {
  return (
    <section className="about">
      <ArtMotif variant="casitas" />
      <ArtMotif variant="figura" />
      <h2 className="about__title">Sobre la Dra. Bedmar</h2>

      <div className="about__bio">
        {/* TODO: sustituir por biografía real de la Dra. Bedmar */}
        <p>
          La Dra. Marta Bedmar Noguerol lleva más de quince años ejerciendo la
          psiquiatría clínica, un recorrido que ha combinado con la
          investigación aplicada y la divulgación ante audiencias directivas
          de todo el mundo. Su trabajo parte de una convicción sencilla: el
          bienestar mental no es un lujo corporativo, es la base sobre la que
          se sostiene cualquier organización de alto rendimiento.
        </p>
        <p>
          A lo largo de su carrera ha acompañado a equipos directivos,
          deportistas de élite e instituciones sanitarias en procesos de
          cambio profundo, siempre desde una mirada clínica rigurosa y un
          lenguaje cercano, alejado del tecnicismo. Hoy dedica su tiempo a
          conferencias, consultoría estratégica y formación en salud mental
          aplicada al liderazgo.
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
