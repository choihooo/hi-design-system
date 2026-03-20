/**
 * HI Design System - React Package
 * Main entry point for all React components
 *
 * This package provides React components that use:
 * - Semantic tokens from @hi-design/tokens
 * - TypeScript types from @hi-design/types
 * - Primitives from @hi-design/primitives
 *
 * All components follow the design-tokens.pen specifications.
 *
 * Usage:
 * ```tsx
 * import { Button, Input, Card, Typography } from '@hi-design/react';
 * import { semantic } from '@hi-design/tokens';
 *
 * function MyComponent() {
 *   return (
 *     <Card elevation="md" padding="lg">
 *       <Typography variant="h1">Hello World</Typography>
 *       <Button variant="primary" onPress={handleClick}>
 *         Click me
 *       </Button>
 *     </Card>
 *   );
 * }
 * ```
 */

// Core components
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Card } from './components/Card';
export { Typography } from './components/Typography';
export { Checkbox } from './components/Checkbox';
export { Radio, RadioGroup } from './components/Radio';

// Re-export types from @hi-design/types
export type {
  ButtonProps,
  InputProps,
  CardProps,
  TypographyProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
} from '@hi-design/types';
