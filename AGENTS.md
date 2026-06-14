# growing-galaxy — Guía para Agentes

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 6 |
| Estilos | Tailwind CSS v4 |
| Lenguaje | TypeScript (strict) |
| Paquetes | pnpm |
| Node | >= 22.12.0 |

## Comandos

```bash
pnpm dev       # Desarrollo (localhost:4321)
pnpm build     # Build a dist/
pnpm preview   # Preview del build
```

## Estructura

```
src/
├── components/   → Componentes .astro
│   ├── Header.astro        Nav + logo
│   ├── Footer.astro        Footer con copyright
│   ├── HeroSection.astro   Hero dinámico (props: title, subtitle, badge, price)
│   ├── GameCard.astro       Card de juego (props: game)
│   ├── ProductGrid.astro   Grid responsivo (props: games[], title?)
│   └── StatsBar.astro      Barra de estadísticas (props: stats[])
├── layouts/
│   └── Layout.astro        Layout base (lang=es, importa global.css)
├── pages/
│   └── index.astro         Página principal
├── data/
│   └── game.js             Datos mock (games[], stats[])
├── styles/
│   ├── global.css          Tailwind + @theme + @utility
│   └── style.css           (legacy, sin usar)
├── assets/                 SVGs e imágenes
```

## Tema Tailwind (vía CSS)

Definido en `src/styles/global.css` con `@theme`:

| Token | Valor |
|-------|-------|
| `--color-primary` | `#ff6b00` (naranja) |
| `--color-primary-hover` | `#ff7f24` |
| `--color-bg` | `#0b0b0b` (fondo negro) |
| `--color-surface` | `#151515` |
| `--color-surface-2` | `#1d1d1d` |
| `--color-text` | `#ffffff` |
| `--color-text-secondary` | `#a3a3a3` |
| `--color-success` | `#00c853` |

Uso: `bg-bg`, `text-primary`, `bg-surface-2`, `text-text-secondary`, `rounded-(--radius-md)`, `shadow-card`.

## Convenciones

- **Naming**: PascalCase para componentes `.astro`
- **Props**: Tipado con TypeScript (interface exportada)
- **Estilos**: Solo Tailwind utility classes
- **Animaciones**: Usar `animate-fadeIn` (utility definida en global.css)
- **Contenido**: En español
- **Sin frameworks UI**: No usar React/Vue/Svelte a menos que se solicite

## Skills disponibles

Instalados en `.agents/skills/`:
- `astro` — buenas prácticas de Astro
- `frontend-design` — diseño UI/UX
- `accessibility`, `seo` — calidad web

## Pendientes conocidos

- [ ] Agregar imágenes reales en `public/games/*.webp`
- [ ] Rutas dinámicas para juegos individuales
- [ ] Carrito/compras
- [ ] Página de ofertas
