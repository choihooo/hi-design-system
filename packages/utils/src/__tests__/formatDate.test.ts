/**
 * formatDate Tests
 */
import { describe, expect, it } from 'vitest'
import { formatDate, formatRelativeTime } from '../formatDate'

describe('formatDate', () => {
  it('should format date with default options', () => {
    const date = new Date('2024-01-15')
    const result = formatDate(date)
    expect(result).toContain('January')
    expect(result).toContain('15')
    expect(result).toContain('2024')
  })

  it('should format date with custom options', () => {
    const date = new Date('2024-01-15')
    const result = formatDate(date, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
    expect(result).toMatch(/Jan.*15.*2024/)
  })

  it('should handle invalid date', () => {
    const result = formatDate('invalid')
    expect(result).toBe('Invalid Date')
  })

  it('should handle string input', () => {
    const result = formatDate('2024-01-15')
    expect(result).toContain('January')
  })

  it('should handle timestamp input', () => {
    const timestamp = new Date('2024-01-15').getTime()
    const result = formatDate(timestamp)
    expect(result).toContain('January')
  })
})

describe('formatRelativeTime', () => {
  it('should format seconds ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 30 * 1000) // 30 seconds ago
    const result = formatRelativeTime(date)
    expect(result).toContain('second')
  })

  it('should format minutes ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 5 * 60 * 1000) // 5 minutes ago
    const result = formatRelativeTime(date)
    expect(result).toContain('minute')
  })

  it('should format hours ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 3 * 60 * 60 * 1000) // 3 hours ago
    const result = formatRelativeTime(date)
    expect(result).toContain('hour')
  })

  it('should format days ago', () => {
    const now = new Date()
    const date = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
    const result = formatRelativeTime(date)
    expect(result).toContain('day')
  })
})
