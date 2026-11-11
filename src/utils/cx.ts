export const cx = (...parts: readonly (string | false | undefined)[]): string => parts.filter(Boolean).join(' ')
