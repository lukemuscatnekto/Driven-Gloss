import { useState } from 'react'
import { PHONE_TEL } from '../constants'
import { useActiveSection } from '../hooks/useActiveSection'
import { Button } from './Button'
import { Logo } from './Logo'
import { PageContainer } from './PageContainer'
import { ScrollProgress } from './ScrollProgress'
import { SocialIconRow } from './SocialIcons'

const navLinks = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Launch', href: '#launch', id: 'launch' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const observedSections = [
  { id: 'services', elements: ['#services'] },
  { id: 'how-it-works', elements: ['#how-it-works'] },
  { id: 'launch', elements: ['#launch-offers', '#launch'] },
  { id: 'contact', elements: ['#contact'] },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(observedSections)

  return (
    <>
      <ScrollProgress />
      <header className="site-header sticky top-0.5 z-50 border-b border-white/8 bg-[#07080a]/98 backdrop-blur-sm print:hidden md:border-white/6 md:bg-charcoal/95">
        <PageContainer>
          <nav
            className="flex min-h-[64px] items-center justify-between gap-4 py-0 md:min-h-0 md:gap-3 md:py-2"
            aria-label="Main navigation"
          >
            <a
              href="#"
              aria-label="Driven Gloss — back to top"
              className="mobile-header-logo shrink-0 rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
            >
              <Logo variant="nav" />
            </a>

            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeId === link.id ? 'nav-link-active nav-link' : 'nav-link'}
                    aria-current={activeId === link.id ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2.5 md:flex">
              <div className="mr-0.5 h-4 w-px bg-white/10" aria-hidden="true" />
              <SocialIconRow size="sm" />
              <Button href={PHONE_TEL} variant="primary" size="sm">
                Enquire Now
              </Button>
            </div>

            <button
              type="button"
              className="mobile-menu-btn flex h-11 w-11 items-center justify-center border border-white/12 text-white md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">{isOpen ? 'Close' : 'Menu'}</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {isOpen ? (
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </nav>
        </PageContainer>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-white/6 bg-charcoal md:hidden">
            <PageContainer className="py-3">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block min-h-11 py-2 text-sm font-medium tracking-wide text-white/75 uppercase transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center justify-between border-t border-white/6 pt-3">
                  <SocialIconRow size="sm" />
                  <Button href={PHONE_TEL} variant="primary" size="sm">
                    Enquire Now
                  </Button>
                </li>
              </ul>
            </PageContainer>
          </div>
        )}
      </header>
    </>
  )
}
