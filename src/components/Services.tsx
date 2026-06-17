import { useRef, useState } from 'react'
import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'
import { ServiceModal } from './ServiceModal'
import { CeramicIcon, ExteriorIcon, FullDetailIcon, InteriorIcon } from './ServiceIcons'

export type ServiceItem = {
  number: string
  title: string
  description: string
  mobileDescription: string
  icon: typeof InteriorIcon
  accent: 'pink' | 'cyan'
}

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Interior Detailing',
    description:
      'A thorough interior clean carried out at your location for a fresher, more comfortable cabin.',
    mobileDescription: 'Deep clean for a fresher cabin.',
    icon: InteriorIcon,
    accent: 'pink',
  },
  {
    number: '02',
    title: 'Exterior Detailing',
    description: 'Focused exterior care to restore clarity, depth, and a sharper overall finish.',
    mobileDescription: 'Focused exterior care to restore clarity and shine.',
    icon: ExteriorIcon,
    accent: 'cyan',
  },
  {
    number: '03',
    title: 'Full Mobile Detailing',
    description: 'A complete interior and exterior detail delivered wherever your vehicle is parked.',
    mobileDescription: 'Interior and exterior care at your location.',
    icon: FullDetailIcon,
    accent: 'pink',
  },
  {
    number: '04',
    title: 'Ceramic Coatings',
    description: 'Professional ceramic coating application to enhance gloss and protect your paintwork.',
    mobileDescription: 'Long-lasting gloss and paintwork protection.',
    icon: CeramicIcon,
    accent: 'cyan',
  },
]

function ServiceRow({
  service,
  showDivider,
  onSelect,
}: {
  service: ServiceItem
  showDivider: boolean
  onSelect: (service: ServiceItem, trigger: HTMLButtonElement) => void
}) {
  return (
    <button
      type="button"
      onClick={(event) => onSelect(service, event.currentTarget)}
      className="service-row service-row-mobile w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
      aria-label={`View ${service.title} details and book via WhatsApp`}
    >
      <span className="font-display text-sm font-semibold tracking-wider text-pink uppercase">{service.number}</span>
      <h3 className="mt-1.5 text-base font-semibold tracking-wide text-white uppercase md:mt-2 md:text-lg">
        {service.title}
      </h3>
      <p className="service-description mt-1.5 max-w-md text-sm text-white/60 md:mt-2 md:text-[0.95rem]">
        {service.description}
      </p>
      {showDivider && <div className="editorial-divider editorial-divider-accent mt-5 md:mt-7" />}
    </button>
  )
}

function ServicePreviewCard({
  service,
  onSelect,
}: {
  service: ServiceItem
  onSelect: (service: ServiceItem, trigger: HTMLButtonElement) => void
}) {
  const Icon = service.icon

  return (
    <button
      type="button"
      onClick={(event) => onSelect(service, event.currentTarget)}
      className="service-preview-card shrink-0 snap-start cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
      aria-label={`View ${service.title} details and book via WhatsApp`}
    >
      <div className={`service-preview-panel service-preview-panel-${service.accent}`}>
        <Icon className={service.accent === 'pink' ? 'text-pink-light' : 'text-blue-light'} />
        <h3 className="mt-3 font-display text-sm font-semibold tracking-wide text-white uppercase">{service.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-white/55">{service.mobileDescription}</p>
      </div>
    </button>
  )
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const returnFocusRef = useRef<HTMLButtonElement | null>(null)
  const leftColumn = services.slice(0, 2)
  const rightColumn = services.slice(2, 4)

  const openService = (service: ServiceItem, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger
    setSelectedService(service)
  }

  const closeService = () => {
    setSelectedService(null)
  }

  return (
    <section id="services" className="section-padding bg-surface-secondary" aria-labelledby="services-heading">
      <PageContainer>
        <AnimateIn>
          <div className="section-intro hidden md:block">
            <SectionLabel>Services / Mobile Detailing</SectionLabel>
            <h2 id="services-heading" className="section-heading">
              Detailing That Comes to You
            </h2>
            <p className="section-copy">
              Malta-based mobile car detailing — we come to your home, workplace, or wherever your vehicle is parked.
            </p>
          </div>

          <div className="flex items-end justify-between gap-4 md:hidden">
            <h2 className="font-display text-lg font-bold tracking-tight text-white uppercase">Our Services</h2>
            <a
              href="#contact"
              className="text-link shrink-0 text-[0.65rem] font-medium tracking-[0.12em] text-white/50 uppercase transition-colors hover:text-white/80"
            >
              View All
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </AnimateIn>

        <div className="section-content hidden gap-12 md:grid md:grid-cols-2 md:items-start lg:gap-14">
          <div className="space-y-7">
            {leftColumn.map((service, index) => (
              <AnimateIn key={service.number} delay={index * 80}>
                <ServiceRow
                  service={service}
                  showDivider={index < leftColumn.length - 1}
                  onSelect={openService}
                />
              </AnimateIn>
            ))}
          </div>
          <div className="space-y-7">
            {rightColumn.map((service, index) => (
              <AnimateIn key={service.number} delay={(index + 2) * 80}>
                <ServiceRow
                  service={service}
                  showDivider={index < rightColumn.length - 1}
                  onSelect={openService}
                />
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="service-preview-scroll section-content -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-1 md:hidden">
          {services.map((service) => (
            <ServicePreviewCard key={service.number} service={service} onSelect={openService} />
          ))}
        </div>

        <AnimateIn delay={320}>
          <p className="mt-5 hidden text-sm text-white/45 md:mt-10 md:block">
            Enquire today to discuss your vehicle and the service that suits you best.
          </p>
        </AnimateIn>
      </PageContainer>

      {selectedService && (
        <ServiceModal
          title={selectedService.title}
          description={selectedService.description}
          isOpen={Boolean(selectedService)}
          onClose={closeService}
          returnFocusRef={returnFocusRef}
        />
      )}
    </section>
  )
}
