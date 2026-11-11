import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'

type ButtonVariant = 'primary' | 'compact' | 'ghost'

const SOLID_BASE = 'btn-primary rounded-lg font-semibold text-void'

const VARIANT_CLASS: Readonly<Record<ButtonVariant, string>> = {
  primary: `${SOLID_BASE} inline-flex items-center gap-2 px-6 py-3`,
  compact: `${SOLID_BASE} px-4 py-2 text-sm`,
  ghost: 'border-b border-transparent text-sm text-mist transition-colors hover:border-mist/40 hover:text-silver',
}

interface ButtonLinkProps {
  readonly href: string
  readonly variant?: ButtonVariant
  readonly className?: string
  readonly children: ReactNode
}

export const ButtonLink = ({ href, variant = 'primary', className, children }: ButtonLinkProps) => (
  <a href={href} className={cx(VARIANT_CLASS[variant], className)}>
    {children}
  </a>
)
