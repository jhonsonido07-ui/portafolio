# Portafolio personal

Sitio web de una sola página para presentar mi perfil, las tecnologías que he aprendido y los proyectos que he construido.

Construido con **Vite + React + TypeScript**, sin librerías de estilos adicionales.

## Requisitos

- Node.js (probado en la versión 24)
- npm

## Cómo iniciar el proyecto

```bash
npm install
npm run dev
```

El comando imprime la dirección local, por ejemplo `http://localhost:5173/`. Ábrela en el navegador.

Si el puerto 5173 está ocupado, Vite propone otro automáticamente. También puedes fijar uno:

```bash
npm run dev -- --port 5199
```

### Otros comandos

```bash
npm run build   # compila el proyecto para producción en la carpeta dist/
npm run lint    # revisa el código con Oxlint
npm run preview # sirve la versión compilada de dist/
```

## Estructura

```
src/
├── App.tsx               # compone la interfaz y pasa los datos por props
├── Navegacion.tsx        # menú de enlaces hacia las secciones
├── Presentacion.tsx      # nombre, rol y descripción
├── ListaTecnologias.tsx  # agrupa y muestra las tecnologías por categoría
├── ListaProyectos.tsx   # itera los proyectos
├── TarjetaProyecto.tsx   # una tarjeta por proyecto
├── Contacto.tsx          # correo y perfil de GitHub
├── data.ts               # arreglos de datos y tipos
├── index.css             # estilos de toda la página
└── main.tsx              # punto de entrada
```

## Componentes y cómo se muestran las listas

Cada componente tiene una responsabilidad clara y recibe por `props` los datos que necesita. `App.tsx` es quien importa los arreglos de `data.ts` y se los entrega.

| Componente | Responsabilidad | Props que recibe |
| --- | --- | --- |
| `Navegacion` | Lista de enlaces para saltar a cada sección | — |
| `Presentacion` | Muestra el nombre, el rol y la descripción | `nombre`, `rol`, `descripcion` |
| `ListaTecnologias` | Recorre las categorías y muestra las tecnologías de cada una | `categorias`, `tecnologias` |
| `ListaProyectos` | Recorre el arreglo de proyectos | `proyectos` |
| `TarjetaProyecto` | Dibuja un solo proyecto (nombre, descripción, tecnologías y enlace) | `proyecto` |
| `Contacto` | Enlace de correo (`mailto:`) y enlace a GitHub | — |

### Cómo funcionan las listas

`ListaProyectos` recibe el arreglo completo y lo recorre con `.map()`. En cada vuelta llama a `TarjetaProyecto` y le pasa un único proyecto:

```tsx
{proyectos.map((proyecto) => (
  <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
))}
```

`TarjetaProyecto` no sabe de dónde viene el dato: solo lo pinta. Esa separación permite reutilizar la tarjeta con otros proyectos sin tocar su código.

Dentro de la tarjeta, las tecnologías del proyecto también se recorren con `.map()`.

`ListaTecnologias` trabaja en dos niveles: primero recorre `categorias` y, dentro de cada una, usa `.filter()` para quedarse con las tecnologías de esa categoría y luego `.map()` para pintarlas. Así los datos se pueden reordenar o agregar en `data.ts` sin tocar el componente.

El `key` en cada elemento existe para que React identifique cuál cambió y solo actualice ese elemento, en lugar de redibujar toda la lista.

## Datos

Todo el contenido editable está en `src/data.ts`:

- `perfil`: nombre, rol, descripción, correo, GitHub y texto de invitación.
- `categorias`: los grupos en los que se reparten las tecnologías.
- `tecnologias`: arreglo de objetos `{ id, nombre, categoria, descripcion }`.
- `proyectos`: arreglo de objetos `{ id, nombre, descripcion, tecnologias, enlace, enlaceTexto }`.

Para agregar un proyecto basta con añadir un objeto al arreglo.

## Accesibilidad

- Enlace "Saltar al contenido" oculto que aparece al presionar `Tab`, para saltar el menú con el teclado.
- Cada sección tiene su `id`, y el `<nav>` lleva `aria-label`.
- Los títulos van en orden: un `<h1>` y luego `<h2>` por sección.

## Estilos

Los estilos están en `src/index.css`, sin framework. Los componentes usan clases con el patrón `bloque__elemento`.

El diseño se adapta a distintos tamaños de pantalla:

- Bajo 600px el título principal se reduce, los márgenes bajan y la lista de tecnologías pasa a una sola columna.
- Las listas usan `grid` con `minmax()`, así que se reacomodan solas al ancho disponible.

## Publicación

El proyecto compila a archivos estáticos en `dist/`, así que puede publicarse en Vercel, Netlify o GitHub Pages:

```bash
npm run build
```

Después se sube la carpeta `dist/` al servicio de hosting elegido.
