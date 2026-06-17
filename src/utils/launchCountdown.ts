const LAUNCH_DATE = new Date(2026, 6, 1)

export function getLaunchCountdownText(referenceDate = new Date()) {
  const today = new Date(referenceDate)
  today.setHours(0, 0, 0, 0)

  const launch = new Date(LAUNCH_DATE)
  launch.setHours(0, 0, 0, 0)

  if (today >= launch) {
    return 'Now booking — limited slots.'
  }

  const diffMs = launch.getTime() - today.getTime()
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  return `Bookings open in ${days} days`
}
