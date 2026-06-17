import { SOCIAL_LINK_PROPS, getWhatsAppQuickQuoteUrl } from '../constants'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Send your details',
    description:
      'Tell us your car model, location, preferred service, and send photos if possible.',
  },
  {
    number: '02',
    title: 'Get your quote',
    description: 'We’ll recommend the right package, confirm the price, and arrange a suitable time.',
  },
  {
    number: '03',
    title: 'We come to you',
    description: 'Driven Gloss arrives at your location and takes care of the detail while you relax.',
  },
]

const trustBadges = [
  'Mobile across Malta',
  'Premium products used',
  'Water-conscious detailing',
]

export function HowItWorks() {
  const quoteUrl = getWhatsAppQuickQuoteUrl()

  return (
    <section
      id="how-it-works"
      className="section-padding mobile-sticky-clearance bg-surface-secondary"
      aria-labelledby="steps-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="section-intro">
            <SectionLabel>How It Works</SectionLabel>
            <h2 id="steps-heading" className="section-heading">
              How It Works
            </h2>
            <p className="section-copy">Three simple steps to book your mobile detail.</p>
          </div>
        </AnimateIn>

        <ol className="section-content process-steps relative grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div
            className="pointer-events-none absolute top-7 right-[20%] left-[20%] hidden h-px bg-white/10 md:block"
            aria-hidden="true"
          />
          <div
            className="process-line-mobile pointer-events-none absolute top-2 bottom-2 left-[1.1rem] w-px bg-white/10 md:hidden"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 90}>
              <li
                className={`process-step relative pl-10 md:pl-0 ${index === 1 ? 'md:mt-3' : index === 2 ? 'md:mt-6' : ''}`}
              >
                <span className="font-display absolute left-0 z-10 text-[2rem] leading-none font-bold text-pink md:static md:text-[2.75rem]">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold tracking-wide text-white uppercase md:mt-3 md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>

        <AnimateIn delay={280}>
          <div className="mt-8 flex flex-col items-start gap-4 md:mt-10">
            <Button
              href={quoteUrl}
              variant="primary"
              size="lg"
              className="btn-mobile-rounded w-full min-h-11 sm:w-auto md:rounded-sm"
              trackingSource="how-it-works-quote"
              {...SOCIAL_LINK_PROPS}
            >
              Get WhatsApp Quote
            </Button>
            <ul
              className="flex flex-col gap-2 text-xs tracking-[0.08em] text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
              aria-label="Trust highlights"
            >
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-pink-light" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
