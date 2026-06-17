import { useState, type FormEvent } from 'react'
import { markCtaInteraction } from '../utils/ctaInteraction'
import { saveLead } from '../utils/leads'

type WaitlistFormProps = {
  source: string
  label?: string
  submitLabel?: string
  successMessage?: string
  className?: string
  inputId?: string
  onSuccess?: () => void
}

export function WaitlistForm({
  source,
  label = 'Join the Waitlist',
  submitLabel = 'Join',
  successMessage = "You're on the list. We'll contact you first when bookings open.",
  className = '',
  inputId = 'waitlist-email',
  onSuccess,
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('idle')

    const result = saveLead(email, source)
    if (result.invalid) {
      setStatus('error')
      return
    }

    if (result.duplicate) {
      setStatus('duplicate')
      markCtaInteraction()
      onSuccess?.()
      return
    }

    markCtaInteraction()
    setStatus('success')
    setEmail('')
    onSuccess?.()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      aria-label={label}
    >
      <label htmlFor={inputId} className="block text-xs font-medium tracking-[0.14em] text-white/70 uppercase">
        {label}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder="you@example.com"
          className="min-h-11 flex-1 rounded-sm border border-white/12 bg-surface-secondary px-3 text-sm text-white placeholder:text-white/35 focus-visible:border-pink/40 focus-visible:outline-none"
        />
        <button
          type="submit"
          aria-label={label}
          className="min-h-11 shrink-0 rounded-sm border border-white/15 bg-charcoal-light px-4 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:border-white/30 hover:bg-charcoal-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light"
        >
          {submitLabel}
        </button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-xs text-blue-light" role="status">
          {successMessage}
        </p>
      )}
      {status === 'duplicate' && (
        <p className="mt-2 text-xs text-white/55" role="status">
          This email is already on the list.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-pink-light" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}
