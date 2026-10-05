export type Tecnologia = {
  id: number
  nombre: string
  categoria: 'Lenguajes' | 'Maquetación' | 'Frameworks' | 'Herramientas'
  descripcion: string
}

export type Proyecto = {
  id: number
  nombre: string
  descripcion: string
  tecnologias: string[]
  enlace: string
  enlaceTexto: string
}

export const perfil = {
  nombre: 'Jhon Anderson Gutierrez Pareja',
  rol: 'Estudiante de análisis de datos para inteligencia artificial',
  descripcion:
    'Me interesa aprender sobre la configuración de la IA, depurar bases de datos y entrenarlas.',
  correo: 'jhon.sonido07@gmail.com',
  github: 'https://github.com/jhonsonido07-ui',
  sitio: 'https://portafolio-two-kappa-99.vercel.app/',
  invitacion:
    '¿Tienes un proyecto en mente o quieres hablar sobre IA? Escríbeme y con gusto lo conversamos.',
  anio: new Date().getFullYear(),
}

export const categorias = [
  'Lenguajes',
  'Maquetación',
  'Frameworks',
  'Herramientas',
] as const

export const tecnologias: Tecnologia[] = [
  {
    id: 1,
    nombre: 'HTML',
    categoria: 'Maquetación',
    descripcion: 'Estructura semántica de las páginas y de este portafolio.',
  },
  {
    id: 2,
    nombre: 'CSS',
    categoria: 'Maquetación',
    descripcion: 'Estilos, distribución y adaptación a distintos tamaños de pantalla.',
  },
  {
    id: 3,
    nombre: 'JavaScript',
    categoria: 'Lenguajes',
    descripcion: 'Lógica de la página, manejo de eventos y datos.',
  },
  {
    id: 4,
    nombre: 'TypeScript',
    categoria: 'Lenguajes',
    descripcion: 'JavaScript con tipos, usado en los componentes de este sitio.',
  },
  {
    id: 5,
    nombre: 'React',
    categoria: 'Frameworks',
    descripcion: 'Construcción de la interfaz por componentes reutilizables.',
  },
  {
    id: 6,
    nombre: 'Vite',
    categoria: 'Herramientas',
    descripcion: 'Entorno de desarrollo y compilación del proyecto.',
  },
  {
    id: 7,
    nombre: 'Git',
    categoria: 'Herramientas',
    descripcion: 'Control de versiones y registro de cambios.',
  },
  {
    id: 8,
    nombre: 'Excel',
    categoria: 'Herramientas',
    descripcion: 'Organización y depuración de datos en tablas.',
  },
]

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: 'Fila creativa — Taller de modelado y React (módulo 03)',
    descripcion:
      'Página que funciona como aplicativo para dar turnos. Permite asignar el turno por orden de llegada y por nivel de urgencia, y muestra a quién le corresponde la atención.',
    tecnologias: ['React', 'CSS', 'JavaScript'],
    enlace: 'https://html-clase-ia.vercel.app/',
    enlaceTexto: 'Ver el sitio publicado',
  },
]
