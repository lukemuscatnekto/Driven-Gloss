import { useRef, useState } from 'react'
import { CAMPAIGN_FLYERS, LAUNCH_OFFERS, LAUNCH_OFFERS_TERMS } from '../campaign'
import { SOCIAL_LINK_PROPS } from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { CampaignFlyers } from './CampaignFlyers'
import { ImageLightbox } from './ImageLightbox'
import { LaunchCountdown } from './LaunchCountdown'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'
import { SocialIconRow } from './SocialIcons'

export function JulyLaunchOffers() {
  const [activeFlyer, setActiveFlyer] = useState<(typeof CAMPAIGN_FLYERS)[number] | null>(null)
  const returnFocusRef = useRef<HTMLButtonElement | null>(null)

  const openFlyer = (flyer: (typeof CAMPAIGN_FLYERS)[number], trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger
    setActiveFlyer(flyer)
  }

  const closeFlyer = () => {
    setActiveFlyer(null)
  }

  return (
    <section
      id="launch-offers"
      className="section-padding border-t border-white/6 bg-surface-primary"
      aria-labelledby="launch-offers-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="section-intro">
            <LaunchCountdown />
            <SectionLabel>Launch Offers</SectionLabel>
            <h2 id="launch-offers-heading" className="section-heading">
              Start with a Little Extra Gloss.
            </h2>
            <p className="section-copy max-w-2xl">
              Driven Gloss is opening bookings for July. Secure your spot early and take advantage of the launch
              offers.
            </p>
          </div>
        </AnimateIn>

        <div className="section-content grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {LAUNCH_OFFERS.map((offer, index) => (
            <AnimateIn key={offer.id} delay={index * 80}>
              <article
                className={`offer-panel offer-panel-${offer.variant} offer-panel-mobile flex h-full flex-col bg-surface-secondary p-5 md:p-7`}
              >
                <p className="text-[0.65rem] font-medium tracking-[0.22em] text-white/45 uppercase md:text-xs">
                  {offer.label}
                </p>
                <p className="font-display mt-1.5 text-[3rem] font-bold tracking-tight uppercase md:mt-3 md:text-4xl">
                  <span className={offer.variant === 'pink' ? 'text-pink-light' : 'text-blue-light'}>
                    {offer.accent}
                  </span>
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-wide text-white uppercase md:mt-4 md:text-lg">
                  {offer.heading}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 md:mt-3">{offer.copy}</p>
                <div className="mt-4 md:mt-6">
                  <Button
                    href={offer.href}
                    variant={offer.variant === 'pink' ? 'primary' : 'secondary'}
                    size="md"
                    className="btn-mobile-rounded w-full min-h-12 sm:w-auto md:min-h-11"
                    {...(offer.variant === 'blue' ? SOCIAL_LINK_PROPS : {})}
                  >
                    {offer.cta}
                  </Button>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={160}>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/40 md:mt-8 md:text-sm">
            {LAUNCH_OFFERS_TERMS}
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="mt-8 border-t border-white/6 pt-6 md:mt-12 md:pt-10">
            <p className="section-label">Launch Announcements</p>
            <p className="mt-2 text-sm text-white/55">See the official Driven Gloss July launch posts.</p>
            <p className="mt-3 text-[0.65rem] tracking-wide text-white/35 md:hidden">
              Swipe to view launch posts
            </p>

            <CampaignFlyers onOpenFlyer={openFlyer} />

            <div className="mt-5 md:mt-7">
              <p className="text-[0.65rem] font-medium tracking-[0.2em] text-white/45 uppercase md:text-xs">
                Follow the Launch on Social
              </p>
              <div className="mt-3">
                <SocialIconRow size="md" />
              </div>
            </div>
          </div>
        </AnimateIn>
      </PageContainer>

      {activeFlyer && (
        <ImageLightbox
          src={activeFlyer.src}
          alt={activeFlyer.alt}
          isOpen={Boolean(activeFlyer)}
          onClose={closeFlyer}
          returnFocusRef={returnFocusRef}
        />
      )}
    </section>
  )
}
