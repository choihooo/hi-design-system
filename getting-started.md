# Getting Started with HI Design System

## Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **Flutter** SDK (for Flutter components)
- **Expo CLI** (for React Native development)

## Installation

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/hi-design/hi-design-system.git
cd hi-design-system

# Install dependencies with pnpm
pnpm install
```

### 2. Verify Installation

```bash
# Type check all packages
pnpm type-check

# Build all packages
pnpm build
```

## Platform Setup

### React (Web)

No additional setup required. The React components work out of the box with Vite.


```bash
cd flutter
flutter run

# Build for specific platform
flutter build web
flutter build ios
flutter build android
```

## Quick Start Guide

### Understanding the Token System

HI Design System follows [Seed Design's 3-layer architecture](https://www.npmjs.com/package/@seed-design/design-token):

```
Raw Values → Scale Tokens → Semantic Tokens
```

**Example:**

```typescript
// Raw Value (Layer 1)
'#0ea5e9'

// Scale Token (Layer 2)
tokens.scale.color.primary[500]

// Semantic Token (Layer 3) - Use this!
tokens.semantic.color.brand.primary
```

### Using in Your React Project

```bash
# Navigate to your project
cd your-react-project

# Install the packages
pnpm add @hi-design/react @hi-design/tokens @hi-design/types
```

```tsx
// Import components
import { Button, Input, Card, Typography } from '@hi-design/react';

// Import tokens (recommended: use semantic tokens)
import { tokens } from '@hi-design/tokens';

function App() {
  // ✅ Use semantic tokens (recommended)
  const containerStyle = {
    padding: tokens.semantic.spacing.normal,
    backgroundColor: tokens.semantic.color.background.primary,
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary" onPress={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

### Using in Your React Native Project

```bash
# Install the packages
pnpm add @hi-design/react-native @hi-design/tokens @hi-design/types
```

```tsx
import { Button, Input, Card, Typography } from '@hi-design/react-native';
import { tokens } from '@hi-design/tokens';
import { View } from 'react-native';

function App() {
  const containerStyle = {
    padding: tokens.semantic.spacing.normal,
    backgroundColor: tokens.semantic.color.background.primary,
  };

  return (
    <View style={containerStyle}>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary" onPress={() => alert('Clicked!')}>
        Click Me
      </Button>
    </View>
  );
}
```

### Using in Your Flutter Project

```yaml
# pubspec.yaml
dependencies:
  hi_design:
    path: ../hi-design-system/flutter
```

```dart
import 'package:hi_design/hi_design.dart';

// In your widget
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        HiTypography.h1('Hello World'),
        HiButton(
          text: 'Click Me',
          variant: HiButtonVariant.primary,
          onPressed: () => print('Clicked!'),
        ),
      ],
    );
  }
}
```

## Theme Customization

### Basic Theme Switching

```typescript
import { tokens, applyTheme } from '@hi-design/tokens';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme on mount and change
    applyTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
```

### Custom Brand Colors

```typescript
import { tokens } from '@hi-design/tokens';

// Override brand colors
tokens.semantic.color.brand.primary = '#ff6b6b';
tokens.semantic.color.brand.primaryHover = '#ee5a52';

// All components now use your brand colors
```

### CSS Variables (Web)

```typescript
import { injectCSSVars } from '@hi-design/tokens';

// At app initialization
injectCSSVars('light');
```

```css
/* In your CSS */
.button {
  background-color: var(--brand-primary);
  padding: var(--spacing-normal);
  color: var(--text-primary);
}

.button:hover {
  background-color: var(--brand-primary-hover);
}
```

## Development Workflow

### Monorepo Commands

```bash
# Development mode (watches for changes)
pnpm dev

# Build all packages
pnpm build

# Run all tests
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint

# Clean all build artifacts
pnpm clean
```

### Package-Specific Development

#### React Package

```bash
cd packages/react

# Watch mode for development
pnpm dev

# Build for production
pnpm build

# Type check
pnpm type-check
```


```bash
cd flutter
flutter run

# For web
flutter run -d chrome

# For specific device
flutter devices
flutter run -d <device-id>
```

## Project Structure

```
hi-design-system/
├── packages/
│   ├── tokens/           # 3-layer design tokens
│   │   ├── src/
│   │   │   ├── colors.ts     # Color tokens
│   │   │   ├── spacing.ts    # Spacing tokens
│   │   │   ├── typography.ts # Typography tokens
│   │   │   └── index.ts      # Unified token export
│   │   └── USAGE.md          # Token usage guide
│   ├── types/            # TypeScript types
│   ├── react/            # React components
│   └── react-native/     # React Native components
├── apps/
│   ├── react-demo/       # React demo app
│   └── rn-demo/          # React Native demo app
├── flutter/              # Flutter package
└── docs/                 # Documentation
```

## Common Tasks

### Adding a New Component

1. Define types in `packages/types/src/components.ts`
2. Create React version in `packages/react/src/components/[ComponentName]/`
3. Create React Native version in `packages/react-native/src/components/[ComponentName]/`
4. Create Flutter widget in `flutter/lib/hi_design/widgets/`
5. Add examples to demo apps
6. Update documentation

### Updating Design Tokens

1. Edit token file in `packages/tokens/src/`
2. Changes are automatically available in all platforms
3. Test in demo applications

### Creating a Custom Theme

```typescript
import { tokens } from '@hi-design/tokens';

// Define your theme
const myTheme = {
  brand: {
    primary: '#your-color',
    primaryHover: '#your-hover-color',
  },
  // ... other tokens
};

// Apply theme
Object.assign(tokens.semantic.color, myTheme);
```

### Version Management

```bash
# Add a changeset
pnpm changeset

# Version packages
pnpm version-packages

# Publish to npm
pnpm release
```

## Token Usage Best Practices

### ✅ DO: Use Semantic Tokens

```typescript
// Recommended
const style = {
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.normal,
  fontSize: tokens.semantic.typography.body.default.fontSize,
};
```

### ⚠️ AVOID: Hardcoded Values

```typescript
// Not recommended
const style = {
  backgroundColor: '#0ea5e9',
  padding: '16px',
  fontSize: '16px',
};
```

### ✅ DO: Use Scale Tokens for Specific Needs

```typescript
// When you need a specific shade
const style = {
  backgroundColor: tokens.scale.color.primary[500],
  borderColor: tokens.scale.color.neutral[200],
};
```

### ✅ DO: Override at App Level

```typescript
// At app initialization
tokens.semantic.color.brand.primary = '#ff6b6b';

// All components use the new color
```

## Troubleshooting

### Common Issues

**Issue: `Cannot find module '@hi-design/tokens'`**
```bash
# Reinstall dependencies
pnpm install --force
```

**Issue: Theme not updating**
```typescript
// Make sure to call applyTheme
import { applyTheme } from '@hi-design/tokens';
applyTheme('dark');
```

**Issue: React Native demo won't start**
```bash
# Clear cache
cd apps/rn-demo
rm -rf node_modules
pnpm install
pnpm start --clear
```

**Issue: Flutter dependencies error**
```bash
cd flutter
flutter clean
flutter pub get
```

**Issue: Type errors in React package**
```bash
cd packages/react
pnpm type-check
```

## Next Steps

1. **Explore Tokens**: Read `packages/tokens/USAGE.md` for comprehensive token guide
2. **Try Components**: Explore demo applications in `/apps`
3. **Build Components**: Follow `.claude/CLAUDE.md` for AI-assisted development
4. **Customize**: Create your own theme using semantic tokens
5. **Contribute**: Check `CONTRIBUTING.md` for contribution guidelines

## Resources

- **[Token Usage Guide](./packages/tokens/USAGE.md)**: Comprehensive token system documentation
- **[AI Developer Guide](./.claude/CLAUDE.md)**: Guide for AI coding tools
- **[Contributing Guide](./CONTRIBUTING.md)**: Contribution guidelines
- **[Type Definitions](./packages/types/src/)**: TypeScript type definitions
- **[Design Tokens](./packages/tokens/src/)**: Token source files

## Architecture Details

### 3-Layer Token System

```
┌─────────────────────────────────────────────────────┐
│ Raw Values (원시값)                                  │
│ 1px, #fff, "16px", 400                              │
└─────────────────┬───────────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────────┐
│ Scale Tokens (스케일 토큰)                          │
│ color.primary[500], spacing.lg, fontSize.base       │
└─────────────────┬───────────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────────┐
│ Semantic Tokens (시맨틱 토큰)                       │
│ brand.primary, text.primary, spacing.normal         │
│ ← 실제 컴포넌트에서 사용되는 토큰                    │
└─────────────────────────────────────────────────────┘
```

### Token Examples

```typescript
// Colors
tokens.semantic.color.brand.primary     // #0ea5e9
tokens.semantic.color.text.primary      // #111827
tokens.semantic.color.background.primary // #ffffff
tokens.semantic.color.success           // #22c55e

// Spacing
tokens.semantic.spacing.tight           // 4px
tokens.semantic.spacing.normal          // 16px
tokens.semantic.spacing.relaxed         // 24px

// Typography
tokens.semantic.typography.body.default.fontSize    // 16px
tokens.semantic.typography.heading.h1.fontSize      // 48px
```

## Support

- **GitHub Issues**: https://github.com/hi-design/hi-design-system/issues
- **Discussions**: https://github.com/hi-design/hi-design-system/discussions
- **Documentation**: See `/docs` folder

---

Happy coding! 🚀
