import { PageContainer } from './PageContainer'

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-pink-light">
      <path
        d="M12 3.5L5.5 6.5V11.5C5.5 16 8.5 19.5 12 20.5C15.5 19.5 18.5 16 18.5 11.5V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-pink-light">
      <path
        d="M12 3C8 7 5 10 5 14C5 17 7 19 9.5 19C11 19 12 18 12 18C12 18 13 19 14.5 19C17 19 19 17 19 14C19 10 16 7 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-pink-light">
      <path
        d="M5 12.5L10 17.5L19 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const badges = [
  { label: 'Fully Insured', icon: ShieldIcon },
  { label: 'Eco-Friendly Products', icon: LeafIcon },
  { label: 'Satisfaction Guaranteed', icon: CheckIcon },
]

export function TrustBadges() {
  return (
    <section className="border-b border-white/6 bg-surface-secondary py-6 md:py-8" aria-label="Trust highlights">
      <PageContainer>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {badges.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-center sm:flex-col sm:gap-2"
            >
              <Icon />
              <span className="text-xs font-medium tracking-[0.1em] text-white/70 uppercase sm:text-[0.65rem]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  )
}
