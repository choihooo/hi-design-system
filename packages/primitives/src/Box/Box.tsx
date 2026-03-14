/**
 * @component Box
 * @description Core layout primitive - The foundation of all layouts in HI Design System
 * @platform React, React Native
 * @AI-friendly: Maximum - Single responsibility (layout only), predictable props
 *
 * This is the most fundamental primitive component. AI can easily understand:
 * - "Box = styled container"
 * - "All complex components = Box combinations"
 * - "Layout = nested Boxes with flex/grid"
 *
 * @usage
 * ```tsx
 * // Basic container
 * <Box padding="md" backgroundColor="white">
 *   Content here
 * </Box>
 *
 * // Flex layout
 * <Box display="flex" flexDirection="row" gap="sm">
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 * </Box>
 *
 * // Grid layout
 * <Box display="grid" gridTemplateColumns="1fr 1fr" gap="md">
 *   <Box>Cell 1</Box>
 *   <Box>Cell 2</Box>
 * </Box>
 *
 * // Responsive design
 * <Box
 *   responsive={{
 *     mobile: { padding: 'sm' },
 *     desktop: { padding: 'lg' }
 *   }}
 * >
 *   Responsive content
 * </Box>
 * ```
 *
 * @accessibility
 * - Semantic HTML: Use appropriate element types (div, section, article, etc.)
 * - ARIA roles: Can be enhanced with role prop
 * - Focus management: Supports tabIndex
 *
 * @design-philosophy
 * - Single Responsibility: Only handles layout and styling
 * - Composability: Can be nested infinitely
 * - Predictability: Props map directly to CSS properties
 * - Performance: Minimal overhead, just style application
 */

import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import './Box.css'

interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  testID?: string
  style?: React.CSSProperties
}

interface BoxProps extends BaseComponentProps {
  children?: React.ReactNode
  display?: 'block' | 'flex' | 'grid' | 'inline' | 'inline-block' | 'none'
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string | number
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridGap?: string | number
  padding?: string | number
  margin?: string | number
  paddingTop?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  width?: string | number
  height?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  backgroundColor?: string
  color?: string
  borderColor?: string
  borderWidth?: string | number
  borderRadius?: string | number
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: number
  opacity?: number
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  cursor?: 'pointer' | 'default' | 'move' | 'text' | 'wait' | 'not-allowed'
  responsive?: {
    mobile?: Partial<BoxProps>
    tablet?: Partial<BoxProps>
    desktop?: Partial<BoxProps>
  }
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      // Layout
      display = 'block',

      // Flexbox
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,

      // Grid
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,

      // Spacing
      padding,
      margin,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,

      // Dimensions
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,

      // Colors
      backgroundColor,
      color,
      borderColor,
      borderWidth,
      borderRadius,

      // Position
      position = 'static',
      top,
      right,
      bottom,
      left,
      zIndex,

      // Other
      opacity,
      overflow,
      cursor,

      // Base props
      className,
      style,
      children,
      testID,
      responsive,

      // Rest for any additional HTML attributes
      ...rest
    },
    ref,
  ) => {
    // Generate responsive styles if provided
    const responsiveStyles = useMemo(() => {
      if (!responsive) return {}

      const styles: Record<string, any> = {}

      // Mobile breakpoint (default)
      if (responsive.mobile) {
        Object.assign(styles, responsive.mobile)
      }

      // Tablet breakpoint
      if (responsive.tablet) {
        styles['@media (min-width: 768px)'] = responsive.tablet
      }

      // Desktop breakpoint
      if (responsive.desktop) {
        styles['@media (min-width: 1024px)'] = responsive.desktop
      }

      return styles
    }, [responsive])

    // Build inline styles from props
    const inlineStyles = useMemo(() => {
      const styles: Record<string, any> = {
        display,
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap,
        gridTemplateColumns,
        gridTemplateRows,
        gridGap,
        padding,
        margin,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        backgroundColor,
        color,
        borderColor,
        borderWidth,
        borderRadius,
        position,
        top,
        right,
        bottom,
        left,
        zIndex,
        opacity,
        overflow,
        cursor,
        ...responsiveStyles,
        ...style,
      }

      // Remove undefined values
      Object.keys(styles).forEach((key) => {
        if (styles[key] === undefined) {
          delete styles[key]
        }
      })

      return styles
    }, [
      display,
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
      padding,
      margin,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      backgroundColor,
      color,
      borderColor,
      borderWidth,
      borderRadius,
      position,
      top,
      right,
      bottom,
      left,
      zIndex,
      opacity,
      overflow,
      cursor,
      responsiveStyles,
      style,
    ])

    const boxClassName = clsx(
      'box',
      display && `box--display-${display}`,
      className,
    )

    return (
      <div
        ref={ref}
        className={boxClassName}
        style={inlineStyles}
        data-testid={testID}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Box.displayName = 'Box'

export default Box
