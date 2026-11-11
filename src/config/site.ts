import type { CommunityCard, Feature, FooterColumn, NavLink, OperatingSystem } from '../types'

export const SECTION_ID = {
  top: 'top',
  docs: 'documentacion',
  ecosystem: 'ecosistema',
  community: 'comunidad',
  downloads: 'descargas',
} as const

export const toAnchor = (id: string): string => `#${id}`
export const PLACEHOLDER_HREF = '#'
export const BRAND_NAME = 'nebula'

export const OPERATING_SYSTEMS: readonly OperatingSystem[] = ['windows', 'macos', 'linux']

export const OS_LABEL: Readonly<Record<OperatingSystem, string>> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Documentación', href: toAnchor(SECTION_ID.docs) },
  { label: 'Ecosistema', href: toAnchor(SECTION_ID.ecosystem) },
  { label: 'Comunidad', href: toAnchor(SECTION_ID.community) },
]

export const FEATURES: readonly Feature[] = [
  { icon: 'bolt', title: 'Rendimiento estelar', description: 'Un pipeline simple de lexer, parser y codegen, sin capas innecesarias.' },
  { icon: 'orbit', title: 'Concurrencia gravitacional', description: 'Tareas que orbitan de forma independiente sin bloquear el hilo principal.' },
  { icon: 'syntax', title: 'Sintaxis intuitiva', description: 'Tipos explícitos y legibles como astro, signal y pulse, sin ambigüedad.' },
  { icon: 'shield', title: 'Seguridad de memoria', description: 'Inmutable por defecto; lo mutable se marca a propósito con mut.' },
]

export const COMMUNITY_CARDS: readonly CommunityCard[] = [
  { id: SECTION_ID.docs, title: 'Documentación', description: 'Guía del lenguaje, referencia de tipos y ejemplos para empezar hoy.', action: 'Leer la documentación →' },
  { id: SECTION_ID.community, title: 'Comunidad', description: 'Nebula se construye en público. Reporta errores y propone ideas.', action: 'Unirse a la comunidad →' },
]

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: 'Proyecto',
    links: [
      { label: 'GitHub', href: PLACEHOLDER_HREF },
      { label: 'Documentación técnica', href: toAnchor(SECTION_ID.docs) },
      { label: 'Descargas', href: toAnchor(SECTION_ID.downloads) },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Discord', href: PLACEHOLDER_HREF },
      { label: 'Issues', href: PLACEHOLDER_HREF },
      { label: 'Contribuir', href: PLACEHOLDER_HREF },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Licencia MIT', href: PLACEHOLDER_HREF },
      { label: 'Código de conducta', href: PLACEHOLDER_HREF },
    ],
  },
]

export const COPY = {
  navbar: { download: 'Descargar', openMenu: 'Abrir menú' },
  hero: {
    eyebrow: 'v0.1 · lenguaje orientado a objetos',
    titleLead: 'Programa a la',
    titleAccent: 'velocidad de la luz',
    description: 'Nebula es un lenguaje orientado a objetos construido desde cero: sintaxis clara, tipos explícitos y un pipeline pensado para entenderse por dentro, no solo para usarse.',
    downloadPrefix: 'Descargar para',
    allVersions: 'Ver todas las versiones',
    badges: ['Código abierto', 'MIT License', 'Escrito en Rust'],
  },
  features: {
    title: 'Construido como un sistema estelar',
    description: 'Cada pieza de Nebula cumple un propósito claro: rendimiento donde importa, seguridad sin fricción y una sintaxis que no esconde lo que pasa.',
  },
  downloads: {
    title: 'Centro de descargas',
    description: 'Elige tu sistema operativo e instala Nebula en minutos.',
    tablistLabel: 'Sistema operativo',
    releases: 'Todas las versiones y checksums en GitHub Releases',
  },
  footer: {
    tagline: 'Un lenguaje orientado a objetos, hecho para aprender qué hay detrás de un lenguaje de programación.',
    rights: 'Nebula. Proyecto de código abierto.',
    signature: 'hecho con curiosidad y algo de Rust 🦀',
  },
} as const
