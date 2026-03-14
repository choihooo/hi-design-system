/**
 * Accessibility and Animation Utilities Tests
 */

import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest'
import { getAnimationDuration, prefersReducedMotion } from '../animations'

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

describe('Animation Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('prefersReducedMotion', () => {
    it('should return false when motion is allowed', () => {
      ;(window.matchMedia as Mock).mockReturnValue({
        matches: false,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })

      expect(prefersReducedMotion()).toBe(false)
    })

    it('should return true when user prefers reduced motion', () => {
      ;(window.matchMedia as Mock).mockReturnValue({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })

      expect(prefersReducedMotion()).toBe(true)
    })

    it('should return false in SSR environment', () => {
      const originalWindow = global.window
      // @ts-expect-error - testing SSR
      delete global.window

      expect(prefersReducedMotion()).toBe(false)

      global.window = originalWindow
    })
  })

  describe('getAnimationDuration', () => {
    it('should return 0 when reduced motion is preferred', () => {
      ;(window.matchMedia as Mock).mockReturnValue({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })

      expect(getAnimationDuration(300)).toBe(0)
    })

    it('should return default duration when motion is allowed', () => {
      ;(window.matchMedia as Mock).mockReturnValue({
        matches: false,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })

      expect(getAnimationDuration(300)).toBe(300)
    })
  })
})
