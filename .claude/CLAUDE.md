# HI Design System - AI Developer Guide

## Overview

HI Design System is an AI-friendly cross-platform design system built for React (web), React Native (iOS/Android), and Flutter. This guide helps AI coding tools understand and work effectively with this codebase.

## Quick Start for AI

When working with this design system:

1. **Naming Convention**: All components use `Hi` prefix (e.g., `HiButton`, `HiInput`)
2. **Platform Consistency**: Same component names and props across React, React Native, and Flutter
3. **3-Layer Token Architecture**: Follow Seed Design's token system (Raw → Scale → Semantic)
4. **Types**: TypeScript types defined in `@hi-design/types` package

## Token System (3-Layer Architecture)

HI Design System follows [Seed Design's KDT methodology](https://www.npmjs.com/package/@seed-design/design-token):

```
Raw Values → Scale Tokens → Semantic Tokens
```

### Layer 1: Raw Values
Base values like `1px`, `#fff`, `"16px"`

### Layer 2: Scale Tokens
Named scales like `color.primary[500]`, `spacing.lg`, `fontSize.base`

### Layer 3: Semantic Tokens (Primary)
Design intent tokens like `brand.primary`, `text.primary`, `spacing.normal`

**IMPORTANT: Always use semantic tokens in components!**

## Project Structure

```
hi-design-system/
├── packages/
│   ├── tokens/          # 3-layer design tokens
│   ├── types/           # TypeScript type definitions
│   ├── react/           # React web components
│   └── react-native/    # React Native components
├── apps/
│   ├── react-demo/      # React demo application
│   └── rn-demo/         # React Native demo application
└── flutter/             # Flutter package (separate project)
```

## Component Creation Guidelines

When creating new components:

### 1. Follow the Pattern
All components should have the same structure across platforms:

```typescript
// React: packages/react/src/components/[ComponentName]/[ComponentName].tsx
// React Native: packages/react-native/src/components/[ComponentName]/[ComponentName].tsx
```

### 2. Use Semantic Design Tokens
Never hardcode design values:

```typescript
// ✅ GOOD - Use semantic tokens
import { tokens } from '@hi-design/tokens';
const style = {
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.normal,
  fontSize: tokens.semantic.typography.body.default.fontSize,
};

// ⚠️ ACCEPTABLE - Use scale tokens for specific needs
import { tokens } from '@hi-design/tokens';
const style = {
  backgroundColor: tokens.scale.color.primary[500],
  padding: tokens.scale.spacing.lg,
};

// ❌ BAD - Never hardcode values
const style = { backgroundColor: '#0ea5e9', padding: 16 };
```

### 3. Define Types First
Always define types in `@hi-design/types` before implementing:

```typescript
// packages/types/src/components.ts
export interface MyComponentProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children?: ReactNode;
}
```

### 4. Add JSDoc Comments
Every component must have documentation:

```typescript
/**
 * @component MyComponent
 * @description Brief description of what this component does
 * @platform React, React Native, Flutter
 * @usage
 * ```tsx
 * <MyComponent variant="primary" size="md">
 *   Content
 * </MyComponent>
 * ```
 */
```

## Common Props Pattern

Most components follow these standard props:

- `variant`: Visual style variant ('primary' | 'secondary' | 'ghost' | 'outline')
- `size`: Size variant ('sm' | 'md' | 'lg')
- `disabled`: Interaction state (boolean)
- `onPress`: Click/tap handler (() => void)
- `children`: Child content (ReactNode)

## Design Token Usage

### Semantic Tokens (Recommended)

```typescript
import { tokens } from '@hi-design/tokens';

// Colors
tokens.semantic.color.brand.primary        // #0ea5e9
tokens.semantic.color.brand.secondary      // #a855f7
tokens.semantic.color.text.primary         // #111827
tokens.semantic.color.text.secondary       // #525252
tokens.semantic.color.background.primary   // #ffffff
tokens.semantic.color.success              // #22c55e
tokens.semantic.color.warning              // #f59e0b
tokens.semantic.color.error                // #ef4444
tokens.semantic.color.info                 // #0ea5e9

// Spacing
tokens.semantic.spacing.tight              // 4px
tokens.semantic.spacing.compact            // 8px
tokens.semantic.spacing.normal             // 16px
tokens.semantic.spacing.relaxed            // 24px
tokens.semantic.spacing.spacious           // 32px

// Component-specific spacing
tokens.semantic.spacing.button.padding.md.vertical
tokens.semantic.spacing.input.padding.md.horizontal
tokens.semantic.spacing.card.padding.md

// Typography
tokens.semantic.typography.display.fontSize
tokens.semantic.typography.heading.h1.fontSize
tokens.semantic.typography.body.default.fontSize
tokens.semantic.typography.component.button.fontSize
```

### Scale Tokens (For Specific Values)

```typescript
import { tokens } from '@hi-design/tokens';

// Color scales
tokens.scale.color.primary[50] through tokens.scale.color.primary[950]
tokens.scale.color.secondary[50] through tokens.scale.color.secondary[950]
tokens.scale.color.neutral[0] through tokens.scale.color.neutral[950]

// Spacing scale
tokens.scale.spacing.none    // 0px
tokens.scale.spacing.xs      // 4px
tokens.scale.spacing.sm      // 8px
tokens.scale.spacing.md      // 12px
tokens.scale.spacing.lg      // 16px
tokens.scale.spacing.xl      // 20px
tokens.scale.spacing['2xl']  // 24px

// Typography scale
tokens.scale.typography.fontSize.xs    // 12px
tokens.scale.typography.fontSize.sm    // 14px
tokens.scale.typography.fontSize.base  // 16px
tokens.scale.typography.fontSize.lg    // 18px
tokens.scale.typography.fontSize.xl    // 20px
```

### Theme Switching

```typescript
import { tokens, applyTheme } from '@hi-design/tokens';

// Apply light theme
applyTheme('light');

// Apply dark theme
applyTheme('dark');

// Toggle theme
import { toggleTheme } from '@hi-design/tokens';
toggleTheme();

// Get current theme
import { getCurrentTheme } from '@hi-design/tokens';
const theme = getCurrentTheme(); // 'light' | 'dark'
```

### CSS Variables (Web)

```typescript
import { injectCSSVars } from '@hi-design/tokens';

// At app initialization
injectCSSVars('light');
```

```css
/* Then in CSS */
.button {
  background-color: var(--brand-primary);
  padding: var(--spacing-normal);
  color: var(--text-primary);
}
```

## Platform-Specific Notes

### React (Web)
- Uses CSS-in-JS or separate CSS files
- Vite for building
- Keyboard navigation support
- Accessibility with ARIA attributes
- Portal rendering for modals
- CSS variables support

### React Native
- Uses StyleSheet for styling
- Platform-specific components when needed (Platform.OS)
- Touchable handling for mobile interactions
- Native accessibility props
- Animated API for animations

### Flutter
- Uses Dart language
- Material Design foundation
- Custom widgets with Hi prefix
- pub.dev package structure
- MediaQuery for responsive design

## Testing Requirements

All components must have:

1. **Unit Tests**: Test core functionality
2. **Visual Tests**: Storybook stories or screenshots
3. **Accessibility Tests**: ARIA labels, keyboard navigation
4. **Type Tests**: TypeScript type checking
5. **Theme Tests**: Light and dark mode

## Build Commands

```bash
# Install dependencies
pnpm install

# Development (all packages)
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

## Common Tasks

### Adding a New Component
```
Create a [ComponentName] component following HI Design System guidelines:
- Add types to packages/types/src/components.ts
- Create React version in packages/react/src/components/[ComponentName]/
- Create React Native version in packages/react-native/src/components/[ComponentName]/
- Use semantic tokens from @hi-design/tokens
- Follow the naming convention (Hi prefix)
- Add JSDoc documentation
- Include variant, size, and disabled props
- Implement theme support (light/dark)
- Add examples to demo apps
```

### Adding a New Variant
```
Add [variant-name] variant to [ComponentName]:
- Update type definition in packages/types
- Implement in packages/react/src/components/[ComponentName]/
- Implement in packages/react-native/src/components/[ComponentName]/
- Update design tokens if needed
- Add example in demo apps
- Test in both light and dark themes
```

### Updating Design Tokens
```
Update [token-name] in packages/tokens/src/[token-category].ts:
- Update raw values if needed
- Update scale tokens if needed
- Update semantic tokens
- Ensure backward compatibility
- Test across all platforms
- Update documentation
```

### Theme Customization
```
Customize theme for [brand/context]:
- Override semantic tokens at app initialization
- Use Object.assign to merge custom tokens
- Test all components with new theme
- Document custom theme values
- Consider creating theme preset
```

## Best Practices

1. **Semantic Tokens First**: Always prefer semantic tokens over scale tokens
2. **Type Safety**: Use TypeScript strictly, avoid `any`
3. **Accessibility**: Always consider a11y from the start
4. **Performance**: Lazy load components, use React.memo when needed
5. **Documentation**: Document everything - code is read more than written
6. **Testing**: Test on real devices, not just emulators
7. **Theme Support**: Ensure components work in both light and dark modes
8. **Runtime Overrides**: Design tokens to be overridable at runtime

## AI Prompt Templates

### Creating a New Component
```
Create a [ComponentName] component following HI Design System guidelines:
- Add types to packages/types/src/components.ts
- Create React version in packages/react/src/components/[ComponentName]/
- Create React Native version in packages/react-native/src/components/[ComponentName]/
- Use semantic tokens from @hi-design/tokens (e.g., tokens.semantic.color.brand.primary)
- Follow the naming convention (Hi prefix)
- Add JSDoc documentation
- Include variant, size, and disabled props
- Implement theme support
```

### Adding Theme Support
```
Add theme support to [ComponentName]:
- Import tokens from @hi-design/tokens
- Use tokens.semantic.color.* for colors
- Use tokens.semantic.spacing.* for spacing
- Use tokens.semantic.typography.* for typography
- Ensure component works in both light and dark modes
- Test theme switching
```

### Customizing Theme
```
Customize theme for [brand/context]:
- Override tokens.semantic.color.brand.* with custom colors
- Override tokens.semantic.spacing.* if needed
- Apply at app initialization using Object.assign
- Test all components with new theme
- Document custom theme values
```

## Debugging Token Issues

If tokens aren't working:

1. **Check Import**: `import { tokens } from '@hi-design/tokens'`
2. **Verify Path**: Use `tokens.semantic.color.brand.primary` not `tokens.semantic.color.brandPrimary`
3. **Theme Applied**: Call `applyTheme('light')` or `applyTheme('dark')`
4. **Type Check**: Run `pnpm type-check` in tokens package
5. **Rebuild**: Run `pnpm build` after token changes

## Resources

- Design Tokens: `packages/tokens/`
- Type Definitions: `packages/types/`
- React Components: `packages/react/src/components/`
- React Native Components: `packages/react-native/src/components/`
- Flutter Widgets: `flutter/lib/hi_design/widgets/`
- Demo Apps: `apps/react-demo/`, `apps/rn-demo/`
- Token Usage: `packages/tokens/USAGE.md`
- Getting Started: `getting-started.md`

## Architecture Decisions

### Why 3-Layer Token System?

1. **Flexibility**: Override tokens at runtime without rebuild
2. **Clarity**: Semantic names express design intent
3. **Maintainability**: Changes propagate automatically
4. **Scalability**: Easy to add new themes
5. **Platform Independence**: Same structure across all platforms

### Token Selection Guidelines

- **Use Semantic Tokens** for: Component styling, theming, design intent
- **Use Scale Tokens** for: Specific color shades, precise spacing needs
- **Never Use Raw Values** directly in components

## Examples

### Button with Theme Support

```typescript
import { tokens } from '@hi-design/tokens';

export const Button = ({ variant = 'primary' }) => {
  const baseStyle = {
    padding: tokens.semantic.spacing.button.padding.md.vertical,
    fontSize: tokens.semantic.typography.component.button.fontSize,
  };

  const variants = {
    primary: {
      backgroundColor: tokens.semantic.color.brand.primary,
      color: tokens.semantic.color.text.inverse,
    },
    secondary: {
      backgroundColor: tokens.semantic.color.brand.secondary,
      color: tokens.semantic.color.text.inverse,
    },
  };

  return <button style={{ ...baseStyle, ...variants[variant] }}>Click</button>;
};
```

### Custom Theme Application

```typescript
import { tokens } from '@hi-design/tokens';

// At app initialization
const customTheme = {
  brand: {
    primary: '#ff6b6b',
    primaryHover: '#ee5a52',
  }
};

Object.assign(tokens.semantic.color.brand, customTheme.brand);

// All components now use custom colors
```

## Success Criteria

A component is complete when:

- ✅ Uses semantic tokens
- ✅ Works in light and dark themes
- ✅ Has TypeScript types
- ✅ Includes JSDoc documentation
- ✅ Has examples in demo apps
- ✅ Tested on real devices
- ✅ Accessible (keyboard, screen reader)
- ✅ Follows naming conventions
- ✅ Consistent across platforms

---

**Remember**: Always use semantic tokens (`tokens.semantic.*`) for the best developer experience and theme support! 🚀
