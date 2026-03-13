/**
 * ThemeProvider Tests
 */

import { act, render, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../ThemeProvider'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset document classes
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.removeAttribute('data-theme')
  })

  it('should render children', () => {
    const { getByText } = render(
      <ThemeProvider defaultTheme="light">
        <div>Test Children</div>
      </ThemeProvider>,
    )
    expect(getByText('Test Children')).toBeInTheDocument()
  })

  it('should apply light theme by default', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <div>Test</div>
      </ThemeProvider>,
    )
    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('should apply dark theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <div>Test</div>
      </ThemeProvider>,
    )
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should provide theme context', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider defaultTheme="light">{children}</ThemeProvider>,
    })

    expect(result.current.theme).toBe('light')
    expect(result.current.resolvedTheme).toBe('light')
    expect(typeof result.current.setTheme).toBe('function')
  })

  it('should change theme when setTheme is called', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider defaultTheme="light">{children}</ThemeProvider>,
    })

    act(() => {
      result.current.setTheme('dark')
    })

    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should throw error when used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')

    consoleError.mockRestore()
  })
})
