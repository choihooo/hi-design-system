/**
 * Semantic Tokens - Layer 3 of 3-layer token architecture
 *
 * Semantic tokens express DESIGN INTENT rather than specific values.
 * These are the PRIMARY tokens used in components.
 *
 * Examples:
 * - brand.primary (not #5E6AD2)
 * - text.primary (not #111827)
 * - spacing.normal (not 16px)
 *
 * Benefits:
 * - Clear code intent
 * - Easy theming
 * - Runtime customization
 *
 * @see raw.ts - Raw Values layer
 * @see scale.ts - Scale Tokens layer
 */

import { scale } from './scale';

export const semantic = {
  // ============================================
  // COLORS - Design intent based colors
  // ============================================

  color: {
    // Brand colors (primary identity colors)
    brand: {
      primary: scale.color.primary[500],
      primaryHover: scale.color.primary[600],
      primaryActive: scale.color.primary[700],
      secondary: scale.color.secondary[500],
      secondaryHover: scale.color.secondary[600],
      secondaryActive: scale.color.secondary[700],
    },

    // Text colors (for text content)
    text: {
      primary: scale.color.neutral[900],      // Main text
      secondary: scale.color.neutral[600],    // Secondary text
      tertiary: scale.color.neutral[500],     // Tertiary text
      disabled: scale.color.neutral[400],     // Disabled text
      inverse: scale.color.neutral[50],       // Text on dark bg
      link: scale.color.primary[500],         // Links
      linkHover: scale.color.primary[600],    // Link hover
    },

    // Background colors
    background: {
      primary: scale.color.neutral[0],        // Main background
      secondary: scale.color.neutral[50],     // Secondary background
      tertiary: scale.color.neutral[100],     // Tertiary background
      elevated: '#FFFFFF',                    // Elevated surfaces
      overlay: 'rgba(0, 0, 0, 0.5)',         // Modal/Dialog overlay
      disabled: scale.color.neutral[100],     // Disabled background
    },

    // Border colors
    border: {
      default: scale.color.neutral[200],      // Default border
      muted: scale.color.neutral[100],        // Muted border
      strong: scale.color.neutral[300],       // Strong border
      focus: scale.color.primary[500],        // Focus ring
      error: scale.color.error[500],          // Error border
      success: scale.color.success[500],      // Success border
      warning: scale.color.warning[500],      // Warning border
    },

    // Semantic state colors
    success: scale.color.success[500],
    successHover: scale.color.success[600],
    successBg: scale.color.success[50],
    warning: scale.color.warning[500],
    warningHover: scale.color.warning[600],
    warningBg: scale.color.warning[50],
    error: scale.color.error[500],
    errorHover: scale.color.error[600],
    errorBg: scale.color.error[50],
    info: scale.color.info[500],
    infoHover: scale.color.info[600],
    infoBg: scale.color.info[50],
  },

  // ============================================
  // SPACING - Semantic spacing tokens
  // ============================================

  spacing: {
    // General spacing (semantic names)
    tight: scale.spacing.xs,           // 4px - Tight spacing
    compact: scale.spacing.sm,         // 8px - Compact spacing
    normal: scale.spacing.lg,          // 16px - Normal spacing
    relaxed: scale.spacing.xl,         // 24px - Relaxed spacing
    spacious: scale.spacing['2xl'],    // 32px - Spacious spacing

    // Component-specific spacing (from design-tokens.pen screen 6)
    button: {
      padding: {
        sm: {
          vertical: scale.spacing.sm,      // 8px
          horizontal: scale.spacing.md,    // 12px
        },
        md: {
          vertical: scale.spacing.md,      // 12px
          horizontal: scale.spacing.lg,    // 16px
        },
        lg: {
          vertical: scale.spacing.lg,      // 16px
          horizontal: scale.spacing.xl,    // 20px
        },
      },
      gap: scale.spacing.sm,             // 8px gap for icon+text
    },

    input: {
      padding: {
        sm: {
          vertical: scale.spacing.sm,      // 8px
          horizontal: scale.spacing.md,    // 12px
        },
        md: {
          vertical: scale.spacing.md,      // 12px
          horizontal: scale.spacing.md,    // 12px
        },
        lg: {
          vertical: scale.spacing.lg,      // 16px
          horizontal: scale.spacing.lg,    // 16px
        },
      },
      labelGap: scale.spacing.xs,         // 4px gap between label and input
      helperGap: scale.spacing.xs,        // 4px gap between input and helper text
    },

    card: {
      padding: {
        sm: scale.spacing.md,             // 12px
        md: scale.spacing.lg,             // 16px
        lg: scale.spacing.xl,             // 20px
        xl: scale.spacing['2xl'],         // 24px
      },
    },

    modal: {
      padding: {
        sm: scale.spacing.lg,             // 16px
        md: scale.spacing.xl,             // 20px
        lg: scale.spacing['2xl'],         // 24px
        xl: scale.spacing['3xl'],         // 32px
      },
    },

    toast: {
      padding: scale.spacing.md,          // 12px
      gap: scale.spacing.sm,              // 8px
    },

    radio: {
      gap: {
        sm: scale.spacing.xs,      // 6px
        md: scale.spacing.sm,      // 8px
        lg: scale.spacing.md,      // 12px
      },
      control: {
        size: {
          sm: 16,
          md: 20,
          lg: 24,
        },
      },
      dot: {
        size: {
          sm: 8,
          md: 10,
          lg: 12,
        },
      },
      border: {
        width: {
          default: 1.5,
          disabled: 1,
        },
      },
    },
  },

  // ============================================
  // TYPOGRAPHY - Semantic typography tokens
  // ============================================

  typography: {
    // Display typography (largest headings)
    display: {
      fontSize: scale.typography.fontSize['4xl'],
      fontWeight: scale.typography.fontWeight.bold,
      lineHeight: scale.typography.lineHeight.tight,
      letterSpacing: scale.typography.letterSpacing.narrow,
    },

    // Heading typography
    heading: {
      h1: {
        fontSize: scale.typography.fontSize['3xl'],
        fontWeight: scale.typography.fontWeight.bold,
        lineHeight: scale.typography.lineHeight.tight,
      },
      h2: {
        fontSize: scale.typography.fontSize['2xl'],
        fontWeight: scale.typography.fontWeight.semibold,
        lineHeight: scale.typography.lineHeight.snug,
      },
      h3: {
        fontSize: scale.typography.fontSize.xl,
        fontWeight: scale.typography.fontWeight.semibold,
        lineHeight: scale.typography.lineHeight.snug,
      },
      h4: {
        fontSize: scale.typography.fontSize.lg,
        fontWeight: scale.typography.fontWeight.semibold,
        lineHeight: scale.typography.lineHeight.normal,
      },
      h5: {
        fontSize: scale.typography.fontSize.base,
        fontWeight: scale.typography.fontWeight.medium,
        lineHeight: scale.typography.lineHeight.normal,
      },
      h6: {
        fontSize: scale.typography.fontSize.sm,
        fontWeight: scale.typography.fontWeight.medium,
        lineHeight: scale.typography.lineHeight.normal,
      },
    },

    // Body typography
    body: {
      large: {
        fontSize: scale.typography.fontSize.lg,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.relaxed,
      },
      default: {
        fontSize: scale.typography.fontSize.base,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
      small: {
        fontSize: scale.typography.fontSize.sm,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
      xs: {
        fontSize: scale.typography.fontSize.xs,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
    },

    // Component-specific typography
    component: {
      button: {
        fontSize: scale.typography.fontSize.base,
        fontWeight: scale.typography.fontWeight.medium,
        lineHeight: scale.typography.lineHeight.normal,
      },
      input: {
        fontSize: scale.typography.fontSize.base,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
      caption: {
        fontSize: scale.typography.fontSize.xs,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
      overline: {
        fontSize: scale.typography.fontSize.xs,
        fontWeight: scale.typography.fontWeight.semibold,
        lineHeight: scale.typography.lineHeight.normal,
        letterSpacing: scale.typography.letterSpacing.widest,
        textTransform: 'uppercase' as const,
      },
      label: {
        fontSize: scale.typography.fontSize.sm,
        fontWeight: scale.typography.fontWeight.medium,
        lineHeight: scale.typography.lineHeight.normal,
      },
      helper: {
        fontSize: scale.typography.fontSize.xs,
        fontWeight: scale.typography.fontWeight.regular,
        lineHeight: scale.typography.lineHeight.normal,
      },
    },
  },

  // ============================================
  // BORDER RADIUS - Semantic radius tokens
  // ============================================

  borderRadius: {
    xs: scale.borderRadius.xs,       // 4px
    sm: scale.borderRadius.sm,       // 8px
    md: scale.borderRadius.md,       // 12px
    lg: scale.borderRadius.lg,       // 16px
    xl: scale.borderRadius.xl,       // 24px
    full: scale.borderRadius.full,   // Pill/Circle
  },

  // ============================================
  // ELEVATION - Shadow levels
  // ============================================

  elevation: {
    none: scale.shadow.none,
    sm: scale.shadow.sm,
    md: scale.shadow.md,
    lg: scale.shadow.lg,
    xl: scale.shadow.xl,
    inner: scale.shadow.inner,
  },

  // Z-index scale
  zIndex: scale.zIndex,

  // ============================================
  // ANIMATION - Animation tokens
  // ============================================

  animation: {
    duration: scale.animation.duration,
    easing: scale.animation.easing,
  },
} as const;

// Type definitions
export type SemanticTokens = typeof semantic;
