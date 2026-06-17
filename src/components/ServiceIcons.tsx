type ServiceIconProps = {
  className?: string
}

export function InteriorIcon({ className = '' }: ServiceIconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 16V9.5C5 8.12 6.12 7 7.5 7H16.5C17.88 7 19 8.12 19 9.5V16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M4 16H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 16V18.5M16 16V18.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ExteriorIcon({ className = '' }: ServiceIconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5C5.2 9.8 8.1 8 12 8C15.9 8 18.8 9.8 20 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M3.5 13.5H20.5L19 17.5H5L3.5 13.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="17.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16.5" cy="17.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function FullDetailIcon({ className = '' }: ServiceIconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5C14.2 4.5 16 6.3 16 8.5V10H8V8.5C8 6.3 9.8 4.5 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M6 10H18V14H6V10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 14V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 17H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function CeramicIcon({ className = '' }: ServiceIconProps) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5L18.5 7V12C18.5 15.6 15.8 18.4 12 19.5C8.2 18.4 5.5 15.6 5.5 12V7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 11.5L11 13.5L15.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
