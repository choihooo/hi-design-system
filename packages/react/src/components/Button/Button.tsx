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
 * @composition
 * ```tsx
 * Button composition pattern:
 * <Pressable disabled={isDisabled} onPress={handleClick}>
 *   {icon && <Icon name={icon} />}
 *   <Text>{children}</Text>
 * </Pressable>
 * ```
 *
 * @usage
 * ```tsx
 * // Basic button
 * import { Button } from '@hi-design/react'
 *
 * <Button variant="primary" size="md" onPress={() => console.log('clicked')}>
 *   Click me
 * </Button>
 *
 * // Button with icon
 * <Button variant="secondary" icon="star" onPress={handleRate}>
 *   Rate us
 * </Button>
 *
 * // Loading button
 * <Button variant="primary" loading onPress={handleSubmit}>
 *   Processing...
 * </Button>
 *
 * // Full width button
 * <Button variant="primary" fullWidth onPress={handleAction}>
 *   Full Width Action
 * </Button>
 *
 * // Disabled button
 * <Button variant="primary" disabled onPress={handleDisabled}>
 *   Cannot Click
 * </Button>
 * ```
 *
 * @variants
 * - **primary**: Main call-to-action button (brand color)
 * - **secondary**: Secondary action (neutral color)
 * - **ghost**: Minimal button (no background)
 * - **outline**: Bordered button (transparent background)
 *
 * @sizes
 * - **sm**: Small button (compact UI)
 * - **md**: Medium button (default)
 * - **lg**: Large button (prominent actions)
 *
 * @accessibility
 * - Keyboard navigation: Full keyboard support (Enter, Space)
 * - Screen readers: Proper ARIA attributes support
 * - Focus indicators: Visual focus states
 * - Touch targets: Minimum 44x44px for mobile
 * - Loading states: aria-busy attribute for screen readers
 *
 * @design-pattern
 * This component follows the primitive composition pattern:
 * 1. All interactions handled by Pressable primitive
 * 2. All text rendering handled by Text primitive
 * 3. Icons handled by Icon primitive
 * 4. Only composition logic in Button itself
 *
 * @best-practices
 * - Use descriptive button text that indicates action
 * - Provide loading feedback for async operations
 * - Use disabled state instead of removing buttons
 * - Keep button text short and action-oriented
 * - Use icon + text combination for clarity
 *
 * @see-also
 * - Pressable: Core interaction primitive
 * - Text: Typography primitive
 * - Icon: Icon display primitive
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
        onPress={onPress}
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
