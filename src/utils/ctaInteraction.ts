let hasInteracted = false

export function markCtaInteraction() {
  hasInteracted = true
}

export function hasCtaInteraction() {
  return hasInteracted
}

export const SCROLL_MODAL_SEEN_KEY = 'drivenGloss_scroll_modal_seen'

export function hasSeenScrollModal() {
  try {
    return sessionStorage.getItem(SCROLL_MODAL_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

export function markScrollModalSeen() {
  try {
    sessionStorage.setItem(SCROLL_MODAL_SEEN_KEY, '1')
  } catch {
    // ignore storage errors
  }
}
