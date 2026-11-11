import { NAV_LINKS } from '../../config/site'
import { cx } from '../../utils/cx'

interface NavLinksProps {
  readonly className: string
}

export const NavLinks = ({ className }: NavLinksProps) => (
  <nav className={cx('text-sm text-mist', className)}>
    {NAV_LINKS.map(({ label, href }) => (
      <a key={href} href={href} className="transition-colors hover:text-silver">
        {label}
      </a>
    ))}
  </nav>
)
