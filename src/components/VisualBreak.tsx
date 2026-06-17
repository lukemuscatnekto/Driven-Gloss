import { HERO_IMAGE_PATH } from '../constants'
import { PageContainer } from './PageContainer'

export function VisualBreak() {
  return (
    <section className="visual-break" aria-label="Mobile detailing wherever you are">
      <div
        className="visual-break-bg absolute inset-0"
        style={{ backgroundImage: `url('${HERO_IMAGE_PATH}')` }}
        aria-hidden="true"
      />
      <div className="visual-break-overlay absolute inset-0" aria-hidden="true" />
      <PageContainer className="relative flex h-full items-center">
        <div className="visual-break-text-panel max-w-md py-3 pr-3 md:py-5 md:pr-8">
          <p className="font-display text-[0.95rem] font-semibold tracking-tight text-white uppercase md:text-xl">
            Mobile Detailing. Wherever You Are.
          </p>
          <p className="mt-1 text-xs tracking-wide text-white/55 md:mt-1.5 md:text-sm">Malta-based mobile car care.</p>
        </div>
      </PageContainer>
    </section>
  )
}
