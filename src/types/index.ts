export type OperatingSystem = 'windows' | 'macos' | 'linux'
export type IconName = 'bolt' | 'orbit' | 'syntax' | 'shield' | 'menu' | 'download'
export type TokenKind = 'keyword' | 'function' | 'string' | 'comment' | 'plain'

export interface NavLink {
  readonly label: string
  readonly href: string
}

export interface FooterColumn {
  readonly title: string
  readonly links: readonly NavLink[]
}

export interface Feature {
  readonly title: string
  readonly description: string
  readonly icon: IconName
}

export interface CommunityCard {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly action: string
}

export interface CodeToken {
  readonly kind: TokenKind
  readonly text: string
}

export type CodeLine = readonly CodeToken[]

interface DownloadBase {
  readonly title: string
  readonly description: string
}

export interface FileDownload extends DownloadBase {
  readonly kind: 'file'
  readonly fileName: string
}

export interface CommandDownload extends DownloadBase {
  readonly kind: 'command'
  readonly commands: readonly string[]
}

export type DownloadOption = FileDownload | CommandDownload
export type DownloadCatalog = Readonly<Record<OperatingSystem, readonly DownloadOption[]>>
