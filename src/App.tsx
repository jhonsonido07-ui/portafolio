import { categorias, perfil, proyectos, tecnologias } from './data'
import FondoIA from './FondoIA'
import Navegacion from './Navegacion'
import Presentacion from './Presentacion'
import ListaTecnologias from './ListaTecnologias'
import ListaProyectos from './ListaProyectos'
import Contacto from './Contacto'

function App() {
  return (
    <>
      <FondoIA />
      <a className="saltar-al-contenido" href="#contenido">
        Saltar al contenido
      </a>
      <Navegacion />
      <main id="contenido" tabIndex={-1}>
        <Presentacion
          nombre={perfil.nombre}
          rol={perfil.rol}
          descripcion={perfil.descripcion}
        />
        <ListaTecnologias categorias={categorias} tecnologias={tecnologias} />
        <ListaProyectos proyectos={proyectos} />
      </main>
      <Contacto />
    </>
  )
}

export default App
