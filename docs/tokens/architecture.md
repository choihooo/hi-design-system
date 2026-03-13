# Token Architecture

HI Design System follows [Seed Design's 3-layer architecture](https://www.npmjs.com/package/@seed-design/design-token) for maximum flexibility and maintainability.

## Overview

```
┌─────────────────────────────────────────────────────┐
│ Layer 1: Raw Values                                 │
│ 1px, #fff, "16px", 400                              │
└─────────────────┬───────────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────────┐
│ Layer 2: Scale Tokens                               │
│ color.primary[500], spacing.lg, fontSize.base       │
└─────────────────┬───────────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────────┐
│ Layer 3: Semantic Tokens                           │
│ brand.primary, text.primary, spacing.normal         │
│ ← USE THIS IN COMPONENTS                           │
└─────────────────────────────────────────────────────┘
```

## Layer 1: Raw Values

Base values that represent actual output.

```typescript
// Examples
'1px'          // Size
'#0ea5e9'       // Color
'16px'         // Font size
'400'          // Font weight
```

**Characteristics:**
- Platform-specific (px vs dp vs sp)
- Direct output values
- No semantic meaning

## Layer 2: Scale Tokens

Named scales that provide platform-agnostic references.

```typescript
import { tokens } from '@hi-design/tokens';

// Color scales
tokens.scale.color.primary[500]    // '#0ea5e9'
tokens.scale.color.neutral[200]   // '#e5e5e5'

// Spacing scale
tokens.scale.spacing.lg            // '16px'
tokens.scale.spacing.xl            // '20px'

// Typography scale
tokens.scale.typography.fontSize.base  // '16px'
tokens.scale.typography.fontWeight.regular  // '400'
```

**Characteristics:**
- Named references to raw values
- Platform-agnostic names
- Still tied to specific values

## Layer 3: Semantic Tokens (Primary)

Design intent tokens that express purpose, not value.

```typescript
import { tokens } from '@hi-design/tokens';

// ✅ USE THIS IN COMPONENTS
tokens.semantic.color.brand.primary        // '#0ea5e9'
tokens.semantic.color.text.primary         // '#111827'
tokens.semantic.color.background.primary   // '#ffffff'
tokens.semantic.color.success              // '#22c55e'

tokens.semantic.spacing.normal             // '16px'
tokens.semantic.spacing.button.padding.md.vertical  // '12px'

tokens.semantic.typography.body.default.fontSize     // '16px'
tokens.semantic.typography.heading.h1.fontSize       // '48px'
```

**Characteristics:**
- Express design intent
- Can be overridden at runtime
- Used in all components

## Usage Guidelines

### ✅ DO: Use Semantic Tokens

```typescript
// Recommended
const style = {
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.normal,
  fontSize: tokens.semantic.typography.body.default.fontSize,
};
```

### ⚠️ ACCEPTABLE: Use Scale Tokens

```typescript
// When you need a specific shade
const style = {
  backgroundColor: tokens.scale.color.primary[500],
  borderColor: tokens.scale.color.neutral[200],
};
```

### ❌ DON'T: Use Raw Values

```typescript
// Never hardcode values
const style = {
  backgroundColor: '#0ea5e9',
  padding: '16px',
};
```

## Theme Customization

### Override at Runtime

```typescript
import { tokens } from '@hi-design/tokens';

// Change brand color
tokens.semantic.color.brand.primary = '#ff6b6b';

// All components now use the new color!
```

### Theme Switching

```typescript
import { applyTheme, toggleTheme } from '@hi-design/tokens';

// Apply theme
applyTheme('dark');

// Toggle theme
toggleTheme();
```

## Benefits

### 1. Flexibility
- Override tokens without rebuild
- Easy theming
- Runtime customization

### 2. Clarity
- Semantic names express intent
- Self-documenting code
- Better developer experience

### 3. Maintainability
- Changes propagate automatically
- Single source of truth
- Consistent across platforms

### 4. Scalability
- Easy to add new themes
- Support multiple brands
- Platform-specific overrides

## Examples

### Component with Semantic Tokens

```typescript
import { tokens } from '@hi-design/tokens';

export const Button = () => {
  return (
    <button style={{
      backgroundColor: tokens.semantic.color.brand.primary,
      padding: tokens.semantic.spacing.button.padding.md.vertical,
      fontSize: tokens.semantic.typography.component.button.fontSize,
    }}>
      Click Me
    </button>
  );
};
```

### Custom Theme

```typescript
import { tokens } from '@hi-design/tokens';

const darkTheme = {
  brand: {
    primary: '#38bdf8',
  },
  text: {
    primary: '#f9fafb',
  },
  background: {
    primary: '#111827',
  },
};

Object.assign(tokens.semantic.color, darkTheme);
```

## See Also

- [Colors](colors.md) - Color token reference
- [Spacing](spacing.md) - Spacing token reference
- [Typography](typography.md) - Typography token reference
- [Theming](theming.md) - Theme customization guide
