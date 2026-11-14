import type { VideoItem } from '../gallery'

type GalleryVideoProps = {
  item: VideoItem
}

/**
 * Gallery video with native playback controls. The file is only downloaded
 * when the visitor presses play, so videos do not slow down the page.
 */
export function GalleryVideo({ item }: GalleryVideoProps) {
  const portrait = item.orientation === 'portrait'

  return (
    <div className={`gallery-video-frame ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
      {item.src ? (
        <video
          className="h-full w-full bg-black object-contain"
          src={item.src}
          poster={item.poster || undefined}
          controls
          playsInline
          preload="none"
          aria-label={`${item.label} video: ${item.title}`}
        >
          Your browser does not support embedded video.
        </video>
      ) : (
        <img
          src={item.poster}
          alt="Placeholder for a video"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      )}
      <span className="compare-tag left-3" aria-hidden="true">
        {item.label}
      </span>
    </div>
  )
}
