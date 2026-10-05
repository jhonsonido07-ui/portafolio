import { perfil } from './data'

function Contacto() {
  return (
    <footer id="contacto" className="contacto">
      <h2>Contacto</h2>
      <p className="contacto__invitacion">{perfil.invitacion}</p>
      <ul className="contacto__lista">
        <li>
          <a href={`mailto:${perfil.correo}`}>{perfil.correo}</a>
        </li>
        <li>
          <a href={perfil.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Contacto
