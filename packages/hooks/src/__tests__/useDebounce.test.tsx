/**
 * useDebounce Tests
 */

import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useDebounce } from '../useDebounce'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 300))
    expect(result.current).toBe('initial')
  })

  it('should debounce value updates', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'initial' },
    })

    rerender({ value: 'updated' })
    expect(result.current).toBe('initial')

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(result.current).toBe('updated')
  })

  it('should reset timer on rapid updates', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'initial' },
    })

    rerender({ value: 'update1' })
    act(() => {
      vi.advanceTimersByTime(200)
    })

    rerender({ value: 'update2' })
    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(result.current).toBe('initial')

    act(() => {
      vi.advanceTimersByTime(100)
    })

    expect(result.current).toBe('update2')
  })

  it('should use default delay of 300ms', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'initial' },
    })

    rerender({ value: 'updated' })

    act(() => {
      vi.advanceTimersByTime(299)
    })

    expect(result.current).toBe('initial')

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(result.current).toBe('updated')
  })
})
