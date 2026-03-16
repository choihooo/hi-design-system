/**
 * @component Text
 * @description Core text primitive - Handles all text rendering with consistent styling
 * @platform React, React Native
 * @AI-friendly: Maximum - Single responsibility (text only), semantic variants
 *
 * AI can easily understand:
 * - "Text = styled text content"
 * - "Variants = predefined text styles"
 * - "Typography hierarchy = h1 > h2 > h3 > body1 > body2 > caption"
 *
 * @usage
 * ```tsx
 * // Predefined variants
 * <Text variant="h1">Heading 1</Text>
 * <Text variant="h2">Heading 2</Text>
 * <Text variant="body1">Body text</Text>
 * <Text variant="caption">Caption text</Text>
 *
 * // Custom styling
 * <Text color="primary" weight="bold" fontSize="lg">
 *   Custom styled text
 * </Text>
 *
 * // Text truncation
 * <Text numberOfLines={2}>
 *   Long text that will be truncated after two lines with ellipsis
 * </Text>
 *
 * // No wrap
 * <Text isNoWrap>
 *   Text that won't wrap to multiple lines
 * </Text>
 * ```
 *
 * @accessibility
 * - Semantic HTML: Renders appropriate heading tags (h1-h6) or paragraph (p)
 * - Screen readers: Proper text hierarchy support
 * - Language support: Inherits lang attribute from parent
 *
 * @design-philosophy
 * - Single Responsibility: Only handles text display
 * - Semantic Variants: Meaningful names (h1, body1, caption)
 * - Composability: Can be nested inside Box and other components
 * - Performance: Minimal DOM, text rendering only
 */

import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import './Text.css'

interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  testID?: string
  style?: React.CSSProperties
}

interface TextProps extends BaseComponentProps {
  children?: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  textDecoration?: 'none' | 'underline' | 'line-through'
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  lineHeight?: string | number
  letterSpacing?: string | number
  isNoWrap?: boolean
  numberOfLines?: number
  fontSize?: string | number
}

// Element tag mapping for semantic HTML
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

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      variant = 'body1',
      weight,
      color,
      align = 'left',
      textDecoration = 'none',
      textTransform = 'none',
      lineHeight,
      letterSpacing,
      isNoWrap = false,
      numberOfLines,
      fontSize,
      className,
      style,
      children,
      testID,
      ...rest
    },
    ref,
  ) => {
    // Determine the HTML element based on variant
    const elementTag = elementTagMap[variant]
    const Element = elementTag as keyof JSX.IntrinsicElements

    // Build inline styles
    const inlineStyles = useMemo(() => {
      const styles: Record<string, any> = {
        textAlign: align,
        textDecoration,
        textTransform,
        lineHeight,
        letterSpacing,
        fontSize,
        color,
        fontWeight: weight,
        ...style,
      }

      // Handle line truncation
      if (numberOfLines) {
        styles.display = '-webkit-box'
        styles.WebkitLineClamp = numberOfLines
        styles.WebkitBoxOrient = 'vertical'
        styles.overflow = 'hidden'
      }

      // Handle no wrap
      if (isNoWrap) {
        styles.whiteSpace = 'nowrap'
        styles.overflow = 'hidden'
        styles.textOverflow = 'ellipsis'
      }

      // Remove undefined values
      Object.keys(styles).forEach((key) => {
        if (styles[key] === undefined) {
          delete styles[key]
        }
      })

      return styles
    }, [
      align,
      textDecoration,
      textTransform,
      lineHeight,
      letterSpacing,
      fontSize,
      color,
      weight,
      numberOfLines,
      isNoWrap,
      style,
    ])

    const textClassName = clsx(
      'text',
      `text--variant-${variant}`,
      weight && `text--weight-${weight}`,
      align && `text--align-${align}`,
      isNoWrap && 'text--no-wrap',
      numberOfLines && 'text--truncate',
      className,
    )

    return (
      <Element
        ref={ref}
        className={textClassName}
        style={inlineStyles}
        data-testid={testID}
        {...rest}
      >
        {children}
      </Element>
    )
  },
)

Text.displayName = 'Text'

export default Text
