/**
 * @component Card
 * @description Container component - Composed of Box + optional Pressable
 * @platform React (Web)
 * @AI-friendly: High - Clear composition pattern using primitives
 *
 * This component demonstrates the "complex = primitive composition" pattern:
 * - Card = Box (layout) + optional Pressable (interaction)
 * - AI can easily understand: "Card is a container that can be clickable"
 * - Consistent with other components
 *
 * @usage
 * ```tsx
 * // Basic card
 * <Card elevation="md" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * // Clickable card
 * <Card elevation="md" padding="lg" isPressable onPress={handleClick}>
 *   <h3>Clickable Card</h3>
 *   <p>This card can be clicked</p>
 * </Card>
 * ```
 */

import type { CardProps } from '@hi-design/types'
import { Box } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef, memo } from 'react'
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
    const cardClassName = clsx(
      'card',
      `card--elevation-${elevation}`,
      `card--padding-${padding}`,
      `card--radius-${radius}`,
      isPressable && 'card--pressable',
      className,
    )

    const cardProps = {
      className: cardClassName,
      testID,
      ...rest,
    }

    if (isPressable) {
      return (
        <Pressable
          ref={ref as any}
          as={pressableAs}
          onPress={onPress as any}
          onClick={onClick as any}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          {...cardProps}
        >
          {children}
        </Pressable>
      )
    }

    return (
      <Box ref={ref as any} {...cardProps}>
        {children}
      </Box>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
