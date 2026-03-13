/**
 * Async testing utilities
 * @description Helpers for waiting for async operations in tests
 */
import { waitFor as waitForRTL } from '@testing-library/react'

/**
 * Wait for condition to be true
 *
 * @usage
 * ```tsx
 * import { waitFor } from '@hi-design/test-utils/waitFor';
 *
 * await waitFor(() => {
 *   expect(mockHandler).toHaveBeenCalled();
 * });
 * ```
 */
export async function waitFor(
  callback: () => void | Promise<void>,
  options?: { timeout?: number },
): Promise<void> {
  return waitForRTL(callback, options)
}

/**
 * Wait for element to appear
 */
export async function waitForElement(
  callback: () => HTMLElement,
  options?: { timeout?: number },
): Promise<HTMLElement> {
  return waitForRTL(callback, options)
}

/**
 * Wait for element to be removed
 */
export async function waitForElementToBeRemoved(
  callback: () => HTMLElement | null,
  options?: { timeout?: number },
): Promise<void> {
  return waitForRTL(() => {
    const element = callback()
    if (element) {
      throw new Error('Element still in document')
    }
  }, options)
}

/**
 * Re-export everything from RTL
 */
export * from '@testing-library/react'
