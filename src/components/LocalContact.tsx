import {
  BOOKINGS_NOTE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  INSURANCE_NOTE,
  PHONE_DISPLAY_INTL,
  SERVICE_AREA,
  SOCIAL_LINK_PROPS,
  WHATSAPP_URL,
} from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'
import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'

export function LocalContact() {
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
            <p className="text-white/55">{BOOKINGS_NOTE}</p>
            <p className="text-white/55">{INSURANCE_NOTE}</p>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
