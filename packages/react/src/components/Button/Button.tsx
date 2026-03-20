/**
 * Button - Interactive button component
 *
 * From design-tokens.pen UoCBF - HI Buttons - Iris System
 * "Neutral-first buttons with Iris reserved for hierarchy, focus, and high-priority action."
 *
 * @platform React
 * @usage
 * ```tsx
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Primary Action
 * </Button>
 * ```
 */

import { scale } from '@hi-design/tokens'
import type { ButtonProps } from '@hi-design/types'
import { forwardRef } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      onPress,
      className,
      children,
      testID,
      icon,
      ...rest
    },
    ref,
  ) => {
    // Base styles
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8, // 8px gap from design-tokens.pen
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1, // From design-tokens.pen states
      fontFamily: 'Inter, -apple-system, sans-serif',
      fontWeight: 600, // From design-tokens.pen: fontWeight 600
      fontSize: 14, // From design-tokens.pen: fontSize 14
      lineHeight: 1.4,
      transition: `all ${scale.animation.duration.normal}ms ${scale.animation.easing.ease}`,
      boxSizing: 'border-box',
      width: fullWidth ? '100%' : 'auto',
    }

    // Size variants from design-tokens.pen UoCBF
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        paddingTop: 8, // padding [8,14]
        paddingBottom: 8,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 999,
      },
      md: {
        paddingTop: 12, // padding [12,20]
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 999,
      },
      lg: {
        paddingTop: 16, // padding [16,24]
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 999,
      },
    }

    // Variant styles from design-tokens.pen UoCBF - HI Buttons - Iris System
    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        // $brand-primary background, $text-inverse text
        backgroundColor: disabled
          ? scale.color.neutral[400]
          : scale.color.primary[500], // Iris #5E6AD2
        color: scale.color.neutral[50], // $text-inverse
      },
      secondary: {
        // $text-primary background (inked neutrals)
        // System Note: "Secondary uses inked neutrals, not a second bright brand color"
        backgroundColor: disabled
          ? scale.color.neutral[400]
          : scale.color.neutral[900], // $text-primary (deep neutral)
        color: scale.color.neutral[50], // $text-inverse
      },
      ghost: {
        // $surface-subtle background
        backgroundColor: disabled
          ? 'transparent'
          : scale.color.neutral[100], // $surface-subtle
        color: disabled
          ? scale.color.neutral[400]
          : scale.color.neutral[900], // $text-primary
      },
      outline: {
        // $bg-primary background, $neutral-300 border
        backgroundColor: scale.color.neutral[0], // $bg-primary
        color: disabled
          ? scale.color.neutral[400]
          : scale.color.neutral[900], // $text-primary
        border: `1px solid ${disabled ? scale.color.neutral[200] : scale.color.neutral[300]}`,
      },
    }

    const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && onPress) {
        onPress()
      }
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        disabled={disabled || loading}
        data-test-id={testID}
        className={className}
        style={{
          ...baseStyle,
          ...sizeStyles[size],
          ...variantStyles[variant],
        }}
        {...rest}
      >
        {loading && (
          <span
            style={{
              display: 'inline-block',
              width: 14,
              height: 14,
              border: '2px solid currentColor',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.6s linear infinite',
            }}
          />
        )}
        {icon && !loading && (
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '1.2em' }}>
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
