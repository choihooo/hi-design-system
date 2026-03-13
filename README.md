# HI Design System

> AI-friendly cross-platform design system following Seed Design's 3-layer token architecture

[![CI](https://github.com/hi-design-system/hi-design-system/workflows/CI/badge.svg)](https://github.com/hi-design-system/hi-design-system/actions)
[![npm version](https://badge.fury.io/js/@hi-design/react.svg)](https://www.npmjs.com/package/@hi-design/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-2.4.6-blue.svg)](https://biomejs.dev/)

## Overview

HI Design System provides a consistent set of UI components and design tokens that work seamlessly across web, mobile (iOS/Android), and desktop platforms. It's specifically designed to be AI-friendly and follows the proven 3-layer token architecture from [Seed Design](https://www.npmjs.com/package/@seed-design/design-token).

## Features

- 🎨 **3-Layer Token Architecture**: Raw Values → Scale Tokens → Semantic Tokens
- 🤖 **AI-Friendly**: Built with AI assistance in mind
- 📦 **Monorepo**: Managed with pnpm workspaces and Turborepo
- 🎯 **Type-Safe**: Full TypeScript support
- 🎨 **Runtime Theming**: Switch themes without rebuild
- 🌓 **Dark Mode**: Built-in dark mode support
- 🚀 **Modern**: Built with the latest tools and best practices

## Token Architecture

Following [Seed Design's KDT (Kernel Design Token) methodology](https://www.npmjs.com/package/@seed-design/design-token):

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

### Benefits

- **Flexibility**: Override tokens at runtime
- **Clarity**: Semantic names for better readability
- **Type Safety**: TypeScript ensures structure
- **Extensibility**: Easy to add new themes
- **Platform Agnostic**: Same approach across all platforms

## Platforms

- **React (Web)**: Modern web applications with Vite
- **React Native**: iOS and Android mobile apps
- **Flutter**: Cross-platform apps (iOS, Android, Web, Desktop)

## Project Structure

```
hi-design-system/
├── packages/
│   ├── tokens/           # 🎨 3-layer design tokens
│   ├── types/            # 📝 TypeScript type definitions
│   ├── react/            # ⚛️ React web components
│   └── react-native/     # 📱 React Native components
├── apps/
│   ├── react-demo/       # 🌐 React demo application
│   └── rn-demo/          # 📲 React Native demo application
└── flutter/              # 🐦 Flutter package
```

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/hi-design/hi-design-system.git
cd hi-design-system

# Install dependencies
pnpm install
```

### Running Demo Applications

#### React Demo (Web)

```bash
cd apps/react-demo
pnpm dev
```

Open http://localhost:3000 in your browser.

#### React Native Demo

```bash
cd apps/rn-demo
pnpm start
```

Scan the QR code with Expo Go on your mobile device.

#### Flutter Demo

```bash
cd flutter
flutter run
```

## Usage

### Design Tokens

```typescript
import { tokens } from '@hi-design/tokens';

// ✅ Use semantic tokens (recommended)
const buttonStyle = {
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.button.padding.md.vertical,
  fontSize: tokens.semantic.typography.component.button.fontSize,
};

// ✅ Use scale tokens for specific values
const specialStyle = {
  backgroundColor: tokens.scale.color.primary[500],
  borderColor: tokens.scale.color.neutral[200],
};

// ✅ Runtime theme switching
import { applyTheme } from '@hi-design/tokens';

applyTheme('dark');  // Switch to dark mode
applyTheme('light'); // Switch to light mode
```

### React (Web)

```tsx
import { Button, Input, Card, Typography, Modal, Toast } from '@hi-design/react';
import { tokens } from '@hi-design/tokens';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    applyTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div style={{ backgroundColor: tokens.semantic.color.background.primary }}>
      <Typography variant="h1">Welcome</Typography>
      <Button variant="primary" size="md" onPress={() => console.log('Clicked')}>
        Click me
      </Button>
      <Input label="Email" placeholder="Enter your email" />
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}
```

### React Native

```tsx
import { Button, Input, Card, Typography, Modal, Toast } from '@hi-design/react-native';
import { tokens } from '@hi-design/tokens';

function App() {
  return (
    <View style={{ backgroundColor: tokens.semantic.color.background.primary }}>
      <Typography variant="h1">Welcome</Typography>
      <Button variant="primary" size="md" onPress={() => console.log('Clicked')}>
        Click me
      </Button>
      <Input label="Email" placeholder="Enter your email" />
    </View>
  );
}
```

### Flutter

```dart
import 'package:hi_design/hi_design.dart';

// In your widget
HiButton(
  text: 'Click me',
  variant: HiButtonVariant.primary,
  size: HiButtonSize.md,
  onPressed: () => print('Clicked'),
),

HiModal.show(
  context: context,
  title: 'Demo Modal',
  size: HiModalSize.md,
  content: Text('Modal content'),
),

HiToast.success(context, 'Success!'),
```

## Available Components

### Core Components
- **Button**: Interactive button with variants (primary, secondary, ghost, outline)
- **Input**: Text input with label, helper text, and error states
- **Card**: Container with elevation and padding options
- **Typography**: Text component with predefined styles
- **Modal**: Dialog with backdrop and size variants
- **Toast**: Notification with auto-dismiss and variants

### Design Tokens

#### Semantic Tokens (Recommended for Components)

**Colors:**
- `brand.primary`, `brand.secondary` - Brand colors
- `text.primary`, `text.secondary`, `text.disabled` - Text colors
- `background.primary`, `background.secondary` - Background colors
- `border.default`, `border.focus` - Border colors
- `success`, `warning`, `error`, `info` - Semantic colors

**Spacing:**
- `spacing.tight`, `spacing.normal`, `spacing.relaxed` - General spacing
- `button.padding`, `input.padding`, `card.padding` - Component-specific
- `radius.sm`, `radius.md`, `radius.lg` - Border radius

**Typography:**
- `display` - Largest headings
- `heading.h1` - `heading.h6` - Heading styles
- `body.large`, `body.default`, `body.small` - Body text
- `component.button`, `component.link`, `component.caption` - Component text

#### Scale Tokens (For Specific Values)

**Colors:**
- `primary[50-950]` - Blue scale
- `secondary[50-950]` - Purple scale
- `neutral[0-950]` - Gray scale
- `success`, `warning`, `error`, `info` - Semantic colors

**Spacing:**
- `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`

**Typography:**
- `fontSize`: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- `fontWeight`: light, regular, medium, semibold, bold
- `lineHeight`: tight, snug, normal, relaxed, loose

## Theme Customization

### Brand Customization

```typescript
import { tokens } from '@hi-design/tokens';

// Customize brand colors
tokens.semantic.color.brand.primary = '#ff6b6b';
tokens.semantic.color.brand.primaryHover = '#ee5a52';

// All components automatically use new colors
```

### Seasonal Themes

```typescript
const seasonalThemes = {
  spring: { primary: '#ffb7b2' },
  summer: { primary: '#ff6b6b' },
  autumn: { primary: '#ffa600' },
  winter: { primary: '#a0c4ff' },
};

tokens.semantic.color.brand.primary = seasonalThemes[season].primary;
```

### CSS Variables (Web)

```typescript
import { injectCSSVars } from '@hi-design/tokens';

// At app initialization
injectCSSVars('light');
```

```css
.button {
  background-color: var(--brand-primary);
  padding: var(--spacing-normal);
  color: var(--text-primary);
}

.button:hover {
  background-color: var(--brand-primary-hover);
}
```

## Development

### Build Commands

```bash
# Development mode (all packages)
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Package-Specific Commands

```bash
# React package
cd packages/react
pnpm dev       # Watch mode
pnpm build     # Production build

# React Native package
cd packages/react-native
pnpm type-check

# Tokens/Types
cd packages/tokens  # or packages/types
# No build step - TypeScript files are used directly
```

## AI Assistance

This design system is built to be AI-friendly with:

1. **3-Layer Token Architecture**: Clear structure for AI to understand
2. **Consistent Naming**: All components use `Hi` prefix
3. **Semantic Tokens**: Intent-based naming for better AI comprehension
4. **Type Safety**: TypeScript types guide AI implementations
5. **Runtime Customization**: Easy for AI to override themes

For detailed AI prompts and guidelines, see `.claude/CLAUDE.md`.

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[Documentation Home](./docs/)** - Complete documentation index
- **[Quick Start](./docs/get-started/quick-start.md)** - Get started in 5 minutes
- **[Token Architecture](./docs/tokens/architecture.md)** - Understanding the 3-layer token system
- **[Theming Guide](./docs/tokens/theming.md)** - Theme customization
- **[Components](./docs/components/)** - Component documentation
- **[AI Development Guide](./.claude/CLAUDE.md)** - Guide for AI coding tools
- **[Contributing](./CONTRIBUTING.md)** - Contribution guidelines

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## License

MIT License - see LICENSE file for details.

## Roadmap

### ✅ Completed
- [x] 3-layer token architecture
- [x] Core components (Button, Input, Card, Typography)
- [x] Modal and Toast components
- [x] Runtime theme switching
- [x] Dark mode support
- [x] CSS variables export

### 🚧 In Progress
- [ ] Comprehensive documentation
- [ ] Storybook integration
- [ ] Testing infrastructure

### 📋 Planned
- [ ] Tabs component
- [ ] Select/Dropdown component
- [ ] Checkbox & Radio buttons
- [ ] Badge component
- [ ] Progress indicators
- [ ] Animation system
- [ ] Icon library
- [ ] Form validation
- [ ] Data visualization components

## Acknowledgments

Built with inspiration from:
- [Seed Design](https://www.npmjs.com/package/@seed-design/design-token) - Token architecture
- Material Design - Component patterns
- Ant Design - Layout principles
- Tailwind CSS - Utility patterns
- shadcn/ui - Component structure

## Contact

- GitHub: https://github.com/hi-design/hi-design-system
- Issues: https://github.com/hi-design/hi-design-system/issues

---

Made with ❤️ by the HI Design System team
