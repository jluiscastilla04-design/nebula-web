import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'

type SectionWidth = 'wide' | 'narrow'

const WIDTH_CLASS: Readonly<Record<SectionWidth, string>> = {
  wide: 'max-w-7xl',
  narrow: 'max-w-5xl',
}

interface SectionProps {
  readonly id?: string
  readonly width?: SectionWidth
  readonly className?: string
  readonly containerClassName?: string
  readonly children: ReactNode
}

export const Section = ({ id, width = 'wide', className, containerClassName, children }: SectionProps) => (
  <section id={id} className={cx('relative isolate px-6 py-24 lg:px-8', className)}>
    <div className={cx('mx-auto', WIDTH_CLASS[width], containerClassName)}>{children}</div>
  </section>
)
