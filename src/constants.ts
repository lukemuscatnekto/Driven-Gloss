export const PHONE_DISPLAY = '7944 0999'
export const PHONE_DISPLAY_INTL = '+356 7944 0999'
export const PHONE_TEL = 'tel:79440999'
export const PHONE_TEL_INTL = 'tel:+35679440999'
export const INSTAGRAM_HANDLE = '@drivengloss.detailing'
export const INSTAGRAM_URL = 'https://www.instagram.com/drivengloss.detailing'
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61563137240263'
export const SITE_URL = 'https://www.drivengloss.com'
export const SITE_DESCRIPTION =
  'Mobile car detailing in Malta. Interior detailing, exterior detailing, ceramic coatings and protection services delivered to your door. Bookings open from July.'
export const SERVICE_AREA = 'Malta'
export const BOOKINGS_NOTE = 'Bookings open from July'
export const INSURANCE_NOTE = 'Fully insured & water-conscious detailing'

export const WHATSAPP_BASE_URL = 'https://wa.me/35679440999'
export const WHATSAPP_URL = WHATSAPP_BASE_URL
export const WHATSAPP_AVAILABILITY_URL = WHATSAPP_BASE_URL

export function getWhatsAppServiceUrl(_serviceTitle?: string) {
  return WHATSAPP_BASE_URL
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
