import { useRevelado } from './useRevelado'

type PresentacionProps = {
  nombre: string
  rol: string
  descripcion: string
}

function Presentacion({ nombre, rol, descripcion }: PresentacionProps) {
  const { ref, visible } = useRevelado<HTMLElement>()

  return (
    <section
      ref={ref}
      id="presentacion"
      className="presentacion reveal"
      data-visible={visible}
    >
      <p className="presentacion__saludo">&gt; hola, soy</p>
      <h1 className="presentacion__nombre">{nombre}</h1>
      <p className="presentacion__rol">{rol}</p>
      <p className="presentacion__descripcion">{descripcion}</p>
    </section>
  )
}

export default Presentacion
