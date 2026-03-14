/**
 * @hi-design/react
 *
 * React web components for HI Design System
 *
 * Now uses @hi-design/primitives as foundation:
 * - All complex components are composed of primitives
 * - Primitives are also exported for direct use
 * - Backward compatibility maintained
 */

// Re-export design tokens for convenience
export * from '@hi-design/tokens'

// Export primitive components for direct use
export { Box, Text as PrimitiveText, Pressable, Icon } from '@hi-design/primitives'

// Re-export types
export type {
  ButtonProps,
  CardProps,
  InputProps,
  ModalProps,
  ToastProps,
  TextProps,
} from '@hi-design/types'

// Export complex components (composed of primitives)
export { default as Button } from './components/Button/Button'
export { default as Card } from './components/Card/Card'
export { default as Input } from './components/Input/Input'
export { default as Modal } from './components/Modal/Modal'
export { default as Toast } from './components/Toast/Toast'

// Typography alias for backward compatibility
export { default as Typography } from './components/Typography/Typography'
export { default as Text } from './components/Typography/Typography' // Alias for Typography
