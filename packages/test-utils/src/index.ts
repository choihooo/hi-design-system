/**
 * HI Design System - Test Utilities
 */

// Re-export testing-library utilities
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export {
  clearMocks,
  mockHandlers,
  mockProps,
  mockThemeContext,
  resetMocks,
} from './mocks'
export { render, renderDark, renderLight } from './render'
export { screen } from './screen'
export {
  waitFor,
  waitForElement,
  waitForElementToBeRemoved,
} from './waitFor'
