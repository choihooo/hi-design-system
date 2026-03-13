/**
 * Design Tokens - Colors
 *
 * Following Seed Design's 3-layer architecture:
 * 1. Raw Values: Basic hex values
 * 2. Scale Tokens: Named color scales
 * 3. Semantic Tokens: Design intent tokens
 */

// ============================================
// LAYER 1: RAW VALUES
// ============================================
/**
 * Raw color values
 * These are the base hex values that will be used in scale tokens
 */
export const rawColors = {
  // Primary - Blue scale
  blue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Secondary - Purple scale
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },

  // Neutral - Gray scale
  gray: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Semantic colors
  green: {
    50: '#dcfce7',
    100: '#bbf7d0',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },

  yellow: {
    50: '#fef3c7',
    100: '#fde68a',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },

  red: {
    50: '#fee2e2',
    100: '#fecaca',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
} as const

// ============================================
// LAYER 2: SCALE TOKENS
// ============================================
/**
 * Scale tokens provide named access to raw values
 * Platform-agnostic color system
 */
export const scaleColors = {
  // Primary color scale
  primary: {
    50: rawColors.blue[50],
    100: rawColors.blue[100],
    200: rawColors.blue[200],
    300: rawColors.blue[300],
    400: rawColors.blue[400],
    500: rawColors.blue[500],
    600: rawColors.blue[600],
    700: rawColors.blue[700],
    800: rawColors.blue[800],
    900: rawColors.blue[900],
    950: rawColors.blue[950],
  },

  // Secondary color scale
  secondary: {
    50: rawColors.purple[50],
    100: rawColors.purple[100],
    200: rawColors.purple[200],
    300: rawColors.purple[300],
    400: rawColors.purple[400],
    500: rawColors.purple[500],
    600: rawColors.purple[600],
    700: rawColors.purple[700],
    800: rawColors.purple[800],
    900: rawColors.purple[900],
    950: rawColors.purple[950],
  },

  // Neutral color scale
  neutral: {
    0: rawColors.gray[0],
    50: rawColors.gray[50],
    100: rawColors.gray[100],
    200: rawColors.gray[200],
    300: rawColors.gray[300],
    400: rawColors.gray[400],
    500: rawColors.gray[500],
    600: rawColors.gray[600],
    700: rawColors.gray[700],
    800: rawColors.gray[800],
    900: rawColors.gray[900],
    950: rawColors.gray[950],
  },

  // Semantic color scales
  success: {
    light: rawColors.green[50],
    main: rawColors.green[500],
    dark: rawColors.green[600],
  },

  warning: {
    light: rawColors.yellow[50],
    main: rawColors.yellow[500],
    dark: rawColors.yellow[600],
  },

  error: {
    light: rawColors.red[50],
    main: rawColors.red[500],
    dark: rawColors.red[600],
  },

  info: {
    light: rawColors.blue[50],
    main: rawColors.blue[500],
    dark: rawColors.blue[600],
  },
} as const

// ============================================
// LAYER 3: SEMANTIC TOKENS (Light Theme)
// ============================================
/**
 * Semantic tokens express design intent
 * These are the tokens used in components
 */
export const semanticColors = {
  // Brand colors
  brand: {
    primary: scaleColors.primary[500],
    primaryHover: scaleColors.primary[600],
    primaryActive: scaleColors.primary[700],
    primaryLight: scaleColors.primary[50],

    secondary: scaleColors.secondary[500],
    secondaryHover: scaleColors.secondary[600],
    secondaryActive: scaleColors.secondary[700],
    secondaryLight: scaleColors.secondary[50],
  },

  // Semantic colors
  success: scaleColors.success.main,
  successLight: scaleColors.success.light,
  successDark: scaleColors.success.dark,

  warning: scaleColors.warning.main,
  warningLight: scaleColors.warning.light,
  warningDark: scaleColors.warning.dark,

  error: scaleColors.error.main,
  errorLight: scaleColors.error.light,
  errorDark: scaleColors.error.dark,

  info: scaleColors.info.main,
  infoLight: scaleColors.info.light,
  infoDark: scaleColors.info.dark,

  // Text colors
  text: {
    primary: scaleColors.neutral[900],
    secondary: scaleColors.neutral[600],
    tertiary: scaleColors.neutral[500],
    disabled: scaleColors.neutral[400],
    inverse: scaleColors.neutral[0],
    link: scaleColors.primary[500],
    linkHover: scaleColors.primary[600],
  },

  // Background colors
  background: {
    primary: scaleColors.neutral[0],
    secondary: scaleColors.neutral[50],
    tertiary: scaleColors.neutral[100],
    disabled: scaleColors.neutral[200],
    overlay: 'rgba(0, 0, 0, 0.5)',
    inverse: scaleColors.neutral[900],
  },

  // Border colors
  border: {
    default: scaleColors.neutral[200],
    light: scaleColors.neutral[100],
    dark: scaleColors.neutral[300],
    focus: scaleColors.primary[500],
    error: scaleColors.error.main,
    success: scaleColors.success.main,
    warning: scaleColors.warning.main,
  },

  // Shadow colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.05)',
    default: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.2)',
  },
} as const

// ============================================
// DARK THEME SEMANTIC TOKENS
// ============================================
/**
 * Dark theme semantic tokens
 * Override light theme values for dark mode
 */
export const darkSemanticColors = {
  ...semanticColors,

  brand: {
    ...semanticColors.brand,
    primary: scaleColors.primary[400],
    primaryHover: scaleColors.primary[300],
    primaryActive: scaleColors.primary[200],
  },

  text: {
    primary: scaleColors.neutral[0],
    secondary: scaleColors.neutral[400],
    tertiary: scaleColors.neutral[500],
    disabled: scaleColors.neutral[600],
    inverse: scaleColors.neutral[950],
    link: scaleColors.primary[400],
    linkHover: scaleColors.primary[300],
  },

  background: {
    primary: scaleColors.neutral[900],
    secondary: scaleColors.neutral[800],
    tertiary: scaleColors.neutral[700],
    disabled: scaleColors.neutral[600],
    overlay: 'rgba(0, 0, 0, 0.7)',
    inverse: scaleColors.neutral[0],
  },

  border: {
    default: scaleColors.neutral[700],
    light: scaleColors.neutral[800],
    dark: scaleColors.neutral[600],
    focus: scaleColors.primary[400],
    error: scaleColors.error.main,
    success: scaleColors.success.main,
    warning: scaleColors.warning.main,
  },
} as const

// ============================================
// CSS VARIABLES
// ============================================
/**
 * CSS custom properties for web platform
 * Can be overridden at runtime for theming
 */
export const cssVars = {
  // Scale tokens
  scale: {
    '--color-primary-50': scaleColors.primary[50],
    '--color-primary-500': scaleColors.primary[500],
    '--color-primary-600': scaleColors.primary[600],
    '--color-secondary-500': scaleColors.secondary[500],
    '--color-neutral-0': scaleColors.neutral[0],
    '--color-neutral-50': scaleColors.neutral[50],
    '--color-neutral-100': scaleColors.neutral[100],
    '--color-neutral-200': scaleColors.neutral[200],
    '--color-neutral-400': scaleColors.neutral[400],
    '--color-neutral-500': scaleColors.neutral[500],
    '--color-neutral-600': scaleColors.neutral[600],
    '--color-neutral-900': scaleColors.neutral[900],
    '--color-success': scaleColors.success.main,
    '--color-warning': scaleColors.warning.main,
    '--color-error': scaleColors.error.main,
    '--color-info': scaleColors.info.main,
  },

  // Semantic tokens (light theme)
  semantic: {
    '--brand-primary': semanticColors.brand.primary,
    '--brand-primary-hover': semanticColors.brand.primaryHover,
    '--brand-secondary': semanticColors.brand.secondary,
    '--text-primary': semanticColors.text.primary,
    '--text-secondary': semanticColors.text.secondary,
    '--text-disabled': semanticColors.text.disabled,
    '--bg-primary': semanticColors.background.primary,
    '--bg-secondary': semanticColors.background.secondary,
    '--border-default': semanticColors.border.default,
    '--border-focus': semanticColors.border.focus,
  },
} as const

// ============================================
// BACKWARD COMPATIBILITY
// ============================================
/**
 * Legacy exports for backward compatibility
 * @deprecated Use semanticColors instead
 */
export const colors = {
  primary: scaleColors.primary,
  secondary: scaleColors.secondary,
  neutral: scaleColors.neutral,
  semantic: {
    success: scaleColors.success,
    warning: scaleColors.warning,
    error: scaleColors.error,
    info: scaleColors.info,
  },
  white: scaleColors.neutral[0],
  black: scaleColors.neutral[950],
  transparent: 'transparent',
} as const

export const opacity = {
  disabled: 0.5,
  hover: 0.8,
  focus: 0.9,
  pressed: 0.7,
} as const

// Additional backward compatibility exports
export const primary = scaleColors.primary
export const secondary = scaleColors.secondary
export const neutral = scaleColors.neutral
export const semantic = semanticColors

// Type exports
export type Colors = typeof colors
export type PrimaryColor = keyof typeof scaleColors.primary
export type SecondaryColor = keyof typeof scaleColors.secondary
export type NeutralColor = keyof typeof scaleColors.neutral
