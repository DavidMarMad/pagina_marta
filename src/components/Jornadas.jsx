import ContentBlock from './ContentBlock.jsx'
import jornadasPhoto from '../assets/photos/jornadas.jpg'

const years = ['2017', '2018', '2019', '2020', '2025', '2026', '2027']

function Jornadas() {
  return (
    <ContentBlock
      id="jornadas"
      title="Organización de Jornadas y Colaboraciones"
      image={jornadasPhoto}
      imageAlt="Dra. Marta Bedmar Noguerol en el programa 5 dies de IB3"
      imagePosition="left"
    >
      <p>
        Organizadora de las jornadas anuales de &ldquo;Sueño, Pantallas y
        Salud&rdquo;, dirigidas a profesionales de la medicina, la salud
        mental y la educación.
      </p>

      <ul>
        {years.map((year) => (
          <li key={year}>
            Edición {year}.{' '}
            <a className="content-block__link" href="#">(enlace pendiente)</a>
          </li>
        ))}
      </ul>

      <h3>Colaboraciones</h3>
      <p>
        Si quieres una jornada o taller realmente especial, pregúntame en
        privado. Colaboro con personas realmente brillantes.{' '}
        <a className="content-block__link" href="#">(enlace pendiente)</a>
      </p>

      <h3>Temáticas adicionales</h3>
      <p>Obesidad, sexualidad, IA, talleres vivenciales…</p>
    </ContentBlock>
  )
}

export default Jornadas
