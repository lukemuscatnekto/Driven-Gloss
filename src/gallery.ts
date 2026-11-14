/**
 * BEFORE & AFTER GALLERY CONTENT
 *
 * This file is the only place you need to edit to add, remove or reorder
 * gallery projects. Put the image / video files in `public/gallery/` and
 * reference them here with a path starting `/gallery/`.
 *
 * Entries marked `placeholder: true` are dummy content. They are shown while
 * developing (`npm run dev`) and are hidden on the live site, so visitors
 * never see a placeholder. When you replace one with real assets, delete the
 * `placeholder: true` line.
 */

type GalleryBase = {
  /** Unique, lowercase, no spaces. e.g. 'bmw-3-series-interior' */
  id: string
  /** Short title shown under the item. e.g. 'BMW 3 Series — Deep Detail' */
  title: string
  /** Optional one-line description of the work carried out. */
  description?: string
  /** Remove this line once real assets are in place. */
  placeholder?: boolean
}

export type GalleryImage = {
  src: string
  /** Describe the photo for screen readers and search engines. */
  alt: string
}

/** Two photos shown with a drag-to-compare slider. */
export type CompareItem = GalleryBase & {
  type: 'compare'
  before: GalleryImage
  after: GalleryImage
}

/** A video with playback controls (before/after reel, process video, etc.). */
export type VideoItem = GalleryBase & {
  type: 'video'
  /** Path to an .mp4 file. Leave empty ('') on placeholders. */
  src: string
  /** Still image shown before the video plays. Strongly recommended. */
  poster: string
  /** Small tag shown on the video. */
  label: 'Before & After' | 'Process' | 'Result'
  /** Use 'portrait' for vertical phone footage. Defaults to 'landscape'. */
  orientation?: 'landscape' | 'portrait'
}

export type GalleryItem = CompareItem | VideoItem

const PLACEHOLDER_BEFORE: GalleryImage = {
  src: '/gallery/placeholders/before.svg',
  alt: 'Placeholder for a before photo',
}

const PLACEHOLDER_AFTER: GalleryImage = {
  src: '/gallery/placeholders/after.svg',
  alt: 'Placeholder for an after photo',
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Before / after photo comparisons ────────────────────────────────────
  // Example of a real entry:
  // {
  //   type: 'compare',
  //   id: 'bmw-3-series-interior',
  //   title: 'BMW 3 Series — Deep Detail',
  //   description: 'Interior deep clean and leather treatment.',
  //   before: { src: '/gallery/bmw-3-series-before.webp', alt: 'BMW 3 Series interior before detailing' },
  //   after: { src: '/gallery/bmw-3-series-after.webp', alt: 'BMW 3 Series interior after detailing' },
  // },
  {
    type: 'compare',
    id: 'placeholder-compare-1',
    title: 'Project title',
    description: 'Short description of the work carried out.',
    before: PLACEHOLDER_BEFORE,
    after: PLACEHOLDER_AFTER,
    placeholder: true,
  },
  {
    type: 'compare',
    id: 'placeholder-compare-2',
    title: 'Project title',
    description: 'Short description of the work carried out.',
    before: PLACEHOLDER_BEFORE,
    after: PLACEHOLDER_AFTER,
    placeholder: true,
  },

  // ── Videos ──────────────────────────────────────────────────────────────
  // Example of a real entry:
  // {
  //   type: 'video',
  //   id: 'audi-a3-full-detail',
  //   title: 'Audi A3 — Full Detail',
  //   label: 'Before & After',
  //   src: '/gallery/audi-a3-full-detail.mp4',
  //   poster: '/gallery/audi-a3-full-detail-poster.webp',
  //   orientation: 'portrait',
  // },
  {
    type: 'video',
    id: 'placeholder-video-1',
    title: 'Video title',
    label: 'Before & After',
    src: '',
    poster: '/gallery/placeholders/video-poster.svg',
    placeholder: true,
  },
  {
    type: 'video',
    id: 'placeholder-video-2',
    title: 'Video title',
    label: 'Process',
    src: '',
    poster: '/gallery/placeholders/video-poster.svg',
    placeholder: true,
  },
  {
    type: 'video',
    id: 'placeholder-video-3',
    title: 'Video title',
    label: 'Result',
    src: '',
    poster: '/gallery/placeholders/video-poster.svg',
    placeholder: true,
  },
]
