import { useRevelado } from './useRevelado'
import TarjetaProyecto from './TarjetaProyecto'
import type { Proyecto } from './data'

type ListaProyectosProps = {
  proyectos: Proyecto[]
}

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  const { ref, visible } = useRevelado<HTMLElement>()

  return (
    <section
      ref={ref}
      id="proyectos"
      className="seccion proyectos reveal"
      data-visible={visible}
    >
      <h2 className="seccion__titulo">
        <span className="seccion__prompt">&gt;</span> Proyectos
      </h2>
      <ul className="proyectos__lista">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </section>
  )
}

export default ListaProyectos
