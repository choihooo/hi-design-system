/**
 * useMediaQuery Hook
 * @description Hook for listening to CSS media queries
 */
import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return matches
}
