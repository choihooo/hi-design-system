/**
 * Typography - Text component wrapper using Text primitive
 *
 * @platform React
 * @usage
 * ```tsx
 * <Typography variant="h1" weight="bold">
 *   Heading text
 * </Typography>
 * ```
 */

import { Text as TextPrimitive } from '@hi-design/primitives'

interface TypographyProps {
  variant?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-large'
    | 'body'
    | 'body-small'
    | 'caption'
    | 'overline'
    | 'label'
    | 'button'
    | 'input'
    | 'helper'
    | 'xs'
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

export const Typography = ({
  variant = 'body',
  weight,
  color,
  align,
  noWrap,
  numberOfLines,
  className,
  style,
  children,
  testID,
}: TypographyProps) => {
  return (
    <TextPrimitive
      variant={variant}
      weight={weight}
      color={color}
      align={align}
      truncate={noWrap}
      lines={numberOfLines}
      className={className}
      style={style}
      testID={testID}
    >
      {children}
    </TextPrimitive>
  )
}

Typography.displayName = 'Typography'

export default Typography
