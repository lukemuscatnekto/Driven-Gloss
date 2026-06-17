import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type AnimateInProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateIn({ children, className = '', delay = 0 }: AnimateInProps) {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      className={`animate-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
