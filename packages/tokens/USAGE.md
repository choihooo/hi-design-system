# HI Design System - Token System Usage Guide

## 🎯 New 3-Layer Architecture

The token system now follows Seed Design's architecture:

```
Raw Values → Scale Tokens → Semantic Tokens
```

---

## 📖 Usage Examples

### **1. Using Semantic Tokens (Recommended)**

```typescript
import { tokens } from '@hi-design/tokens';

// Colors
const buttonStyle = {
  backgroundColor: tokens.semantic.color.brand.primary,
  color: tokens.semantic.color.text.primary,
};

// Spacing
const containerStyle = {
  padding: tokens.semantic.spacing.normal,
  gap: tokens.semantic.spacing.compact,
};

// Typography
const textStyle = {
  fontSize: tokens.semantic.typography.body.default.fontSize,
  fontWeight: tokens.semantic.typography.body.default.fontWeight,
};
```

### **2. Using Scale Tokens**

```typescript
import { tokens } from '@hi-design/tokens';

// Specific color scale
const specialStyle = {
  backgroundColor: tokens.scale.color.primary[500],
  borderColor: tokens.scale.color.neutral[200],
};

// Specific spacing
const gapStyle = {
  gap: tokens.scale.spacing.xl,
};

// Specific typography
const headingStyle = {
  fontSize: tokens.scale.typography.fontSize['2xl'],
};
```

### **3. Runtime Theme Switching**

```typescript
import { tokens, applyTheme, toggleTheme, getCurrentTheme } from '@hi-design/tokens';

// Apply light theme
applyTheme('light');

// Apply dark theme
applyTheme('dark');

// Toggle theme
toggleTheme();

// Check current theme
const currentTheme = getCurrentTheme();
console.log(currentTheme); // 'light' | 'dark'
```

### **4. Custom Theme Override**

```typescript
import { tokens } from '@hi-design/tokens';

// Override primary color
tokens.semantic.color.brand.primary = '#ff6b6b';
tokens.semantic.color.brand.primaryHover = '#ee5a52';

// Override spacing
tokens.semantic.spacing.normal = '20px';

// All components now use the new values!
```

### **5. CSS Variables (Web)**

```typescript
import { injectCSSVars } from '@hi-design/tokens';

// At app initialization
injectCSSVars('light'); // or 'dark'
```

Then in CSS:

```css
.button {
  background-color: var(--brand-primary);
  padding: var(--spacing-normal);
  font-size: var(--font-body);
}

.button:hover {
  background-color: var(--brand-primary-hover);
}
```

### **6. Platform-Specific Values**

```typescript
import { Platform } from 'react-native';
import { tokens } from '@hi-design/tokens';

// Create platform-specific tokens
const platformTokens = {
  ...tokens,
  semantic: {
    ...tokens.semantic,
    spacing: {
      ...tokens.semantic.spacing,
      normal: Platform.OS === 'ios' ? '16px' : '14dp',
    },
  },
};
```

### **7. Component Integration**

```typescript
import { tokens } from '@hi-design/tokens';

export const Button = ({ variant = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: tokens.semantic.color.brand.primary,
      color: tokens.semantic.color.text.inverse,
      padding: tokens.semantic.spacing.button.padding.md.vertical,
    },
    secondary: {
      backgroundColor: tokens.semantic.color.brand.secondary,
      color: tokens.semantic.color.text.inverse,
      padding: tokens.semantic.spacing.button.padding.md.vertical,
    },
  };

  return <button style={styles[variant]}>Click me</button>;
};
```

### **8. TypeScript Support**

```typescript
import type { PrimaryColor } from '@hi-design/tokens';

const getColor = (shade: PrimaryColor) => {
  return tokens.scale.color.primary[shade];
};

// ✅ Type-safe
getColor(500); // OK
getColor('500'); // OK

// ❌ Type error
getColor(999); // Error
```

---

## 🎨 Theme Examples

### **Brand Customization**

```typescript
// Carrot Market theme
const carrotTheme = {
  brand: {
    primary: '#ff6f0f',
    primaryHover: '#e65a00',
    secondary: '#25d366',
  }
};

// Apply to tokens
Object.assign(tokens.semantic.color, carrotTheme);

// Now all components use Carrot colors
< Button /> // backgroundColor: '#ff6f0f'
```

### **Seasonal Themes**

```typescript
const seasonalThemes = {
  spring: {
    brand: {
      primary: '#ffb7b2',
      primaryHover: '#ff9e99',
    }
  },
  summer: {
    brand: {
      primary: '#ff6b6b',
      primaryHover: '#ff5252',
    }
  },
  autumn: {
    brand: {
      primary: '#ffa600',
      primaryHover: '#e69500',
    }
  },
  winter: {
    brand: {
      primary: '#a0c4ff',
      primaryHover: '#8ab4ff',
    }
  },
};

const applySeasonalTheme = (season: keyof typeof seasonalThemes) => {
  Object.assign(tokens.semantic.color.brand, seasonalThemes[season]);
};
```

### **Accessibility (High Contrast)**

```typescript
const highContrastTheme = {
  brand: {
    primary: '#000000',
    primaryHover: '#333333',
  },
  text: {
    primary: '#000000',
    secondary: '#000000',
    disabled: '#666666',
  },
  background: {
    primary: '#ffffff',
    secondary: '#ffffff',
  },
  border: {
    default: '#000000',
    focus: '#000000',
  },
};

if (userPrefersHighContrast) {
  Object.assign(tokens.semantic.color, highContrastTheme);
}
```

---

## 🚀 Advanced Usage

### **Dynamic Theme Provider**

```typescript
import { createContext, useContext, useState } from 'react';
import { tokens, applyTheme } from '@hi-design/tokens';

const ThemeContext = createContext({
  theme: 'light' as 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### **Responsive Spacing**

```typescript
import { tokens } from '@hi-design/tokens';
import { useWindowSize } from './hooks';

const useResponsiveSpacing = () => {
  const { width } = useWindowSize();

  if (width < 640) {
    return tokens.semantic.spacing.compact; // 8px
  } else if (width < 1024) {
    return tokens.semantic.spacing.normal; // 16px
  } else {
    return tokens.semantic.spacing.relaxed; // 24px
  }
};
```

---

## 📦 Migration Guide

### **Before (Old System)**

```typescript
import { colors, spacing, typography } from '@hi-design/tokens';

const style = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  fontSize: typography.fontSizes.base,
};
```

### **After (New System)**

```typescript
import { tokens } from '@hi-design/tokens';

const style = {
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.normal,
  fontSize: tokens.semantic.typography.body.default.fontSize,
};
```

---

## 💡 Best Practices

1. **Use Semantic Tokens**: Prefer `tokens.semantic.*` over direct values
2. **Override at App Level**: Set custom themes once at app initialization
3. **Type Safety**: Leverage TypeScript types for type safety
4. **CSS Variables**: Use CSS variables for web to enable runtime theming
5. **Platform Consistency**: Use scale tokens for platform-specific needs

---

## 🔧 API Reference

### **Tokens Object**

```typescript
const tokens = {
  raw: {
    colors: { blue, purple, gray, green, yellow, red },
    spacing,
    typography,
  },
  scale: {
    color: { primary, secondary, neutral, success, warning, error, info },
    spacing: { none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl },
    radius: { none, sm, md, lg, xl, 2xl, full },
    typography: { fontSize, fontWeight, lineHeight, letterSpacing, fontFamily },
  },
  semantic: {
    color: { brand, text, background, border, shadow },
    spacing: { spacing, button, input, card, modal, list, section, radius },
    typography: { display, heading, body, component },
  },
  dark: {
    color: { ... }, // Dark theme overrides
  },
};
```

### **Theme Functions**

- `applyTheme(theme)`: Apply 'light' or 'dark' theme
- `toggleTheme()`: Toggle between light and dark
- `getCurrentTheme()`: Get current theme ('light' | 'dark')
- `injectCSSVars(theme)`: Inject CSS variables into DOM

---

## 🎉 Summary

The new token system provides:

✅ **3-layer architecture** for better organization
✅ **Runtime theming** without rebuild
✅ **TypeScript support** for type safety
✅ **CSS variables** for web platform
✅ **Backward compatibility** with legacy exports
✅ **Flexible customization** for brands/themes
✅ **Platform consistency** across web, iOS, Android

Start using `tokens.semantic.*` in your components for the best experience! 🚀
