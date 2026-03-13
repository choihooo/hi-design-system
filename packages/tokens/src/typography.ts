/**
 * Design Tokens - Typography
 *
 * Following Seed Design's 3-layer architecture:
 * 1. Raw Values: Base font sizes, weights, etc.
 * 2. Scale Tokens: Named typography scale
 * 3. Semantic Tokens: Component-specific text styles
 */

// ============================================
// LAYER 1: RAW VALUES
// ============================================
/**
 * Raw typography values
 */
export const rawTypography = {
  // Font sizes in pixels
  fontSize: {
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
    30: '30px',
    36: '36px',
    48: '48px',
    60: '60px',
  },

  // Font weights
  fontWeight: {
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
  },

  // Line heights
  lineHeight: {
    1.25: '1.25',
    1.375: '1.375',
    1.5: '1.5',
    1.625: '1.625',
    2: '2',
  },

  // Letter spacing in em
  letterSpacing: {
    '-0.05': '-0.05em',
    '-0.025': '-0.025em',
    0: '0',
    0.025: '0.025em',
    0.05: '0.05em',
    0.1: '0.1em',
  },
} as const

// ============================================
// LAYER 2: SCALE TOKENS
// ============================================
/**
 * Scale tokens provide semantic names to typography values
 * Platform-agnostic typography system
 */
export const scaleTypography = {
  // Font size scale
  fontSize: {
    xs: rawTypography.fontSize[12],
    sm: rawTypography.fontSize[14],
    base: rawTypography.fontSize[16],
    lg: rawTypography.fontSize[18],
    xl: rawTypography.fontSize[20],
    '2xl': rawTypography.fontSize[24],
    '3xl': rawTypography.fontSize[30],
    '4xl': rawTypography.fontSize[36],
    '5xl': rawTypography.fontSize[48],
    '6xl': rawTypography.fontSize[60],
  },

  // Font weight scale
  fontWeight: {
    light: rawTypography.fontWeight[300],
    regular: rawTypography.fontWeight[400],
    medium: rawTypography.fontWeight[500],
    semibold: rawTypography.fontWeight[600],
    bold: rawTypography.fontWeight[700],
    extrabold: rawTypography.fontWeight[800],
  },

  // Line height scale
  lineHeight: {
    tight: rawTypography.lineHeight[1.25], // 125%
    snug: rawTypography.lineHeight[1.375], // 137.5%
    normal: rawTypography.lineHeight[1.5], // 150%
    relaxed: rawTypography.lineHeight[1.625], // 162.5%
    loose: rawTypography.lineHeight[2], // 200%
  },

  // Letter spacing scale
  letterSpacing: {
    tighter: rawTypography.letterSpacing['-0.05'],
    tight: rawTypography.letterSpacing['-0.025'],
    normal: rawTypography.letterSpacing[0],
    wide: rawTypography.letterSpacing[0.025],
    wider: rawTypography.letterSpacing[0.05],
    widest: rawTypography.letterSpacing[0.1],
  },

  // Font family scale
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Courier New", monospace',
  },
} as const

// ============================================
// LAYER 3: SEMANTIC TOKENS
// ============================================
/**
 * Semantic typography tokens for specific use cases
 * These are the tokens used in components
 */
export const semanticTypography = {
  // Display text (largest headings)
  display: {
    fontSize: scaleTypography.fontSize['6xl'],
    fontWeight: scaleTypography.fontWeight.bold,
    lineHeight: scaleTypography.lineHeight.tight,
    letterSpacing: scaleTypography.letterSpacing.tighter,
  },

  // Heading styles
  heading: {
    h1: {
      fontSize: scaleTypography.fontSize['5xl'],
      fontWeight: scaleTypography.fontWeight.bold,
      lineHeight: scaleTypography.lineHeight.tight,
      letterSpacing: scaleTypography.letterSpacing.tighter,
    },
    h2: {
      fontSize: scaleTypography.fontSize['4xl'],
      fontWeight: scaleTypography.fontWeight.bold,
      lineHeight: scaleTypography.lineHeight.tight,
      letterSpacing: scaleTypography.letterSpacing.tight,
    },
    h3: {
      fontSize: scaleTypography.fontSize['3xl'],
      fontWeight: scaleTypography.fontWeight.semibold,
      lineHeight: scaleTypography.lineHeight.snug,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    h4: {
      fontSize: scaleTypography.fontSize['2xl'],
      fontWeight: scaleTypography.fontWeight.semibold,
      lineHeight: scaleTypography.lineHeight.snug,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    h5: {
      fontSize: scaleTypography.fontSize.xl,
      fontWeight: scaleTypography.fontWeight.semibold,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    h6: {
      fontSize: scaleTypography.fontSize.lg,
      fontWeight: scaleTypography.fontWeight.medium,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
  },

  // Body text
  body: {
    large: {
      fontSize: scaleTypography.fontSize.lg,
      fontWeight: scaleTypography.fontWeight.regular,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    default: {
      fontSize: scaleTypography.fontSize.base,
      fontWeight: scaleTypography.fontWeight.regular,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    small: {
      fontSize: scaleTypography.fontSize.sm,
      fontWeight: scaleTypography.fontWeight.regular,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
  },

  // Component-specific text
  component: {
    button: {
      fontSize: scaleTypography.fontSize.base,
      fontWeight: scaleTypography.fontWeight.semibold,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    link: {
      fontSize: scaleTypography.fontSize.base,
      fontWeight: scaleTypography.fontWeight.medium,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    caption: {
      fontSize: scaleTypography.fontSize.xs,
      fontWeight: scaleTypography.fontWeight.regular,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
    overline: {
      fontSize: scaleTypography.fontSize.xs,
      fontWeight: scaleTypography.fontWeight.medium,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.wider,
    },
    label: {
      fontSize: scaleTypography.fontSize.sm,
      fontWeight: scaleTypography.fontWeight.medium,
      lineHeight: scaleTypography.lineHeight.normal,
      letterSpacing: scaleTypography.letterSpacing.normal,
    },
  },
} as const

// ============================================
// CSS VARIABLES
// ============================================
/**
 * CSS custom properties for web platform
 */
export const cssVars = {
  // Scale tokens
  scale: {
    '--font-family-sans': scaleTypography.fontFamily.sans,
    '--font-family-mono': scaleTypography.fontFamily.mono,
    '--font-size-xs': scaleTypography.fontSize.xs,
    '--font-size-sm': scaleTypography.fontSize.sm,
    '--font-size-base': scaleTypography.fontSize.base,
    '--font-size-lg': scaleTypography.fontSize.lg,
    '--font-size-xl': scaleTypography.fontSize.xl,
    '--font-size-2xl': scaleTypography.fontSize['2xl'],
    '--font-weight-regular': scaleTypography.fontWeight.regular,
    '--font-weight-medium': scaleTypography.fontWeight.medium,
    '--font-weight-semibold': scaleTypography.fontWeight.semibold,
    '--font-weight-bold': scaleTypography.fontWeight.bold,
    '--line-height-tight': scaleTypography.lineHeight.tight,
    '--line-height-normal': scaleTypography.lineHeight.normal,
  },

  // Semantic tokens
  semantic: {
    '--font-heading-1': scaleTypography.fontSize['5xl'],
    '--font-heading-2': scaleTypography.fontSize['4xl'],
    '--font-heading-3': scaleTypography.fontSize['3xl'],
    '--font-body': scaleTypography.fontSize.base,
    '--font-button': scaleTypography.fontSize.base,
    '--font-caption': scaleTypography.fontSize.xs,
  },
} as const

// ============================================
// BACKWARD COMPATIBILITY
// ============================================
/**
 * Legacy exports for backward compatibility
 * @deprecated Use semanticTypography instead
 */
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
} as const

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const

export const lineHeights = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const

export const letterSpacing = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1,
} as const

export const textStyles = {
  h1: {
    fontSize: fontSizes['6xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tighter,
  },
  h2: {
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tighter,
  },
  h3: {
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h4: {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  body1: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  body2: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  button: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wider,
  },
} as const

export const fontFamilies = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Courier New", monospace',
  nativeSans: 'System',
  nativeMono: 'Courier',
} as const

export const typography = {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  textStyles,
  fontFamilies,
} as const

export type Typography = typeof typography
export type FontSize = keyof typeof fontSizes
export type FontWeight = keyof typeof fontWeights
export type LineHeight = keyof typeof lineHeights
export type TextStyle = keyof typeof textStyles
