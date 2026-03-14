/**
 * Mock data and utilities for testing
 * @description Common mock data for component testing
 */

/**
 * Mock event handlers
 */
export const mockHandlers = {
  onPress: jest.fn(),
  onClick: jest.fn(),
  onClose: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
}

/**
 * Mock theme context value
 */
export const mockThemeContext = {
  theme: 'light' as const,
  resolvedTheme: 'light' as const,
  setTheme: jest.fn(),
}

/**
 * Mock component props generators
 */
export const mockProps = {
  button: {
    children: 'Button Text',
    onPress: mockHandlers.onPress,
    testID: 'test-button',
  },

  input: {
    label: 'Test Input',
    placeholder: 'Enter text',
    value: '',
    onChangeText: mockHandlers.onChange,
    testID: 'test-input',
  },

  card: {
    elevation: 'md' as const,
    padding: 'lg' as const,
    children: 'Card Content',
    testID: 'test-card',
  },

  modal: {
    visible: true,
    title: 'Test Modal',
    children: 'Modal content',
    onClose: mockHandlers.onClose,
    testID: 'test-modal',
  },

  toast: {
    visible: true,
    message: 'Test toast message',
    type: 'info' as const,
    duration: 3000,
    onClose: mockHandlers.onClose,
  },
}

/**
 * Reset all mocks
 */
export function resetMocks() {
  Object.values(mockHandlers).forEach((handler) => {
    handler.mockReset()
  })
}

/**
 * Clear all mocks
 */
export function clearMocks() {
  Object.values(mockHandlers).forEach((handler) => {
    handler.mockClear()
  })
}
