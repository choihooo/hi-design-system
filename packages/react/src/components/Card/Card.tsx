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

export const Card = forwardRef<HTMLDivElement, CardProps>(
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
    const handleClick = () => {
      if (pressable && onPress) {
        onPress()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (pressable && onPress && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onPress()
      }
    }

    const cardClassName = clsx(
      'hi-card',
      `hi-card--elevation-${elevation}`,
      `hi-card--padding-${padding}`,
      `hi-card--radius-${radius}`,
      pressable && 'hi-card--pressable',
      className,
    )

    return (
      <div
        ref={ref}
        className={cardClassName}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        data-testid={testID}
        role={pressable ? 'button' : undefined}
        tabIndex={pressable ? 0 : undefined}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
