/**
 * Card - Surface container with elevation, padding, and optional pressable state
 *
 * @platform React
 * @usage
 * ```tsx
 * <Card elevation="md" padding="lg" isPressable onPress={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Content</p>
 * </Card>
 * ```
 */

import { semantic } from '@hi-design/tokens'
import { Box, Pressable } from '@hi-design/primitives'
import type { CardProps } from '@hi-design/types'
import { forwardRef, memo } from 'react'

export const Card = forwardRef<any, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      isPressable = false,
      pressable = false,
      onPress,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      className,
      children,
      testID,
      style,
      pressableAs = 'button',
      pressableProps,
      accessibleProps,
    },
    ref,
  ) => {
    const interactive = isPressable || pressable

    // Elevation styles using semantic tokens
    const elevationStyles: Record<string, React.CSSProperties> = {
      none: {
        boxShadow: 'none',
      },
      sm: {
        boxShadow: semantic.elevation.sm,
      },
      md: {
        boxShadow: semantic.elevation.md,
      },
      lg: {
        boxShadow: semantic.elevation.lg,
      },
      xl: {
        boxShadow: semantic.elevation.xl,
      },
    }

    // Padding styles using semantic spacing
    const paddingStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: semantic.spacing.card.padding.sm,
      },
      md: {
        padding: semantic.spacing.card.padding.md,
      },
      lg: {
        padding: semantic.spacing.card.padding.lg,
      },
    }

    // Border radius styles
    const radiusStyles: Record<string, React.CSSProperties> = {
      sm: {
        borderRadius: semantic.borderRadius.sm,
      },
      md: {
        borderRadius: semantic.borderRadius.md,
      },
      lg: {
        borderRadius: semantic.borderRadius.lg,
      },
      xl: {
        borderRadius: semantic.borderRadius.xl,
      },
    }

    // Base card style
    const baseCardStyle: React.CSSProperties = {
      backgroundColor: semantic.color.background.elevated,
      boxSizing: 'border-box',
      transition: `all ${semantic.animation.duration.normal}ms ${semantic.animation.easing.ease}`,
      position: 'relative',
      ...elevationStyles[elevation],
      ...paddingStyles[padding],
      ...radiusStyles[radius],
    }

    // Pressable interactive styles
    const pressableStyle: React.CSSProperties = {
      cursor: 'pointer',
      userSelect: 'none',
    }

    // Hover and pressed states for pressable cards
    const interactiveStyle = interactive
      ? {
          ...pressableStyle,
        }
      : {}

    const combinedStyle = {
      ...baseCardStyle,
      ...interactiveStyle,
      ...style,
    }

    // Event handlers for pressable cards
    const handlePress = onPress || onClick

    const pressableHandlers = {
      onFocus: onFocus
        ? (event: React.FocusEvent<Element>) => onFocus(event as React.FocusEvent<HTMLElement>)
        : undefined,
      onBlur: onBlur
        ? (event: React.FocusEvent<Element>) => onBlur(event as React.FocusEvent<HTMLElement>)
        : undefined,
      onMouseDown: onMouseDown
        ? (event: React.MouseEvent<Element>) => onMouseDown(event as React.MouseEvent<HTMLElement>)
        : undefined,
      onMouseUp: onMouseUp
        ? (event: React.MouseEvent<Element>) => onMouseUp(event as React.MouseEvent<HTMLElement>)
        : undefined,
      onMouseLeave: onMouseLeave
        ? (event: React.MouseEvent<Element>) =>
            onMouseLeave(event as React.MouseEvent<HTMLElement>)
        : undefined,
    }

    const sharedProps = {
      className,
      testID,
      style: combinedStyle,
    }

    if (interactive) {
      return (
        <Pressable
          ref={ref}
          as={pressableAs}
          onPress={handlePress}
          {...pressableHandlers}
          {...accessibleProps}
          {...(pressableProps || {})}
          {...sharedProps}
        >
          {children}
        </Pressable>
      )
    }

    return (
      <Box ref={ref} {...sharedProps}>
        {children}
      </Box>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
