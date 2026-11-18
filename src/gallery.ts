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

/** A before photo and an after photo of the same job. */
export type CompareItem = GalleryBase & {
  type: 'compare'
  before: GalleryImage
  after: GalleryImage
  /** Use 'portrait' for upright phone photos (3:4). Defaults to 'landscape' (4:3). */
  orientation?: 'landscape' | 'portrait'
  /**
   * 'slider' (default): drag a divider across the photo. Best when both photos
   * were taken from the same spot so they line up.
   * 'toggle': tap Before / After to switch between them. Use this when the two
   * photos were taken from different angles.
   */
  mode?: 'slider' | 'toggle'
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

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Before / after photo comparisons ────────────────────────────────────
  // Shown in this order. To add one, copy an entry and change the details.
  {
    type: 'compare',
    id: 'vw-interior',
    title: 'Volkswagen — Interior',
    orientation: 'portrait',
    before: {
      src: '/gallery/vw-interior-before.webp',
      alt: 'Volkswagen interior before detailing, with mould and dirt on the steering wheel, gear knob and seat',
    },
    after: {
      src: '/gallery/vw-interior-after.webp',
      alt: 'Volkswagen interior after detailing, with a clean steering wheel, dashboard and seat',
    },
  },
  {
    type: 'compare',
    id: 'boot-spare-wheel-well',
    title: 'Boot & Spare-Wheel Well',
    orientation: 'portrait',
    before: {
      src: '/gallery/boot-before.webp',
      alt: 'Car boot and spare-wheel well before detailing, with stains and debris',
    },
    after: {
      src: '/gallery/boot-after.webp',
      alt: 'Car boot and spare-wheel well after detailing, cleaned',
    },
  },
  {
    type: 'compare',
    id: 'toyota-exterior',
    title: 'Toyota — Exterior',
    orientation: 'portrait',
    before: {
      src: '/gallery/toyota-front-before.webp',
      alt: 'Silver Toyota front before detailing, with yellowed headlights',
    },
    after: {
      src: '/gallery/toyota-front-after.webp',
      alt: 'Silver Toyota front after detailing, with clear headlights',
    },
  },
  {
    type: 'compare',
    id: 'jeep-avenger-exterior',
    title: 'Jeep Avenger — Exterior',
    orientation: 'portrait',
    before: {
      src: '/gallery/jeep-exterior-before.webp',
      alt: 'Black Jeep Avenger before detailing, covered in dust and water spots',
    },
    after: {
      src: '/gallery/jeep-exterior-after.webp',
      alt: 'Black Jeep Avenger after detailing, with a clean glossy finish',
    },
  },
  {
    type: 'compare',
    id: 'jeep-avenger-interior',
    title: 'Jeep Avenger — Interior',
    orientation: 'portrait',
    mode: 'toggle',
    before: {
      src: '/gallery/jeep-interior-before.webp',
      alt: 'Jeep Avenger interior before detailing, with debris on the floor mat and door sill',
    },
    after: {
      src: '/gallery/jeep-interior-after.webp',
      alt: 'Jeep Avenger interior after detailing, with clean seats, dashboard and carpet mats',
    },
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
