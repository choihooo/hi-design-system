/**
 * Card - Surface container with elevation, padding, and optional pressable state
 *
 * @usage
 * <Card elevation="md" padding="lg" isPressable onPress={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Content</p>
 * </Card>
 */

import { Box, Pressable } from '@hi-design/primitives'
import type { CardProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, memo } from 'react'
import './Card.css'

const getCardClass = (props: {
  elevation: string
  padding: string
  radius: string
  pressable: boolean
  className?: string
}) =>
  clsx(
    'card',
    `card--elevation-${props.elevation}`,
    `card--padding-${props.padding}`,
    `card--radius-${props.radius}`,
    props.pressable && 'card--pressable',
    props.className,
  )

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      isPressable = false,
      pressable = false,
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
      style,
      pressableAs = 'button',
      pressableProps,
      accessibleProps,
      ...rest
    },
    ref,
  ) => {
    const interactive = isPressable || pressable
    const {
      onClick: _pressableOnClick,
      onFocus: _pressableOnFocus,
      onBlur: _pressableOnBlur,
      onMouseDown: _pressableOnMouseDown,
      onMouseUp: _pressableOnMouseUp,
      onMouseLeave: _pressableOnMouseLeave,
      ...restPressableProps
    } = pressableProps || {}
    const cardClass = getCardClass({
      elevation,
      padding,
      radius,
      pressable: interactive,
      className,
    })
    const sharedProps = { className: cardClass, testID, style, ...rest }
    const pressableHandlers = {
      onFocus: onFocus
        ? (event: React.FocusEvent<Element>) => onFocus(event as React.FocusEvent<HTMLElement>)
        : undefined,
      onBlur: onBlur
        ? (event: React.FocusEvent<Element>) => onBlur(event as React.FocusEvent<HTMLElement>)
        : undefined,
      onMouseDown: onMouseDown
        ? (event: React.MouseEvent<Element>) => onMouseDown(event as React.MouseEvent<HTMLElement>)
        : undefined,
      onMouseUp: onMouseUp
        ? (event: React.MouseEvent<Element>) => onMouseUp(event as React.MouseEvent<HTMLElement>)
        : undefined,
      onMouseLeave: onMouseLeave
        ? (event: React.MouseEvent<Element>) => onMouseLeave(event as React.MouseEvent<HTMLElement>)
        : undefined,
    }

    if (interactive) {
      return (
        <Pressable
          ref={ref as never}
          as={pressableAs}
          onPress={onPress}
          {...pressableHandlers}
          {...accessibleProps}
          {...restPressableProps}
          {...sharedProps}
        >
          {children}
        </Pressable>
      )
    }

    return (
      <Box ref={ref as never} {...sharedProps}>
        {children}
      </Box>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
