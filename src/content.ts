import { GALLERY_ITEMS } from './gallery'
import { GOOGLE_REVIEWS_URL, REVIEWS } from './reviews'

/**
 * Placeholder gallery items and reviews are visible in development only, so
 * the live site never shows dummy content. To preview them in a production
 * build, run: VITE_SHOW_PLACEHOLDERS=true npm run build
 */
export const SHOW_PLACEHOLDERS =
  import.meta.env.DEV || import.meta.env.VITE_SHOW_PLACEHOLDERS === 'true'

export const visibleGalleryItems = GALLERY_ITEMS.filter((item) => !item.placeholder || SHOW_PLACEHOLDERS)

export const visibleReviews = REVIEWS.filter((review) => !review.placeholder || SHOW_PLACEHOLDERS)

export const showGallerySection = visibleGalleryItems.length > 0

export const showReviewsSection = visibleReviews.length > 0 || GOOGLE_REVIEWS_URL !== ''
