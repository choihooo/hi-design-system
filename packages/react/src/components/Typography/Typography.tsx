/**
 * Typography - Text component wrapper using Text primitive
 *
 * @usage
 * <Typography variant="h1" weight="bold">
 *   Heading text
 * </Typography>
 */

import { Text as TextPrimitive } from '@hi-design/primitives'
import { forwardRef } from 'react'

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  noWrap?: boolean
  numberOfLines?: number
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  testID?: string
}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant = 'body1', weight, color, align, noWrap, numberOfLines, className, style, children, testID }, ref) => {
    return (
      <TextPrimitive
        ref={ref}
        variant={variant}
        weight={weight}
        color={color}
        align={align}
        isNoWrap={noWrap}
        numberOfLines={numberOfLines}
        className={className}
        style={style}
        testID={testID}
      >
        {children}
      </TextPrimitive>
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
