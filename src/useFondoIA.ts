import { useEffect, useRef } from 'react'

export function useFondoIA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const contenedor = ref.current
    if (!contenedor) return

    const manejar = (evento: PointerEvent) => {
      const x = evento.clientX
      const y = evento.clientY
      contenedor.style.setProperty('--x', `${x}px`)
      contenedor.style.setProperty('--y', `${y}px`)
    }

    window.addEventListener('pointermove', manejar, { passive: true })
    return () => window.removeEventListener('pointermove', manejar)
  }, [])

  return ref
}
