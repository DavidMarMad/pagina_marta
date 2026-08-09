import ContentBlock from './ContentBlock.jsx'

const items = [
  'Licenciada en Medicina y Cirugía en una de las dos ciudades más hermosas del mundo, Granada.',
  'Especialista en Psiquiatría vía MIR en el Hospital Clínico Universitario San Carlos, de Madrid. 4 maravillosos e intensos años en los que aprendí mucho más que psiquiatría.',
  'Doctorado y suficiencia investigadora en Psiquiatría en la Universidad Complutense de Madrid. Una experiencia muy enriquecedora a muchos niveles.',
  'Máster de psicoterapia, perspectiva integradora, por la Universidad de Alcalá de Henares (2005). Porque el vínculo y las palabras son también poderosas.',
  'Psiquiatra en H. Son Dureta/Hospital Universitario Son Espases (HUSE) desde 2006 hasta la actualidad. 20 años no es nada.',
  'Miembro del Instituto Balear de Salud Mental de la Infancia y Adolescencia (IBSMIA) desde su creación en 2008.',
  'Experta en Medicina del Sueño en 2018. Acreditada por la Sociedad Española de Sueño (SES). Una oportunidad para aprender sobre el sueño mucho más allá de la psiquiatría.',
  'Miembro de la comisión multidisciplinar de sueño de HUSE. Un punto en común entre especialidades muy diferentes.',
  'Tutora de residentes y miembro de la comisión de docencia (2009-2012).',
  { text: 'Profesora asociada con actividad asistencial de medicina de la UIB desde 2021. Tutorización de numerosos TFG.', link: 'TFG' },
  { text: 'Tesis Doctoral Cum Laude por la UIB (2025).', link: 'Tesis' },
  { text: 'Diversas publicaciones científicas. Personal investigador del grupo "Neurociencia cognitivo-afectiva y Psicología clínica (CANCLIP)" desde 2025.', link: 'Publicaciones' },
  'Organizadora desde 2018 de la jornada "Sueño, Pantallas y Salud". Destinado a profesionales de la medicina, salud mental y educación. Un espacio de encuentro, conocimiento, reflexión y motivación al cambio.',
  { text: 'Numerosas presentaciones en congresos, jornadas y cursos.', link: 'Congresos' },
  { text: 'Asistencia a cursos, jornadas y congresos. Conservo la curiosidad de la infancia y disfruto aprendiendo.', link: 'Formación' },
]

function Curriculum() {
  return (
    <ContentBlock
      id="curriculum"
      title="Currículum Académico"
      imageAlt="Foto pendiente"
      imagePosition="left"
    >
      <ul>
        {items.map((item) => {
          const text = typeof item === 'string' ? item : item.text
          const link = typeof item === 'string' ? null : item.link
          return (
            <li key={text}>
              {text}{' '}
              {link && (
                <a className="content-block__link" href="#">
                  ({link}: enlace pendiente)
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </ContentBlock>
  )
}

export default Curriculum
