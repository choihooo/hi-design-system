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
 * These values mirror the pen source of truth: Iris, Ink, and Canvas.
 */
export const rawColors = {
  primary: {
    0: '#F7F8FF',
    50: '#EEF0FF',
    100: '#E6E9FF',
    200: '#D3D8FA',
    300: '#B8BFF2',
    400: '#919AE4',
    500: '#5E6AD2',
    600: '#4D59C4',
    700: '#3F4AA7',
    800: '#313985',
    900: '#23295F',
    950: '#181C42',
  },

  secondary: {
    0: '#F7F8FB',
    50: '#F1F3F7',
    100: '#E7EAF0',
    200: '#D4D9E4',
    300: '#BAC1D0',
    400: '#99A2B4',
    500: '#788196',
    600: '#5F677B',
    700: '#444A55',
    800: '#2A2F38',
    900: '#1B1F27',
    950: '#101319',
  },

  neutral: {
    0: '#FCFCFD',
    50: '#F7F7F8',
    100: '#F1F2F4',
    200: '#E4E6EA',
    300: '#CED2D9',
    400: '#A8AFB9',
    500: '#7D8592',
    600: '#5D6470',
    700: '#414751',
    800: '#292D35',
    900: '#111318',
    950: '#090A0D',
  },

  success: {
    50: '#EEF8F3',
    100: '#D7EFE2',
    500: '#2E8F61',
    600: '#22724D',
    700: '#1B5A3D',
  },

  warning: {
    50: '#FFF8EE',
    100: '#FDEDD3',
    500: '#D4841B',
    600: '#B06C12',
    700: '#8F570F',
  },

  error: {
    50: '#FFF2F2',
    100: '#FDDDDD',
    500: '#C94242',
    600: '#A93232',
    700: '#872929',
  },

  info: {
    50: '#EEF0FF',
    100: '#E6E9FF',
    500: '#5E6AD2',
    600: '#4D59C4',
    700: '#3F4AA7',
  },
} as const

// ============================================
// LAYER 2: SCALE TOKENS
// ============================================
/**
 * Scale tokens provide named access to raw values.
 * The public API keeps primary / secondary / neutral for component compatibility.
 */
export const scaleColors = {
  primary: {
    0: rawColors.primary[0],
    50: rawColors.primary[50],
    100: rawColors.primary[100],
    200: rawColors.primary[200],
    300: rawColors.primary[300],
    400: rawColors.primary[400],
    500: rawColors.primary[500],
    600: rawColors.primary[600],
    700: rawColors.primary[700],
    800: rawColors.primary[800],
    900: rawColors.primary[900],
    950: rawColors.primary[950],
  },

  secondary: {
    0: rawColors.secondary[0],
    50: rawColors.secondary[50],
    100: rawColors.secondary[100],
    200: rawColors.secondary[200],
    300: rawColors.secondary[300],
    400: rawColors.secondary[400],
    500: rawColors.secondary[500],
    600: rawColors.secondary[600],
    700: rawColors.secondary[700],
    800: rawColors.secondary[800],
    900: rawColors.secondary[900],
    950: rawColors.secondary[950],
  },

  neutral: {
    0: rawColors.neutral[0],
    50: rawColors.neutral[50],
    100: rawColors.neutral[100],
    200: rawColors.neutral[200],
    300: rawColors.neutral[300],
    400: rawColors.neutral[400],
    500: rawColors.neutral[500],
    600: rawColors.neutral[600],
    700: rawColors.neutral[700],
    800: rawColors.neutral[800],
    900: rawColors.neutral[900],
    950: rawColors.neutral[950],
  },

  success: {
    light: rawColors.success[50],
    main: rawColors.success[500],
    dark: rawColors.success[600],
  },

  warning: {
    light: rawColors.warning[50],
    main: rawColors.warning[500],
    dark: rawColors.warning[600],
  },

  error: {
    light: rawColors.error[50],
    main: rawColors.error[500],
    dark: rawColors.error[600],
  },

  info: {
    light: rawColors.info[50],
    main: rawColors.info[500],
    dark: rawColors.info[600],
  },
} as const

// ============================================
// LAYER 3: SEMANTIC TOKENS (Light Theme)
// ============================================
/**
 * Semantic tokens express design intent.
 * Most UI should resolve through neutral tokens, with Iris reserved for emphasis.
 */
export const semanticColors = {
  brand: {
    primary: scaleColors.primary[500],
    primaryHover: scaleColors.primary[600],
    primaryActive: scaleColors.primary[700],
    primaryLight: scaleColors.primary[50],

    secondary: scaleColors.secondary[700],
    secondaryHover: scaleColors.secondary[800],
    secondaryActive: scaleColors.secondary[900],
    secondaryLight: scaleColors.secondary[50],
  },

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

  text: {
    primary: scaleColors.neutral[900],
    secondary: scaleColors.neutral[600],
    tertiary: scaleColors.neutral[500],
    disabled: scaleColors.neutral[400],
    inverse: scaleColors.neutral[0],
    link: scaleColors.primary[600],
    linkHover: scaleColors.primary[700],
  },

  background: {
    primary: scaleColors.neutral[0],
    secondary: scaleColors.neutral[50],
    tertiary: scaleColors.neutral[100],
    disabled: scaleColors.neutral[100],
    overlay: 'rgba(17, 19, 24, 0.56)',
    inverse: scaleColors.neutral[900],
  },

  border: {
    default: scaleColors.neutral[200],
    light: scaleColors.neutral[100],
    dark: scaleColors.neutral[300],
    focus: scaleColors.primary[400],
    error: scaleColors.error.main,
    success: scaleColors.success.main,
    warning: scaleColors.warning.main,
  },

  shadow: {
    light: 'rgba(17, 19, 24, 0.04)',
    default: 'rgba(17, 19, 24, 0.08)',
    dark: 'rgba(17, 19, 24, 0.14)',
  },
} as const

// ============================================
// DARK THEME SEMANTIC TOKENS
// ============================================
/**
 * Dark theme semantic tokens.
 * Keep the ink foundation and make the accent slightly brighter for contrast.
 */
export const darkSemanticColors = {
  ...semanticColors,

  brand: {
    ...semanticColors.brand,
    primary: scaleColors.primary[400],
    primaryHover: scaleColors.primary[300],
    primaryActive: scaleColors.primary[500],
    primaryLight: 'rgba(94, 106, 210, 0.16)',

    secondary: scaleColors.secondary[500],
    secondaryHover: scaleColors.secondary[400],
    secondaryActive: scaleColors.secondary[600],
    secondaryLight: scaleColors.secondary[900],
  },

  text: {
    primary: scaleColors.neutral[0],
    secondary: scaleColors.neutral[400],
    tertiary: scaleColors.neutral[500],
    disabled: scaleColors.neutral[600],
    inverse: scaleColors.neutral[900],
    link: scaleColors.primary[300],
    linkHover: scaleColors.primary[200],
  },

  background: {
    primary: scaleColors.neutral[900],
    secondary: scaleColors.neutral[800],
    tertiary: scaleColors.secondary[900],
    disabled: scaleColors.secondary[900],
    overlay: 'rgba(9, 10, 13, 0.72)',
    inverse: scaleColors.neutral[0],
  },

  border: {
    default: scaleColors.secondary[800],
    light: scaleColors.secondary[900],
    dark: scaleColors.secondary[700],
    focus: scaleColors.primary[300],
    error: scaleColors.error.main,
    success: scaleColors.success.main,
    warning: scaleColors.warning.main,
  },
} as const

// ============================================
// CSS VARIABLES
// ============================================
/**
 * CSS custom properties for web platform.
 * Scale variables stay minimal and semantic variables drive the product UI.
 */
export const cssVars = {
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
 * Legacy exports for backward compatibility.
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

export const primary = scaleColors.primary
export const secondary = scaleColors.secondary
export const neutral = scaleColors.neutral
export const semantic = semanticColors

export type Colors = typeof colors
export type PrimaryColor = keyof typeof scaleColors.primary
export type SecondaryColor = keyof typeof scaleColors.secondary
export type NeutralColor = keyof typeof scaleColors.neutral
