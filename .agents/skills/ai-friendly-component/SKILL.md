---
name: ai-friendly-component
description: Create React components that achieve 90+ AI-friendliness scores. Use this skill when creating new components, refactoring existing components for better AI understanding, or when the user mentions "AI-friendly", "AI score", "code simplification", "component optimization", or wants to make components that AI coding tools can easily understand and work with. This skill is essential for component library development, design system work, or any project where AI code generation and comprehension is important.
---

# AI-Friendly Component Creator

Create React components that achieve 90+ AI-friendliness scores by following proven optimization patterns that improved code quality from 27/100 to 91/100.

## Core Principles

### 1. Code Simplicity (Most Important)
- **Target**: Keep components under 150 lines (preferably under 100 lines)
- **Impact**: Code length reduction has the highest correlation with AI score improvement
- **Evidence**: Button component 171→87 lines achieved perfect 100/100 score
- **Practice**: Remove all non-essential functionality and documentation

### 2. Essential Documentation Only
- **Keep**: Brief @usage examples (5-10 lines max)
- **Remove**: Detailed explanations, best practices, extensive examples
- **Focus**: Let code speak for itself
- **Target**: Under 20 lines of documentation total

### 3. Clear Composition Patterns
- **Pattern**: Complex = Primitive Composition
- **Example**: Button = Pressable + Text + Icon
- **Benefit**: AI can understand component structure at a glance
- **Implementation**: Extract helper functions, use clear component composition

### 4. Strong Type Safety
- **Required**: forwardRef with proper generics
- **Required**: Strict TypeScript interfaces from @hi-design/types
- **Required**: No `any` types
- **Benefit**: Improves code quality score significantly

## Component Creation Process

### Step 1: Design Phase
```
1. Identify component purpose (single responsibility)
2. List required props (keep minimal)
3. Plan primitive composition (what primitives to use)
4. Define helper functions (extract complex logic)
```

### Step 2: Implementation Phase
```typescript
/**
 * ComponentName - Brief description
 *
 * @usage
 * <ComponentName prop="value" onPress={handler}>
 *   Content
 * </ComponentName>
 */

import type { ComponentNameProps } from '@hi-design/types'
import { Pressable } from '@hi-design/primitives'
import { Text } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef } from 'react'

// Helper function for className generation
const getComponentClass = (props: {
  variant: string
  size: string
  disabled: boolean
  className?: string
}) => clsx(
  'component',
  `component--${props.variant}`,
  `component--${props.size}`,
  props.disabled && 'component--disabled',
  props.className,
)

export const ComponentName = forwardRef<HTMLButtonElement, ComponentNameProps>(
  ({ variant = 'primary', size = 'md', disabled = false, onPress, className, children, testID, ...rest }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={getComponentClass({ variant, size, disabled, className })}
        disabled={disabled}
        onPress={onPress}
        testID={testID}
        {...rest}
      >
        <Text variant="button">{children}</Text>
      </Pressable>
    )
  },
)

ComponentName.displayName = 'ComponentName'

export default ComponentName
```

### Step 3: Optimization Phase
```
1. Count lines: If > 150, consider splitting
2. Count documentation: If > 20 lines, remove non-essential
3. Check for primitive composition: Should use primitives
4. Verify types: All props should be strongly typed
5. Test AI score: Should achieve 90+ points
```

## Score Impact Analysis

### What Increases Score
- **Code length < 100 lines**: +10-15 points
- **Helper functions**: +5-10 points
- **Primitive composition**: +5-10 points
- **Strong typing (forwardRef + generics)**: +5-10 points
- **Essential docs only**: +5-10 points

### What Decreases Score
- **Excessive documentation (>30 lines)**: -10-20 points
- **Long components (>200 lines)**: -15-25 points
- **Missing types**: -10-15 points
- **Complex inline logic**: -10-15 points

## Proven Results

### Button Component
- **Before**: 171 lines, 27/100 score
- **After**: 87 lines (-49%), 100/100 score
- **Key changes**: Removed 80+ lines of docs, extracted helper function

### Card Component
- **Before**: 236 lines, 20/100 score
- **After**: 69 lines (-71%), 98/100 score
- **Key changes**: Removed 100+ lines of docs, simplified composition

### Input Component
- **Before**: 292 lines, 31/100 score
- **After**: 137 lines (-53%), 94/100 score
- **Key changes**: Extracted custom hook, removed excessive docs

## Common Patterns

### Helper Function Pattern
```typescript
// Extract complex className logic
const getButtonClass = (props: {
  variant: string
  size: string
  disabled: boolean
  className?: string
}) => clsx(
  'button',
  `button--${variant}`,
  `button--${size}`,
  disabled && 'button--disabled',
  className,
)
```

### Custom Hook Pattern
```typescript
// Extract state logic
const useInputState = (value: string | undefined, defaultValue: string | undefined) => {
  const [internalValue, setInternalValue] = useState(() => defaultValue || '')
  const isControlled = value !== undefined
  return {
    value: isControlled ? value : internalValue,
    setValue: (newValue: string) => {
      if (!isControlled) setInternalValue(newValue)
    },
  }
}
```

### Minimal Documentation Pattern
```typescript
/**
 * Component - Brief single-line description
 *
 * @usage
 * <Component prop="value">
 *   Content
 * </Component>
 */
```

## Quality Checklist

Before considering a component complete, verify:

- [ ] Component under 150 lines (preferably under 100)
- [ ] Documentation under 20 lines
- [ ] Uses forwardRef with proper generics
- [ ] All props strongly typed
- [ ] Uses primitive composition (Pressable, Text, Box, etc.)
- [ ] Helper functions extracted for complex logic
- [ ] No inline complex logic
- [ ] Minimal prop interface (essential props only)
- [ ] Proper displayName set
- [ ] Default exports consistent

## When to Use This Skill

Use this skill when:
- Creating new React components
- Refactoring existing components for better AI understanding
- Working on component libraries or design systems
- User mentions "AI-friendly", "code simplification", "AI score"
- Building components that need to work well with AI coding tools
- Optimizing components for better maintainability

## Red Flags to Avoid

❌ **Don't do this**:
- Write extensive documentation (>30 lines)
- Create components over 200 lines
- Use complex inline logic
- Skip TypeScript types
- Ignore primitive composition patterns

✅ **Do this instead**:
- Keep documentation minimal (5-10 lines)
- Target under 100 lines per component
- Extract helper functions
- Use strict TypeScript typing
- Compose from primitives

## Testing AI Score

After creating a component, verify AI-friendliness:

```bash
# Check line count
wc -l Component.tsx

# Should output: < 100 Component.tsx
```

Expected scores for properly implemented components:
- Simple components (Button, Card): 95-100/100
- Medium components (Input): 90-95/100
- Complex components (Modal, Toast): 85-90/100

## Success Criteria

A component is AI-friendly when:
- ✅ Line count < 100
- ✅ Documentation < 20 lines
- ✅ Uses primitive composition
- ✅ Strong TypeScript typing
- ✅ Helper functions for complex logic
- ✅ AI score > 90/100
