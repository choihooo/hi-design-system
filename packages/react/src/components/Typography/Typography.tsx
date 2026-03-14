/**
 * @component Text
 * @description Text component with predefined style variants
 * @platform React (Web)
 * @usage
 * ```tsx
 * <Text variant="h1">Heading 1</Text>
 * <Text variant="body1">Body text goes here</Text>
 * <Text variant="caption" color="neutral.500">
 *   Caption text
 * </Text>
 * ```
 */

import type { TextProps } from '@hi-design/types'
import { forwardRef, memo, useMemo } from 'react'
import './Typography.css'

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
} as const

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      textVariant = 'body1',
      weight,
      color,
      align = 'left',
      isNoWrap = false,
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

    const textStyle = textStyles[textVariant as keyof typeof textStyles]
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
        whiteSpace: isNoWrap ? 'nowrap' : undefined,
        overflow: numberOfLines ? 'hidden' : undefined,
        textOverflow: numberOfLines ? 'ellipsis' : undefined,
        display: numberOfLines ? '-webkit-box' : undefined,
        WebkitLineClamp: numberOfLines || undefined,
        WebkitBoxOrient: numberOfLines ? ('vertical' as const) : undefined,
      }),
      [textStyle, fontWeight, color, align, isNoWrap, numberOfLines],
    )

    const Tag = elementTagMap[textVariant]

    return (
      <Tag
        ref={ref as never}
        className={`typography typography--${textVariant} ${className || ''}`}
        style={style}
        data-testid={testID}
        {...rest}
      >
        {children}
      </Tag>
    )
  },
)

Text.displayName = 'Text'

export default memo(Text)
