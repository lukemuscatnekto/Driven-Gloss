import {
  BOOKINGS_NOTE,
  FACEBOOK_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY_INTL,
  REFERRAL_WHATSAPP_URL,
  SERVICE_AREA,
  SOCIAL_LINK_PROPS,
  WHATSAPP_URL,
} from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'
import { Logo } from './Logo'
import { PageContainer } from './PageContainer'
import { SocialIconRow } from './SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mobile-footer border-t border-white/6 bg-surface-footer pt-4 pr-20 pb-[calc(72px+env(safe-area-inset-bottom))] md:border-t-0 md:pr-0 md:pt-7 md:pb-10">
      <PageContainer className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="flex flex-col gap-1.5 md:gap-3">
          <Logo variant="footer" />
          <p className="text-xs tracking-[0.14em] text-white/45 uppercase">Mobile detailing in Malta</p>
        </div>

        <div className="flex flex-col gap-0.5 text-sm text-white/65 md:gap-2">
          <a
            href={WHATSAPP_URL}
            {...SOCIAL_LINK_PROPS}
            onClick={() => {
              markCtaInteraction()
              trackLinkClick(WHATSAPP_URL, { source: 'footer-whatsapp' })
            }}
            className="min-h-11 py-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
          >
            WhatsApp: {PHONE_DISPLAY_INTL}
          </a>
          <a
            href={INSTAGRAM_URL}
            {...SOCIAL_LINK_PROPS}
            onClick={() => {
              markCtaInteraction()
              trackLinkClick(INSTAGRAM_URL, { source: 'footer-instagram' })
            }}
            className="min-h-11 py-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
          >
            Instagram: {INSTAGRAM_HANDLE}
          </a>
          <p className="min-h-11 py-1">Service area: {SERVICE_AREA}</p>
          <p className="py-1 text-white/55">{BOOKINGS_NOTE}</p>
          <a
            href={FACEBOOK_URL}
            {...SOCIAL_LINK_PROPS}
            className="min-h-11 py-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
          >
            Facebook
          </a>
          <div className="mt-2 md:hidden">
            <SocialIconRow size="sm" />
          </div>
        </div>
      </PageContainer>

      <PageContainer className="mt-4 border-t border-white/6 pt-4">
        <p className="text-sm leading-relaxed text-white/65">
          Love Driven Gloss? Refer a friend and you both save 15%.
        </p>
        <a
          href={REFERRAL_WHATSAPP_URL}
          {...SOCIAL_LINK_PROPS}
          onClick={() => {
            markCtaInteraction()
            trackLinkClick(REFERRAL_WHATSAPP_URL, { source: 'footer-referral-share' })
          }}
          className="mt-3 inline-flex min-h-11 items-center rounded-sm border border-white/15 bg-charcoal-light px-4 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:border-white/30 hover:bg-charcoal-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          Share on WhatsApp
        </a>
      </PageContainer>

      <PageContainer className="mt-4 flex flex-col gap-1 border-t border-white/6 pt-4 text-xs text-white/35 md:mt-6 md:flex-row md:items-center md:justify-between md:gap-2 md:pt-5">
        <p>&copy; {year} Driven Gloss. All rights reserved.</p>
        <a
          href="#"
          className="min-h-11 py-1 tracking-wide uppercase transition-colors hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          Back to top
        </a>
      </PageContainer>

      <PageContainer className="mt-2 pt-1">
        <p className="text-[0.65rem] leading-relaxed text-white/30">
          Designed & built by{' '}
          <a
            href="https://form-and-signal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-[0.14em] text-white/45 uppercase transition-colors hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
          >
            FORM & SIGNAL
          </a>
        </p>
      </PageContainer>
    </footer>
  )
}
