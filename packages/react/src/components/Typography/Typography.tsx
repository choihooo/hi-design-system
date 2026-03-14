/**
 * @component Typography
 * @description Text component with predefined style variants
 * @platform React (Web)
 * @type {React.ForwardRefExoticComponent<TypographyProps>}
 * @prop {string} variant - Typography variant ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline')
 * @prop {string} weight - Font weight override
 * @prop {string} color - Text color override
 * @prop {string} align - Text alignment ('left' | 'center' | 'right' | 'justify')
 * @prop {boolean} noWrap - Whether to prevent text wrapping
 * @prop {number} numberOfLines - Number of lines to show (with ellipsis)
 * @prop {string} className - Additional CSS classes
 * @prop {CSSProperties} style - Inline styles
 * @prop {React.ReactNode} children - Text content
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body1">Body text goes here</Typography>
 * <Typography variant="caption" color="neutral.500">
 *   Caption text
 * </Typography>
 * ```
 */

import React, { forwardRef, useMemo } from 'react'
import { generateUniqueId } from '../../utils/common'
import './Typography.css'

/**
 * Typography component props (temporary local definition)
 */
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

const elementTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
}

const Typography = forwardRef<HTMLElement, TypographyProps>(({
  variant = 'body1',
  weight,
  color,
  align = 'left',
  noWrap = false,
  numberOfLines,
  className,
  style,
  children,
  testID,
  ...rest
}, ref) => {
  const elementTag = elementTagMap[variant]
  const typographyId = useMemo(() => testID || generateUniqueId('typography'), [testID])

  const typographyClassName = useMemo(() => {
    const classes = [
      'typography',
      `typography--${variant}`,
      weight && `typography--weight-${weight}`,
      color && `typography--color-${color}`,
      align && `typography--align-${align}`,
      noWrap && 'typography--no-wrap',
      numberOfLines && 'typography--truncate',
      className,
    ].filter(Boolean).join(' ')

    return classes
  }, [variant, weight, color, align, noWrap, numberOfLines, className])

  const elementProps = {
    ref,
    className: typographyClassName,
    id: typographyId,
    style: {
      ...style,
      ...(numberOfLines && {
        WebkitLineClamp: numberOfLines,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }),
    },
    'data-testid': testID,
    ...rest,
  }

  return React.createElement(
    elementTag,
    elementProps,
    children
  )
})

Typography.displayName = 'Typography'

export default Typography