/**
 * ThemeContext
 * @description Context for theme management across the application
 */
import { createContext, useContext as useContextReact } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * useTheme Hook
 * @description Access theme context - must be used within ThemeProvider
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContextReact(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

/**
 * useContext Hook (alias for useTheme)
 * @description Alternative name for useTheme - same functionality
 */
export const useContext = useTheme
