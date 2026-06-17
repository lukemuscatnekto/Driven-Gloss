import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'

const whyPoints = [
  {
    number: '01',
    text: 'We come to you — home, office, or marina',
  },
  {
    number: '02',
    text: 'Premium products, meticulous attention',
  },
  {
    number: '03',
    text: 'Results that last, not just look good',
  },
]

export function WhyDrivenGloss() {
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
                  <p className="mt-1.5 text-sm leading-snug text-white/80 md:mt-2 md:text-base md:leading-relaxed">
                    {point.text}
                  </p>
                  {index < whyPoints.length - 1 && (
                    <div className="editorial-divider editorial-divider-accent mt-5 md:mt-7" />
                  )}
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={120} className="hidden md:block">
            <div className="max-w-xs lg:pt-4">
              <div className="editorial-divider editorial-divider-accent mb-5 w-14" aria-hidden="true" />
              <p className="font-display text-sm font-semibold leading-snug tracking-[0.1em] text-white/70 uppercase">
                Mobile Service
                <br />
                At Your Location
              </p>
              <p className="mt-3 text-[0.65rem] tracking-[0.22em] text-white/40 uppercase">
                Home · Workplace · Convenient Parking
              </p>
            </div>
          </AnimateIn>
        </div>
      </PageContainer>
    </section>
  )
}
