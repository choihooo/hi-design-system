/**
 * Screen testing utilities
 * @description Helpers for testing screen accessibility and content
 */
import { within } from '@testing-library/dom'

/**
 * Get document body as a screen container
 * @usage
 * ```tsx
 * import { screen } from '@hi-design/test-utils/screen';
 *
 * expect(screen.getByText('Hello')).toBeInTheDocument();
 * ```
 */
export const screen = within(document.body)

/**
 * Re-export everything from @testing-library/dom
 */
export * from '@testing-library/dom'
