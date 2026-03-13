/**
 * Design Tokens - Spacing
 *
 * Following Seed Design's 3-layer architecture:
 * 1. Raw Values: Base pixel/rem values
 * 2. Scale Tokens: Named spacing scale
 * 3. Semantic Tokens: Component-specific spacing
 */

// ============================================
// LAYER 1: RAW VALUES
// ============================================
/**
 * Raw spacing values in pixels
 * Base unit: 4px
 */
export const rawSpacing = {
  0: '0px',
  1: '4px', // 0.25rem
  2: '8px', // 0.5rem
  3: '12px', // 0.75rem
  4: '16px', // 1rem
  5: '20px', // 1.25rem
  6: '24px', // 1.5rem
  7: '28px', // 1.75rem
  8: '32px', // 2rem
  10: '40px', // 2.5rem
  12: '48px', // 3rem
  16: '64px', // 4rem
  20: '80px', // 5rem
  24: '96px', // 6rem
} as const

// ============================================
// LAYER 2: SCALE TOKENS
// ============================================
/**
 * Scale tokens provide semantic names to spacing values
 * Platform-agnostic spacing system
 */
export const scaleSpacing = {
  none: rawSpacing[0],
  xs: rawSpacing[1], // 4px  - Extra small
  sm: rawSpacing[2], // 8px  - Small
  md: rawSpacing[3], // 12px - Medium small
  lg: rawSpacing[4], // 16px - Medium (base)
  xl: rawSpacing[5], // 20px - Medium large
  '2xl': rawSpacing[6], // 24px - Large
  '3xl': rawSpacing[8], // 32px - Extra large
  '4xl': rawSpacing[12], // 48px - Double extra large
  '5xl': rawSpacing[16], // 64px - Triple extra large
} as const

/**
 * Border radius scale
 */
export const scaleRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px', // Pill shape
} as const

// ============================================
// LAYER 3: SEMANTIC TOKENS
// ============================================
/**
 * Semantic spacing tokens for specific use cases
 * These are the tokens used in components
 */
export const semanticSpacing = {
  // General spacing
  spacing: {
    tight: scaleSpacing.xs, // 4px  - Tight spacing
    compact: scaleSpacing.sm, // 8px  - Compact spacing
    normal: scaleSpacing.lg, // 16px - Normal spacing
    relaxed: scaleSpacing['2xl'], // 24px - Relaxed spacing
    spacious: scaleSpacing['3xl'], // 32px - Spacious spacing
  },

  // Component-specific spacing
  button: {
    padding: {
      sm: {
        vertical: scaleSpacing.sm,
        horizontal: scaleSpacing.lg,
      },
      md: {
        vertical: scaleSpacing.md,
        horizontal: scaleSpacing.xl,
      },
      lg: {
        vertical: scaleSpacing.lg,
        horizontal: scaleSpacing['2xl'],
      },
    },
    gap: scaleSpacing.sm, // 8px between buttons
  },

  input: {
    padding: {
      sm: {
        vertical: scaleSpacing.sm,
        horizontal: scaleSpacing.md,
      },
      md: {
        vertical: scaleSpacing.md,
        horizontal: scaleSpacing.lg,
      },
      lg: {
        vertical: scaleSpacing.lg,
        horizontal: scaleSpacing.xl,
      },
    },
    gap: scaleSpacing.sm, // 8px between inputs
  },

  card: {
    padding: {
      none: scaleSpacing.none,
      sm: scaleSpacing.lg, // 16px
      md: scaleSpacing['2xl'], // 24px
      lg: scaleSpacing['3xl'], // 32px
    },
    gap: scaleSpacing.lg, // 16px between cards
  },

  modal: {
    padding: scaleSpacing['2xl'], // 24px
    gap: scaleSpacing.lg, // 16px
  },

  list: {
    gap: scaleSpacing.md, // 12px between list items
  },

  section: {
    gap: scaleSpacing['3xl'], // 32px between sections
  },

  // Border radius
  radius: {
    none: scaleRadius.none,
    sm: scaleRadius.sm, // 4px  - Small radius
    md: scaleRadius.md, // 8px  - Medium radius
    lg: scaleRadius.lg, // 12px - Large radius
    xl: scaleRadius.xl, // 16px - Extra large radius
    full: scaleRadius.full, // Pill shape
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
    '--spacing-none': scaleSpacing.none,
    '--spacing-xs': scaleSpacing.xs,
    '--spacing-sm': scaleSpacing.sm,
    '--spacing-md': scaleSpacing.md,
    '--spacing-lg': scaleSpacing.lg,
    '--spacing-xl': scaleSpacing.xl,
    '--spacing-2xl': scaleSpacing['2xl'],
    '--spacing-3xl': scaleSpacing['3xl'],
    '--radius-none': scaleRadius.none,
    '--radius-sm': scaleRadius.sm,
    '--radius-md': scaleRadius.md,
    '--radius-lg': scaleRadius.lg,
    '--radius-xl': scaleRadius.xl,
    '--radius-full': scaleRadius.full,
  },

  // Semantic tokens
  semantic: {
    '--spacing-normal': semanticSpacing.spacing.normal,
    '--spacing-relaxed': semanticSpacing.spacing.relaxed,
    '--radius-md': semanticSpacing.radius.md,
    '--radius-lg': semanticSpacing.radius.lg,
  },
} as const

// ============================================
// BACKWARD COMPATIBILITY
// ============================================
/**
 * Legacy exports for backward compatibility
 * @deprecated Use semanticSpacing instead
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const

export const spacingPresets = {
  xs: spacing[1],
  sm: spacing[2],
  md: spacing[4],
  lg: spacing[6],
  xl: spacing[8],
  '2xl': spacing[12],
  '3xl': spacing[16],
} as const

export const componentSpacing = {
  buttonPadding: {
    sm: { vertical: spacing[2], horizontal: spacing[4] },
    md: { vertical: spacing[3], horizontal: spacing[5] },
    lg: { vertical: spacing[4], horizontal: spacing[6] },
  },
  inputPadding: {
    sm: { vertical: spacing[2], horizontal: spacing[3] },
    md: { vertical: spacing[3], horizontal: spacing[4] },
    lg: { vertical: spacing[4], horizontal: spacing[5] },
  },
  cardPadding: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  },
  gap: {
    xs: spacing[2],
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
    xl: spacing[8],
  },
} as const

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const

export const spacingTokens = {
  spacing,
  spacingPresets,
  componentSpacing,
  borderRadius,
} as const

export type Spacing = typeof spacingTokens
export type SpacingValue = keyof typeof spacing
export type BorderRadius = keyof typeof borderRadius
