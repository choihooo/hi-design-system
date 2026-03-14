/**
 * @component Card
 * @description Container component with elevation and padding options
 * @platform React (Web)
 * @usage
 * ```tsx
 * <Card elevation="md" padding="lg" pressable onPress={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */

import type { CardProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, memo } from 'react'
import { useCommonHandlers } from '../../utils/common'
import './Card.css'

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      isPressable = false,
      pressableAs = 'button',
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
    const commonHandlers = useCommonHandlers({
      onPress,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
    })

    const cardClassName = clsx(
      'card',
      `card--elevation-${elevation}`,
      `card--padding-${padding}`,
      `card--radius-${radius}`,
      isPressable && 'card--pressable',
      className,
    )

    if (isPressable) {
      if (pressableAs === 'button') {
        return (
          <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={cardClassName}
            onClick={(e) => {
              commonHandlers.onClick?.()
              commonHandlers.onPress?.()
            }}
            onFocus={commonHandlers.handleFocus}
            onBlur={commonHandlers.handleBlur}
            onMouseDown={commonHandlers.handleMouseDown}
            onMouseUp={commonHandlers.handleMouseUp}
            onMouseLeave={commonHandlers.handleMouseLeave}
            data-testid={testID}
            type="button"
            {...rest}
          >
            {children}
          </button>
        )
      } else if (pressableAs === 'a') {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={cardClassName}
            onClick={(e) => {
              commonHandlers.onClick?.()
              commonHandlers.onPress?.()
            }}
            onFocus={commonHandlers.handleFocus}
            onBlur={commonHandlers.handleBlur}
            onMouseDown={commonHandlers.handleMouseDown}
            onMouseUp={commonHandlers.handleMouseUp}
            onMouseLeave={commonHandlers.handleMouseLeave}
            data-testid={testID}
            {...rest}
          >
            {children}
          </a>
        )
      } else {
        return (
          <div
            ref={ref as React.Ref<HTMLDivElement>}
            className={cardClassName}
            onClick={(e) => {
              commonHandlers.onClick?.()
              commonHandlers.onPress?.()
            }}
            onFocus={commonHandlers.handleFocus}
            onBlur={commonHandlers.handleBlur}
            onMouseDown={commonHandlers.handleMouseDown}
            onMouseUp={commonHandlers.handleMouseUp}
            onMouseLeave={commonHandlers.handleMouseLeave}
            data-testid={testID}
            {...rest}
          >
            {children}
          </div>
        )
      }
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cardClassName}
        data-testid={testID}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
