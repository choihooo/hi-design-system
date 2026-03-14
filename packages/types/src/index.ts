/**
 * @hi-design/types
 *
 * Common TypeScript type definitions for HI Design System
 * Shared across React and React Native packages
 */

export type {
  ButtonProps,
  CardProps,
  ColorVariant,
  InputProps,
  ModalProps,
  SizeVariant,
  ToastProps,
  TypographyProps,
} from './components'

/**
 * Utility types
 */

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/**
 * Polymorphic component props
 * Allows components to render as different HTML elements
 */
export type PolymorphicProps<E extends React.ElementType, P = Record<string, never>> = P & {
  /**
   * The underlying element type to render
   */
  as?: E
}

/**
 * Base props that all components should support
 */
export interface BaseComponentProps {
  /**
   * Test ID for testing
   */
  testID?: string

  /**
   * CSS class name (web only)
   */
  className?: string

  /**
   * Inline styles (web only)
   */
  style?: React.CSSProperties
}

/**
 * Event handler types
 */
export type EventHandler<T = void> = () => T
export type EventHandlerWithArg<T, A = unknown> = (arg: A) => T
export type AsyncEventHandler<T = void> = () => Promise<T>
export type AsyncEventHandlerWithArg<T, A = unknown> = (arg: A) => Promise<T>
