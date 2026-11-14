let hasInteracted = false

export function markCtaInteraction() {
  hasInteracted = true
}

export function hasCtaInteraction() {
  return hasInteracted
}
