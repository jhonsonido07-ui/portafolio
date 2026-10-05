type PresentacionProps = {
  nombre: string
  rol: string
  descripcion: string
}

function Presentacion({ nombre, rol, descripcion }: PresentacionProps) {
  return (
    <section id="presentacion" className="presentacion">
      <h1>{nombre}</h1>
      <p className="presentacion__rol">{rol}</p>
      <p className="presentacion__descripcion">{descripcion}</p>
    </section>
  )
}

export default Presentacion
