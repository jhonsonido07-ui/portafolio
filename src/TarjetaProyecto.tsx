import type { Proyecto } from './data'

type TarjetaProyectoProps = {
  proyecto: Proyecto
}

function TarjetaProyecto({ proyecto }: TarjetaProyectoProps) {
  return (
    <li className="proyectos__tarjeta">
      <h3 className="proyectos__nombre">{proyecto.nombre}</h3>
      <p className="proyectos__descripcion">{proyecto.descripcion}</p>
      <ul className="proyectos__tecnologias">
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia} className="proyectos__etiqueta">
            {tecnologia}
          </li>
        ))}
      </ul>
      <a
        className="proyectos__enlace"
        href={proyecto.enlace}
        target="_blank"
        rel="noreferrer"
      >
        {proyecto.enlaceTexto}
      </a>
    </li>
  )
}

export default TarjetaProyecto
