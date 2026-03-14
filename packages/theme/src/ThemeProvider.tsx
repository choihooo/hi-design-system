/**
 * ThemeProvider Component
 * @description Provides theme context to child components with automatic theme switching
 * @platform React (Web)
 * @usage
 * ```tsx
 * import { ThemeProvider } from '@hi-design/theme';
 *
 * <ThemeProvider defaultTheme="system">
 *   <App />
 * </ThemeProvider>
 * ```
 */

import { applyTheme } from '@hi-design/tokens'
import { useEffect, useState } from 'react'
import type { ResolvedTheme, Theme } from './ThemeContext'
import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

/**
 * ThemeProvider Component
 *
 * Features:
 * - Light/Dark/System theme modes
 * - Automatic system preference detection
 * - LocalStorage persistence
 * - CSS custom properties injection
 * - Smooth theme transitions
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'hi-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(storageKey) as Theme | null
      return stored || defaultTheme
    }
    return defaultTheme
  })

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')

  // Apply theme changes to DOM and tokens
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined
    }

    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyThemeToDom = (isDark: boolean) => {
      const themeValue = isDark ? 'dark' : 'light'
      root.classList.remove('light', 'dark')
      root.classList.add(themeValue)
      root.setAttribute('data-theme', themeValue)
      setResolvedTheme(themeValue)

      // Apply tokens
      applyTheme(themeValue)
    }

    // Cleanup function
    if (theme === 'system') {
      applyThemeToDom(mediaQuery.matches)

      const handler = (e: MediaQueryListEvent) => {
        applyThemeToDom(e.matches)
      }

      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }

    applyThemeToDom(theme === 'dark')
    return undefined
  }, [theme])

  // Persist theme to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey])

  const contextValue = {
    theme,
    resolvedTheme,
    setTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

/**
 * Export types
 */
export type { ResolvedTheme, Theme, ThemeContextValue } from './ThemeContext'
/**
 * useTheme Hook
 * @description Convenience hook to access theme context
 */
export { useTheme } from './ThemeContext'
