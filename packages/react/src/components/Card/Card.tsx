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

import React from 'react'
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
      pressableAs = 'button',
      pressableProps,
      accessibleProps,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const cardClassName = clsx(
      'card',
      `card--elevation-${elevation}`,
      `card--padding-${padding}`,
      `card--radius-${radius}`,
      pressable && 'card--pressable',
      className,
    )

    const baseProps = {
      'data-testid': testID,
      ...rest,
    }

    if (pressable) {
      const pressableElement = React.createElement(
        pressableAs,
        {
          ref: ref as React.Ref<HTMLElement>,
          className: cardClassName,
          onClick: onPress,
          type: pressableAs === 'button' ? 'button' : undefined,
          ...pressableProps,
          ...accessibleProps,
          ...baseProps,
        },
        children
      )

      return pressableElement
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cardClassName}
        {...baseProps}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
