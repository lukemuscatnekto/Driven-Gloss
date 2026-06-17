import { useEffect, useState } from 'react'

type SectionConfig = {
  id: string
  elements: string[]
}

export function useActiveSection(sections: SectionConfig[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observed = sections
      .flatMap((section) => section.elements.map((selector) => ({ id: section.id, element: document.querySelector(selector) })))
      .filter((entry): entry is { id: string; element: Element } => Boolean(entry.element))

    if (observed.length === 0) return

    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = observed.find((item) => item.element === entry.target)
          if (!match) return
          visibility.set(match.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId: string | null = null
        let bestRatio = 0

        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId) setActiveId(bestId)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    observed.forEach(({ element }) => observer.observe(element))
    return () => observer.disconnect()
  }, [sections])

  return activeId
}
