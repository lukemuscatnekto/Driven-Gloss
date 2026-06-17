import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Send Your Details',
    description: 'Tell us your vehicle type and the service you are interested in.',
  },
  {
    number: '02',
    title: 'Choose Your Location',
    description: 'Arrange a suitable time and place for your mobile detail.',
  },
  {
    number: '03',
    title: 'Enjoy the Finish',
    description: 'Driven Gloss arrives and takes care of the rest.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding mobile-sticky-clearance bg-surface-secondary"
      aria-labelledby="steps-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="section-intro">
            <SectionLabel>Process / Three Simple Steps</SectionLabel>
            <h2 id="steps-heading" className="sr-only">
              Three Simple Steps
            </h2>
          </div>
        </AnimateIn>

        <ol className="section-content process-steps relative grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div
            className="pointer-events-none absolute top-7 right-[20%] left-[20%] hidden h-px bg-white/10 md:block"
            aria-hidden="true"
          />
          <div className="process-line-mobile pointer-events-none absolute top-2 bottom-2 left-[1.1rem] w-px bg-white/10 md:hidden" aria-hidden="true" />

          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 90}>
              <li className={`process-step relative pl-10 md:pl-0 ${index === 1 ? 'md:mt-3' : index === 2 ? 'md:mt-6' : ''}`}>
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
      </PageContainer>
    </section>
  )
}
