# Button Component

Interactive button with multiple variants and sizes.

## Examples

### Basic Button

```tsx
import { Button } from '@hi-design/react';

<Button variant="primary" onPress={() => console.log('Clicked')}>
  Click Me
</Button>
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### With Tokens

```tsx
import { Button } from '@hi-design/react';
import { tokens } from '@hi-design/tokens';

const customStyle = {
  backgroundColor: tokens.semantic.color.brand.secondary,
};

<Button style={customStyle}>Custom Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning'` | `'primary'` | Color scheme |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Show loading spinner |
| `fullWidth` | `boolean` | `false` | Full width button |
| `onPress` | `() => void` | - | Click handler |
| `children` | `ReactNode` | - | Button content |
| `testID` | `string` | - | Test ID |

## Accessibility

- Keyboard navigation supported
- ARIA attributes included
- Focus visible indicator

## Platform-Specific

### React (Web)

```tsx
import { Button } from '@hi-design/react';
```

### React Native

```tsx
import { Button } from '@hi-design/react-native';
```

### Flutter

```dart
import 'package:hi_design/hi_design.dart';

HiButton(
  text: 'Click Me',
  variant: HiButtonVariant.primary,
  size: HiButtonSize.md,
  onPressed: () => print('Clicked'),
)
```

## Design Tokens Used

```typescript
// Colors
tokens.semantic.color.brand.primary
tokens.semantic.color.brand.secondary
tokens.semantic.color.text.inverse

// Spacing
tokens.semantic.spacing.button.padding.sm.vertical
tokens.semantic.spacing.button.padding.md.vertical
tokens.semantic.spacing.button.padding.lg.vertical

// Typography
tokens.semantic.typography.component.button.fontSize
tokens.semantic.typography.component.button.fontWeight
```

## See Also

- [Theming](../tokens/theming.md) - Customize button appearance
- [Token Architecture](../tokens/architecture.md) - Understanding tokens
- [Input](input.md) - Form inputs
