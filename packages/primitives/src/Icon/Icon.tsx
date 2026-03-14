/**
 * @component Icon
 * @description Core icon primitive - Displays icons with consistent sizing and styling
 * @platform React, React Native
 * @AI-friendly: Maximum - Single responsibility (icon display only), predictable props
 *
 * AI can easily understand:
 * - "Icon = styled icon glyph"
 * - "name = icon identifier"
 * - "size + color = main styling options"
 * - "All icon buttons = Pressable + Icon"
 *
 * @usage
 * ```tsx
 * // Basic icon
 * <Icon name="home" size="md" color="primary" />
 *
 * // Different sizes
 * <Icon name="star" size="sm" />
 * <Icon name="star" size="md" />
 * <Icon name="star" size="lg" />
 *
 * // Different variants
 * <Icon name="heart" variant="filled" color="red" />
 * <Icon name="heart" variant="outlined" color="red" />
 *
 * // Rotated icon
 * <Icon name="arrow" rotate={90} />
 *
 * // Accessible icon
 * <Icon
 *   name="close"
 *   ariaLabel="Close dialog"
 *   role="img"
 * />
 * ```
 *
 * @accessibility
 * - Screen readers: ariaLabel describes the icon's purpose
 * - Semantic HTML: role="img" for icons that convey meaning
 * - Decorative icons: ariaLabel="" for decorative icons
 * - Color contrast: Inherits color for accessibility
 *
 * @design-philosophy
 * - Single Responsibility: Only displays icons
 * - Composability: Used inside Pressable, Box, etc.
 * - Predictability: Consistent sizing and naming
 * - Performance: SVG-based, minimal overhead
 */

import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import './Icon.css'

interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  testID?: string
  style?: React.CSSProperties
}

interface IconProps extends BaseComponentProps {
  children?: React.ReactNode
  name: string
  size?: string | number
  color?: string
  variant?: 'filled' | 'outlined' | 'rounded' | 'sharp'
  rotate?: number
  flip?: 'horizontal' | 'vertical' | 'both'
  ariaLabel?: string
  role?: string
}

// Size scale mapping
const sizeMap = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
} as const

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = 'md',
      color,
      variant = 'outlined',
      rotate = 0,
      flip,
      className,
      style,
      testID,
      ariaLabel = '',
      role = 'img',
      ...rest
    },
    ref,
  ) => {
    // Convert size to pixel value
    const sizeValue = useMemo(() => {
      if (typeof size === 'number') return `${size}px`
      return sizeMap[size as keyof typeof sizeMap] || size
    }, [size])

    // Build inline styles
    const iconStyle = useMemo(() => {
      const styles: Record<string, any> = {
        width: sizeValue,
        height: sizeValue,
        color,
        transform: '',
        ...style,
      }

      // Apply rotation
      if (rotate) {
        styles.transform = `rotate(${rotate}deg)`
      }

      // Apply flip
      if (flip === 'horizontal') {
        styles.transform = `${styles.transform} scaleX(-1)`.trim()
      } else if (flip === 'vertical') {
        styles.transform = `${styles.transform} scaleY(-1)`.trim()
      } else if (flip === 'both') {
        styles.transform = `${styles.transform} scale(-1, -1)`.trim()
      }

      return styles
    }, [sizeValue, color, rotate, flip, style])

    const iconClassName = clsx(
      'icon',
      `icon--variant-${variant}`,
      className,
    )

    // For now, we'll use a simple SVG placeholder
    // In production, this would load the actual icon SVG
    return (
      <svg
        ref={ref}
        className={iconClassName}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="currentColor"
        data-testid={testID}
        aria-label={ariaLabel}
        role={ariaLabel ? role : undefined}
        aria-hidden={!ariaLabel}
        {...rest}
      >
        {/* This is a placeholder. In production, you'd load actual icons */}
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <text
          x="12"
          y="12"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fill="currentColor"
        >
          {name.slice(0, 2)}
        </text>
      </svg>
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
