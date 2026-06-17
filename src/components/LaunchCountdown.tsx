import { useEffect, useState } from 'react'
import { getLaunchCountdownText } from '../utils/launchCountdown'

export function LaunchCountdown() {
  const [text, setText] = useState(() => getLaunchCountdownText())

  useEffect(() => {
    setText(getLaunchCountdownText())
  }, [])

  return (
    <p className="text-xs font-medium tracking-[0.2em] text-pink-light uppercase md:text-sm">{text}</p>
  )
}
