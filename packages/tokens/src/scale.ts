/**
 * Scale Tokens - Layer 2 of 3-layer token architecture
 *
 * Scale tokens provide named references to raw values.
 * They organize raw values into logical scales (50-950, xs-xl, etc.)
 * and are the bridge between raw values and semantic tokens.
 *
 * @see raw.ts - Raw Values layer
 * @see semantic.ts - Semantic Tokens layer
 */

import { raw } from './raw';

export const scale = {
  // ============================================
  // COLOR SCALES
  // ============================================

  color: {
    // Primary scale (based on Iris)
    primary: {
      50: raw.colors.neutral[50],
      100: raw.colors.neutral[100],
      200: raw.colors.neutral[200],
      300: raw.colors.neutral[300],
      400: raw.colors.neutral[400],
      500: raw.colors.brand.primary,
      600: raw.colors.brand.primaryHover,
      700: raw.colors.brand.primaryActive,
      800: raw.colors.neutral[800],
      900: raw.colors.neutral[900],
      950: raw.colors.neutral[950],
    },

    // Secondary scale (based on Purple)
    secondary: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: raw.colors.brand.secondary,
      600: raw.colors.brand.secondaryHover,
      700: raw.colors.brand.secondaryActive,
      800: '#6B21A8',
      900: '#581C87',
      950: '#3B0764',
    },

    // Neutral scale (gray)
    neutral: raw.colors.neutral,

    // Semantic colors
    success: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: raw.colors.semantic.success,
      600: raw.colors.semantic.successHover,
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
      950: '#052E16',
    },

    warning: {
      50: '#FFFbeb',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: raw.colors.semantic.warning,
      600: raw.colors.semantic.warningHover,
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
      950: '#451A03',
    },

    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: raw.colors.semantic.error,
      600: raw.colors.semantic.errorHover,
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
      950: '#450A0A',
    },

    info: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: raw.colors.semantic.info,
      600: raw.colors.semantic.infoHover,
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
      950: '#172554',
    },
  },

  // ============================================
  // SPACING SCALE
  // ============================================

  spacing: {
    none: raw.spacing[0],
    px: raw.spacing[1],
    xs: raw.spacing[2],
    sm: raw.spacing[3],
    md: raw.spacing[4],
    lg: raw.spacing[5],
    xl: raw.spacing[6],
    '2xl': raw.spacing[7],
    '3xl': raw.spacing[8],
    '4xl': raw.spacing[9],
    '5xl': raw.spacing[10],
    '6xl': raw.spacing[11],
    '7xl': raw.spacing[12],
  },

  // ============================================
  // TYPOGRAPHY SCALE
  // ============================================

  typography: {
    // Font size scale
    fontSize: {
      xs: raw.typography.fontSize.xs,
      sm: raw.typography.fontSize.sm,
      base: raw.typography.fontSize.base,
      lg: raw.typography.fontSize.lg,
      xl: raw.typography.fontSize.xl,
      '2xl': raw.typography.fontSize['2xl'],
      '3xl': raw.typography.fontSize['3xl'],
      '4xl': raw.typography.fontSize['4xl'],
      '5xl': raw.typography.fontSize['5xl'],
      '6xl': raw.typography.fontSize['6xl'],
    },

    // Font weight scale
    fontWeight: {
      light: raw.typography.fontWeight.light,
      regular: raw.typography.fontWeight.regular,
      medium: raw.typography.fontWeight.medium,
      semibold: raw.typography.fontWeight.semibold,
      bold: raw.typography.fontWeight.bold,
    },

    // Line height scale
    lineHeight: {
      tight: raw.typography.lineHeight.tight,
      snug: raw.typography.lineHeight.snug,
      normal: raw.typography.lineHeight.normal,
      relaxed: raw.typography.lineHeight.relaxed,
      loose: raw.typography.lineHeight.loose,
    },

    // Letter spacing scale
    letterSpacing: {
      narrow: raw.typography.letterSpacing.narrow,
      normal: raw.typography.letterSpacing.normal,
      wide: raw.typography.letterSpacing.wide,
      wider: raw.typography.letterSpacing.wider,
      widest: raw.typography.letterSpacing.widest,
    },

    // Font family
    fontFamily: raw.typography.fontFamily,
  },

  // ============================================
  // BORDER RADIUS SCALE
  // ============================================

  borderRadius: {
    none: raw.borderRadius[0],
    xs: raw.borderRadius[1],
    sm: raw.borderRadius[2],
    md: raw.borderRadius[3],
    lg: raw.borderRadius[4],
    xl: raw.borderRadius[5],
    '2xl': raw.borderRadius[6],
    full: raw.borderRadius.full,
  },

  // ============================================
  // SHADOW SCALE
  // ============================================

  shadow: raw.shadow,

  // Z-index scale
  zIndex: raw.zIndex,

  // ============================================
  // ANIMATION SCALE
  // ============================================

  animation: {
    duration: raw.animation.duration,
    easing: raw.animation.easing,
  },
} as const;

// Type definitions
export type ScaleTokens = typeof scale;
