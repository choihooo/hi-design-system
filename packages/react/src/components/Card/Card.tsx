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
import './Card.css'

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      pressable = false,
      onPress,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const cardClassName = clsx(
      'hi-card',
      `hi-card--elevation-${elevation}`,
      `hi-card--padding-${padding}`,
      `hi-card--radius-${radius}`,
      pressable && 'hi-card--pressable',
      className,
    )

    if (pressable) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cardClassName}
          onClick={onPress}
          data-testid={testID}
          type="button"
          {...rest}
        >
          {children}
        </button>
      )
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
