/**
 * Pressable Component - Interactive Primitive
 *
 * The Pressable component provides interactive state management for touch and mouse interactions.
 * It's the foundation for all interactive components (Button, Card, etc.)
 *
 * Features:
 * - Press state tracking (pressed/released)
 * - Hover state tracking
 * - Focus state tracking
 * - Disabled state
 * - Render prop support (children as function)
 * - Style function support (style based on state)
 * - Keyboard accessibility
 * - ARIA attributes
 * - Ref forwarding
 *
 * @design-tokens.pen reference: Screen 7 - Component States
 */

import { useState, useCallback, useRef, forwardRef } from 'react';
import { semantic } from '@hi-design/tokens';
import type { PressableProps, PressableState } from '@hi-design/types';

/**
 * Pressable - Interactive state component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Pressable onPress={() => console.log('pressed!')}>
 *   <Text>Click me</Text>
 * </Pressable>
 *
 * // With render prop (access to state)
 * <Pressable onPress={handlePress}>
 *   {(state) => (
 *     <Text style={{ opacity: state.pressed ? 0.5 : 1 }}>
 *       {state.pressed ? 'Pressed!' : 'Press me'}
 *     </Text>
 *   )}
 * </Pressable>
 *
 * // With style function
 * <Pressable
 *   onPress={handlePress}
 *   style={(state) => ({
 *     backgroundColor: state.pressed ? semantic.color.brand.primaryActive : semantic.color.brand.primary,
 *     opacity: state.disabled ? 0.5 : 1,
 *   })}
 * >
 *   <Text>Styled button</Text>
 * </Pressable>
 *
 * // Disabled
 * <Pressable onPress={handlePress} disabled>
 *   <Text>Disabled button</Text>
 * </Pressable>
 * ```
 */
export const Pressable = forwardRef<any, PressableProps>(({
  children,
  onPress,
  disabled = false,
  style,
  className,
  testID,
  as: Component = 'button',
  ...rest
}, forwardedRef) => {
  // State tracking
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  // Internal ref for the element
  const elementRef = useRef<HTMLButtonElement>(null);

  // Merge refs
  const setRef = useCallback((node: HTMLButtonElement | null) => {
    // Store in internal ref (using a mutable approach)
    (elementRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;

    // Update forwarded ref
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    }
  }, [forwardedRef]);

  // Handle press start
  const handlePressStart = useCallback(() => {
    if (!disabled) {
      setPressed(true);
    }
  }, [disabled]);

  // Handle press end
  const handlePressEnd = useCallback(() => {
    if (!disabled) {
      setPressed(false);
    }
  }, [disabled]);

  // Handle press action
  const handlePress = useCallback(() => {
    if (!disabled && onPress) {
      onPress();
    }
  }, [disabled, onPress]);

  // Handle hover start
  const handleHoverStart = useCallback(() => {
    if (!disabled) {
      setHovered(true);
    }
  }, [disabled]);

  // Handle hover end
  const handleHoverEnd = useCallback(() => {
    setHovered(false);
    setPressed(false);
  }, []);

  // Handle focus
  const handleFocus = useCallback(() => {
    if (!disabled) {
      setFocused(true);
    }
  }, [disabled]);

  // Handle blur
  const handleBlur = useCallback(() => {
    setFocused(false);
    setPressed(false);
  }, []);

  // Handle keyboard interactions
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;

    // Activate on Enter or Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePressStart();
    }
  }, [disabled, handlePressStart]);

  const handleKeyUp = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePressEnd();
      handlePress();
    }
  }, [disabled, handlePressEnd, handlePress]);

  // Build current state
  const currentState: PressableState = {
    pressed,
    hovered,
    focused,
    disabled,
  };

  // Calculate styles
  const getStyles = (): React.CSSProperties => {
    // Base styles
    const baseStyles: React.CSSProperties = {
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      outline: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: `opacity ${semantic.animation.duration.fast}ms ${semantic.animation.easing.ease}`,
    };

    // Add focus ring when focused
    if (focused && !disabled) {
      baseStyles.boxShadow = `0 0 0 3px ${semantic.color.brand.primary}40`;
    }

    // If style is a function, call it with current state
    if (typeof style === 'function') {
      return {
        ...baseStyles,
        ...style(currentState),
      };
    }

    // Otherwise, merge base styles with provided styles
    return {
      ...baseStyles,
      ...style,
    };
  };

  // Render children
  const renderContent = () => {
    // If children is a function, call it with current state
    if (typeof children === 'function') {
      return children(currentState);
    }

    return children;
  };

  return (
    <Component
      ref={setRef as any}
      className={className}
      data-testid={testID}
      disabled={disabled}
      style={getStyles()}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handleHoverEnd}
      onMouseEnter={handleHoverStart}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onClick={undefined} // We handle clicks via onPress/onClick prop
      aria-disabled={disabled}
      {...rest}
    >
      {renderContent()}
    </Component>
  );
});

Pressable.displayName = 'Pressable';

export default Pressable;
