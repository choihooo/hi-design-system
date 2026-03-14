/**
 * @component Card
 * @description Container component with elevation and padding options
 * @platform React (Web)
 * @type {React.ForwardRefExoticComponent<CardProps>}
 * @prop {string} elevation - Card elevation level ('sm' | 'md' | 'lg' | 'xl')
 * @prop {string} padding - Card padding level ('sm' | 'md' | 'lg' | 'xl')
 * @prop {string} radius - Border radius level ('sm' | 'md' | 'lg' | 'xl')
 * @prop {boolean} pressable - Whether the card is pressable (button-like)
 * @prop {Function} onPress - Press handler when card is pressable
 * @prop {string} className - Additional CSS classes
 * @prop {React.ReactNode} children - Card content
 * @prop {string} testID - Test identifier
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

const Card = forwardRef<HTMLElement, CardProps>(({
  elevation = 'md',
  padding = 'md',
  radius = 'md',
  pressable = false,
  onPress,
  className,
  children,
  testID,
  ...rest
}, ref) => {
  const cardClassName = clsx(
    'card',
    `card--elevation-${elevation}`,
    `card--padding-${padding}`,
    `card--radius-${radius}`,
    pressable && 'card--pressable',
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
})

Card.displayName = 'Card'

export default memo(Card)