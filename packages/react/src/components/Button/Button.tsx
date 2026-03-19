/**
 * Button - Interactive button composed of Pressable + Text primitives
 *
 * @usage
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 */

import { Icon, Pressable, Text } from '@hi-design/primitives'
import type { ButtonProps } from '@hi-design/types'
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
}) =>
  clsx(
    'button',
    `button--${props.variant}`,
    `button--${props.size}`,
    `button--${props.color}`,
    props.fullWidth && 'button--full-width',
    props.disabled && 'button--disabled',
    props.loading && 'button--loading',
    props.className,
  )

const getButtonState = (
  props: Pick<
    ButtonProps,
    'disabled' | 'loading' | 'fullWidth' | 'isDisabled' | 'isLoading' | 'isFullWidth'
  >,
) => ({
  disabled: props.disabled || props.isDisabled || false,
  loading: props.loading || props.isLoading || false,
  fullWidth: props.fullWidth || props.isFullWidth || false,
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      color = 'primary',
      disabled,
      loading,
      fullWidth,
      isDisabled,
      isLoading,
      isFullWidth,
      onPress,
      className,
      children,
      testID,
      icon,
      ...rest
    },
    ref,
  ) => {
    const state = getButtonState({
      disabled,
      loading,
      fullWidth,
      isDisabled,
      isLoading,
      isFullWidth,
    })

    return (
      <Pressable
        ref={ref}
        className={getButtonClass({
          variant,
          size,
          color,
          fullWidth: state.fullWidth,
          disabled: state.disabled,
          loading: state.loading,
          className,
        })}
        disabled={state.disabled || state.loading}
        onPress={onPress}
        testID={testID}
        aria-busy={state.loading}
        {...rest}
      >
        {state.loading && (
          <output className="button__spinner" aria-label="Loading">
            <span className="button__sr-only">Loading...</span>
          </output>
        )}

        {icon && !state.loading && (
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
