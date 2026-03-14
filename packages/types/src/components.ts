/**
 * @hi-design/types
 *
 * Common TypeScript type definitions for HI Design System components
 * Shared across React and React Native packages
 */

import type { CSSProperties, ReactNode } from 'react'

/**
 * Base component props for all components
 */
export interface BaseComponentProps {
  className?: string
  children?: ReactNode
  testID?: string
  style?: CSSProperties
}

/**
 * Base size variants for components
 */
export type SizeVariant = 'sm' | 'md' | 'lg'

/**
 * Base color variants for interactive components
 */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'

/**
 * Standardized event handlers for all interactive components
 */
export interface InteractiveHandlers {
  /**
   * Press/Click handler
   */
  onPress?: () => void | Promise<void>

  /**
   * Click handler for web
   */
  onClick?: () => void

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent) => void

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent) => void

  /**
   * Mouse down handler
   */
  onMouseDown?: (event: React.MouseEvent) => void

  /**
   * Mouse up handler
   */
  onMouseUp?: (event: React.MouseEvent) => void

  /**
   * Mouse leave handler
   */
  onMouseLeave?: (event: React.MouseEvent) => void
}

/**
 * Button component props
 */
export interface ButtonProps extends BaseComponentProps, InteractiveHandlers {
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
   * Button is loading (shows spinner)
   * @default false
   */
  isLoading?: boolean

  /**
   * Button is disabled (prevents interactions)
   * @default false
   */
  isDisabled?: boolean

  /**
   * Button takes full width
   * @default false
   */
  isFullWidth?: boolean
}

/**
 * Input component props
 */
export interface InputProps extends BaseComponentProps {
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
  isDisabled?: boolean

  /**
   * Input is full width of its container
   * @default false
   */
  isFullWidth?: boolean

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
   * Value change handler
   */
  onChange?: (text: string) => void

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
export interface CardProps extends BaseComponentProps, InteractiveHandlers {
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
  isPressable?: boolean

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
export interface TextProps {
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
export interface ModalProps {
  /**
   * Modal visibility
   * @default false
   */
  visible?: boolean

  /**
   * Modal title
   */
  title?: string

  /**
   * Modal size
   * @default 'md'
   */
  size?: SizeVariant

  /**
   * Close on backdrop click
   * @default true
   */
  closeOnBackdropPress?: boolean

  /**
   * Show close button
   * @default true
   */
  showCloseButton?: boolean

  /**
   * Close handler
   */
  onClose?: () => void

  /**
   * Modal content
   */
  children?: ReactNode

  /**
   * Test ID for testing
   */
  testID?: string
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

/**
 * Box component props - Core layout primitive
 */
export interface BoxProps extends BaseComponentProps {
  /**
   * CSS display property
   */
  display?: 'block' | 'flex' | 'grid' | 'inline' | 'inline-block' | 'none'

  /**
   * Flexbox properties (when display="flex")
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string | number

  /**
   * Grid properties (when display="grid")
   */
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridGap?: string | number

  /**
   * Spacing
   */
  padding?: string | number
  margin?: string | number
  paddingTop?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number

  /**
   * Dimensions
   */
  width?: string | number
  height?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number

  /**
   * Colors
   */
  backgroundColor?: string
  color?: string
  borderColor?: string
  borderWidth?: string | number
  borderRadius?: string | number

  /**
   * Position
   */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: number

  /**
   * Other CSS properties
   */
  opacity?: number
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  cursor?: 'pointer' | 'default' | 'move' | 'text' | 'wait' | 'not-allowed'

  /**
   * Responsive design
   */
  responsive?: {
    mobile?: Partial<BoxProps>
    tablet?: Partial<BoxProps>
    desktop?: Partial<BoxProps>
  }
}

/**
 * Text component props - Core text primitive
 */
export interface TextProps extends BaseComponentProps {
  /**
   * Text variant for predefined styles
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'

  /**
   * Font weight
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

  /**
   * Text color
   */
  color?: string

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify'

  /**
   * Text decoration
   */
  textDecoration?: 'none' | 'underline' | 'line-through'

  /**
   * Text transformation
   */
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'

  /**
   * Line height
   */
  lineHeight?: string | number

  /**
   * Letter spacing
   */
  letterSpacing?: string | number

  /**
   * Disable text wrapping
   */
  isNoWrap?: boolean

  /**
   * Number of lines to show (with ellipsis)
   */
  numberOfLines?: number

  /**
   * Font size override
   */
  fontSize?: string | number
}

/**
 * PressableProps has been defined earlier for interactive components
 */

/**
 * Icon component props - Core icon primitive
 */
export interface IconProps extends BaseComponentProps {
  /**
   * Icon name/identifier
   */
  name: string

  /**
   * Icon size
   */
  size?: string | number

  /**
   * Icon color
   */
  color?: string

  /**
   * Icon variant/style
   */
  variant?: 'filled' | 'outlined' | 'rounded' | 'sharp'

  /**
   * Rotate icon (degrees)
   */
  rotate?: number

  /**
   * Flip icon
   */
  flip?: 'horizontal' | 'vertical' | 'both'

  /**
   * Accessibility label for screen readers
   */
  ariaLabel?: string

  /**
   * ARIA role
   */
  role?: string
}
