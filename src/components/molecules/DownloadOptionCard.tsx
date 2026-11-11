import { PLACEHOLDER_HREF } from '../../config/site'
import type { DownloadOption } from '../../types'

const LINK_CLASS = 'text-sm font-semibold text-cyan transition-colors hover:text-silver'
const COMMAND_CLASS = 'block rounded-md bg-black/30 px-3 py-2 font-mono text-xs text-cyan'

interface DownloadOptionCardProps {
  readonly option: DownloadOption
}

const OptionAction = ({ option }: DownloadOptionCardProps) =>
  option.kind === 'file' ? (
    <a href={PLACEHOLDER_HREF} className={LINK_CLASS}>
      {option.fileName} ↓
    </a>
  ) : (
    <div className="space-y-1.5">
      {option.commands.map((command) => (
        <code key={command} className={COMMAND_CLASS}>
          {command}
        </code>
      ))}
    </div>
  )

export const DownloadOptionCard = ({ option }: DownloadOptionCardProps) => (
  <div className="rounded-xl border border-silver/10 bg-void-soft/60 p-5">
    <p className="mb-1 font-semibold">{option.title}</p>
    <p className="mb-4 text-sm text-mist">{option.description}</p>
    <OptionAction option={option} />
  </div>
)
