import { perfil } from './data'

function Contacto() {
  return (
    <footer id="contacto" className="seccion contacto">
      <h2 className="seccion__titulo">
        <span className="seccion__prompt">&gt;</span> Contacto
      </h2>
      <p className="contacto__invitacion">{perfil.invitacion}</p>
      <ul className="contacto__lista">
        <li>
          <a className="contacto__boton" href={`mailto:${perfil.correo}`}>
            {perfil.correo}
          </a>
        </li>
        <li>
          <a
            className="contacto__boton"
            href={perfil.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contacto__boton"
            href={perfil.sitio}
            target="_blank"
            rel="noreferrer"
          >
            Ver este portafolio
          </a>
        </li>
      </ul>
      <p className="contacto__copy">
        © {perfil.anio} {perfil.nombre}
      </p>
    </footer>
  )
}

export default Contacto
