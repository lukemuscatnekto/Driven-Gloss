import { useEffect, useRef } from 'react'
import { SOCIAL_LINK_PROPS, WHATSAPP_URL, getWhatsAppServiceUrl } from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackLinkClick } from '../utils/tracking'

type ServiceModalProps = {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  returnFocusRef?: React.RefObject<HTMLElement | null>
}

export function ServiceModal({
  title,
  description,
  isOpen,
  onClose,
  returnFocusRef,
}: ServiceModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      returnFocusRef?.current?.focus()
    }
  }, [isOpen, onClose, returnFocusRef])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md border border-white/10 bg-surface-secondary p-6 md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close service details"
          className="absolute top-4 right-4 flex min-h-11 min-w-11 items-center justify-center text-sm font-medium tracking-wide text-white/70 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          ×
        </button>
        <p className="font-display text-sm font-semibold tracking-wider text-pink uppercase">Service</p>
        <h3 id="service-modal-title" className="mt-2 pr-8 text-lg font-semibold tracking-wide text-white uppercase">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
        <a
          href={getWhatsAppServiceUrl(title)}
          {...SOCIAL_LINK_PROPS}
          onClick={() => {
            markCtaInteraction()
            trackLinkClick(WHATSAPP_URL, { source: `service-${title}` })
          }}
          className="btn-mobile-rounded mt-6 inline-flex min-h-11 w-full items-center justify-center bg-blue text-sm font-semibold tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light md:rounded-sm"
        >
          Book on WhatsApp
        </a>
      </div>
    </div>
  )
}
