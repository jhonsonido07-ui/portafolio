import { useEffect, useRef, useState } from 'react'

type OpcionRevelado = {
  umbral?: number
}

const sinObserver =
  typeof window !== 'undefined' &&
  typeof window.IntersectionObserver === 'undefined'

export function useRevelado<T extends HTMLElement>({
  umbral = 0.15,
}: OpcionRevelado = {}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(sinObserver)

  useEffect(() => {
    if (sinObserver) return

    const elemento = ref.current
    if (!elemento) return

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas[0]?.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: umbral },
    )

    observador.observe(elemento)

    const redDeSeguridad = setTimeout(() => setVisible(true), 2500)

    return () => {
      clearTimeout(redDeSeguridad)
      observador.disconnect()
    }
  }, [umbral])

  return { ref, visible }
}
