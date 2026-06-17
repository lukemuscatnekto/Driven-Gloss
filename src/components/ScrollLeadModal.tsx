import { useEffect, useRef, useState } from 'react'
import {
  hasCtaInteraction,
  hasSeenScrollModal,
  markCtaInteraction,
  markScrollModalSeen,
} from '../utils/ctaInteraction'
import { WaitlistForm } from './WaitlistForm'

export function ScrollLeadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (hasCtaInteraction() || hasSeenScrollModal() || isOpen) return

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return

      const progress = window.scrollY / scrollHeight
      if (progress >= 0.6) {
        markScrollModalSeen()
        setIsOpen(true)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scroll-lead-modal-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md border border-white/10 bg-surface-secondary p-6 md:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 flex min-h-11 min-w-11 items-center justify-center text-sm font-medium tracking-wide text-white/70 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          ×
        </button>
        <h2 id="scroll-lead-modal-title" className="pr-8 text-lg font-bold tracking-tight text-white uppercase">
          Don&apos;t miss the July launch.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Be the first to book. Leave your email and get an extra 5% off your first detail.
        </p>
        <WaitlistForm
          source="scroll-modal"
          label="Email"
          submitLabel="Get Early Access"
          successMessage="You're on the list. We'll contact you first when bookings open."
          inputId="scroll-modal-email"
          className="mt-5"
          onSuccess={() => {
            markCtaInteraction()
            window.setTimeout(close, 1800)
          }}
        />
      </div>
    </div>
  )
}
