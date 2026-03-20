/**
 * Raw Values - Layer 1 of 3-layer token architecture
 *
 * These are the base values from design-tokens.pen:
 * - Colors: hex values, RGB values
 * - Typography: font sizes, weights, line heights
 * - Spacing: pixel values
 * - Border Radius: pixel values
 * - Shadows: CSS box-shadow values
 * - Animation: durations and easing functions
 *
 * @see design-tokens.pen (SOT - Single Source of Truth)
 */

export const raw = {
  // ============================================
  // COLORS (from design-tokens.pen screens 1-3)
  // ============================================

  colors: {
    // Brand Colors (Iris, Ink, Canvas)
    // Screen 1: "COLOR SYSTEM / SOURCE OF TRUTH"
    brand: {
      primary: '#5E6AD2',      // Iris
      primaryHover: '#4E5AC2',
      primaryActive: '#3E4AB2',
      secondary: '#A855F7',    // Purple
      secondaryHover: '#9333EA',
      secondaryActive: '#7E22CE',
    },

    // Neutral Scale (Gray scale from 50 to 950)
    neutral: {
      0: '#FFFFFF',
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#030712',
    },

    // Semantic Colors
    semantic: {
      success: '#22C55E',
      successHover: '#16A34A',
      warning: '#F59E0B',
      warningHover: '#D97706',
      error: '#EF4444',
      errorHover: '#DC2626',
      info: '#3B82F6',
      infoHover: '#2563EB',
    },
  },

  // ============================================
  // TYPOGRAPHY (from design-tokens.pen screen 4)
  // ============================================

  typography: {
    fontFamily: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    // Font Sizes (in px)
    fontSize: {
      xs: 12,    // 12px
      sm: 14,    // 14px
      base: 16,  // 16px
      lg: 18,    // 18px
      xl: 20,    // 20px
      '2xl': 24, // 24px
      '3xl': 30, // 30px
      '4xl': 36, // 36px
      '5xl': 48, // 48px
      '6xl': 60, // 60px
    },

    // Font Weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Line Heights (unitless values)
    lineHeight: {
      tight: 1.25,     // 1.25
      snug: 1.375,     // 1.375
      normal: 1.5,     // 1.5
      relaxed: 1.625,  // 1.625
      loose: 1.75,     // 1.75
    },

    // Letter Spacing (in em)
    letterSpacing: {
      narrow: -0.025,   // -0.025em
      normal: 0,
      wide: 0.025,      // 0.025em
      wider: 0.05,      // 0.05em
      widest: 0.1,      // 0.1em
    },
  },

  // ============================================
  // SPACING (from design-tokens.pen screen 5)
  // ============================================

  spacing: {
    0: 0,     // 0px
    1: 4,     // 4px
    2: 8,     // 8px
    3: 12,    // 12px
    4: 16,    // 16px
    5: 20,    // 20px
    6: 24,    // 24px
    7: 32,    // 32px
    8: 40,    // 40px
    9: 48,    // 48px
    10: 56,   // 56px
    11: 64,   // 64px
    12: 72,   // 72px
  },

  // ============================================
  // BORDER RADIUS (from design-tokens.pen screen 9)
  // ============================================

  borderRadius: {
    0: 0,     // 0px
    1: 4,     // 4px
    2: 8,     // 8px
    3: 12,    // 12px
    4: 16,    // 16px
    5: 24,    // 24px
    6: 32,    // 32px
    full: 9999, // Pill shape
  },

  // ============================================
  // ELEVATION & SHADOWS (from design-tokens.pen screen 8)
  // ============================================

  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // ============================================
  // ANIMATION (from design-tokens.pen screen 10)
  // ============================================

  animation: {
    // Durations (in ms)
    duration: {
      fast: 150,    // 150ms
      normal: 200,  // 200ms
      slow: 300,    // 300ms
      slower: 500,  // 500ms
    },

    // Easing functions (cubic-bezier)
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  // ============================================
  // COMPONENT SPECIFIC (from design-tokens.pen screen 6)
  // ============================================

  component: {
    // Button specific values
    button: {
      height: {
        sm: 32,
        md: 40,
        lg: 48,
      },
    },

    // Input specific values
    input: {
      height: {
        sm: 32,
        md: 40,
        lg: 48,
      },
      borderWidth: 1,
    },

    // Card specific values
    card: {
      borderWidth: 1,
    },
  },
} as const;

// Type definitions
export type RawTokens = typeof raw;
