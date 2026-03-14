/**
 * Common component utilities and patterns
 * Provides shared functionality across all components
 */

import React from 'react'

// Common component props interface
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  testID?: string
}

// Common event handler types
export interface CommonEventHandlers {
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  onClick?: (event: React.MouseEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
  onMouseUp?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  onMouseEnter?: (event: React.MouseEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  onKeyUp?: (event: React.KeyboardEvent) => void
  onChange?: (event: React.ChangeEvent) => void
  onSubmit?: (event: React.FormEvent) => void
}

// Common state hooks
export function useFocusState() {
  const [isFocused, setIsFocused] = React.useState(false)

  const handleFocus = React.useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = React.useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    isFocused,
    handleFocus,
    handleBlur,
  }
}

// Common accessibility utilities
export function generateUniqueId(prefix = 'component'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// Common event handler hooks
export function useCommonHandlers(handlers: CommonEventHandlers) {
  return {
    handleFocus: handlers.onFocus,
    handleBlur: handlers.onBlur,
    handleClick: handlers.onClick,
    handleMouseDown: handlers.onMouseDown,
    handleMouseUp: handlers.onMouseUp,
    handleMouseLeave: handlers.onMouseLeave,
    handleMouseEnter: handlers.onMouseEnter,
    handleKeyDown: handlers.onKeyDown,
    handleKeyUp: handlers.onKeyUp,
    handleChange: handlers.onChange,
    handleSubmit: handlers.onSubmit,
  }
}

// Common animation utilities
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setPrefersReduced(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReduced
}

// Common variant utilities
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'ghost' | 'outline'

export const COMMON_VARIANTS: Variant[] = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'ghost', 'outline']

export function isValidVariant(variant: string): variant is Variant {
  return COMMON_VARIANTS.includes(variant as Variant)
}

// Common size utilities
export type Size = 'sm' | 'md' | 'lg' | 'xl'

export const COMMON_SIZES: Size[] = ['sm', 'md', 'lg', 'xl']

export function isValidSize(size: string): size is Size {
  return COMMON_SIZES.includes(size as Size)
}