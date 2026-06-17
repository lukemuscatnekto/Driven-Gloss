import {
  FACEBOOK_URL,
  HERO_IMAGE_PATH,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL_LINK_PROPS,
  WHATSAPP_AVAILABILITY_URL,
} from '../constants'
import { Button } from './Button'
import { HeroMobileCTA } from './HeroMobileCTA'
import { PageContainer } from './PageContainer'
import { TextLink } from './TextLink'
import { WaitlistForm } from './WaitlistForm'
import { markCtaInteraction } from '../utils/ctaInteraction'

export function Hero() {
  return (
    <section
      className="hero-section relative min-h-[calc(100svh-6.5rem)] overflow-hidden md:min-h-[88svh]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="hero-background hero-image-scale absolute inset-0"
          style={{ backgroundImage: `url('${HERO_IMAGE_PATH}')` }}
        />
        <div className="hero-photo-overlay absolute inset-0" />
        <div className="hero-vignette absolute inset-0 md:hidden" />
        <div className="hero-bottom-fade absolute inset-x-0 bottom-0 md:hidden" aria-hidden="true" />
        <div className="hero-texture absolute inset-0" />
      </div>

      <PageContainer className="relative grid items-end py-12 pb-14 md:items-center md:py-28 lg:grid-cols-[1fr_0.7fr] lg:gap-8 lg:py-32">
        <div className="max-w-2xl lg:max-w-none">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center md:mb-5 md:gap-x-4 md:gap-y-2">
            <span className="inline-flex w-fit items-center border border-pink/30 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.22em] text-pink-light uppercase md:text-xs">
              Launching July 2026
            </span>
            <a
              href={WHATSAPP_AVAILABILITY_URL}
              {...SOCIAL_LINK_PROPS}
              onClick={markCtaInteraction}
              className="inline-flex min-h-10 w-fit items-center justify-center border border-blue bg-blue px-3 py-2 text-[0.65rem] font-semibold tracking-[0.12em] text-charcoal uppercase transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light md:text-xs"
            >
              Check Availability — WhatsApp
            </a>
          </div>

          <h1
            id="hero-heading"
            className="max-w-xl text-3xl leading-[1.08] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl lg:max-w-[26rem] lg:text-[2.7rem] xl:max-w-[28rem] xl:text-[2.85rem]"
          >
            <span className="hero-headline-mobile flex gap-3 md:hidden">
              <span className="hero-accent-line shrink-0" aria-hidden="true" />
              <span className="font-display text-[1.85rem] leading-[0.98] font-bold tracking-tight uppercase">
                <span className="block text-white">Mobile Car</span>
                <span className="block text-white">Detailing.</span>
                <span className="block text-pink-light">Delivered to Your</span>
                <span className="block text-pink-light">Door.</span>
              </span>
            </span>

            <span className="hero-headline-desktop hidden md:block">
              <span className="block lg:whitespace-nowrap">Mobile Car Detailing.</span>
              <span className="text-gradient-pink block lg:hidden">Delivered to Your Door.</span>
              <span className="text-gradient-pink hidden lg:block">
                <span className="block">Delivered to Your</span>
                <span className="block">Door.</span>
              </span>
            </span>
          </h1>

          <p className="mt-2 text-sm text-gray-400 md:mt-3">Packages from €70</p>

          <p className="mt-5 hidden max-w-lg text-base leading-relaxed text-white/70 md:mt-6 md:block md:text-lg">
            Professional mobile car detailing brought directly to your location. Interior detailing, exterior
            detailing, and ceramic coatings across Malta.
          </p>
          <p className="mt-2.5 max-w-[18.5rem] text-sm leading-snug text-white/70 md:hidden">
            Mobile detailing brought to your location. Interior, exterior, and ceramic-coating services across
            Malta.
          </p>

          <div className="mt-4 md:mt-9">
            <HeroMobileCTA />
            <div className="hidden flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:flex">
              <Button href={PHONE_TEL} variant="primary" size="lg" className="w-full sm:w-auto">
                Call {PHONE_DISPLAY}
              </Button>
              <Button
                href={INSTAGRAM_URL}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                {...SOCIAL_LINK_PROPS}
              >
                Follow on Instagram
              </Button>
            </div>
          </div>

          <WaitlistForm
            source="hero-waitlist"
            className="mt-4 max-w-md border border-white/10 bg-charcoal/40 p-4 backdrop-blur-sm md:mt-5"
          />

          <div className="mt-4 hidden md:block">
            <TextLink href={FACEBOOK_URL} {...SOCIAL_LINK_PROPS}>
              View Facebook Page
            </TextLink>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
