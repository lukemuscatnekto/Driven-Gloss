import { useEffect, useState } from 'react'
import { CONSENT_STORAGE_KEY, initAnalyticsIfConsented, loadAnalytics } from '../constants/analytics'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    initAnalyticsIfConsented()
    setVisible(!localStorage.getItem(CONSENT_STORAGE_KEY))
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted')
    loadAnalytics()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-[70] border-t border-white/10 bg-gray-900 px-4 py-3 text-white print:hidden md:px-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="page-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
          We use cookies for analytics to improve our site. You can accept or decline optional tracking cookies.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="min-h-10 rounded-sm border border-white/20 px-4 text-xs font-medium tracking-wide text-white/80 uppercase transition-colors hover:border-white/35 hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="min-h-10 rounded-sm bg-pink px-4 text-xs font-medium tracking-wide text-white uppercase transition-colors hover:bg-pink-light"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
