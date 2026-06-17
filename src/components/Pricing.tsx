import {
  SOCIAL_LINK_PROPS,
  getWhatsAppExtraServicesUrl,
  getWhatsAppPackageUrl,
} from '../constants'
import { EXTRA_SERVICES, PRICING_PACKAGES } from '../pricing'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'
import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'

function FeatureCheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-pink-light"
    >
      <path
        d="M5 12.5L10 17.5L19 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function openWhatsApp(url: string, source: string) {
  markCtaInteraction()
  trackLinkClick(url, { source })
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function Pricing() {
  const extraServicesUrl = getWhatsAppExtraServicesUrl()

  return (
    <section
      id="pricing"
      className="section-padding border-t border-white/6 bg-surface-primary"
      aria-labelledby="pricing-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="section-intro">
            <SectionLabel>Pricing</SectionLabel>
            <h2 id="pricing-heading" className="section-heading">
              Choose Your Detail Package
            </h2>
            <p className="section-copy max-w-2xl">
              Simple mobile detailing packages with optional extras. Not sure what your car needs? Send us photos on
              WhatsApp and we&apos;ll guide you.
            </p>
          </div>
        </AnimateIn>

        <div className="section-content grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {PRICING_PACKAGES.map((pkg, index) => {
            const packageUrl = getWhatsAppPackageUrl(pkg.name, pkg.price)

            return (
              <AnimateIn key={pkg.id} delay={index * 80}>
                <article
                  className={`offer-panel offer-panel-mobile flex h-full flex-col bg-surface-secondary p-5 md:p-6 ${
                    pkg.popular
                      ? 'offer-panel-pink border border-pink/25 ring-1 ring-pink/15'
                      : 'border border-white/8'
                  }`}
                >
                  {pkg.popular && (
                    <span className="mb-3 inline-flex w-fit border border-pink/35 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-pink-light uppercase">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-base font-semibold tracking-wide text-white uppercase md:text-lg">
                    {pkg.name}
                  </h3>
                  <p className="font-display mt-2 text-[2.5rem] font-bold tracking-tight text-pink-light md:text-4xl">
                    {pkg.price}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-white/65">
                        <FeatureCheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={packageUrl}
                    {...SOCIAL_LINK_PROPS}
                    onClick={(event) => {
                      event.preventDefault()
                      openWhatsApp(packageUrl, `pricing-${pkg.id}`)
                    }}
                    aria-label={`Book ${pkg.name} package on WhatsApp`}
                    className={`btn mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-sm text-sm font-semibold tracking-[0.08em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light md:mt-6 ${
                      pkg.popular
                        ? 'bg-pink text-white hover:bg-pink-light'
                        : 'border border-white/15 bg-charcoal-light text-white hover:border-white/30 hover:bg-charcoal-mid'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </article>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn delay={120}>
          <div className="section-content mt-8 border border-white/8 bg-surface-secondary p-5 md:mt-12 md:p-7">
            <h3 className="text-base font-semibold tracking-wide text-white uppercase md:text-lg">Extra Services</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
              Add extra treatments depending on your vehicle&apos;s condition.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {EXTRA_SERVICES.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between gap-3 border border-white/6 bg-charcoal/30 px-3 py-3 text-sm"
                >
                  <span className="text-white/75">{service.name}</span>
                  <span className="shrink-0 font-medium text-white/90">{service.price}</span>
                </li>
              ))}
            </ul>
            <a
              href={extraServicesUrl}
              {...SOCIAL_LINK_PROPS}
              onClick={(event) => {
                event.preventDefault()
                openWhatsApp(extraServicesUrl, 'pricing-extra-services')
              }}
              aria-label="Ask about extra services on WhatsApp"
              className="btn mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-white/15 bg-charcoal-light text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:border-white/30 hover:bg-charcoal-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light sm:w-auto sm:px-6"
            >
              Ask About Extra Services
            </a>
          </div>
        </AnimateIn>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/40 md:mt-8">
          Prices may vary depending on vehicle size, condition, and location. Send photos on WhatsApp for the most
          accurate quote.
        </p>
      </PageContainer>
    </section>
  )
}
