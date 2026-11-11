import type { CodeLine, TokenKind } from '../../types'
import { cx } from '../../utils/cx'
import { GlassCard } from '../atoms/GlassCard'

const TRAFFIC_LIGHTS = ['bg-[#FF5F57]', 'bg-[#FEBC2E]', 'bg-[#28C840]'] as const

const TOKEN_CLASS: Readonly<Record<TokenKind, string>> = {
  keyword: 'text-violet-glow',
  function: 'text-cyan-glow',
  string: 'text-[#7EE0A8]',
  comment: 'italic text-[#6B6688]',
  plain: 'text-mist',
}

interface CodeWindowProps {
  readonly fileName: string
  readonly lines: readonly CodeLine[]
  readonly className?: string
}

export const CodeWindow = ({ fileName, lines, className }: CodeWindowProps) => (
  <GlassCard className={cx('overflow-hidden shadow-2xl shadow-violet/10', className)}>
    <div className="flex items-center gap-2 border-b border-silver/10 bg-void-soft/60 px-4 py-3">
      {TRAFFIC_LIGHTS.map((color) => (
        <span key={color} className={cx('size-3 rounded-full', color)} />
      ))}
      <span className="ml-3 font-mono text-xs text-mist/60">{fileName}</span>
    </div>
    <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
      <code>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((token, tokenIndex) => (
              <span key={tokenIndex} className={TOKEN_CLASS[token.kind]}>
                {token.text}
              </span>
            ))}
          </span>
        ))}
      </code>
    </pre>
  </GlassCard>
)
