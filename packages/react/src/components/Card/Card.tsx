/**
 * Card - Container with elevation and padding, composed of Box + optional Pressable
 *
 * @usage
 * <Card elevation="md" padding="lg" isPressable onPress={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Content</p>
 * </Card>
 */

import type { CardProps } from '@hi-design/types'
import { Box } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef, memo } from 'react'
import './Card.css'

const getCardClass = (props: {
  elevation: string
  padding: string
  radius: string
  isPressable: boolean
  className?: string
}) => clsx(
  'card',
  `card--elevation-${props.elevation}`,
  `card--padding-${props.padding}`,
  `card--radius-${props.radius}`,
  props.isPressable && 'card--pressable',
  props.className,
)

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      isPressable = false,
      onPress,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const cardClass = getCardClass({ elevation, padding, radius, isPressable, className })
    const cardProps = { className: cardClass, testID, ...rest }

    if (isPressable) {
      return (
        <Pressable ref={ref as any} onPress={onPress as any} {...cardProps}>
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
