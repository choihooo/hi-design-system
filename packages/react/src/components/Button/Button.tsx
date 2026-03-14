/**
 * @component Button
 * @description Interactive button component with multiple variants and sizes
 * @platform React (Web)
 * @usage
 * ```tsx
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 * ```
 */

import type { ButtonProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef } from 'react'
import './Button.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      color = 'primary',
      isDisabled = false,
      isLoading = false,
      isFullWidth = false,
      onPress,
      onClick,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const handleClick = () => {
      if (isDisabled || isLoading) {
        return
      }

      onPress?.()
      onClick?.()
    }

    const buttonClassName = clsx(
      'button',
      `button--${variant}`,
      `button--${size}`,
      `button--${color}`,
      isFullWidth && 'button--full-width',
      isDisabled && 'button--disabled',
      isLoading && 'button--loading',
      className, // Allow custom className override (shadcn/ui style)
    )

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={isDisabled || isLoading}
        onClick={handleClick}
        data-testid={testID}
        aria-busy={isLoading}
        {...rest}
      >
        {isLoading && (
          <span className="button__spinner" aria-hidden="true">
            <span className="sr-only">Loading...</span>
          </span>
        )}
        <span className="button__content">{children}</span>
      </button>
    )
  },
)

Button.displayName = 'Button'
