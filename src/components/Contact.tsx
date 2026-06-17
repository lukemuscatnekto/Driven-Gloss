import { INSTAGRAM_URL, SOCIAL_LINK_PROPS, getWhatsAppQuickQuoteUrl } from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'

export function Contact() {
  const quoteUrl = getWhatsAppQuickQuoteUrl()

  return (
    <section
      id="contact"
      className="section-padding-compact border-b border-white/6 bg-surface-primary"
      aria-labelledby="contact-heading"
    >
      <PageContainer className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12">
        <AnimateIn>
          <h2 id="contact-heading" className="section-heading">
            Ready to Get a Quote?
          </h2>
          <p className="section-copy mt-3 md:mt-4">
            Tell us your vehicle model, location, and the service you are interested in. We&apos;ll recommend the
            best package and confirm availability for July.
          </p>
          <p className="mt-2 text-xs tracking-wide text-white/40 uppercase md:mt-4">Mobile detailing across Malta</p>
        </AnimateIn>

        <AnimateIn delay={80}>
          <div className="flex flex-col gap-2.5 md:items-stretch lg:max-w-sm lg:ml-auto">
            <Button
              href={quoteUrl}
              variant="primary"
              size="lg"
              className="btn-mobile-rounded w-full md:rounded-sm"
              trackingSource="contact-whatsapp-quote"
              {...SOCIAL_LINK_PROPS}
            >
              WhatsApp Quote
            </Button>
            <Button
              href={INSTAGRAM_URL}
              variant="secondary"
              size="lg"
              className="btn-mobile-rounded w-full md:rounded-sm"
              trackingSource="contact-instagram"
              {...SOCIAL_LINK_PROPS}
            >
              Message on Instagram
            </Button>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
