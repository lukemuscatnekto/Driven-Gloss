import { INSTAGRAM_URL, PHONE_TEL, SOCIAL_LINK_PROPS } from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'

export function StickyMobileCTA() {
  return (
    <div
      className="sticky-mobile-cta fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 bg-charcoal/95 backdrop-blur-md print:hidden md:hidden"
      role="region"
      aria-label="Quick contact actions"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid min-h-[54px] grid-cols-2 gap-px bg-white/10">
        <a
          href={PHONE_TEL}
          onClick={() => {
            markCtaInteraction()
            trackLinkClick(PHONE_TEL, { source: 'sticky-call' })
          }}
          className="flex min-h-[54px] items-center justify-center bg-pink text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-pink-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-light"
        >
          Call
        </a>
        <a
          href={INSTAGRAM_URL}
          {...SOCIAL_LINK_PROPS}
          onClick={() => {
            markCtaInteraction()
            trackLinkClick(INSTAGRAM_URL, { source: 'sticky-instagram' })
          }}
          className="flex min-h-[54px] items-center justify-center bg-blue text-sm font-semibold tracking-widest text-charcoal uppercase transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-light"
        >
          Instagram
        </a>
      </div>
    </div>
  )
}
