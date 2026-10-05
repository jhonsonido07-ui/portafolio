import { useFondoIA } from './useFondoIA'

function FondoIA() {
  const ref = useFondoIA()

  return (
    <div ref={ref} className="fondo-ia" aria-hidden="true">
      <div className="fondo-ia__rejilla" />
      <div className="fondo-ia__brillo fondo-ia__brillo--uno" />
      <div className="fondo-ia__brillo fondo-ia__brillo--dos" />
      <div className="fondo-ia__brillo fondo-ia__brillo--tres" />
      <div className="fondo-ia__nodos">
        {Array.from({ length: 14 }, (_, indice) => (
          <span
            key={indice}
            className="fondo-ia__nodo"
            style={
              {
                '--i': indice,
                '--x': `${(indice * 37) % 100}%`,
                '--y': `${(indice * 61) % 100}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="fondo-ia__cursor" />
      <div className="fondo-ia__lineas">
        <span>&gt; importando datos...</span>
        <span>&gt; limpiando base de datos...</span>
        <span>&gt; entrenando modelo...</span>
      </div>
    </div>
  )
}

export default FondoIA
