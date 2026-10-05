import TarjetaProyecto from './TarjetaProyecto'
import type { Proyecto } from './data'

type ListaProyectosProps = {
  proyectos: Proyecto[]
}

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <ul className="proyectos__lista">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </section>
  )
}

export default ListaProyectos
