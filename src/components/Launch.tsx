import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL_LINK_PROPS,
  getWhatsAppQuickQuoteUrl,
} from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'

export function Launch() {
  const quoteUrl = getWhatsAppQuickQuoteUrl()

  return (
    <section
      id="launch"
      className="section-padding-compact border-y border-white/6 bg-surface-secondary"
      aria-labelledby="launch-heading"
    >
      <PageContainer className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-12">
        <AnimateIn>
          <p className="section-label">Coming July 2026</p>
          <h2 id="launch-heading" className="section-heading mt-2 md:mt-4">
            Book Your July Detail with Driven Gloss
          </h2>
          <p className="section-copy mt-3 md:mt-4">
            Mobile car detailing at your home, workplace, or preferred location. Send us your car model,
            location, and photos on WhatsApp for a quick quote.
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="flex flex-col gap-2.5 md:hidden">
            <Button
              href={quoteUrl}
              variant="primary"
              size="lg"
              className="btn-mobile-rounded w-full"
              trackingSource="launch-mobile-quote"
              {...SOCIAL_LINK_PROPS}
            >
              Get WhatsApp Quote
            </Button>
            <Button href={PHONE_TEL} variant="outline-pink" size="lg" className="btn-mobile-rounded w-full" trackingSource="launch-mobile-call">
              Call {PHONE_DISPLAY}
            </Button>
            <Button
              href={INSTAGRAM_URL}
              variant="secondary"
              size="lg"
              className="btn-mobile-rounded w-full"
              trackingSource="launch-mobile-instagram"
              {...SOCIAL_LINK_PROPS}
            >
              Follow on Instagram
            </Button>
          </div>

          <div className="hidden flex-col gap-3 md:flex md:items-stretch lg:max-w-xs lg:ml-auto">
            <Button
              href={quoteUrl}
              variant="primary"
              size="lg"
              className="w-full"
              trackingSource="launch-desktop-quote"
              {...SOCIAL_LINK_PROPS}
            >
              Get WhatsApp Quote
            </Button>
            <Button href={PHONE_TEL} variant="outline-pink" size="lg" className="w-full" trackingSource="launch-desktop-call">
              Call {PHONE_DISPLAY}
            </Button>
            <Button
              href={INSTAGRAM_URL}
              variant="secondary"
              size="lg"
              className="w-full"
              trackingSource="launch-desktop-instagram"
              {...SOCIAL_LINK_PROPS}
            >
              Follow on Instagram
            </Button>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
