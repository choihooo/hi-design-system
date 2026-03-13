/**
 * classNames Tests
 */
import { describe, expect, it } from 'vitest'
import { classNames } from '../classNames'

describe('classNames', () => {
  it('should join class names', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar')
  })

  it('should filter out falsy values', () => {
    expect(classNames('foo', false, 'bar', null, 'baz', undefined)).toBe('foo bar baz')
  })

  it('should handle empty input', () => {
    expect(classNames()).toBe('')
  })

  it('should handle only falsy values', () => {
    expect(classNames(false, null, undefined)).toBe('')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const isDisabled = false
    expect(classNames('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active')
  })
})
