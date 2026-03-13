# @hi-design/utils

## 0.1.0

### Minor Changes

- db9160e: 🎉 Initial release of HI Design System

  This is the first public release of HI Design System, an AI-friendly cross-platform design system.

  ## Features

  ### Core Components

  - Button - Interactive button with variants (primary, secondary, ghost, outline)
  - Input - Text input with label, helper text, and error states
  - Card - Container with elevation and padding options
  - Typography - Text component with predefined styles (h1-h6, body, caption)
  - Modal - Dialog with backdrop and size variants
  - Toast - Notification with auto-dismiss and variants

  ### Design Tokens

  - 3-layer token architecture (Raw → Scale → Semantic)
  - Color tokens with light/dark mode support
  - Typography tokens (font sizes, weights, line heights)
  - Spacing tokens (tight, compact, normal, relaxed, spacious)
  - CSS Variables for runtime theming

  ### Developer Experience

  - Full TypeScript support
  - shadcn/ui style className prop for customization
  - Comprehensive testing (96 tests passing)
  - Accessibility (WCAG 2.1 AA compliant)
  - Biome for linting and formatting

  ### Cross-Platform

  - React (Web) components
  - React Native components (iOS/Android)
  - Flutter support (separate package)

  ### Documentation

  - Getting started guides
  - Component API documentation
  - Design principles
  - Accessibility guidelines
  - Contributing guide

  ## Installation

  \`\`\`bash
  npm install @hi-design/react @hi-design/tokens
  \`\`\`

  ## Usage

  \`\`\`tsx
  import { Button, Input, Card } from '@hi-design/react'
  import '@hi-design/tokens/global.css'

  function App() {
  return (
  <Card elevation="lg" padding="xl">
  <Typography variant="h3">Welcome</Typography>
  <Button variant="primary">Get Started</Button>
  </Card>
  )
  }
  \`\`\`

  ## License

  MIT

  ## Links

  - GitHub: https://github.com/choihooo/hi-design-system
  - Documentation: https://github.com/choihooo/hi-design-system/tree/main/docs
  - Report Issues: https://github.com/choihooo/hi-design-system/issues
