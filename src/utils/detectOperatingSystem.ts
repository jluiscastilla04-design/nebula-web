import type { OperatingSystem } from '../types'

const DEFAULT_SYSTEM: OperatingSystem = 'linux'

const DETECTION_RULES: readonly (readonly [RegExp, OperatingSystem])[] = [
  [/windows/i, 'windows'],
  [/macintosh|mac os/i, 'macos'],
]

export const detectOperatingSystem = (): OperatingSystem =>
  DETECTION_RULES.find(([pattern]) => pattern.test(navigator.userAgent))?.[1] ?? DEFAULT_SYSTEM
