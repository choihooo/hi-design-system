/**
 * createContext Tests
 */

import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { createContext } from '../createContext'

describe('createContext', () => {
  it('should create context with provider and hook', () => {
    const { Context, Provider, useContext } = createContext({
      displayName: 'TestContext',
      defaultValue: { value: 42 },
    })

    expect(Context).toBeDefined()
    expect(Provider).toBeDefined()
    expect(useContext).toBeDefined()
  })

  it('should provide context value', () => {
    const { Provider, useContext } = createContext({
      displayName: 'TestContext',
      defaultValue: { value: 42 },
    })

    const { result } = renderHook(() => useContext(), {
      wrapper: ({ children }) => <Provider value={{ value: 100 }}>{children}</Provider>,
    })

    expect(result.current.value).toBe(100)
  })

  it('should throw error when used outside provider in strict mode', () => {
    const { useContext } = createContext({
      displayName: 'TestContext',
      defaultValue: { value: 42 },
      strict: true,
    })

    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useContext())
    }).toThrow()

    consoleError.mockRestore()
  })

  it('should not throw error when used outside provider in non-strict mode', () => {
    const { useContext } = createContext({
      displayName: 'TestContext',
      defaultValue: { value: 42 },
      strict: false,
    })

    const { result } = renderHook(() => useContext())

    expect(result.current.value).toBe(42)
  })
})
