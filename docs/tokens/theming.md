# Theming Guide

Customize HI Design System to match your brand or create multiple themes.

## Quick Start

### Basic Theme Override

```typescript
import { tokens } from '@hi-design/tokens';

// Override brand colors
tokens.semantic.color.brand.primary = '#ff6b6b';
tokens.semantic.color.brand.primaryHover = '#ee5a52';

// All components now use your brand color!
```

## Theme Switching

### Light/Dark Mode

```typescript
import { applyTheme, toggleTheme } from '@hi-design/tokens';

// Apply light theme
applyTheme('light');

// Apply dark theme
applyTheme('dark');

// Toggle theme
toggleTheme();
```

### Check Current Theme

```typescript
import { getCurrentTheme } from '@hi-design/tokens';

const theme = getCurrentTheme(); // 'light' | 'dark'
```

## Custom Themes

### Brand Theme

```typescript
import { tokens } from '@hi-design/tokens';

const brandTheme = {
  brand: {
    primary: '#ff6f0f',        // Carrot orange
    primaryHover: '#e65a00',
    primaryActive: '#cc5200',
    secondary: '#25d366',      // Carrot green
    secondaryHover: '#20bd5a',
  }
};

Object.assign(tokens.semantic.color.brand, brandTheme.brand);
```

### Seasonal Theme

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

// Apply seasonal theme
tokens.semantic.color.brand.primary = seasonalThemes.spring.brand.primary;
```

### High Contrast Theme

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

Object.assign(tokens.semantic.color, highContrastTheme);
```

## CSS Variables (Web)

### Inject CSS Variables

```typescript
import { injectCSSVars } from '@hi-design/tokens';

// At app initialization
injectCSSVars('light');
```

### Use in CSS

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

### Available CSS Variables

```css
/* Brand Colors */
--brand-primary
--brand-primary-hover
--brand-secondary

/* Text Colors */
--text-primary
--text-secondary
--text-disabled

/* Background Colors */
--bg-primary
--bg-secondary

/* Border Colors */
--border-default
--border-focus

/* Semantic Colors */
--color-success
--color-warning
--color-error
--color-info

/* Spacing */
--spacing-normal
--spacing-relaxed

/* Typography */
--font-body
--font-button
```

## Responsive Theming

```typescript
import { tokens } from '@hi-design/tokens';
import { useWindowSize } from './hooks';

const useResponsiveTheme = () => {
  const { width } = useWindowSize();

  if (width < 640) {
    // Mobile: tighter spacing
    return {
      spacing: tokens.semantic.spacing.compact,
    };
  } else if (width < 1024) {
    // Tablet: normal spacing
    return {
      spacing: tokens.semantic.spacing.normal,
    };
  } else {
    // Desktop: relaxed spacing
    return {
      spacing: tokens.semantic.spacing.relaxed,
    };
  }
};
```

## Platform-Specific Themes

### React Native

```typescript
import { Platform } from 'react-native';
import { tokens } from '@hi-design/tokens';

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

## Theme Presets

### Create Reusable Presets

```typescript
// themes/presets.ts
import { tokens } from '@hi-design/tokens';

export const themes = {
  light: {
    brand: {
      primary: '#0ea5e9',
      secondary: '#a855f7',
    },
  },
  dark: {
    brand: {
      primary: '#38bdf8',
      secondary: '#c084fc',
    },
  },
  custom: {
    brand: {
      primary: '#ff6b6b',
      secondary: '#25d366',
    },
  },
};

export const applyTheme = (theme: keyof typeof themes) => {
  Object.assign(tokens.semantic.color.brand, themes[theme].brand);
};

// Usage
import { applyTheme } from './themes/presets';
applyTheme('custom');
```

## Advanced Usage

### Theme Context Provider

```typescript
import { createContext, useContext, useState } from 'react';
import { tokens, applyTheme } from '@hi-design/tokens';

const ThemeContext = createContext({
  theme: 'light' as 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('light');

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

### Dynamic Theme Updates

```typescript
import { tokens } from '@hi-design/tokens';

// Fetch theme from API
const fetchTheme = async () => {
  const response = await fetch('/api/theme');
  const theme = await response.json();

  Object.assign(tokens.semantic.color.brand, theme.brand);
  Object.assign(tokens.semantic.spacing, theme.spacing);
};
```

## Best Practices

### ✅ DO

- Use semantic tokens for theming
- Apply theme at app initialization
- Test in both light and dark modes
- Document custom theme values
- Use type-safe theme presets

### ❌ DON'T

- Hardcode theme values in components
- Override scale tokens directly
- Mix multiple themes without clear structure
- Forget to test accessibility

## See Also

- [Token Architecture](architecture.md) - Understanding the token system
- [Colors](colors.md) - Color token reference
- [CSS Variables](css-variables.md) - CSS variables guide
