/**
 * @component Typography
 * @description Text component with predefined style variants
 * @platform React (Web)
 * @usage
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body1">Body text goes here</Typography>
 * <Typography variant="caption" color="neutral.500">
 *   Caption text
 * </Typography>
 * ```
 */

import type { TypographyProps } from '@hi-design/types'
import { forwardRef, memo, useMemo } from 'react'
import './Typography.css'

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      variant = 'body1',
      weight,
      color,
      align = 'left',
      noWrap = false,
      numberOfLines,
      className,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    const textStyles = {
      h1: {
        fontSize: 60,
        fontWeight: 'bold',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontSize: 36,
        fontWeight: '600',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontSize: 30,
        fontWeight: '600',
        lineHeight: 1.4,
        letterSpacing: '0em',
      },
      h5: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 1.4,
        letterSpacing: '0em',
      },
      h6: {
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 1.5,
        letterSpacing: '0em',
      },
      body1: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 1.5,
        letterSpacing: '0em',
      },
      body2: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 1.5,
        letterSpacing: '0em',
      },
      button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 1.5,
        letterSpacing: '0em',
      },
      caption: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 1.5,
        letterSpacing: '0em',
      },
      overline: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 1.5,
        letterSpacing: '0.1em',
      },
    }

    const textStyle = textStyles[variant as keyof typeof textStyles]
    const fontWeight = weight || (textStyle.fontWeight as string)

    const style = useMemo(
      () => ({
        fontSize:
          typeof textStyle.fontSize === 'number' ? `${textStyle.fontSize}px` : textStyle.fontSize,
        fontWeight,
        lineHeight: Array.isArray(textStyle.lineHeight)
          ? textStyle.lineHeight[0]
          : textStyle.lineHeight,
        letterSpacing:
          typeof textStyle.letterSpacing === 'number'
            ? `${textStyle.letterSpacing}em`
            : textStyle.letterSpacing,
        color: color || '#111827',
        textAlign: align,
        whiteSpace: noWrap ? 'nowrap' : undefined,
        overflow: numberOfLines ? 'hidden' : undefined,
        textOverflow: numberOfLines ? 'ellipsis' : undefined,
        display: numberOfLines ? '-webkit-box' : undefined,
        WebkitLineClamp: numberOfLines || undefined,
        WebkitBoxOrient: numberOfLines ? 'vertical' : undefined,
      }),
      [textStyle, fontWeight, color, align, noWrap, numberOfLines],
    )

    const Tag = variant.startsWith('h') ? variant : 'p'

    return (
      <Tag
        ref={ref}
        className={`hi-typography hi-typography--${variant} ${className || ''}`}
        style={style}
        data-testid={testID}
        {...rest}
      >
        {children}
      </Tag>
    )
  },
)

Typography.displayName = 'Typography'

export default memo(Typography)
