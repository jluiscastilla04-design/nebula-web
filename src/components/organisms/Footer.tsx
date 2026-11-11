import { COPY, FOOTER_COLUMNS } from '../../config/site'
import { Brand } from '../atoms/Brand'

const FOOTER_ICON_SIZE = 22

export const Footer = () => (
  <footer className="border-t border-silver/10 px-6 py-14 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Brand iconSize={FOOTER_ICON_SIZE} />
        <p className="mt-4 text-sm leading-relaxed text-mist/70">{COPY.footer.tagline}</p>
      </div>
      {FOOTER_COLUMNS.map(({ title, links }) => (
        <div key={title}>
          <p className="mb-4 font-mono text-xs uppercase text-mist/50">{title}</p>
          <ul className="space-y-2.5 text-sm text-mist">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-silver">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-silver/10 pt-8 text-xs text-mist/50 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {COPY.footer.rights}
      </p>
      <p className="font-mono">{COPY.footer.signature}</p>
    </div>
  </footer>
)
