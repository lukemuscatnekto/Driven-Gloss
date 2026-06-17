import { useEffect, useRef } from 'react'

type ImageLightboxProps = {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
  returnFocusRef?: React.RefObject<HTMLElement | null>
}

export function ImageLightbox({ src, alt, isOpen, onClose, returnFocusRef }: ImageLightboxProps) {
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
      className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm print:hidden md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${alt}`}
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute -top-10 right-0 flex min-h-11 items-center text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light md:-right-2 md:-top-12"
        >
          Close ×
        </button>
        <img src={src} alt={alt} decoding="async" className="max-h-[85vh] w-auto max-w-full object-contain" />
      </div>
    </div>
  )
}
