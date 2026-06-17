export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'
export const META_PIXEL_ID = 'META_PIXEL_ID'
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
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(gaScript)

  const metaScript = document.createElement('script')
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

export function initAnalyticsIfConsented() {
  if (typeof window === 'undefined') return
  if (localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted') {
    loadAnalytics()
  }
}
