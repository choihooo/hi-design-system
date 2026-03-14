/**
 * Custom render function for HI Design System components
 * @description Enhanced render with ThemeProvider and global styles
 */

import { ThemeProvider } from '@hi-design/theme'
import { type RenderResult, render as rtlRender } from '@testing-library/react'
import type { ComponentType, ReactElement, ReactNode } from 'react'

// Import global styles if available
try {
  require('@hi-design/react/src/styles/global.css')
} catch {
  // Ignore if styles not available
}

export interface RenderOptions {
  theme?: 'light' | 'dark' | 'system'
  wrapper?: ComponentType<{ children: ReactNode }>
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
  ui: ReactElement,
  { theme = 'light', wrapper: Wrapper }: RenderOptions = {},
): RenderResult {
  const ThemedWrapper: ComponentType<{ children: ReactNode }> = Wrapper
    ? ({ children }: { children: ReactNode }) => (
        <ThemeProvider defaultTheme={theme}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      )
    : ({ children }: { children: ReactNode }) => (
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      )

  return rtlRender(ui, { wrapper: ThemedWrapper })
}

/**
 * Render with dark theme
 */
export function renderDark(ui: ReactElement): RenderResult {
  return render(ui, { theme: 'dark' })
}

/**
 * Render with light theme
 */
export function renderLight(ui: ReactElement): RenderResult {
  return render(ui, { theme: 'light' })
}

// Re-export everything from RTL
export * from '@testing-library/react'
