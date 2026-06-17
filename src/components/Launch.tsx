import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, SOCIAL_LINK_PROPS } from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'

export function Launch() {
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
            Be First in Line for the Driven Gloss Launch
          </h2>
          <p className="section-copy mt-3 md:mt-4">
            Follow Driven Gloss for service updates, availability, and launch announcements. Enquiries are open
            now.
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="flex flex-col gap-2.5 md:hidden">
            <Button
              href={INSTAGRAM_URL}
              variant="secondary"
              size="lg"
              className="btn-mobile-rounded w-full"
              {...SOCIAL_LINK_PROPS}
            >
              Follow on Instagram
            </Button>
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-11 items-center text-sm font-medium tracking-wide text-white/60 uppercase transition-colors hover:text-white/85"
            >
              Call {PHONE_DISPLAY}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </a>
          </div>

          <div className="hidden flex-col gap-3 sm:flex-row md:flex md:flex-col md:items-stretch lg:max-w-xs lg:ml-auto">
            <Button href={PHONE_TEL} variant="primary" size="lg" className="w-full">
              Call {PHONE_DISPLAY}
            </Button>
            <Button href={INSTAGRAM_URL} variant="secondary" size="lg" className="w-full" {...SOCIAL_LINK_PROPS}>
              Follow on Instagram
            </Button>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
