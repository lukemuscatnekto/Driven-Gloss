import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { markCtaInteraction } from '../utils/ctaInteraction'

type ButtonVariant = 'primary' | 'secondary' | 'outline-pink'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-pink text-white hover:bg-pink-light',
  secondary: 'bg-blue text-charcoal font-semibold hover:bg-blue-light',
  'outline-pink': 'border border-pink/50 text-white hover:border-pink hover:bg-pink/8',
}

const sizeClasses = {
  sm: 'min-h-11 px-4 text-xs tracking-[0.1em]',
  md: 'min-h-11 px-5 text-sm tracking-[0.08em]',
  lg: 'min-h-11 px-7 text-sm tracking-[0.08em] md:text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    markCtaInteraction()
    onClick?.(event)
  }

  return (
    <a
      className={`btn inline-flex items-center justify-center rounded-sm font-medium uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-light ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
