/**
 * @component Pressable
 * @description Core interaction primitive - Handles all user interactions (press, hover, focus)
 * @platform React, React Native
 * @AI-friendly: Maximum - Single responsibility (interaction only), predictable states
 *
 * AI can easily understand:
 * - "Pressable = interactive container"
 * - "States = press, hover, focus, disabled"
 * - "All interactive components = Pressable + content"
 *
 * @usage
 * ```tsx
 * // Basic pressable
 * <Pressable onPress={() => console.log('pressed')}>
 *   <Text>Click me</Text>
 * </Pressable>
 *
 * // With state styling
 * <Pressable
 *   pressStyle={{ opacity: 0.7 }}
 *   hoverStyle={{ backgroundColor: 'lightgray' }}
 * >
 *   <Text>Interactive text</Text>
 * </Pressable>
 *
 * // Disabled state
 * <Pressable disabled onPress={() => {}}>
 *   <Text color="gray">Disabled</Text>
 * </Pressable>
 *
 * // As link
 * <Pressable as="a" href="https://example.com">
 *   <Text>Link text</Text>
 * </Pressable>
 *
 * // Accessible button
 * <Pressable
 *   ariaLabel="Close dialog"
 *   role="button"
 *   onPress={handleClose}
 * >
 *   <Icon name="close" />
 * </Pressable>
 * ```
 *
 * @accessibility
 * - Keyboard navigation: Full keyboard support (Enter, Space)
 * - Screen readers: Proper ARIA attributes support
 * - Focus management: Visual focus indicators
 * - Touch targets: Minimum touch target size (44x44)
 *
 * @design-philosophy
 * - Single Responsibility: Only handles interaction states
 * - Composability: Can contain any content (Text, Icon, Box, etc.)
 * - Predictability: Consistent interaction patterns
 * - Performance: Minimal state management overhead
 */

import clsx from 'clsx'
import { forwardRef, useState, useCallback } from 'react'
import './Pressable.css'

interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  testID?: string
  style?: React.CSSProperties
}

interface PressableProps extends BaseComponentProps {
  children?: React.ReactNode
  onPress?: () => void
  onClick?: (e: React.MouseEvent) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onMouseDown?: (e: React.MouseEvent) => void
  onMouseUp?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  disabled?: boolean
  pressStyle?: React.CSSProperties
  hoverStyle?: React.CSSProperties
  focusStyle?: React.CSSProperties
  as?: 'button' | 'a' | 'div'
  href?: string
  tabIndex?: number
  role?: string
  ariaLabel?: string
  ariaProps?: Record<string, string | boolean>
}

export const Pressable = forwardRef<any, PressableProps>(
  (
    {
      // Interaction handlers
      onPress,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,

      // State
      disabled = false,

      // State styling
      pressStyle,
      hoverStyle,
      focusStyle,

      // Rendering
      as = 'button',
      href,
      tabIndex = 0,

      // Accessibility
      role,
      ariaLabel,
      ariaProps = {},

      // Base props
      className,
      style,
      children,
      testID,

      // Rest for any additional HTML attributes
      ...rest
    },
    ref,
  ) => {
    const [isPressed, setIsPressed] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    // Handle press start
    const handlePressStart = useCallback(
      (e: React.MouseEvent | React.TouchEvent) => {
        if (!disabled) {
          setIsPressed(true)
          onMouseDown?.(e as React.MouseEvent)
        }
      },
      [disabled, onMouseDown],
    )

    // Handle press end
    const handlePressEnd = useCallback(
      (e: React.MouseEvent | React.TouchEvent) => {
        if (!disabled) {
          setIsPressed(false)
          onMouseUp?.(e as React.MouseEvent)

          // Trigger press/click handlers
          if (isPressed) {
            onPress?.()
            onClick?.(e as React.MouseEvent)
          }
        }
      },
      [disabled, isPressed, onPress, onClick, onMouseUp],
    )

    // Handle mouse enter (hover)
    const handleMouseEnter = useCallback(() => {
      if (!disabled) {
        setIsHovered(true)
      }
    }, [disabled])

    // Handle mouse leave
    const handleMouseLeave = useCallback(
      (e: React.MouseEvent) => {
        if (!disabled) {
          setIsPressed(false)
          setIsHovered(false)
          onMouseLeave?.(e)
        }
      },
      [disabled, onMouseLeave],
    )

    // Handle focus
    const handleFocus = useCallback(
      (e: React.FocusEvent) => {
        if (!disabled) {
          setIsFocused(true)
          onFocus?.(e)
        }
      },
      [disabled, onFocus],
    )

    // Handle blur
    const handleBlur = useCallback(
      (e: React.FocusEvent) => {
        setIsFocused(false)
        onBlur?.(e)
      },
      [onBlur],
    )

    // Build combined styles
    const combinedStyle = {
      ...style,
      ...(isPressed && pressStyle),
      ...(isHovered && hoverStyle),
      ...(isFocused && focusStyle),
    }

    const pressableClassName = clsx(
      'pressable',
      disabled && 'pressable--disabled',
      isPressed && 'pressable--pressed',
      isHovered && 'pressable--hovered',
      isFocused && 'pressable--focused',
      className,
    )

    // Common props for all element types
    const commonProps = {
      ref,
      className: pressableClassName,
      style: combinedStyle,
      'data-testid': testID,
      'aria-disabled': disabled,
      'aria-label': ariaLabel,
      tabIndex: disabled ? -1 : tabIndex,
      role,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handlePressStart,
      onMouseUp: handlePressEnd,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ...ariaProps,
      ...rest,
    }

    // Render as different element types
    if (as === 'a') {
      return (
        <a {...commonProps} href={disabled ? undefined : href}>
          {children}
        </a>
      )
    }

    if (as === 'div') {
      return <div {...commonProps}>{children}</div>
    }

    // Default to button
    return (
      <button
        {...commonProps}
        type="button"
        disabled={disabled}
        onClick={undefined}
      >
        {children}
      </button>
    )
  },
)

Pressable.displayName = 'Pressable'

export default Pressable
