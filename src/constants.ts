export const PHONE_DISPLAY = '7944 0999'
export const PHONE_DISPLAY_INTL = '+356 7944 0999'
export const PHONE_TEL = 'tel:79440999'
export const PHONE_TEL_INTL = 'tel:+35679440999'
export const INSTAGRAM_HANDLE = '@drivengloss.detailing'
export const INSTAGRAM_URL = 'https://www.instagram.com/drivengloss.detailing/'
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61563137240263'
export const SITE_URL = 'https://www.drivengloss.com'
export const SITE_DESCRIPTION = 'Premium mobile car detailing in Malta'
export const SERVICE_AREA =
  "Serving all of Malta — St Paul's Bay, Sliema, Valletta, and beyond"
export const INSURANCE_NOTE = 'Fully insured & water-conscious detailing'

export const WHATSAPP_URL =
  'https://wa.me/35679440999?text=Hi%20Driven%20Gloss%2C%20I%27d%20like%20to%20book%20a%20detail'
export const WHATSAPP_AVAILABILITY_URL =
  'https://wa.me/35679440999?text=Hi%20Driven%20Gloss%2C%20I%27d%20like%20to%20check%20availability'

export function getWhatsAppServiceUrl(serviceTitle: string) {
  const text = encodeURIComponent(`Hi Driven Gloss, I'd like to book ${serviceTitle}`)
  return `https://wa.me/35679440999?text=${text}`
}

export const REFERRAL_WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(
  'Love Driven Gloss mobile detailing in Malta! Refer a friend and you both save 15% on your next detail. Find out more: https://www.drivengloss.com',
)}`

export const SOCIAL_LINK_PROPS = {
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

export const LOGO_NAV_PATH = '/assets/driven-gloss-logo-512.png'
export const LOGO_FOOTER_PATH = '/assets/driven-gloss-logo.png'
export const HERO_IMAGE_PATH = '/assets/hero-main-v2.webp'
export const FAVICON_PATH = '/assets/driven-gloss-icon-192.png'
export const OG_IMAGE_PATH = '/assets/hero-main-v2.webp'
