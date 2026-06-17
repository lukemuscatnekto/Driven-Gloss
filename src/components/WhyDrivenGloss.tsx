import { SOCIAL_LINK_PROPS, getWhatsAppQuickQuoteUrl } from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'
import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'

const whyPoints = [
  {
    number: '01',
    title: 'We come to you',
    description:
      'Home, workplace, marina, or wherever your vehicle is parked. No waiting around at a car wash.',
  },
  {
    number: '02',
    title: 'Careful detailing, no shortcuts',
    description: 'Safe wash methods, quality products, and proper attention to the small details.',
  },
  {
    number: '03',
    title: 'Protection that lasts',
    description:
      'Optional wax, ceramic spray, clay towel treatment, and glass protection to keep your car looking better for longer.',
  },
]

export function WhyDrivenGloss() {
  const quoteUrl = getWhatsAppQuickQuoteUrl()

  const handleQuoteClick = () => {
    markCtaInteraction()
    trackLinkClick(quoteUrl, { source: 'why-driven-gloss-quote' })
    window.open(quoteUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section-padding-compact max-md:pb-6 bg-surface-primary" aria-labelledby="why-heading">
      <PageContainer>
        <AnimateIn>
          <h2 id="why-heading" className="section-heading">
            Why Driven Gloss?
          </h2>
        </AnimateIn>

        <div className="section-content grid md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div className="max-w-xl space-y-0 md:space-y-7">
            {whyPoints.map((point, index) => (
              <AnimateIn key={point.number} delay={index * 60}>
                <article className="service-row service-row-mobile">
                  <span className="font-display text-sm font-semibold tracking-wider text-pink uppercase">
                    {point.number}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold tracking-wide text-white uppercase md:mt-2 md:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-white/80 md:mt-2 md:text-base md:leading-relaxed">
                    {point.description}
                  </p>
                  {index < whyPoints.length - 1 && (
                    <div className="editorial-divider editorial-divider-accent mt-5 md:mt-7" />
                  )}
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={120} className="hidden md:block">
            <div className="max-w-sm border border-white/10 bg-charcoal/40 p-5 backdrop-blur-sm lg:pt-4">
              <div className="editorial-divider editorial-divider-accent mb-5 w-14" aria-hidden="true" />
              <h3 className="font-display text-sm font-semibold leading-snug tracking-[0.1em] text-white/70 uppercase">
                Mobile Detailing in Malta
              </h3>
              <p className="mt-2 text-[0.65rem] tracking-[0.14em] text-white/45 uppercase">
                At your home, workplace, or preferred location
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Send us your car model, location, and photos on WhatsApp for the most accurate quote.
              </p>
              <a
                href={quoteUrl}
                {...SOCIAL_LINK_PROPS}
                onClick={(event) => {
                  event.preventDefault()
                  handleQuoteClick()
                }}
                aria-label="Get a WhatsApp quote from Driven Gloss"
                className="btn mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-blue text-sm font-semibold tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
              >
                Get WhatsApp Quote
              </a>
            </div>
          </AnimateIn>
        </div>
      </PageContainer>
    </section>
  )
}
