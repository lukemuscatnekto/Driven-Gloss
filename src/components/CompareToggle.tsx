import { useState } from 'react'
import type { GalleryImage } from '../gallery'

type CompareToggleProps = {
  before: GalleryImage
  after: GalleryImage
  /** Used in the accessible name of the control. */
  title: string
  orientation?: 'landscape' | 'portrait'
}

type Side = 'before' | 'after'

/**
 * Before/after view for photos taken from different angles, where a slider
 * would not line up. Visitors switch between the two photos with the Before /
 * After buttons or by tapping the photo.
 */
export function CompareToggle({ before, after, title, orientation = 'landscape' }: CompareToggleProps) {
  const [side, setSide] = useState<Side>('before')

  return (
    <div
      className={`compare-toggle-frame ${orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-pointer"
        onClick={() => setSide((current) => (current === 'before' ? 'after' : 'before'))}
        aria-label={`Show the ${side === 'before' ? 'after' : 'before'} photo: ${title}`}
      >
        {(['before', 'after'] as const).map((key) => {
          const image = key === 'before' ? before : after
          return (
            <img
              key={key}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              aria-hidden={side !== key}
              className={`compare-image transition-opacity duration-300 ${side === key ? 'opacity-100' : 'opacity-0'}`}
            />
          )
        })}
      </button>

      <div className="compare-toggle-switch" role="group" aria-label={`Before or after: ${title}`}>
        {(['before', 'after'] as const).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={side === key}
            onClick={() => setSide(key)}
            className={`compare-toggle-option ${
              side === key ? (key === 'after' ? 'compare-toggle-option-after' : 'compare-toggle-option-before') : ''
            }`}
          >
            {key === 'before' ? 'Before' : 'After'}
          </button>
        ))}
      </div>
    </div>
  )
}
