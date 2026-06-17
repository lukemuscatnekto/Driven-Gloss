export type PricingPackage = {
  id: string
  name: string
  price: string
  features: string[]
  cta: string
  popular?: boolean
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'mini-detail',
    name: 'Mini Detail',
    price: '€35',
    features: [
      'Exterior wash',
      'Wheels cleaned',
      'Tyre dressing',
      'Interior vacuum',
      'Dashboard wipe down',
      'Interior glass',
    ],
    cta: 'Book Mini Detail',
  },
  {
    id: 'full-detail',
    name: 'Full Detail',
    price: '€55',
    popular: true,
    features: [
      'Everything in Mini Detail',
      'Door shuts cleaned',
      'More detailed interior clean',
      'Trim dressing',
      'Spray wax protection',
    ],
    cta: 'Book Full Detail',
  },
  {
    id: 'deep-detail',
    name: 'Deep Detail',
    price: '€90',
    features: [
      'Everything in Full Detail',
      'Seat & carpet shampoo',
      'Steam cleaning',
      'Iron fallout removal',
      'Tar removal if needed',
      'Full interior refresh',
    ],
    cta: 'Book Deep Detail',
  },
]

export const EXTRA_SERVICES = [
  { name: 'Seat Shampoo', price: '€10 per seat' },
  { name: 'Carpet & Mat Shampoo', price: '€20' },
  { name: 'Pet Hair Removal', price: '€15' },
  { name: 'Engine Bay Clean', price: '€25' },
  { name: 'Headlight Restoration', price: '€30' },
  { name: 'Clay Bar + Wax Protection', price: '€35' },
  { name: 'Ceramic Spray Protection', price: '€25' },
  { name: 'Glass Water Repellent', price: '€15' },
  { name: 'Odour Treatment', price: '€20' },
] as const
