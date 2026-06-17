export type Lead = {
  email: string
  timestamp: string
  source: string
}

const LEADS_KEY = 'drivenGloss_leads'

export function getLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is Lead =>
        typeof item === 'object' &&
        item !== null &&
        typeof item.email === 'string' &&
        typeof item.timestamp === 'string' &&
        typeof item.source === 'string',
    )
  } catch {
    return []
  }
}

export function saveLead(email: string, source: string) {
  const normalised = email.trim().toLowerCase()

  if (!normalised || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalised)) {
    return { saved: false, duplicate: false, invalid: true }
  }

  const leads = getLeads()
  if (leads.some((lead) => lead.email === normalised)) {
    return { saved: false, duplicate: true, invalid: false }
  }

  leads.push({
    email: normalised,
    timestamp: new Date().toISOString(),
    source,
  })

  localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
  return { saved: true, duplicate: false, invalid: false }
}
