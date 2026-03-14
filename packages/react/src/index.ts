/**
 * @hi-design/react
 *
 * React web components for HI Design System
 */

// Re-export design tokens for convenience
export * from '@hi-design/tokens'
export type {
  ButtonProps,
  CardProps,
  InputProps,
  ModalProps,
  ToastProps,
  TextProps,
} from '@hi-design/types'
export { default as Button } from './components/Button/Button'
export { default as Card } from './components/Card/Card'
export { default as Input } from './components/Input/Input'
export { default as Modal } from './components/Modal/Modal'
export { default as Toast } from './components/Toast/Toast'
export { default as Text } from './components/Typography/Typography'
export { default as Typography } from './components/Typography/Typography' // Alias for backward compatibility
