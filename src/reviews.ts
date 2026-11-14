/**
 * GOOGLE REVIEWS CONTENT
 *
 * Only genuine Google reviews belong here. Copy each one exactly as it
 * appears on the Driven Gloss Google Business Profile: the reviewer's name
 * as shown on Google, their star rating, and their unedited review text.
 * Never write, reword or "improve" a review.
 *
 * Entries marked `placeholder: true` are layout dummies. They are shown while
 * developing (`npm run dev`) and are hidden on the live site.
 */

/**
 * Link to the Driven Gloss reviews on Google.
 * Google Business Profile → "Ask for reviews" / "Share review form" gives a
 * short link (https://g.page/r/…); the profile's Google Maps link also works.
 * While this is empty, the "Read all reviews on Google" button is not shown.
 */
export const GOOGLE_REVIEWS_URL: string = ''

/**
 * Optional overall rating exactly as displayed on Google, e.g.
 * { average: 5.0, total: 12 }. Keep it up to date, or leave as null.
 */
export const GOOGLE_RATING = null as { average: number; total: number } | null

export type Review = {
  /** Unique, lowercase, no spaces. */
  id: string
  /** Reviewer name exactly as shown on Google. */
  name: string
  /** Star rating the reviewer gave (1–5). */
  rating: 1 | 2 | 3 | 4 | 5
  /** The review text, copied word for word. */
  text: string
  /** Optional month and year of the review, e.g. 'August 2026'. */
  date?: string
  /** Remove this line once this is a real review. */
  placeholder?: boolean
}

export const REVIEWS: Review[] = [
  // Example of a real entry:
  // {
  //   id: 'review-1',
  //   name: 'Name as shown on Google',
  //   rating: 5,
  //   text: 'Exact review text copied from Google.',
  //   date: 'August 2026',
  // },
  {
    id: 'placeholder-review-1',
    name: 'Reviewer name',
    rating: 5,
    text: 'Placeholder. Paste the exact text of a genuine Google review here.',
    placeholder: true,
  },
  {
    id: 'placeholder-review-2',
    name: 'Reviewer name',
    rating: 5,
    text: 'Placeholder. Paste the exact text of a genuine Google review here.',
    placeholder: true,
  },
  {
    id: 'placeholder-review-3',
    name: 'Reviewer name',
    rating: 5,
    text: 'Placeholder. Paste the exact text of a genuine Google review here.',
    placeholder: true,
  },
]
