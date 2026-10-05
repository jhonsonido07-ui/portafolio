import type { Tecnologia } from './data'

type ListaTecnologiasProps = {
  categorias: readonly string[]
  tecnologias: Tecnologia[]
}

function ListaTecnologias({
  categorias,
  tecnologias,
}: ListaTecnologiasProps) {
  return (
    <section id="tecnologias" className="tecnologias">
      <h2>Tecnologías</h2>
      {categorias.map((categoria) => (
        <div key={categoria} className="tecnologias__grupo">
          <h3 className="tecnologias__categoria">{categoria}</h3>
          <ul className="tecnologias__lista">
            {tecnologias
              .filter((tecnologia) => tecnologia.categoria === categoria)
              .map((tecnologia) => (
                <li key={tecnologia.id} className="tecnologias__item">
                  <span className="tecnologias__nombre">{tecnologia.nombre}</span>
                  <span className="tecnologias__descripcion">
                    {tecnologia.descripcion}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default ListaTecnologias
