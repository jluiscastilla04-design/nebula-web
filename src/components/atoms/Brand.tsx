import { BRAND_NAME, SECTION_ID, toAnchor } from '../../config/site'

const DEFAULT_ICON_SIZE = 28

interface BrandProps {
  readonly iconSize?: number
}

export const Brand = ({ iconSize = DEFAULT_ICON_SIZE }: BrandProps) => (
  <a href={toAnchor(SECTION_ID.top)} className="flex shrink-0 items-center gap-2.5">
    <svg width={iconSize} height={iconSize} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <ellipse cx="50" cy="50" rx="44" ry="15" transform="rotate(-28 50 50)" strokeWidth="4" className="stroke-violet-glow" />
      <path d="M34 62V38L66 62V38" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="stroke-silver" />
      <circle cx="16" cy="56" r="4" className="fill-cyan-glow" />
    </svg>
    <span className="text-lg font-semibold tracking-tight">{BRAND_NAME}</span>
  </a>
)
