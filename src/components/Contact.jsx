import { useState } from 'react'
import './Contact.css'

const initialForm = {
  name: '',
  organization: '',
  email: '',
  eventDate: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: conectar con servicio real de envío (email/API)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="contact">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__success">
          Gracias, {form.name.split(' ')[0] || ''}. Hemos recibido su
          solicitud y responderemos a la mayor brevedad.
        </p>
      </section>
    )
  }

  return (
    <section className="contact">
      <h2 className="contact__title">Contacto</h2>
      <p className="contact__intro">
        Para consultas sobre conferencias, colaboraciones o disponibilidad,
        complete el siguiente formulario o escriba directamente a{' '}
        <a className="contact__email" href="mailto:martabedmarnoguerol@gmail.com">
          martabedmarnoguerol@gmail.com
        </a>
        .
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <label className="contact__field">
            <span>Nombre completo</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact__field">
            <span>Organización / Empresa</span>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="contact__row">
          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact__field">
            <span>Fecha prevista del evento</span>
            <input
              type="date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
            />
          </label>
        </div>

        <label className="contact__field">
          <span>Mensaje</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="contact__submit">
          Enviar solicitud
        </button>
      </form>
    </section>
  )
}

export default Contact
