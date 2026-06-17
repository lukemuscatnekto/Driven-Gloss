import {
  INSURANCE_NOTE,
  PHONE_DISPLAY_INTL,
  PHONE_TEL_INTL,
  SERVICE_AREA,
} from '../constants'
import { AnimateIn } from './AnimateIn'
import { PageContainer } from './PageContainer'

export function LocalContact() {
  return (
    <section
      className="section-padding-compact border-t border-white/6 bg-surface-secondary"
      aria-labelledby="local-contact-heading"
    >
      <PageContainer>
        <AnimateIn>
          <h2 id="local-contact-heading" className="section-heading">
            Contact & Service Area
          </h2>
          <div className="section-content max-w-2xl space-y-3 text-sm leading-relaxed text-white/70">
            <p>
              <span className="font-medium text-white/85">Phone: </span>
              <a
                href={PHONE_TEL_INTL}
                className="text-blue-light transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
              >
                {PHONE_DISPLAY_INTL}
              </a>
            </p>
            <p>
              <span className="font-medium text-white/85">Service area: </span>
              {SERVICE_AREA}
            </p>
            <p className="text-white/55">{INSURANCE_NOTE}</p>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
