import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, SOCIAL_LINK_PROPS } from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'
import { SocialIconRow } from './SocialIcons'

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding-compact border-b border-white/6 bg-surface-primary"
      aria-labelledby="contact-heading"
    >
      <PageContainer className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12">
        <AnimateIn>
          <h2 id="contact-heading" className="section-heading">
            Ready to Enquire?
          </h2>
          <p className="section-copy mt-3 md:mt-4">
            Tell us about your vehicle and the service you are interested in. Call Driven Gloss or send a message
            through Instagram.
          </p>
          <p className="mt-2 text-xs tracking-wide text-white/40 uppercase md:mt-4">Mobile detailing in Malta</p>
        </AnimateIn>

        <AnimateIn delay={80}>
          <div className="flex flex-col gap-2.5 md:items-stretch lg:max-w-sm lg:ml-auto">
            <Button href={PHONE_TEL} variant="primary" size="lg" className="btn-mobile-rounded w-full md:rounded-sm" trackingSource="contact-call">
              Call {PHONE_DISPLAY}
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
            <div className="mt-1 flex justify-start md:mt-1 md:justify-end">
              <SocialIconRow size="sm" />
            </div>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
