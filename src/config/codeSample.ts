import type { CodeLine, CodeToken, TokenKind } from '../types'

const createToken = (kind: TokenKind) => (text: string): CodeToken => ({ kind, text })

const keyword = createToken('keyword')
const fn = createToken('function')
const str = createToken('string')
const comment = createToken('comment')
const plain = createToken('plain')

const INDENT = '    '
const CONSTELLATION = ['Andrómeda', 'Orión', 'Vía Láctea'] as const

export const CODE_FILE_NAME = 'constelacion.nb'

const outputLines: readonly CodeLine[] = CONSTELLATION.map((star) => [comment(`// → Desplegando en: ${star}`)])

export const CODE_SAMPLE: readonly CodeLine[] = [
  [keyword('orbit'), plain(' '), fn('main'), plain('() {')],
  [
    plain(INDENT),
    keyword('const'),
    plain(' constelacion = ['),
    ...CONSTELLATION.flatMap((star, index) => [plain(index === 0 ? '' : ', '), str(`"${star}"`)]),
    plain('];'),
  ],
  [plain(INDENT), keyword('for'), plain(' estrella '), keyword('in'), plain(' constelacion {')],
  [plain(INDENT + INDENT), fn('transmit'), plain('('), str('"Desplegando en: "'), plain(' + estrella);')],
  [plain(`${INDENT}}`)],
  [plain('}')],
  ...outputLines,
]
