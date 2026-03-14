/**
 * @hi-design/tokens
 *
 * Design tokens for HI Design System
 * Following Seed Design's 3-layer architecture:
 * 1. Raw Values: Base values
 * 2. Scale Tokens: Named scales
 * 3. Semantic Tokens: Design intent tokens
 *
 * Shared across React, React Native, and Flutter platforms
 */

// ============================================
// RAW VALUES (Layer 1)
// ============================================
import { rawColors } from './colors'
import { rawSpacing } from './spacing'
import { rawTypography } from './typography'

export { rawColors, rawSpacing, rawTypography }

// ============================================
// SCALE TOKENS (Layer 2)
// ============================================
import { scaleColors } from './colors'
import { scaleRadius, scaleSpacing } from './spacing'
import { scaleTypography } from './typography'

export { scaleColors, scaleSpacing, scaleRadius, scaleTypography }

// ============================================
// SEMANTIC TOKENS (Layer 3)
// ============================================
import { darkSemanticColors, semanticColors } from './colors'
import { semanticSpacing } from './spacing'
import { semanticTypography } from './typography'

export { semanticColors, darkSemanticColors, semanticSpacing, semanticTypography }

// ============================================
// CSS VARIABLES
// ============================================
import { cssVars as colorCssVarsImport } from './colors'
import { cssVars as spacingCssVarsImport } from './spacing'
import { cssVars as typographyCssVarsImport } from './typography'

export const colorCssVars = colorCssVarsImport
export const spacingCssVars = spacingCssVarsImport
export const typographyCssVars = typographyCssVarsImport

// ============================================
// TOKEN TYPES
// ============================================
export type { Colors, NeutralColor, PrimaryColor, SecondaryColor } from './colors'
// ============================================
// BACKWARD COMPATIBILITY
// ============================================
export { colors, neutral, opacity, primary, secondary, semantic } from './colors'
export type { BorderRadius, Spacing, SpacingValue } from './spacing'
export {
  borderRadius,
  componentSpacing,
  spacing,
  spacingPresets,
  spacingTokens,
} from './spacing'
export type {
  FontSize,
  FontWeight,
  LineHeight,
  TextStyle,
  Typography,
} from './typography'
export {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  textStyles,
  typography,
} from './typography'

// ============================================
// UNIFIED TOKEN OBJECT
// ============================================
/**
 * Complete token system for easy access
 * @example
 * import { tokens } from '@hi-design/tokens';
 *
 * // Use semantic tokens (recommended)
 * tokens.semantic.color.primary
 * tokens.semantic.spacing.normal
 * tokens.semantic.typography.body.default
 *
 * // Use scale tokens for specific values
 * tokens.scale.color.primary[500]
 * tokens.scale.spacing.lg
 * tokens.scale.typography.fontSize.base
 *
 * // Override at runtime
 * tokens.semantic.color.primary = '#custom-color';
 */
export const tokens = {
  // Raw values
  raw: {
    colors: {
      blue: rawColors.blue,
      purple: rawColors.purple,
      gray: rawColors.gray,
      green: rawColors.green,
      yellow: rawColors.yellow,
      red: rawColors.red,
    },
    spacing: rawSpacing,
    typography: rawTypography,
  },

  // Scale tokens
  scale: {
    color: scaleColors,
    spacing: scaleSpacing,
    radius: scaleRadius,
    typography: scaleTypography,
  },

  // Semantic tokens (light theme - default)
  semantic: {
    color: semanticColors,
    spacing: semanticSpacing,
    typography: semanticTypography,
  },

  // Dark theme
  dark: {
    color: darkSemanticColors,
  },
} as const

// ============================================
// THEME UTILITIES
// ============================================
/**
 * Apply theme to tokens
 * @param theme - 'light' or 'dark'
 * @example
 * import { applyTheme } from '@hi-design/tokens';
 *
 * // Apply dark theme
 * applyTheme('dark');
 *
 * // Apply light theme
 * applyTheme('light');
 */
export const applyTheme = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    Object.assign(tokens.semantic.color, darkSemanticColors)
  } else {
    Object.assign(tokens.semantic.color, semanticColors)
  }
}

/**
 * Get current theme
 * @returns 'light' or 'dark'
 */
export const getCurrentTheme = (): 'light' | 'dark' => {
  return tokens.semantic.color.background.primary === semanticColors.background.primary
    ? 'light'
    : 'dark'
}

/**
 * Toggle theme
 */
export const toggleTheme = () => {
  const current = getCurrentTheme()
  applyTheme(current === 'light' ? 'dark' : 'light')
}

// ============================================
// CSS VARIABLES INJECTOR
// ============================================
/**
 * Inject CSS variables into root element
 * Call this once at app initialization
 * @example
 * import { injectCSSVars } from '@hi-design/tokens';
 *
 * // Inject at app start
 * injectCSSVars();
 */
/**
 * Update CSS variables for theme switching
 * Use this when you want to switch themes dynamically
 * @param theme - 'light' or 'dark'
 * @example
 * import { updateCSSVars } from '@hi-design/tokens';
 *
 * // Switch to dark mode
 * updateCSSVars('dark');
 */
export const updateCSSVars = (theme: 'light' | 'dark') => {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export const injectCSSVars = (theme: 'light' | 'dark' = 'light') => {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  const colorVars = theme === 'light' ? semanticColors : darkSemanticColors

  // Generate CSS variables from semantic colors
  const colorCssVarsFromSemantic = {
    '--brand-primary': colorVars.brand.primary,
    '--brand-primary-hover': colorVars.brand.primaryHover,
    '--brand-primary-active': colorVars.brand.primaryActive,
    '--brand-secondary': colorVars.brand.secondary,
    '--brand-secondary-hover': colorVars.brand.secondaryHover,
    '--brand-secondary-active': colorVars.brand.secondaryActive,
    '--text-primary': colorVars.text.primary,
    '--text-secondary': colorVars.text.secondary,
    '--text-inverse': colorVars.text.inverse,
    '--text-disabled': colorVars.text.disabled,
    '--bg-primary': colorVars.background.primary,
    '--bg-secondary': colorVars.background.secondary,
    '--bg-ghost-hover': colorVars.background.tertiary,
    '--bg-ghost-active': colorVars.background.tertiary,
    '--bg-filled': colorVars.background.secondary,
    '--bg-filled-hover': colorVars.background.secondary,
    '--bg-disabled': colorVars.background.disabled,
    '--border-default': colorVars.border.default,
    '--border-hover': colorVars.border.dark,
    '--border-focus': colorVars.border.focus,
    '--color-success': colorVars.success,
    '--color-success-hover': colorVars.success,
    '--color-error': colorVars.error,
    '--color-error-hover': colorVars.error,
    '--color-warning': colorVars.warning,
    '--color-warning-hover': colorVars.warning,
    '--color-info': colorVars.info,
    '--focus-ring': 'rgba(14, 165, 233, 0.1)',
    '--success-focus-ring': 'rgba(34, 197, 94, 0.1)',
    '--error-focus-ring': 'rgba(239, 68, 68, 0.1)',
  }

  // Combine all variables into single object for batch processing
  const allVars = {
    ...colorCssVarsFromSemantic,
    ...spacingCssVars.semantic,
    ...typographyCssVars.semantic,
  }

  // Single iteration for better performance
  Object.entries(allVars).forEach(([key, value]) => {
    root.style.setProperty(key, value as string)
  })
}
