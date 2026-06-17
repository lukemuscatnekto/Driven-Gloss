import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  showArrow?: boolean
}

export function TextLink({ children, showArrow = true, className = '', ...props }: TextLinkProps) {
  return (
    <a
      className={`text-link group inline-flex items-center gap-1 text-sm font-medium tracking-wide text-white/65 uppercase transition-colors hover:text-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </a>
  )
}
