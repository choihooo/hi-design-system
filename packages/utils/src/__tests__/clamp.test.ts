/**
 * clamp Tests
 */
import { describe, expect, it } from 'vitest'
import { clamp, mapRange } from '../clamp'

describe('clamp', () => {
  it('should clamp value within range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
    expect(clamp(-5, 0, 10)).toBe(0)
    expect(clamp(15, 0, 10)).toBe(10)
  })

  it('should handle edge cases', () => {
    expect(clamp(0, 0, 10)).toBe(0)
    expect(clamp(10, 0, 10)).toBe(10)
  })

  it('should handle negative ranges', () => {
    expect(clamp(-5, -10, 0)).toBe(-5)
    expect(clamp(-15, -10, 0)).toBe(-10)
    expect(clamp(5, -10, 0)).toBe(0)
  })
})

describe('mapRange', () => {
  it('should map value from one range to another', () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50)
    expect(mapRange(0, 0, 10, 0, 100)).toBe(0)
    expect(mapRange(10, 0, 10, 0, 100)).toBe(100)
  })

  it('should handle inverse mapping', () => {
    expect(mapRange(5, 0, 10, 100, 0)).toBe(50)
  })

  it('should handle negative ranges', () => {
    expect(mapRange(0, -10, 10, -100, 100)).toBe(0)
    expect(mapRange(5, -10, 10, -100, 100)).toBe(50)
  })

  it('should extrapolate values outside range', () => {
    expect(mapRange(15, 0, 10, 0, 100)).toBe(150)
    expect(mapRange(-5, 0, 10, 0, 100)).toBe(-50)
  })
})
