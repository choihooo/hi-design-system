/**
 * Button - Interactive button composed of Pressable + Text primitives
 *
 * @usage
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 */

import type { ButtonProps } from '@hi-design/types'
import { Icon } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import { Text } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef } from 'react'
import './Button.css'

const getButtonClass = (props: {
  variant: string
  size: string
  color: string
  fullWidth: boolean
  disabled: boolean
  loading: boolean
  className?: string
}) => clsx(
  'button',
  `button--${props.variant}`,
  `button--${props.size}`,
  `button--${props.color}`,
  props.fullWidth && 'button--full-width',
  props.disabled && 'button--disabled',
  props.loading && 'button--loading',
  props.className,
)

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
      className,
      children,
      testID,
      icon,
      ...rest
    },
    ref,
  ) => {
    return (
      <Pressable
        ref={ref}
        className={getButtonClass({ variant, size, color, fullWidth, disabled, loading, className })}
        disabled={disabled || loading}
        onPress={onPress}
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
