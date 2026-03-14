/**
 * @hi-design/types
 *
 * Common TypeScript type definitions for HI Design System components
 * Shared across React and React Native packages
 */

import type { CSSProperties, ReactNode } from 'react'

/**
 * Base size variants for components
 */
export type SizeVariant = 'sm' | 'md' | 'lg'

/**
 * Base color variants for interactive components
 */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'

/**
 * Button component props
 */
export interface ButtonProps {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'

  /**
   * Size variant of the button
   * @default 'md'
   */
  size?: SizeVariant

  /**
   * Color scheme to use
   * @default 'primary'
   */
  color?: ColorVariant

  /**
   * Disable the button and prevent interactions
   * @default false
   */
  disabled?: boolean

  /**
   * Loading state - shows spinner and disables button
   * @default false
   */
  loading?: boolean

  /**
   * Button is full width of its container
   * @default false
   */
  fullWidth?: boolean

  /**
   * Click/tap handler
   */
  onPress?: () => void | Promise<void>

  /**
   * Web click handler
   */
  onClick?: () => void

  /**
   * Custom className for styling overrides (shadcn/ui style)
   */
  className?: string

  /**
   * Button content
   */
  children?: ReactNode

  /**
   * Test ID for testing
   */
  testID?: string
}

/**
 * Input component props
 */
export interface InputProps {
  /**
   * Input value
   */
  value?: string

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string

  /**
   * Placeholder text
   */
  placeholder?: string

  /**
   * Input type attribute
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'textarea'

  /**
   * Visual style variant
   * @default 'outline'
   */
  variant?: 'outline' | 'filled'

  /**
   * Size variant
   * @default 'md'
   */
  size?: SizeVariant

  /**
   * Input state
   */
  state?: 'default' | 'error' | 'success'

  /**
   * Disable the input
   * @default false
   */
  disabled?: boolean

  /**
   * Input is full width of its container
   * @default false
   */
  fullWidth?: boolean

  /**
   * Read-only mode
   * @default false
   */
  readOnly?: boolean

  /**
   * Required field
   * @default false
   */
  required?: boolean

  /**
   * Label text displayed above the input
   */
  label?: string

  /**
   * Helper text displayed below the input
   */
  helperText?: string

  /**
   * Error message displayed when state is 'error'
   */
  errorText?: string

  /**
   * Custom className for styling overrides (shadcn/ui style)
   */
  className?: string

  /**
   * Value change handler
   */
  onChangeText?: (text: string) => void

  /**
   * Focus change handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void

  /**
   * Submit handler (called on Enter key press)
   */
  onSubmit?: (event: React.FormEvent) => void

  /**
   * Test ID for testing
   */
  testID?: string

  /**
   * Input name attribute for forms
   */
  name?: string

  /**
   * Autocomplete attribute
   */
  autoComplete?: string

  /**
   * Minimum length
   */
  minLength?: number

  /**
   * Maximum length
   */
  maxLength?: number

  /**
   * Validation pattern
   */
  pattern?: string

  /**
   * Show password toggle state (for password input)
   */
  showPassword?: boolean

  /**
   * Toggle password visibility handler
   */
  onTogglePassword?: (visible: boolean) => void

  /**
   * Number of rows for textarea
   */
  rows?: number
}

/**
 * Card component props
 */
export interface CardProps extends BaseComponentProps {
  /**
   * Elevation/shadow depth
   * @default 'md'
   */
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Padding variant
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Border radius variant
   * @default 'md'
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

  /**
   * Card is clickable/pressable
   * @default false
   */
  pressable?: boolean

  /**
   * Click/tap handler (when pressable is true)
   */
  onPress?: () => void

  /**
   * Type of element to render when pressable
   * @default 'button'
   */
  pressableAs?: 'button' | 'a' | 'div'

  /**
   * Additional props for pressable element (when pressable is true)
   */
  pressableProps?: React.HTMLAttributes<HTMLElement>

  /**
   * Accessibility props for pressable element
   */
  accessibleProps?: React.AriaAttributes
}

/**
 * Typography component props
 */
export interface TypographyProps {
  /**
   * Text style variant
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'

  /**
   * Font weight
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /**
   * Text color
   * @default 'neutral.900'
   */
  color?: string

  /**
   * Alignment of text
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify'

  /**
   * Custom className for styling overrides (shadcn/ui style)
   */
  className?: string

  /**
   * Inline styles for web rendering
   */
  style?: CSSProperties

  /**
   * Disable text wrapping
   * @default false
   */
  noWrap?: boolean

  /**
   * Number of lines to show (React Native only, web uses line-clamp)
   */
  numberOfLines?: number

  /**
   * Text content
   */
  children?: ReactNode

  /**
   * Test ID for testing
   */
  testID?: string
}

/**
 * Modal component props
 */
export interface ModalProps extends BaseComponentProps {
  /**
   * Modal visibility
   * @default false
   */
  visible?: boolean

  /**
   * Modal title
   */
  title?: React.ReactNode

  /**
   * Modal size
   * @default 'md'
   */
  size?: SizeVariant

  /**
   * Modal width in pixels or CSS units
   * @default depends on size
   */
  width?: string | number

  /**
   * Modal height in pixels or CSS units
   * @default 'auto'
   */
  height?: string | number

  /**
   * Close on backdrop click
   * @default true
   */
  closeOnBackdropPress?: boolean

  /**
   * Close on escape key press
   * @default true
   */
  closeOnEscape?: boolean

  /**
   * Show close button
   * @default true
   */
  showCloseButton?: boolean

  /**
   * Close button icon (React element)
   */
  closeIcon?: React.ReactNode

  /**
   * Backdrop opacity
   * @default 0.5
   */
  backdropOpacity?: number

  /**
   * Whether modal should be centered
   * @default true
   */
  centered?: boolean

  /**
   * Whether modal should be scrollable
   * @default false
   */
  scrollable?: boolean

  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number

  /**
   * Z-index for modal stack
   * @default 1000
   */
  zIndex?: number

  /**
   * Close handler
   */
  onClose?: (reason?: 'backdrop' | 'escape' | 'close-button') => void

  /**
   * Modal content container props
   */
  contentProps?: React.HTMLAttributes<HTMLDivElement>

  /**
   * Overlay style props
   */
  overlayStyle?: React.CSSProperties

  /**
   * Modal container style props
   */
  containerStyle?: React.CSSProperties

  /**
   * Prevent body scroll when modal is open
   * @default true
   */
  preventBodyScroll?: boolean

  /**
   * Focus trap for accessibility
   * @default true
   */
  trapFocus?: boolean

  /**
   * Initial focus element selector
   */
  initialFocus?: string
}

/**
 * Toast component props
 */
export interface ToastProps {
  /**
   * Toast visibility
   * @default false
   */
  visible?: boolean

  /**
   * Toast message
   */
  message: string

  /**
   * Toast variant
   * @default 'info'
   */
  variant?: 'success' | 'error' | 'warning' | 'info'

  /**
   * Auto-dismiss duration in milliseconds
   * @default 3000
   */
  duration?: number

  /**
   * Position on screen
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

  /**
   * Close handler
   */
  onClose?: () => void

  /**
   * Test ID for testing
   */
  testID?: string
}
