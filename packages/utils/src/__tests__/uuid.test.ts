/**
 * uuid Tests
 */
import { describe, expect, it } from 'vitest'
import { uuid } from '../uuid'

describe('uuid', () => {
  it('should generate a UUID', () => {
    const id = uuid()
    expect(id).toBeTruthy()
    expect(typeof id).toBe('string')
  })

  it('should generate unique UUIDs', () => {
    const id1 = uuid()
    const id2 = uuid()
    expect(id1).not.toBe(id2)
  })

  it('should generate UUID in correct format', () => {
    const id = uuid()
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  })

  it('should generate UUID of correct length', () => {
    const id = uuid()
    expect(id.length).toBe(36) // 8-4-4-4-12 format
  })
})
