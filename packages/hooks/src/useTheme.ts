/**
 * useTheme Hook
 * @description Hook for managing theme (light/dark) with localStorage persistence
 */
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

export function useTheme(): ThemeContextValue {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('hi-theme') as Theme | null
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        return saved
      }
    }
    return 'system'
  })

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined
    }

    const root = document.documentElement

    const applyTheme = (isDark: boolean) => {
      root.classList.remove('light', 'dark')
      root.classList.add(isDark ? 'dark' : 'light')
      setResolvedTheme(isDark ? 'dark' : 'light')
    }

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      applyTheme(mediaQuery.matches)

      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }

    applyTheme(theme === 'dark')
    return undefined
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined' || theme === 'system') {
      return
    }

    window.localStorage.setItem('hi-theme', theme)
  }, [theme])

  return {
    theme,
    resolvedTheme,
    setTheme,
  }
}
