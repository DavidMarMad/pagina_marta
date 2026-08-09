import ContentBlock from './ContentBlock.jsx'

function Divulgacion() {
  return (
    <ContentBlock
      id="divulgacion"
      title="Experiencia Divulgadora"
      imageAlt="Foto pendiente"
      imagePosition="right"
    >
      <ul>
        <li>
          Documental <em>Desconectats</em>.{' '}
          <a className="content-block__link" href="#">(enlace pendiente)</a>
        </li>
        <li>
          Evento &ldquo;Bienestar digital y menores&rdquo;, The Conversation.
        </li>
        <li>
          Campaña DGSM.{' '}
          <a className="content-block__link" href="#">(enlace pendiente)</a>
        </li>
        <li>
          Noticias en prensa y televisión.{' '}
          <a className="content-block__link" href="#">(enlace pendiente)</a>
        </li>
      </ul>

      <h3>Talleres a asociaciones de familiares</h3>
      <ul>
        <li>Asociación ImmensaMent: &ldquo;Educar en Positiu&rdquo;.</li>
        <li>
          Asociación de celíacos Mallorca: &ldquo;Celiaquía en la infancia y
          adolescencia. Aspectos psicosociales&rdquo;.
        </li>
      </ul>

      <h3>Talleres en centros escolares</h3>
      <ul>
        <li>CEI Siervas de Jesús Sagrado Corazón</li>
        <li>The Montessori School of Mallorca</li>
        <li>CC Arcàngel Sant Rafel</li>
        <li>IES Josep Font i Trias</li>
      </ul>
    </ContentBlock>
  )
}

export default Divulgacion
