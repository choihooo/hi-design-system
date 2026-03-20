/**
 * HI Design Tokens - Main Entry Point
 *
 * 3-Layer Token Architecture:
 * 1. Raw Values → Base values (px, hex, etc.)
 * 2. Scale Tokens → Named scales (50-950, xs-xl, etc.)
 * 3. Semantic Tokens → Design intent (PRIMARY TOKENS FOR COMPONENTS)
 *
 * Usage:
 * ```ts
 * import { tokens, applyTheme } from '@hi-design/tokens';
 *
 * // Use semantic tokens (recommended)
 * const style = {
 *   color: tokens.semantic.color.brand.primary,
 *   padding: tokens.semantic.spacing.normal,
 *   fontSize: tokens.semantic.typography.body.default.fontSize,
 * };
 *
 * // Theme switching
 * applyTheme('dark');
 * applyTheme('light');
 * const theme = getCurrentTheme();
 * toggleTheme();
 * ```
 */

// Export all layers
export { raw } from './raw';
export { scale } from './scale';
export { semantic } from './semantic';
export { darkTheme } from './theme';
export { lightTheme as lightThemeExport } from './theme';
export type { RawTokens } from './raw';
export type { ScaleTokens } from './scale';
export type { SemanticTokens } from './semantic';
export type { Theme } from './theme';

// Import semantic tokens for runtime use
import { semantic as lightTheme } from './semantic';
import { darkTheme } from './theme';
import type { SemanticTokens, Theme } from './theme';

// ============================================
// RUNTIME TOKEN SYSTEM
// ============================================

/**
 * Current active tokens (defaults to light theme)
 * This is the main export that components use
 */
let currentTokens: SemanticTokens = lightTheme;

/**
 * Tokens proxy - provides reactive access to current theme
 * Use this in components for automatic theme updates
 */
export const tokens = new Proxy({} as SemanticTokens, {
  get(_target, prop: string | symbol) {
    return currentTokens[prop as keyof SemanticTokens];
  },

  set(_target, prop: string | symbol, value: unknown) {
    (currentTokens as Record<string | symbol, unknown>)[prop] = value;
    return true;
  },
}) as SemanticTokens & { [key: string]: any };

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Apply a theme (light or dark)
 * Updates currentTokens and optionally CSS variables
 *
 * @param theme - Theme to apply ('light' | 'dark')
 * @param updateCSS - Whether to update CSS variables (default: true)
 */
export function applyTheme(theme: Theme, updateCSS = true): void {
  currentTokens = (theme === 'dark' ? darkTheme : lightTheme) as SemanticTokens;

  // Update CSS variables for web (if in browser and updateCSS is true)
  if (updateCSS && typeof document !== 'undefined') {
    updateCSSVariables(currentTokens);
  }

  // Dispatch custom event for components that need to react to theme changes
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }
}

/**
 * Get the current active theme
 * @returns 'light' | 'dark'
 */
export function getCurrentTheme(): Theme {
  return currentTokens === darkTheme ? 'dark' : 'light';
}

/**
 * Toggle between light and dark themes
 * @returns The new theme ('light' | 'dark')
 */
export function toggleTheme(): Theme {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  return newTheme;
}

/**
 * Subscribe to theme changes
 * @param callback - Function to call when theme changes
 * @returns Unsubscribe function
 */
export function onThemeChange(callback: (theme: Theme) => void): () => void {
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<Theme>;
    callback(customEvent.detail);
  };

  window.addEventListener('theme-change', handler);

  return () => {
    window.removeEventListener('theme-change', handler);
  };
}

// ============================================
// CSS VARIABLES (Web only)
// ============================================

/**
 * Update CSS variables with current theme tokens
 * Called automatically by applyTheme()
 *
 * @param tokens - Semantic tokens to convert to CSS variables
 */
function updateCSSVariables(tokensToUse: SemanticTokens): void {
  const root = document.documentElement;

  // Convert all semantic tokens to CSS variables
  setCSSVars(root, '', tokensToUse);
}

/**
 * Recursively set CSS variables from token object
 *
 * @param element - DOM element to set variables on
 * @param prefix - Current CSS variable prefix (e.g., 'color-brand-')
 * @param value - Token value to set
 */
function setCSSVars(
  element: HTMLElement,
  prefix: string,
  value: unknown
): void {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    // Recursively handle nested objects
    Object.entries(value).forEach(([key, val]) => {
      const newPrefix = prefix ? `${prefix}-${kebabize(key)}` : kebabize(key);
      setCSSVars(element, newPrefix, val);
    });
  } else if (value !== undefined) {
    // Set CSS variable for leaf values
    const varName = `--${prefix}`;
    element.style.setProperty(varName, String(value));
  }
}

/**
 * Convert camelCase to kebab-case
 * @example 'brandPrimary' -> 'brand-primary'
 */
function kebabize(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Inject CSS variables as a style tag
 * Useful for SSR or initial theme setup
 *
 * @param theme - Theme to inject ('light' | 'dark')
 * @returns CSS string with variable definitions
 */
export function generateCSSVariables(theme: Theme): string {
  const tokensToUse = (theme === 'dark' ? darkTheme : lightTheme) as SemanticTokens;
  return generateCSSVarsString(tokensToUse);
}

/**
 * Generate CSS variables string from tokens
 * @param tokens - Semantic tokens
 * @returns CSS string
 */
function generateCSSVarsString(tokensToUse: SemanticTokens, prefix = '--'): string {
  const lines: string[] = [];

  function traverse(obj: unknown, currentPrefix = prefix): void {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
      Object.entries(obj).forEach(([key, value]) => {
        const newPrefix = `${currentPrefix}${kebabize(key)}-`;
        traverse(value, newPrefix);
      });
    } else if (obj !== undefined) {
      lines.push(`${currentPrefix.slice(0, -1)}: ${obj};`);
    }
  }

  traverse(tokensToUse);

  return `:root {\n  ${lines.join('\n  ')}\n}`;
}

// ============================================
// TOKEN VALIDATION
// ============================================

/**
 * Validate that all required token paths exist
 * Useful for testing and debugging
 *
 * @param tokens - Tokens to validate
 * @returns Array of missing paths (empty if valid)
 */
export function validateTokens(tokens: SemanticTokens): string[] {
  const requiredPaths = [
    'color.brand.primary',
    'color.text.primary',
    'color.background.primary',
    'spacing.normal',
    'typography.body.default.fontSize',
    'borderRadius.md',
    'animation.duration.normal',
  ];

  const missing: string[] = [];

  for (const path of requiredPaths) {
    if (!getTokenByPath(tokens, path)) {
      missing.push(path);
    }
  }

  return missing;
}

/**
 * Get token value by dot-notation path
 * @example getTokenByPath(tokens, 'color.brand.primary')
 */
export function getTokenByPath(tokens: SemanticTokens, path: string): unknown {
  return path.split('.').reduce((obj, key) => {
    return obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[key] : undefined;
  }, tokens as unknown);
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize theme system
 * - Detects system preference
 * - Applies initial theme
 * - Sets up CSS variables
 *
 * Call this once at app startup
 */
export function initializeTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'; // Default to light on server
  }

  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Check for saved preference
  const savedTheme = localStorage.getItem('hi-theme') as Theme | null;

  // Use saved theme or system preference
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('hi-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  return initialTheme;
}

/**
 * Save theme preference to localStorage
 * @param theme - Theme to save
 */
export function saveThemePreference(theme: Theme): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('hi-theme', theme);
  }
}

// Re-export current tokens for direct access
export { currentTokens };
