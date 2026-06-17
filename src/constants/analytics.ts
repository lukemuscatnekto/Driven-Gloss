export const GA_MEASUREMENT_ID = 'G-N8XL6MSWGS'
export const META_PIXEL_ID = '1350084887218581'
export const CONSENT_STORAGE_KEY = 'driven-gloss-cookie-consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}

export function loadAnalytics() {
  if (typeof window === 'undefined') return
  if (document.querySelector('[data-analytics-loaded="true"]')) return

  const marker = document.createElement('meta')
  marker.setAttribute('data-analytics-loaded', 'true')
  document.head.appendChild(marker)

  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(gaScript)
  }

  if (!document.querySelector('script[data-meta-pixel="true"]')) {
    const metaScript = document.createElement('script')
    metaScript.setAttribute('data-meta-pixel', 'true')
    metaScript.textContent = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(metaScript)
  }
}

export function initAnalyticsIfConsented() {
  if (typeof window === 'undefined') return
  if (localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted') {
    loadAnalytics()
  }
}
