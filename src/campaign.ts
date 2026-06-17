import { getWhatsAppQuickQuoteUrl, getWhatsAppReferralOfferUrl } from './constants'

export const LAUNCH_OFFERS_TERMS =
  'Launch offers apply to Full Detail, Deep Detail, and selected add-on services. One offer per booking. Referral discount is applied after the referred booking is completed.'

export const LAUNCH_OFFERS_URGENCY =
  'Limited July launch offer — early bookings recommended.'

export const CAMPAIGN_FLYERS = [
  {
    id: 'bookings',
    src: '/assets/campaign/july-bookings-announcement.webp',
    alt: 'July bookings announcement flyer — Driven Gloss mobile car detailing launch in Malta',
    title: 'July bookings announcement',
  },
  {
    id: 'offers',
    src: '/assets/campaign/july-launch-offers.webp',
    alt: 'July launch offers flyer — 10% and 15% mobile detailing promotions in Malta',
    title: 'July launch offers',
  },
] as const

export const LAUNCH_OFFERS = [
  {
    id: 'first-booking',
    label: 'First Booking',
    accent: '10% Off',
    heading: 'Your First Detail',
    copy: 'Get 10% off your first booking on services from €55 when you mention the launch offer.',
    cta: 'Get WhatsApp Quote',
    href: getWhatsAppQuickQuoteUrl(),
    variant: 'pink' as const,
  },
  {
    id: 'refer-friend',
    label: 'Refer a Friend',
    accent: '15% Off',
    heading: 'Your Next Detail',
    copy: 'Refer a friend and receive 15% off your next booking after their detail is completed.',
    cta: 'Refer on WhatsApp',
    href: getWhatsAppReferralOfferUrl(),
    variant: 'blue' as const,
  },
] as const
