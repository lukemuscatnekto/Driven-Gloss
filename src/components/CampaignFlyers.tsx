import { useMemo, useState } from 'react'
import { CAMPAIGN_FLYERS } from '../campaign'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SOCIAL_LINK_PROPS } from '../constants'

type Flyer = (typeof CAMPAIGN_FLYERS)[number]
type LoadState = 'loading' | 'loaded' | 'error'

type CampaignFlyersProps = {
  onOpenFlyer: (flyer: Flyer, trigger: HTMLButtonElement) => void
}

function CampaignFlyersFallback() {
  return (
    <div className="mt-4 rounded-sm border border-white/10 bg-surface-secondary p-5 text-center">
      <p className="text-sm leading-relaxed text-white/70">
        Follow{' '}
        <a
          href={INSTAGRAM_URL}
          {...SOCIAL_LINK_PROPS}
          className="text-blue-light underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          {INSTAGRAM_HANDLE}
        </a>{' '}
        on Instagram for launch updates.
      </p>
    </div>
  )
}

function CampaignFlyerThumb({
  flyer,
  loadState,
  onLoad,
  onError,
  onOpen,
}: {
  flyer: Flyer
  loadState: LoadState
  onLoad: () => void
  onError: () => void
  onOpen: (flyer: Flyer, trigger: HTMLButtonElement) => void
}) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(flyer, event.currentTarget)}
      className="campaign-thumb campaign-scroll-card group text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
      aria-label={`View ${flyer.title} campaign post`}
      disabled={loadState === 'error'}
    >
      <div className="campaign-thumb-frame">
        <div className="campaign-thumb-image-wrap">
          {loadState === 'loading' && (
            <div className="campaign-thumb-skeleton absolute inset-0" aria-hidden="true">
              <span className="sr-only">Loading campaign post preview</span>
            </div>
          )}
          {loadState !== 'error' && (
            <img
              src={flyer.src}
              alt={flyer.alt}
              loading="lazy"
              decoding="async"
              onLoad={onLoad}
              onError={onError}
              className={`campaign-thumb-image ${loadState === 'loading' ? 'opacity-0' : 'opacity-100'}`}
            />
          )}
          {loadState === 'error' && (
            <div className="flex h-full items-center justify-center px-4 text-center text-xs text-white/50">
              Preview unavailable
            </div>
          )}
          {loadState === 'loaded' && (
            <div className="campaign-thumb-overlay" aria-hidden="true">
              <span className="campaign-thumb-label">View Campaign Post</span>
            </div>
          )}
        </div>
      </div>
      <span className="mt-2 block text-[0.65rem] tracking-[0.12em] text-white/50 uppercase transition-colors group-hover:text-white/70">
        {flyer.title}
      </span>
    </button>
  )
}

export function CampaignFlyers({ onOpenFlyer }: CampaignFlyersProps) {
  const [loadStates, setLoadStates] = useState<Record<string, LoadState>>(() =>
    Object.fromEntries(CAMPAIGN_FLYERS.map((flyer) => [flyer.id, 'loading'])),
  )

  const allFailed = useMemo(
    () => CAMPAIGN_FLYERS.every((flyer) => loadStates[flyer.id] === 'error'),
    [loadStates],
  )

  const anyLoading = useMemo(
    () => CAMPAIGN_FLYERS.some((flyer) => loadStates[flyer.id] === 'loading'),
    [loadStates],
  )

  const setFlyerState = (id: string, state: LoadState) => {
    setLoadStates((previous) => ({ ...previous, [id]: state }))
  }

  if (allFailed) {
    return <CampaignFlyersFallback />
  }

  return (
    <>
      {anyLoading && (
        <p className="sr-only" aria-live="polite">
          Loading launch post previews
        </p>
      )}
      <div
        className="campaign-flyers-scroll mt-4 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-1 md:mx-0 md:mt-5 md:grid md:max-w-lg md:grid-cols-2 md:gap-4 md:overflow-visible md:p-0 md:snap-none"
        aria-busy={anyLoading}
      >
        {CAMPAIGN_FLYERS.map((flyer) => (
          <CampaignFlyerThumb
            key={flyer.id}
            flyer={flyer}
            loadState={loadStates[flyer.id] ?? 'loading'}
            onLoad={() => setFlyerState(flyer.id, 'loaded')}
            onError={() => setFlyerState(flyer.id, 'error')}
            onOpen={onOpenFlyer}
          />
        ))}
      </div>
    </>
  )
}
