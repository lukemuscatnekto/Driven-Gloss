import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    updateMotion()
    media.addEventListener('change', updateMotion)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      media.removeEventListener('change', updateMotion)
    }
  }, [])

  if (reducedMotion) return null

  return (
    <div
      className="scroll-progress-track fixed top-0 right-0 left-0 z-[60] h-0.5 print:hidden"
      aria-hidden="true"
    >
      <div className="scroll-progress-bar h-full" style={{ width: `${progress}%` }} />
    </div>
  )
}
