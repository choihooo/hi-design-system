/**
 * Text Component - Typography Primitive
 *
 * The Text component provides consistent typography across the design system.
 * It uses semantic tokens from design-tokens.pen screen 4.
 *
 * Features:
 * - Pre-defined typography variants (display, headings, body, caption, etc.)
 * - Size variants (xs, sm, md, lg, xl)
 * - Weight variants (light, regular, medium, semibold, bold)
 * - Color support (semantic colors or custom)
 * - Text alignment
 * - Line height and letter spacing control
 * - Text decoration and transformation
 * - Truncation support
 *
 * @design-tokens.pen reference: Screen 4 - Typography System
 */

import { semantic } from '@hi-design/tokens';
import type { TextProps } from '@hi-design/types';
import { forwardRef } from 'react';

/**
 * Text - Typography component
 *
 * @example
 * ```tsx
 * // Using variants
 * <Text variant="h1">Heading 1</Text>
 * <Text variant="body">Body text</Text>
 * <Text variant="caption">Caption text</Text>
 *
 * // With semantic tokens
 * <Text
 *   variant="h2"
 *   color={semantic.color.brand.primary}
 * >
 *   Blue heading
 * </Text>
 *
 * // Truncation
 * <Text truncate lines={2}>
 *   Long text that will be truncated after 2 lines...
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLSpanElement, TextProps>(({
  children,
  variant = 'body',
  size,
  weight,
  color,
  align = 'left',
  lineHeight,
  letterSpacing,
  textDecoration = 'none',
  textTransform = 'none',
  truncate = false,
  className,
  testID,
  style,
}: TextProps, ref) => {
  // Get typography styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'display':
        return semantic.typography.display;
      case 'h1':
        return semantic.typography.heading.h1;
      case 'h2':
        return semantic.typography.heading.h2;
      case 'h3':
        return semantic.typography.heading.h3;
      case 'h4':
        return semantic.typography.heading.h4;
      case 'h5':
        return semantic.typography.heading.h5;
      case 'h6':
        return semantic.typography.heading.h6;
      case 'body-large':
        return semantic.typography.body.large;
      case 'body':
      case 'button':
      case 'input':
        return semantic.typography.body.default;
      case 'body-small':
      case 'helper':
        return semantic.typography.body.small;
      case 'caption':
      case 'xs':
        return semantic.typography.body.xs;
      case 'overline':
        return semantic.typography.component.overline;
      case 'label':
        return semantic.typography.component.label;
      default:
        return semantic.typography.body.default;
    }
  };

  const variantStyles = getVariantStyles();

  // Get font size based on size prop
  const getSizeValue = () => {
    if (!size) return variantStyles.fontSize;

    const sizeMap: Record<string, number> = {
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
    };

    return sizeMap[size] || variantStyles.fontSize;
  };

  // Get font weight
  const getWeightValue = () => {
    if (!weight) return variantStyles.fontWeight;

    const weightMap: Record<string, number> = {
      'light': 300,
      'regular': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
    };

    return weightMap[weight] || variantStyles.fontWeight;
  };

  // Get color value
  const getColorValue = (): string => {
    if (!color) return semantic.color.text.primary;

    // If it's already a valid color (hex, rgb, etc.), use it
    if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('rgb'))) {
      return color;
    }

    // Otherwise, assume it's a semantic color path
    return color;
  };

  // Build styles object
  const textStyle: React.CSSProperties = {
    // Font properties
    fontFamily: 'Inter, -apple-system, sans-serif',
    fontSize: getSizeValue(),
    fontWeight: getWeightValue(),
    lineHeight: lineHeight || variantStyles.lineHeight,
    letterSpacing: letterSpacing,

    // Color
    color: getColorValue(),

    // Alignment
    textAlign: align,

    // Decoration
    textDecoration,
    textTransform,

    // Truncation
    ...(truncate && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),

    // Custom styles
    ...style,
  };

  // Handle multi-line truncation
  if (truncate && style?.WebkitLineClamp) {
    textStyle.WebkitLineClamp = style.WebkitLineClamp;
    textStyle.WebkitBoxOrient = 'vertical';
    textStyle.display = '-webkit-box';
  }

  return (
    <span
      ref={ref}
      className={className}
      data-testid={testID}
      style={textStyle}
    >
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export default Text;
