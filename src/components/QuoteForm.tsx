import { useState, type FormEvent } from 'react'
import {
  QUOTE_SERVICE_OPTIONS,
  getWhatsAppQuoteUrl,
} from '../constants'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { trackQuoteFormSubmit, trackWhatsAppClick } from '../utils/tracking'

type QuoteFormProps = {
  className?: string
  source?: string
}

type FieldErrors = {
  car?: string
  location?: string
  service?: string
}

const fieldClassName =
  'min-h-11 w-full rounded-sm border border-white/12 bg-surface-secondary px-3 text-sm text-white placeholder:text-white/35 focus-visible:border-pink/40 focus-visible:outline-none'
const labelClassName = 'block text-xs font-medium tracking-[0.14em] text-white/70 uppercase'

export function QuoteForm({ className = '', source = 'hero-quote' }: QuoteFormProps) {
  const [car, setCar] = useState('')
  const [location, setLocation] = useState('')
  const [service, setService] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedCar = car.trim()
    const trimmedLocation = location.trim()
    const nextErrors: FieldErrors = {}

    if (!trimmedCar) nextErrors.car = 'Please enter your car make and model.'
    if (!trimmedLocation) nextErrors.location = 'Please enter your location in Malta.'
    if (!service) nextErrors.service = 'Please select a service.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const quoteUrl = getWhatsAppQuoteUrl(trimmedCar, trimmedLocation, service)

    markCtaInteraction()
    trackQuoteFormSubmit(source)
    trackWhatsAppClick(source)

    window.open(quoteUrl, '_blank', 'noopener,noreferrer')
  }

  const clearError = (field: keyof FieldErrors) => {
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      aria-label="Get a Free Quote"
      noValidate
    >
      <p className={labelClassName}>Get a Free Quote</p>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        Tell us your car model, location, and the service you need. We&apos;ll reply on WhatsApp with a clear
        quote.
      </p>
      <p className="mt-2 text-[0.65rem] tracking-[0.08em] text-white/45">
        No obligation · Fast reply · Mobile detailing across Malta
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="quote-car" className={labelClassName}>
            Car make / model
          </label>
          <input
            id="quote-car"
            name="car"
            type="text"
            autoComplete="off"
            value={car}
            onChange={(event) => {
              setCar(event.target.value)
              clearError('car')
            }}
            placeholder="e.g. BMW 1 Series, Toyota Yaris, Ford Ranger"
            className={`${fieldClassName} mt-1.5`}
            aria-invalid={errors.car ? true : undefined}
            aria-describedby={errors.car ? 'quote-car-error' : undefined}
          />
          {errors.car && (
            <p id="quote-car-error" className="mt-1.5 text-xs text-pink-light" role="alert">
              {errors.car}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-location" className={labelClassName}>
            Location in Malta
          </label>
          <input
            id="quote-location"
            name="location"
            type="text"
            autoComplete="off"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value)
              clearError('location')
            }}
            placeholder="e.g. Mosta, Sliema, Bugibba"
            className={`${fieldClassName} mt-1.5`}
            aria-invalid={errors.location ? true : undefined}
            aria-describedby={errors.location ? 'quote-location-error' : undefined}
          />
          {errors.location && (
            <p id="quote-location-error" className="mt-1.5 text-xs text-pink-light" role="alert">
              {errors.location}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-service" className={labelClassName}>
            Service needed
          </label>
          <select
            id="quote-service"
            name="service"
            value={service}
            onChange={(event) => {
              setService(event.target.value)
              clearError('service')
            }}
            className={`${fieldClassName} mt-1.5`}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? 'quote-service-error' : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {QUOTE_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="quote-service-error" className="mt-1.5 text-xs text-pink-light" role="alert">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="btn mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-pink text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-pink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
      >
        Get My Free Quote
      </button>
      <p className="mt-2 text-[0.65rem] leading-relaxed text-white/45">
        WhatsApp opens next — send photos for a more accurate quote.
      </p>
    </form>
  )
}
