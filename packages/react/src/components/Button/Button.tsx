/**
 * @component Button
 * @description Interactive button component - Composed of Pressable + Text + Icon primitives
 * @platform React (Web)
 * @AI-friendly: High - Clear composition pattern using primitives
 *
 * This component demonstrates the "complex = primitive composition" pattern:
 * - Button = Pressable (interaction) + Text (content) + optional Icon (visual)
 * - AI can easily understand: "Button is a clickable text with optional icon"
 * - Consistent with other components: Input, Card, etc.
 *
 * @usage
 * ```tsx
 * // Basic button
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 *
 * // Button with icon
 * <Button variant="secondary" icon="star" onPress={handleClick}>
 *   Rate us
 * </Button>
 *
 * // Loading button
 * <Button variant="primary" isLoading onPress={handleClick}>
 *   Processing...
 * </Button>
 * ```
 */

import type { ButtonProps } from '@hi-design/types'
import { Icon } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import { Text } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef } from 'react'
import './Button.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      color = 'primary',
      disabled = false,
      loading = false,
      fullWidth = false,
      onPress,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      className,
      children,
      testID,
      icon,
      ...rest
    },
    ref,
  ) => {
    const buttonClassName = clsx(
      'button',
      `button--${variant}`,
      `button--${size}`,
      `button--${color}`,
      fullWidth && 'button--full-width',
      disabled && 'button--disabled',
      loading && 'button--loading',
      className,
    )

    return (
      <Pressable
        ref={ref}
        className={buttonClassName}
        disabled={disabled || loading}
        onPress={() => {
          if (onPress) {
            onPress()
          }
        }}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        testID={testID}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className="button__spinner" aria-hidden="true">
            <span className="sr-only">Loading...</span>
          </span>
        )}

        {icon && !loading && (
          <Icon name={icon} size={size} className="button__icon" aria-hidden="true" />
        )}

        {children && (
          <Text variant="button" className="button__content">
            {children}
          </Text>
        )}
      </Pressable>
    )
  },
)

Button.displayName = 'Button'

export default Button
