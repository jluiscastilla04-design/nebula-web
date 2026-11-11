import type { IconName } from '../../types'

const ICON_PATHS: Readonly<Record<IconName, string>> = {
  bolt: 'M13 2L4.5 14h6.2l-1.1 8L19.5 10h-6.2L13 2z',
  orbit: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM2 12c0-2.2 4.5-4 10-4s10 1.8 10 4-4.5 4-10 4S2 14.2 2 12z',
  syntax: 'M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14',
  shield: 'M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z',
  menu: 'M3 6h18M3 12h18M3 18h18',
  download: 'M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
}

const DEFAULT_SIZE = 26
const STROKE_WIDTH = 1.8

interface IconProps {
  readonly name: IconName
  readonly size?: number
  readonly className?: string
}

export const Icon = ({ name, size = DEFAULT_SIZE, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d={ICON_PATHS[name]} />
  </svg>
)
