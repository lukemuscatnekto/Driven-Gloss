import { SOCIAL_LINK_PROPS } from '../constants'
import { showReviewsSection, visibleReviews } from '../content'
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, type Review } from '../reviews'
import { AnimateIn } from './AnimateIn'
import { Button } from './Button'
import { PageContainer } from './PageContainer'
import { SectionLabel } from './SectionLabel'

const STAR_PATH =
  'M12 2.5l2.95 6.2 6.8.82-5.02 4.67 1.3 6.71L12 17.6l-6.03 3.3 1.3-6.71L2.25 9.52l6.8-.82L12 2.5z'

function Stars({ rating, muted = false }: { rating: number; muted?: boolean }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={muted ? 'text-white/20' : star <= rating ? 'text-amber-400' : 'text-white/15'}
        >
          <path d={STAR_PATH} fill="currentColor" />
        </svg>
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review-card m-0 flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={review.rating} muted={review.placeholder} />
        <span className="text-[0.65rem] font-medium tracking-[0.14em] text-white/40 uppercase">Google review</span>
      </div>
      <blockquote className="m-0 mt-4 flex-1 text-sm leading-relaxed text-white/75 md:text-[0.95rem]">
        {review.text}
      </blockquote>
      <figcaption className="mt-5 border-t border-white/8 pt-4">
        <p className="text-sm font-semibold tracking-wide text-white">{review.name}</p>
        {review.date && <p className="mt-0.5 text-xs text-white/45">{review.date}</p>}
        {review.placeholder && (
          <span className="mt-2 inline-block border border-dashed border-white/25 px-2 py-0.5 text-[0.6rem] font-medium tracking-[0.16em] text-white/55 uppercase">
            Placeholder — hidden on the live site
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export function GoogleReviews() {
  if (!showReviewsSection) return null

  return (
    <section
      id="reviews"
      className="section-padding border-t border-white/6 bg-surface-primary"
      aria-labelledby="reviews-heading"
    >
      <PageContainer>
        <AnimateIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="section-intro">
              <SectionLabel>Google Reviews</SectionLabel>
              <h2 id="reviews-heading" className="section-heading">
                What Our Customers Say.
              </h2>
              <p className="section-copy">Genuine reviews left by Driven Gloss customers on Google.</p>
            </div>

            {GOOGLE_RATING && (
              <div className="flex items-center gap-4 border border-white/8 bg-surface-secondary px-5 py-4">
                <p className="font-display text-4xl leading-none font-bold text-white">
                  {GOOGLE_RATING.average.toFixed(1)}
                </p>
                <div>
                  <Stars rating={Math.round(GOOGLE_RATING.average)} />
                  <p className="mt-1.5 text-xs text-white/55">
                    Based on {GOOGLE_RATING.total} Google {GOOGLE_RATING.total === 1 ? 'review' : 'reviews'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimateIn>

        {visibleReviews.length > 0 && (
          <ul className="section-content m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <li key={review.id}>
                <AnimateIn delay={(index % 3) * 80} className="h-full">
                  <ReviewCard review={review} />
                </AnimateIn>
              </li>
            ))}
          </ul>
        )}

        {GOOGLE_REVIEWS_URL && (
          <AnimateIn>
            <div className="mt-8 md:mt-10">
              <Button
                href={GOOGLE_REVIEWS_URL}
                variant="secondary"
                size="lg"
                className="btn-mobile-rounded w-full sm:w-auto"
                trackingSource="google-reviews"
                {...SOCIAL_LINK_PROPS}
              >
                Read All Reviews on Google
              </Button>
            </div>
          </AnimateIn>
        )}
      </PageContainer>
    </section>
  )
}
