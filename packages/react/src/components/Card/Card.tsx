/**
 * @component Card
 * @description Container component with elevation and padding options - Composed of Box + optional Pressable
 * @platform React (Web)
 * @AI-friendly: High - Clear composition pattern using primitives
 *
 * This component demonstrates the "complex = primitive composition" pattern:
 * - Card = Box (layout) + optional Pressable (interaction)
 * - AI can easily understand: "Card is a container that can be clickable"
 * - Consistent with other components
 *
 * @composition
 * ```tsx
 * Card composition pattern:
 * // Static card
 * <Box elevation="md" padding="lg">
 *   {children}
 * </Box>
 *
 * // Pressable card
 * <Pressable onPress={handleClick}>
 *   <Box elevation="md" padding="lg">
 *     {children}
 *   </Box>
 * </Pressable>
 * ```
 *
 * @usage
 * ```tsx
 * import { Card } from '@hi-design/react'
 *
 * // Basic card
 * <Card elevation="md" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * // Clickable card
 * <Card
 *   elevation="lg"
 *   padding="xl"
 *   isPressable
 *   onPress={() => console.log('Card clicked')}
 * >
 *   <h3>Clickable Card</h3>
 *   <p>This card can be clicked and has hover effects.</p>
 * </Card>
 *
 * // No padding card
 * <Card elevation="none" padding="none">
 *   <img src="image.jpg" alt="Card image" />
 * </Card>
 *
 * // Custom border radius
 * <Card elevation="md" padding="lg" radius="full">
 *   <Content />
 * </Card>
 * ```
 *
 * @elevation
 * Controls shadow depth of the card:
 * - **none**: No shadow (flat)
 * - **sm**: Small shadow (subtle elevation)
 * - **md**: Medium shadow (default elevation)
 * - **lg**: Large shadow (prominent elevation)
 * - **xl**: Extra large shadow (maximum elevation)
 *
 * @padding
 * Controls internal spacing:
 * - **none**: No padding (custom layout)
 * - **sm**: Small padding (compact content)
 * - **md**: Medium padding (default spacing)
 * - **lg**: Large padding (spacious content)
 * - **xl**: Extra large padding (maximum spacing)
 *
 * @border-radius
 * Controls corner rounding:
 * - **none**: Sharp corners (90°)
 * - **sm**: Small rounding (4px)
 * - **md**: Medium rounding (8px, default)
 * - **lg**: Large rounding (12px)
 * - **xl**: Extra large rounding (16px)
 * - **full**: Fully rounded (pill shape)
 *
 * @pressable-behavior
 * When `isPressable={true}`, card becomes interactive:
 * - Hover effects (elevation increase, background change)
 * - Focus states for keyboard navigation
 * - Click/tap handlers
 * - Cursor pointer
 * - Accessibility attributes automatically applied
 *
 * @accessibility
 * - **Static cards**: Use div elements (default)
 * - **Pressable cards**: Use button elements with proper ARIA
 * - **Link cards**: Use a elements with href attribute
 * - **Keyboard navigation**: Full keyboard support for pressable cards
 * - **Screen readers**: Proper ARIA labels and roles
 * - **Focus indicators**: Clear visual focus states
 *
 * @design-pattern
 * This component follows the primitive composition pattern:
 * 1. Layout handled by Box primitive
 * 2. Interactions handled by Pressable primitive (optional)
 * 3. Only composition logic in Card itself
 *
 * @best-practices
 * - Use appropriate elevation for content hierarchy
 * - Provide sufficient padding for content readability
 * - Use pressable cards only for interactive content
 * - Add proper heading structure inside cards
 * - Include meaningful alt text for images in cards
 * - Test card interactions on both desktop and mobile
 *
 * @examples
 * ```tsx
 * // Product card
 * function ProductCard({ product, onAddToCart }) {
 *   return (
 *     <Card elevation="md" padding="lg" isPressable onPress={() => onAddToCart(product)}>
 *       <img src={product.image} alt={product.name} />
 *       <h3>{product.name}</h3>
 *       <p>{product.description}</p>
 *       <p>{product.price}</p>
 *     </Card>
 *   )
 * }
 *
 * // Profile card
 * function ProfileCard({ user }) {
 *   return (
 *     <Card elevation="lg" padding="xl" radius="lg">
 *       <img src={user.avatar} alt={user.name} />
 *       <h2>{user.name}</h2>
 *       <p>{user.bio}</p>
 *     </Card>
 *   )
 * }
 *
 * // Content card with custom styling
 * function ContentCard() {
 *   return (
 *     <Card
 *       elevation="md"
 *       padding="lg"
 *       radius="md"
 *       className="custom-card"
 *     >
 *       <h2>Custom Content</h2>
 *       <p>This card has custom styling applied.</p>
 *     </Card>
 *   )
 * }
 * ```
 *
 * @see-also
 * - Box: Layout primitive
 * - Pressable: Interaction primitive
 * - Button: For primary actions
 */

import type { CardProps } from '@hi-design/types'
import { Box } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef, memo } from 'react'
import './Card.css'

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      elevation = 'md',
      padding = 'md',
      radius = 'md',
      isPressable = false,
      pressableAs = 'button',
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
      ...rest
    },
    ref,
  ) => {
    const cardClassName = clsx(
      'card',
      `card--elevation-${elevation}`,
      `card--padding-${padding}`,
      `card--radius-${radius}`,
      isPressable && 'card--pressable',
      className,
    )

    const cardProps = {
      className: cardClassName,
      testID,
      ...rest,
    }

    if (isPressable) {
      return (
        <Pressable
          ref={ref as any}
          as={pressableAs}
          onPress={onPress as any}
          onClick={onClick as any}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          {...cardProps}
        >
          {children}
        </Pressable>
      )
    }

    return (
      <Box ref={ref as any} {...cardProps}>
        {children}
      </Box>
    )
  },
)

Card.displayName = 'Card'

export default memo(Card)
