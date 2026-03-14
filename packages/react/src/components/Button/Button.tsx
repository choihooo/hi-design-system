/**
 * @component Button
 * @description Interactive button component with multiple variants and sizes
 * @platform React (Web)
 * @usage
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
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
      onClick,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) {
        return
      }

      onClick?.(event)
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
        disabled={disabled || loading}
        onClick={handleClick}
        data-testid={testID}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className="hi-button__spinner" aria-hidden="true">
            <span className="sr-only">Loading...</span>
          </span>
        )}
        <span className="hi-button__content">{children}</span>
      </button>
    )
  },
)

Button.displayName = 'Button'
