import { PHONE_DISPLAY, PHONE_TEL } from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'

export function HeroMobileCTA() {
  return (
    <a
      href={PHONE_TEL}
      onClick={markCtaInteraction}
      className="hero-mobile-cta group flex min-h-[58px] w-full items-center justify-between gap-3 rounded-xl bg-pink px-4 py-3 transition-colors hover:bg-pink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light md:hidden"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.5 4.5H9L10.5 9.5L8.2 11.2C9.2 13.6 11.4 15.8 13.8 16.8L15.5 14.5L20.5 16V18.5C20.5 19.05 20.05 19.5 19.5 19.5C11.2 19.5 4.5 12.8 4.5 4.5C4.5 3.95 4.95 3.5 5.5 3.5H6.5V4.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-white/90 uppercase">
            Call / Book Now
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white">{PHONE_DISPLAY}</span>
        </span>
      </span>
      <span
        className="text-white/80 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  )
}
