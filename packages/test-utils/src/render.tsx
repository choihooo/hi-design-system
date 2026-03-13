/**
 * Custom render function for HI Design System components
 * @description Enhanced render with ThemeProvider and global styles
 */

import { ThemeProvider } from '@hi-design/theme'

// Import global styles if available
try {
  require('@hi-design/react/src/styles/global.css')
} catch {
  // Ignore if styles not available
}

export interface RenderOptions {
  theme?: 'light' | 'dark' | 'system'
  wrapper?: React.ComponentType<{ children: React.ReactNode }>
}

/**
 * Custom render function with automatic ThemeProvider
 *
 * @usage
 * ```tsx
 * import { render } from '@hi-design/test-utils/render';
 *
 * const { getByText } = render(<Button>Click me</Button>);
 * ```
 */
export function render(
  ui: React.ReactElement,
  { theme = 'light', wrapper: Wrapper }: RenderOptions = {},
) {
  const ThemedWrapper = Wrapper
    ? ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme={theme}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      )

  return {
    ...render(ui, { wrapper: ThemedWrapper }),
  }
}

/**
 * Render with dark theme
 */
export function renderDark(ui: React.ReactElement) {
  return render(ui, { theme: 'dark' })
}

/**
 * Render with light theme
 */
export function renderLight(ui: React.ReactElement) {
  return render(ui, { theme: 'light' })
}

// Re-export everything from RTL
export * from '@testing-library/react'
