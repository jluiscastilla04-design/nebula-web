import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../utils/cx'

export const GlassCard = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div className={cx('glass rounded-2xl', className)} {...props} />
)
