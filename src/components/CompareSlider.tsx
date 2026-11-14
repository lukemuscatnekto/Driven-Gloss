import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import type { GalleryImage } from '../gallery'

type CompareSliderProps = {
  before: GalleryImage
  after: GalleryImage
  /** Used in the accessible name of the slider. */
  title: string
}

const KEY_STEP = 5

function clamp(value: number) {
  return Math.min(100, Math.max(0, value))
}

/**
 * Before/after image comparison. Drag anywhere on the image (or use the
 * arrow keys on the handle) to move the divider. Vertical swipes still
 * scroll the page on touch devices.
 */
export function CompareSlider({ before, after, title }: CompareSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const updateFromPointer = (clientX: number) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    if (rect.width === 0) return
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
    updateFromPointer(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging) updateFromPointer(event.clientX)
  }

  const stopDragging = () => setDragging(false)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowLeft: position - KEY_STEP,
      ArrowDown: position - KEY_STEP,
      ArrowRight: position + KEY_STEP,
      ArrowUp: position + KEY_STEP,
      Home: 0,
      End: 100,
    }
    if (!(event.key in moves)) return
    event.preventDefault()
    setPosition(clamp(moves[event.key]))
  }

  return (
    <div
      ref={frameRef}
      className={`compare-frame ${dragging ? 'compare-frame-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <img
        src={after.src}
        alt={after.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="compare-image"
      />
      <img
        src={before.src}
        alt={before.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="compare-image"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className="compare-tag left-3" aria-hidden="true">
        Before
      </span>
      <span className="compare-tag compare-tag-after right-3" aria-hidden="true">
        After
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison: ${title}`}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% before, ${100 - Math.round(position)}% after`}
        onKeyDown={handleKeyDown}
        className="compare-handle"
        style={{ left: `${position}%` }}
      >
        <span className="compare-handle-grip" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L4 12L9 18M15 6L20 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
