# HI Design System Documentation

Welcome to the HI Design System documentation. This documentation is organized to help you quickly find what you need.

## 📚 Documentation Structure

```
docs/
├── README.md                  # This file - Documentation overview
├── get-started/              # Getting started guides
│   ├── installation.md       # Installation & setup
│   ├── quick-start.md        # Quick start guide
│   └── platform-setup.md     # Platform-specific setup
├── tokens/                   # Design tokens documentation
│   ├── architecture.md       # 3-layer token architecture
│   ├── colors.md             # Color tokens
│   ├── spacing.md            # Spacing tokens
│   ├── typography.md         # Typography tokens
│   ├── theming.md            # Theme customization
│   └── css-variables.md      # CSS variables reference
├── components/               # Component documentation
│   ├── button.md             # Button component
│   ├── icons.md              # Icon usage and platform mapping
│   ├── input.md              # Input component
│   ├── card.md               # Card component
│   ├── typography.md         # Typography component
│   ├── modal.md              # Modal component
│   └── toast.md              # Toast component
├── development/              # Development guides
│   ├── creating-components.md # Creating new components
│   ├── testing.md            # Testing guidelines
│   ├── build-deploy.md       # Build & deployment
│   └── monorepo.md           # Monorepo guidelines
├── guides/                   # Specialized guides
│   ├── ai-development.md     # AI-assisted development
│   ├── accessibility.md      # Accessibility guidelines
│   ├── migration.md          # Migration guide
│   └── best-practices.md     # Best practices
└── api/                      # API reference
    ├── tokens.md             # Token API reference
    ├── react.md              # React components API
    ├── react-native.md       # React Native components API
    └── flutter.md            # Flutter widgets API
```

## 🚀 Quick Navigation

### For New Users
- [Installation Guide](get-started/installation.md) - Set up the design system
- [Quick Start](get-started/quick-start.md) - Get started in 5 minutes
- [Token Architecture](tokens/architecture.md) - Understand the token system

### For Component Users
- [Button](components/button.md) - Button component documentation
- [Icons](components/icons.md) - Icon usage and platform mapping
- [Input](components/input.md) - Input component documentation
- [Modal](components/modal.md) - Modal component documentation
- [Toast](components/toast.md) - Toast component documentation

### For Designers
- [Color Tokens](tokens/colors.md) - Color system
- [Typography Tokens](tokens/typography.md) - Typography system
- [Theming](tokens/theming.md) - Custom themes

### For Developers
- [Creating Components](development/creating-components.md) - Build new components
- [Testing](development/testing.md) - Testing guidelines
- [API Reference](api/) - Complete API documentation

### For AI Tools
- [AI Development Guide](guides/ai-development.md) - AI-assisted development
- [Best Practices](guides/best-practices.md) - Recommended patterns

## 📖 Reading Order

If you're new to HI Design System, we recommend reading in this order:

1. [Installation](get-started/installation.md)
2. [Quick Start](get-started/quick-start.md)
3. [Token Architecture](tokens/architecture.md) - **Important!**
4. [Theming](tokens/theming.md)
5. [Component Documentation](components/) - Components you want to use

## 🔍 Search Tips

### Looking for something specific?

- **"How do I change colors?"** → [Theming](tokens/theming.md)
- **"How do I create a component?"** → [Creating Components](development/creating-components.md)
- **"What tokens are available?"** → [Token API](api/tokens.md)
- **"How do I use dark mode?"** → [Theming](tokens/theming.md#dark-mode)
- **"Component examples?"** → [Component Documentation](components/)

## 🎯 Key Concepts

### 3-Layer Token Architecture

HI Design System follows Seed Design's architecture:

```
Raw Values → Scale Tokens → Semantic Tokens
```

- **Raw Values**: Base values (`1px`, `#fff`)
- **Scale Tokens**: Named scales (`color.primary[500]`, `spacing.lg`)
- **Semantic Tokens**: Design intent (`brand.primary`, `text.primary`)

**Always use semantic tokens in components!**

Learn more: [Token Architecture](tokens/architecture.md)

## 💡 Conventions

### Naming
- Components use `Hi` prefix (Flutter) or PascalCase (React/RN)
- Tokens use camelCase
- CSS variables use kebab-case

### File Organization
- Each component has its own documentation
- Code examples are provided in all supported languages
- API references include TypeScript types

## 🤝 Contributing

Found an issue with the documentation? Please:

1. Check for existing issues
2. Create a new issue with `documentation` label
3. Or submit a PR with improvements

See [Contributing Guide](../CONTRIBUTING.md) for details.

## 📞 Support

- **GitHub Issues**: [Report issues](https://github.com/hi-design/hi-design-system/issues)
- **Discussions**: [Ask questions](https://github.com/hi-design/hi-design-system/discussions)
- **Examples**: Check demo applications in `/apps`

---

**Last Updated**: 2026-03-13
**Version**: 0.0.1
