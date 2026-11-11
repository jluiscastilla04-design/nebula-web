import { cx } from '../../utils/cx'

interface SectionHeadingProps {
  readonly title: string
  readonly description: string
  readonly className?: string
}

export const SectionHeading = ({ title, description, className }: SectionHeadingProps) => (
  <div className={cx('max-w-2xl', className)}>
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    <p className="mt-4 leading-relaxed text-mist">{description}</p>
  </div>
)
