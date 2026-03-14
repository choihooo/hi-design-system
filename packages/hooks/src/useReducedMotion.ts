/**
 * useReducedMotion Hook
 * @description Hook for detecting user's reduced motion preference
 */
import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
