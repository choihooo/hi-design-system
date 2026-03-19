# Contributing to HI Design System

Thank you for your interest in contributing to HI Design System! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Standards](#documentation-standards)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive community.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Flutter SDK (for Flutter contributions)
- Git

### Initial Setup

```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/hi-design-system.git
cd hi-design-system

# Install dependencies
pnpm install

# Set up git hooks (optional)
pnpm run setup:hooks
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

- Follow the coding standards (see below)
- Test your changes thoroughly
- Update documentation as needed

### 3. Commit Your Changes

```bash
git add .
git commit -m "feat: add new component"
# or
git commit -m "fix: correct button padding"
```

#### Commit Message Convention

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 4. Test Your Changes

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Build
pnpm build

# Test
pnpm test
```

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Avoid `any` type - use proper types or `unknown`
- Use functional components and hooks
- Follow the existing code style

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, onPress }) => {
  return <button onClick={onPress}>{/* ... */}</button>;
};

// ❌ Bad
export const Button = (props: any) => {
  return <button>{/* ... */}</button>;
};
```

### Naming Conventions

- **Components**: PascalCase (e.g., `MyComponent`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_COUNT`)
- **Types/Interfaces**: PascalCase (e.g., `ButtonProps`)
- **Files**: PascalCase for components (e.g., `Button.tsx`)

### Imports

```typescript
// 1. React and core libraries
import React from 'react';

// 2. Third-party libraries
import { useLocation } from 'react-router-dom';

// 3. Internal imports
import { Button } from '@hi-design/react';
import { colors } from '@hi-design/tokens';
```

## Component Guidelines

### 1. Component Structure

```typescript
/**
 * @component ComponentName
 * @description Brief description of what this component does
 * @platform React, React Native, Flutter
 * @usage
 * ```tsx
 * <ComponentName prop="value">
 *   Content
 * </ComponentName>
 * ```
 */
import { forwardRef } from 'react';
import type { ComponentProps } from '@hi-design/types';

export const ComponentName = forwardRef<HTMLDivElement, ComponentProps>(
  ({ prop, children, ...rest }, ref) => {
    // Component logic
    return <div ref={ref} {...rest}>{children}</div>;
  }
);

ComponentName.displayName = 'ComponentName';
```

### 2. Use Design Tokens

```typescript
// ✅ Good
import { colors, spacing } from '@hi-design/tokens';
const style = {
  color: colors.primary[500],
  padding: spacing.md,
};

// ❌ Bad
const style = {
  color: '#0ea5e9',
  padding: 16,
};
```

### 3. Cross-Platform Consistency

- Keep the same API across platforms
- Use the same prop names
- Maintain similar behavior

## Testing Guidelines

### Unit Tests

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onPress when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onPress={handleClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Requirements

1. **Unit Tests**: Test component logic
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Test a11y features
4. **Visual Tests**: Storybook for React

## Documentation Standards

### 1. JSDoc Comments

Every component must have JSDoc:

```typescript
/**
 * @component Button
 * @description Interactive button with multiple variants
 * @platform React, React Native, Flutter
 * @usage
 * ```tsx
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 * ```
 *
 * @param variant - Visual style variant
 * @param size - Size variant
 * @param onPress - Click handler
 */
```

### 2. Type Definitions

```typescript
/**
 * Button component props
 */
export interface ButtonProps {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';

  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Click/tap handler
   */
  onPress?: () => void;
}
```

### 3. Examples

Provide usage examples for each platform:

```typescript
// React (Web)
<Button variant="primary" onPress={handleClick}>
  Click me
</Button>

// React Native
<Button variant="primary" onPress={handleClick}>
  Click me
</Button>

// Flutter
HiButton(
  text: 'Click me',
  variant: HiButtonVariant.primary,
  onPressed: handleClick,
)
```

## Pull Request Process

### ⚠️ Important: Merge Requirements

**All PRs MUST meet these requirements before merging:**

#### Quality Gates (Automatically Enforced)
- ✅ **CI / Lint** - Code linting must pass
- ✅ **CI / Type Check** - TypeScript type checking must pass
- ✅ **CI / Test** - Unit tests must pass with **80%+ coverage**
- ✅ **CI / Build** - Build must succeed
- ✅ **E2E Tests** - End-to-end tests must pass
- ✅ **Code Quality Analysis** - No critical complexity issues
- ✅ **Commit Lint** - All commits follow Conventional Commits
- ✅ **Security Scans** - No critical vulnerabilities

#### Review Requirements
- 👥 **1+ maintainer approval** required
- 💬 **All conversations resolved**
- 🔄 **Branch up-to-date** with target

#### Merge Method
- **Squash and merge** preferred (clean history)
- ❌ Merge commits not allowed

See [`.github/MERGE_RULES.md`](./.github/MERGE_RULES.md) for detailed merge rules.

### 1. Before Creating PR

- [ ] Code follows style guidelines
- [ ] Changes are tested
- [ ] Documentation is updated
- [ ] Commit messages follow convention
- [ ] PR description is clear

### 2. PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-platform tested (if applicable)

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] All tests pass
```

### 3. Review Process

1. Automated checks must pass
2. At least one maintainer approval required
3. Address review comments
4. Squash commits if requested

### 4. Merge

- Maintainer will merge after approval
- Changeset will be created for versioning
- Changes will be included in next release

## Release Process

Maintainers handle releases using Changesets:

```bash
# Add changeset for your PR
pnpm changeset

# Version packages (maintainer only)
pnpm version-packages

# Publish (maintainer only)
pnpm release
```

## Community Guidelines

### Questions and Discussions

- Use GitHub Discussions for questions
- Check existing issues before creating new ones
- Be patient with volunteer maintainers

### Reporting Issues

- Use issue templates
- Provide reproduction steps
- Include environment details
- Add screenshots for UI issues

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in significant features

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to HI Design System! 🎉
