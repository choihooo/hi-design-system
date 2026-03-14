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
import { useCommonHandlers, useFocusState } from '../../utils/common'
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
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const { isFocused } = useFocusState()
    const commonHandlers = useCommonHandlers({
      onPress,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
    })

    const handleClick = () => {
      if (isDisabled || isLoading) {
        return
      }

      commonHandlers.onClick?.()
      commonHandlers.onPress?.()
    }

    const buttonClassName = clsx(
      'button',
      `button--${variant}`,
      `button--${size}`,
      `button--${color}`,
      isFullWidth && 'button--full-width',
      isDisabled && 'button--disabled',
      isLoading && 'button--loading',
      isFocused && 'button--focused',
      className, // Allow custom className override (shadcn/ui style)
    )

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={isDisabled || isLoading}
        onClick={handleClick}
        onFocus={commonHandlers.onFocus}
        onBlur={commonHandlers.onBlur}
        onMouseDown={commonHandlers.onMouseDown}
        onMouseUp={commonHandlers.onMouseUp}
        onMouseLeave={commonHandlers.onMouseLeave}
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
