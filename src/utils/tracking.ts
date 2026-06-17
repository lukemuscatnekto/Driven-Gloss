import { CONSENT_STORAGE_KEY } from '../constants/analytics'

function hasConsent() {
  try {
    return typeof window !== 'undefined' && localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted'
  } catch {
    return false
  }
}

function trackGaEvent(eventName: string, params?: Record<string, string>) {
  if (!hasConsent() || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

function trackMetaContact() {
  if (!hasConsent() || typeof window.fbq !== 'function') return
  window.fbq('track', 'Contact')
}

export function trackQuoteFormSubmit(source?: string) {
  trackGaEvent('quote_form_submit', source ? { event_label: source } : undefined)
  trackMetaContact()
}

export function trackWhatsAppClick(source?: string) {
  trackGaEvent('whatsapp_click', source ? { event_label: source } : undefined)
  trackMetaContact()
}

export function trackInstagramClick(source?: string) {
  trackGaEvent('instagram_click', source ? { event_label: source } : undefined)
}

export function trackCallClick(source?: string) {
  trackGaEvent('call_click', source ? { event_label: source } : undefined)
}

export function trackHeroCtaClick(source?: string) {
  trackGaEvent('hero_cta_click', source ? { event_label: source } : undefined)
}

export function trackLinkClick(href: string, options?: { heroCta?: boolean; source?: string }) {
  const source = options?.source

  if (href.startsWith('tel:')) {
    trackCallClick(source)
    if (options?.heroCta) trackHeroCtaClick(source)
    return
  }

  if (href.includes('instagram.com')) {
    trackInstagramClick(source)
    if (options?.heroCta) trackHeroCtaClick(source)
    return
  }

  if (href.includes('wa.me')) {
    trackWhatsAppClick(source)
    if (options?.heroCta) trackHeroCtaClick(source)
  }
}
