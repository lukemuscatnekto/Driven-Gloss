import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY_INTL,
  SERVICE_AREA,
  SOCIAL_LINK_PROPS,
  WHATSAPP_URL,
  getWhatsAppQuickQuoteUrl,
} from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'

export function LocalContact() {
  const quoteUrl = getWhatsAppQuickQuoteUrl()

  return (
    <section
      className="section-padding-compact border-t border-white/6 bg-surface-secondary"
      aria-labelledby="local-contact-heading"
    >
      <PageContainer>
        <AnimateIn>
          <h2 id="local-contact-heading" className="section-heading">
            Contact & Service Area
          </h2>
          <div className="section-content max-w-2xl space-y-3 text-sm leading-relaxed text-white/70">
            <p>
              <span className="font-medium text-white/85">WhatsApp: </span>
              <a
                href={WHATSAPP_URL}
                {...SOCIAL_LINK_PROPS}
                onClick={() => {
                  markCtaInteraction()
                  trackLinkClick(WHATSAPP_URL, { source: 'local-contact-whatsapp' })
                }}
                className="text-blue-light transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
              >
                {PHONE_DISPLAY_INTL}
              </a>
            </p>
            <p>
              <span className="font-medium text-white/85">Instagram: </span>
              <a
                href={INSTAGRAM_URL}
                {...SOCIAL_LINK_PROPS}
                onClick={() => {
                  markCtaInteraction()
                  trackLinkClick(INSTAGRAM_URL, { source: 'local-contact-instagram' })
                }}
                className="text-blue-light transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
            <p>
              <span className="font-medium text-white/85">Service area: </span>
              {SERVICE_AREA}
            </p>
            <p>
              <span className="font-medium text-white/85">Bookings: </span>
              Open from July
            </p>
            <p>
              <span className="font-medium text-white/85">Mobile detailing: </span>
              Home, workplace, marina, or preferred location
            </p>
          </div>

          <div className="section-content mt-6 max-w-2xl border border-white/10 bg-charcoal/40 p-4 backdrop-blur-sm md:mt-8 md:p-5">
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Ready to get a quote?</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Send your car model, location, and photos on WhatsApp. We&apos;ll recommend the best package and
              confirm availability.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                href={quoteUrl}
                variant="primary"
                size="md"
                className="w-full min-h-11 sm:w-auto"
                trackingSource="local-contact-quote"
                {...SOCIAL_LINK_PROPS}
              >
                Get WhatsApp Quote
              </Button>
              <Button
                href={INSTAGRAM_URL}
                variant="secondary"
                size="md"
                className="w-full min-h-11 sm:w-auto"
                trackingSource="local-contact-follow"
                {...SOCIAL_LINK_PROPS}
              >
                Follow on Instagram
              </Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Refer a friend and save 15% on your next detail after their booking is completed.
            </p>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
