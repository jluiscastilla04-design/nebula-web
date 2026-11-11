import { useState } from 'react'
import { COPY, SECTION_ID, toAnchor } from '../../config/site'
import { Brand } from '../atoms/Brand'
import { ButtonLink } from '../atoms/ButtonLink'
import { Icon } from '../atoms/Icon'
import { NavLinks } from '../molecules/NavLinks'

const MENU_ICON_SIZE = 22

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)

  return (
    <header className="glass-strong fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Brand />
        <NavLinks className="hidden items-center gap-8 md:flex" />
        <div className="flex items-center gap-3">
          <ButtonLink href={toAnchor(SECTION_ID.downloads)} variant="compact" className="hidden sm:inline-block">
            {COPY.navbar.download}
          </ButtonLink>
          <button type="button" aria-label={COPY.navbar.openMenu} aria-expanded={isMenuOpen} onClick={toggleMenu} className="p-2 md:hidden">
            <Icon name="menu" size={MENU_ICON_SIZE} />
          </button>
        </div>
      </div>
      {isMenuOpen && <NavLinks className="flex flex-col gap-4 border-t border-silver/10 px-6 py-4 md:hidden" />}
    </header>
  )
}
