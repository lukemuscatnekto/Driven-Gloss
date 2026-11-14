import { SOCIAL_LINK_PROPS, getWhatsAppQuickQuoteUrl } from '../constants'
import { showGallerySection, visibleGalleryItems } from '../content'
import type { CompareItem, GalleryItem, VideoItem } from '../gallery'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { CompareSlider } from './CompareSlider'
import { GalleryVideo } from './GalleryVideo'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'

function PlaceholderNote() {
  return (
    <span className="mt-2 inline-block border border-dashed border-white/25 px-2 py-0.5 text-[0.6rem] font-medium tracking-[0.16em] text-white/55 uppercase">
      Placeholder — hidden on the live site
    </span>
  )
}

function Caption({ item }: { item: GalleryItem }) {
  return (
    <figcaption className="mt-3 md:mt-4">
      <h3 className="text-sm font-semibold tracking-wide text-white uppercase md:text-base">{item.title}</h3>
      {item.description && <p className="mt-1 text-sm leading-relaxed text-white/60">{item.description}</p>}
      {item.placeholder && <PlaceholderNote />}
    </figcaption>
  )
}

export function BeforeAfterGallery() {
  if (!showGallerySection) return null

  const comparisons = visibleGalleryItems.filter((item): item is CompareItem => item.type === 'compare')
  const videos = visibleGalleryItems.filter((item): item is VideoItem => item.type === 'video')

  return (
    <section
      id="results"
      className="section-padding border-t border-white/6 bg-surface-secondary"
      aria-labelledby="results-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="section-intro">
            <SectionLabel>Our Work</SectionLabel>
            <h2 id="results-heading" className="section-heading">
              Before &amp; After.
            </h2>
            <p className="section-copy">
              Real results from Driven Gloss details across Malta.
              {comparisons.length > 0 && ' Drag the slider to compare.'}
            </p>
          </div>
        </AnimateIn>

        {comparisons.length > 0 && (
          <div className="section-content grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
            {comparisons.map((item, index) => (
              <AnimateIn key={item.id} delay={(index % 2) * 80}>
                <figure className="m-0">
                  <CompareSlider before={item.before} after={item.after} title={item.title} />
                  <Caption item={item} />
                </figure>
              </AnimateIn>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className={comparisons.length > 0 ? 'mt-10 border-t border-white/6 pt-8 md:mt-14 md:pt-12' : 'section-content'}>
            {comparisons.length > 0 && <h3 className="section-label">Watch the Results</h3>}
            <div
              className={`grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
                comparisons.length > 0 ? 'mt-5 md:mt-6' : ''
              }`}
            >
              {videos.map((item, index) => (
                <AnimateIn key={item.id} delay={(index % 3) * 80}>
                  <figure className="m-0">
                    <GalleryVideo item={item} />
                    <Caption item={item} />
                  </figure>
                </AnimateIn>
              ))}
            </div>
          </div>
        )}

        <AnimateIn>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:pt-10">
            <p className="text-sm leading-relaxed text-white/65 md:text-base">
              Want results like these for your car?
            </p>
            <Button
              href={getWhatsAppQuickQuoteUrl()}
              variant="primary"
              size="lg"
              className="btn-mobile-rounded w-full sm:w-auto"
              trackingSource="gallery-whatsapp-quote"
              {...SOCIAL_LINK_PROPS}
            >
              Get WhatsApp Quote
            </Button>
          </div>
        </AnimateIn>
      </PageContainer>
    </section>
  )
}
