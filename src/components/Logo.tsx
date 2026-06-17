import { useState } from 'react'
import { LOGO_FOOTER_PATH, LOGO_NAV_PATH } from '../constants'

const LOGO_ALT = 'Driven Gloss mobile car detailing logo — Malta'
const LOGO_FOOTER_ALT = 'Driven Gloss logo — mobile detailing service in Malta'

type LogoProps = {
  className?: string
  variant?: 'nav' | 'footer'
}

function NavWordmark() {
  return (
    <span className="font-display leading-none font-semibold tracking-[0.08em] text-white uppercase">
      <span className="text-[0.6rem] sm:text-[0.65rem] md:text-xs">Driven </span>
      <span className="text-[0.6rem] text-pink-light sm:text-[0.65rem] md:text-xs">Gloss</span>
    </span>
  )
}

export function Logo({ className = '', variant = 'nav' }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const src = variant === 'footer' ? LOGO_FOOTER_PATH : LOGO_NAV_PATH

  if (variant === 'nav') {
    const badgeHeight = 'h-[36px] sm:h-9 md:h-11 lg:h-[2.9rem]'

    if (imageFailed) {
      return (
        <span
          className={`font-display inline-flex items-center text-sm font-bold tracking-[0.12em] text-white uppercase ${className}`}
        >
          Driven <span className="text-pink-light">Gloss</span>
        </span>
      )
    }

    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <img
          src={src}
          alt={LOGO_ALT}
          width={512}
          height={512}
          className={`${badgeHeight} w-auto shrink-0 object-contain`}
          onError={() => setImageFailed(true)}
        />
        <NavWordmark />
      </span>
    )
  }

  if (imageFailed) {
    return (
      <span
        className={`font-display inline-flex items-center text-lg font-bold tracking-[0.12em] text-white uppercase ${className}`}
      >
        Driven <span className="text-pink-light">Gloss</span>
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={LOGO_FOOTER_ALT}
      loading="lazy"
      decoding="async"
      className={`h-auto w-auto max-w-[142px] object-contain md:max-w-[200px] ${className}`}
      onError={() => setImageFailed(true)}
    />
  )
}
