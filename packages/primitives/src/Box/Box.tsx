/**
 * Box Component - Layout Primitive
 *
 * The Box component is a fundamental layout primitive that provides:
 * - Flexbox/Grid layout
 * - Spacing control (padding, margin, gap)
 * - Size constraints (width, height, min/max)
 * - Positioning (relative, absolute, fixed, sticky)
 * - Visual styling (background, border, radius, opacity)
 * - Overflow handling
 * - Z-index stacking
 *
 * It uses semantic tokens from @hi-design/tokens for all styling.
 *
 * @design-tokens.pen reference: Component spacing and layout values
 */

import { semantic } from '@hi-design/tokens';
import type { BoxProps } from '@hi-design/types';
import { forwardRef } from 'react';

/**
 * Box - Universal layout container component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Box padding="normal" gap="sm">
 *   <Text>Content</Text>
 * </Box>
 *
 * // Flex layout
 * <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
 *   <Text>Centered content</Text>
 * </Box>
 *
 * // With semantic tokens
 * <Box
 *   padding={tokens.semantic.spacing.normal}
 *   backgroundColor={tokens.semantic.color.background.primary}
 *   borderRadius={tokens.semantic.borderRadius.md}
 * >
 *   <Text>Styled box</Text>
 * </Box>
 * ```
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(({
  children,
  display = 'block',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  padding,
  margin,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  overflow,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  backgroundColor,
  borderRadius,
  border,
  borderColor,
  borderWidth,
  opacity,
  cursor,
  className,
  testID,
  style,
  responsive,
}: BoxProps, ref) => {
  // Convert semantic spacing names to pixel values
  const getSpacingValue = (value: number | string | undefined): string | number => {
    if (value === undefined) return '';
    if (typeof value === 'number') return value;

    // Handle semantic spacing names
    const spacingMap: Record<string, number> = {
      'tight': semantic.spacing.tight,
      'compact': semantic.spacing.compact,
      'normal': semantic.spacing.normal,
      'relaxed': semantic.spacing.relaxed,
      'spacious': semantic.spacing.spacious,
    };

    if (spacingMap[value]) {
      return spacingMap[value];
    }

    return value;
  };

  // Convert size names to pixel values
  const getSizeValue = (value: number | string | 'full' | undefined): string | number => {
    if (value === undefined) return '';
    if (value === 'full') return '100%';
    if (typeof value === 'number') return value;
    return value;
  };

  // Convert semantic border radius names to pixel values
  const getRadiusValue = (value: number | string | undefined): string | number => {
    if (value === undefined) return '';
    if (typeof value === 'number') return value;

    const radiusMap: Record<string, number> = {
      'xs': semantic.borderRadius.xs,
      'sm': semantic.borderRadius.sm,
      'md': semantic.borderRadius.md,
      'lg': semantic.borderRadius.lg,
      'xl': semantic.borderRadius.xl,
      'full': semantic.borderRadius.full,
    };

    if (radiusMap[value]) {
      return radiusMap[value];
    }

    return value;
  };

  // Build styles object
  const boxStyle: React.CSSProperties = {
    // Layout
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap: getSpacingValue(gap),

    // Spacing
    padding: getSpacingValue(padding),
    margin: getSpacingValue(margin),

    // Size
    width: getSizeValue(width),
    height: getSizeValue(height),
    minWidth: getSizeValue(minWidth),
    maxWidth: getSizeValue(maxWidth),
    minHeight: getSizeValue(minHeight),
    maxHeight: getSizeValue(maxHeight),

    // Overflow
    overflow,

    // Positioning
    position,
    top,
    right,
    bottom,
    left,
    zIndex,

    // Visual
    backgroundColor,
    borderRadius: getRadiusValue(borderRadius),
    border,
    borderColor,
    borderWidth,

    // Effects
    opacity,
    cursor,

    // Custom styles
    ...style,
  };

  // Build responsive styles (media queries)
  const responsiveStyles: React.CSSProperties = {};
  if (responsive) {
    // Note: For full responsive support, you'd use CSS-in-JS or styled-components
    // This is a simplified version that works with inline styles
    Object.entries(responsive).forEach(([breakpoint, styles]) => {
      if (breakpoint === 'mobile' && styles) {
        Object.assign(responsiveStyles, styles);
      }
    });
  }

  return (
    <div
      ref={ref}
      className={className}
      data-testid={testID}
      style={{ ...boxStyle, ...responsiveStyles }}
    >
      {children}
    </div>
  );
});

Box.displayName = 'Box';

export default Box;
