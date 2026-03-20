/**
 * HI Design System - Primitives Package
 * Main entry point for all primitive components
 *
 * Primitives are the foundational components that make up the design system:
 * - Box: Layout container with flexbox/grid support
 * - Text: Typography component with semantic tokens
 * - Pressable: Interactive component with state management
 *
 * Usage:
 * ```tsx
 * import { Box, Text, Pressable } from '@hi-design/primitives';
 * import { tokens } from '@hi-design/tokens';
 *
 * function MyComponent() {
 *   return (
 *     <Box display="flex" gap="normal" padding="md">
 *       <Text variant="h1">Hello</Text>
 *       <Pressable onPress={() => console.log('pressed')}>
 *         <Text>Click me</Text>
 *       </Pressable>
 *     </Box>
 *   );
 * }
 * ```
 */

// Export primitive components
export { Box } from './Box';
export { Text } from './Text';
export { Pressable } from './Pressable';

// Re-export types from @hi-design/types
export type {
  BoxProps,
  TextProps,
  PressableProps,
  PressableState,
} from '@hi-design/types';
