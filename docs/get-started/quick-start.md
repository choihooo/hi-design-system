# Quick Start Guide

Get up and running with HI Design System in 5 minutes.

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- (Optional) Flutter SDK
- (Optional) Expo CLI

## Installation

### 1. Install the Package

```bash
# For React (Web)
pnpm add @hi-design/react @hi-design/tokens

# For React Native
pnpm add @hi-design/react-native @hi-design/tokens

# For Flutter
# Add to pubspec.yaml:
# hi_design:
#   path: ../hi-design-system/flutter
```

### 2. Basic Usage

#### React (Web)

```tsx
import { Button, Typography } from '@hi-design/react';
import { tokens } from '@hi-design/tokens';

function App() {
  return (
    <div style={{
      padding: tokens.semantic.spacing.normal,
      backgroundColor: tokens.semantic.color.background.primary
    }}>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

#### React Native

```tsx
import { Button, Typography } from '@hi-design/react-native';
import { tokens } from '@hi-design/tokens';
import { View } from 'react-native';

function App() {
  return (
    <View style={{
      padding: tokens.semantic.spacing.normal,
      backgroundColor: tokens.semantic.color.background.primary
    }}>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary">Click Me</Button>
    </View>
  );
}
```

#### Flutter

```dart
import 'package:hi_design/hi_design.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        HiTypography.h1('Hello World'),
        HiButton(
          text: 'Click Me',
          variant: HiButtonVariant.primary,
        ),
      ],
    );
  }
}
```

## Theme Switching

```typescript
import { applyTheme } from '@hi-design/tokens';

// Dark mode
applyTheme('dark');

// Light mode
applyTheme('light');
```

## Next Steps

- [Token Architecture](../tokens/architecture.md) - Understand the token system
- [Component Documentation](../components/) - Explore components
- [Theming](../tokens/theming.md) - Customize themes

## Need Help?

- [Installation Guide](installation.md) - Detailed setup
- [Platform Setup](platform-setup.md) - Platform-specific help
- [Examples](../../apps/) - Demo applications
