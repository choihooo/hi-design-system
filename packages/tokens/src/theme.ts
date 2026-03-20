/**
 * Theme System - Light and Dark themes
 *
 * Defines complete theme variants for light and dark modes.
 * Dark theme inverts appropriate values while maintaining brand colors.
 *
 * @see design-tokens.pen screen 3 (Dark Theme)
 * @see semantic.ts - Base semantic tokens (light theme)
 */

// Import semantic tokens
import { semantic as lightTheme } from './semantic';

// Dark theme (inverted for dark backgrounds)
// Based on design-tokens.pen screen 3: "DARK THEME"
// Note: Using 'as const' removed to allow type compatibility
export const darkTheme = {
  color: {
    // Brand colors remain the same in dark mode
    brand: {
      primary: '#5E6AD2',      // Iris - unchanged
      primaryHover: '#4E5AC2',
      primaryActive: '#3E4AB2',
      secondary: '#A855F7',    // Purple - unchanged
      secondaryHover: '#9333EA',
      secondaryActive: '#7E22CE',
    },

    // Text colors - inverted for dark mode
    text: {
      primary: '#F9FAFB',      // neutral.50 (was 900)
      secondary: '#D1D5DB',    // neutral.300 (was 600)
      tertiary: '#9CA3AF',     // neutral.400 (was 500)
      disabled: '#6B7280',     // neutral.500 (was 400)
      inverse: '#111827',      // neutral.900 (was 50)
      link: '#818CF8',         // Lighter blue for dark mode
      linkHover: '#6366F1',    // Darker blue on hover
    },

    // Background colors - inverted for dark mode
    background: {
      primary: '#111827',      // neutral.900 (was 0)
      secondary: '#1F2937',    // neutral.800 (was 50)
      tertiary: '#374151',     // neutral.700 (was 100)
      elevated: '#1F2937',     // neutral.800 (was white)
      overlay: 'rgba(0, 0, 0, 0.7)',  // Darker overlay
      disabled: '#1F2937',     // neutral.800
    },

    // Border colors - adjusted for dark mode
    border: {
      default: '#374151',      // neutral.700 (was 200)
      muted: '#1F2937',        // neutral.800 (was 100)
      strong: '#4B5563',       // neutral.600 (was 300)
      focus: '#5E6AD2',        // brand.primary
      error: '#F87171',        // Lighter red for dark mode
      success: '#4ADE80',      // Lighter green
      warning: '#FBBF24',      // Lighter yellow
    },

    // Semantic colors - adjusted for dark mode
    success: '#4ADE80',        // Lighter green
    successHover: '#22C55E',
    successBg: 'rgba(34, 197, 94, 0.1)',
    warning: '#FBBF24',        // Lighter yellow
    warningHover: '#F59E0B',
    warningBg: 'rgba(245, 158, 11, 0.1)',
    error: '#F87171',          // Lighter red
    errorHover: '#EF4444',
    errorBg: 'rgba(239, 68, 68, 0.1)',
    info: '#60A5FA',           // Lighter blue
    infoHover: '#3B82F6',
    infoBg: 'rgba(59, 130, 246, 0.1)',
  },

  // Spacing remains the same in dark mode
  spacing: {
    tight: 4,
    compact: 8,
    normal: 16,
    relaxed: 24,
    spacious: 32,
    button: {
      padding: {
        sm: { vertical: 8, horizontal: 12 },
        md: { vertical: 12, horizontal: 16 },
        lg: { vertical: 16, horizontal: 20 },
      },
      gap: 8,
    },
    input: {
      padding: {
        sm: { vertical: 8, horizontal: 12 },
        md: { vertical: 12, horizontal: 12 },
        lg: { vertical: 16, horizontal: 16 },
      },
      labelGap: 4,
      helperGap: 4,
    },
    card: {
      padding: {
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
      },
    },
    modal: {
      padding: {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      },
    },
    toast: {
      padding: 12,
      gap: 8,
    },
  },

  // Typography remains the same in dark mode
  typography: {
    display: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    heading: {
      h1: { fontSize: 30, fontWeight: 700, lineHeight: 1.25 },
      h2: { fontSize: 24, fontWeight: 600, lineHeight: 1.375 },
      h3: { fontSize: 20, fontWeight: 600, lineHeight: 1.375 },
      h4: { fontSize: 18, fontWeight: 600, lineHeight: 1.5 },
      h5: { fontSize: 16, fontWeight: 500, lineHeight: 1.5 },
      h6: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },
    },
    body: {
      large: { fontSize: 18, fontWeight: 400, lineHeight: 1.625 },
      default: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
      small: { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },
      xs: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },
    },
    component: {
      button: { fontSize: 16, fontWeight: 500, lineHeight: 1.5 },
      input: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
      caption: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },
      overline: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: 0.1,
        textTransform: 'uppercase',
      },
      label: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },
      helper: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },
    },
  },

  // Border radius remains the same
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  // Elevation - adjusted for dark mode (more subtle)
  elevation: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },

  // Z-index remains the same
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // Animation remains the same
  animation: {
    duration: {
      fast: 150,
      normal: 200,
      slow: 300,
      slower: 500,
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

// Export light theme for direct use
export { lightTheme };

// Export SemanticTokens type for re-export
export type { SemanticTokens } from './semantic';

// Theme type
export type Theme = 'light' | 'dark';

// Theme collection
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;
