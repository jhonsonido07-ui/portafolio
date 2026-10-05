const secciones = [
  { id: 'presentacion', texto: 'Inicio' },
  { id: 'tecnologias', texto: 'Tecnologías' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'contacto', texto: 'Contacto' },
]

function Navegacion() {
  return (
    <nav className="navegacion" aria-label="Navegación principal">
      <ul className="navegacion__lista">
        {secciones.map((seccion) => (
          <li key={seccion.id} className="navegacion__item">
            <a href={`#${seccion.id}`}>{seccion.texto}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navegacion
