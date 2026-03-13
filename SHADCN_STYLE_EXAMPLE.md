# HI Design System - shadcn/ui Style Usage

이 가이드는 HI Design System을 shad/ui 스타일로 사용하는 방법을 설명합니다.

## 1. 설치 및 설정

### 1단계: 글로벌 CSS 임포트

앱의 엔트리 포인트에서 글로벌 CSS를 임포트하세요:

```typescript
// main.tsx 또는 _app.tsx
import '@hi-design/tokens/global.css'
import { injectCSSVars } from '@hi-design/tokens'

// 앱 초기화 시 CSS 변수 주입
injectCSSVars('light')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 2단계: 테마 프로바이더 설정 (선택사항)

```typescript
import { ThemeProvider } from '@hi-design/theme'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  )
}
```

## 2. 컴포넌트 사용

### 기본 사용

```tsx
import { Button } from '@hi-design/react'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Tailwind와 함께 사용 (shadcn/ui 스타일)

```tsx
import { Button } from '@hi-design/react'

function App() {
  return (
    <Button
      variant="primary"
      className="hover:scale-105 active:scale-95 transition-transform"
    >
      Click me
    </Button>
  )
}
```

### 사용자 정의 스타일 (CSS Modules)

```tsx
import { Button } from '@hi-design/react'
import styles from './MyComponent.module.css'

function MyComponent() {
  return (
    <Button variant="primary" className={styles.customButton}>
      Custom Button
    </Button>
  )
}
```

```css
/* MyComponent.module.css */
.customButton {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 9999px;
  padding: 12px 32px;
}
```

### CSS Variables로 직접 스타일링

```tsx
import { Button } from '@hi-design/react'

function MyComponent() {
  return (
    <Button
      variant="primary"
      style={{
        '--brand-primary': '#8b5cf6',
        '--brand-primary-hover': '#7c3aed',
      } as React.CSSProperties}
    >
      Purple Button
    </Button>
  )
}
```

## 3. 테마 전환

```tsx
import { Button } from '@hi-design/react'
import { useTheme } from '@hi-design/theme'
import { updateCSSVars } from '@hi-design/tokens'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    updateCSSVars(newTheme) // CSS 변수 업데이트
  }

  return (
    <div>
      <Button onClick={() => handleThemeChange('light')}>Light Mode</Button>
      <Button onClick={() => handleThemeChange('dark')}>Dark Mode</Button>
    </div>
  )
}
```

## 4. 컴포넌트 조합

```tsx
import { Button, Input, Typography, Card } from '@hi-design/react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card elevation="lg" padding="xl" className="max-w-md mx-auto">
      <Typography variant="h3" className="mb-6 text-center">
        Login
      </Typography>

      <div className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          className="mb-4"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          className="mb-6"
        />

        <Button variant="primary" fullWidth className="hover:shadow-lg">
          Sign In
        </Button>
      </div>
    </Card>
  )
}
```

## 5. CSS Variables 직접 사용

```css
/* 직접 CSS 파일에서 CSS 변수 사용 */
.my-custom-button {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  padding: var(--spacing-button-padding-md-vertical) var(--spacing-button-padding-md-horizontal);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  transition: background-color var(--transition-base);
}

.my-custom-button:hover {
  background-color: var(--brand-primary-hover);
}

.my-custom-button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* Dark mode */
.dark .my-custom-button {
  background-color: var(--brand-primary);
  /* 다크 모드에서 자동으로 다른 값 사용 */
}
```

## 6. 디자인 토큰 오버라이드

```typescript
import { tokens } from '@hi-design/tokens'

// 런타임에 토큰 오버라이드
tokens.semantic.color.brand.primary = '#ff6b6b'
tokens.semantic.color.brand.primaryHover = '#ee5a52'

// 또는 CSS 변수로 오버라이드
document.documentElement.style.setProperty('--brand-primary', '#ff6b6b')
document.documentElement.style.setProperty('--brand-primary-hover', '#ee5a52')
```

## 7. Tailwind 통합

```typescript
// tailwind.config.js
import { tokens } from '@hi-design/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary)',
        'primary-hover': 'var(--brand-primary-hover)',
        background: 'var(--bg-primary)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
      },
      spacing: {
        tight: 'var(--spacing-tight)',
        compact: 'var(--spacing-compact)',
        normal: 'var(--spacing-normal)',
        relaxed: 'var(--spacing-relaxed)',
        spacious: 'var(--spacing-spacious)',
      },
    },
  },
  plugins: [],
}
```

```tsx
// Tailwind 클래스 사용
<Button className="bg-primary hover:bg-primary-hover text-white p-normal rounded-lg">
  Tailwind Button
</Button>
```

## 8. 완전한 예제

```tsx
import '@hi-design/tokens/global.css'
import { injectCSSVars, updateCSSVars } from '@hi-design/tokens'
import { ThemeProvider, useTheme } from '@hi-design/theme'
import { Button, Input, Typography, Card } from '@hi-design/react'
import { useState } from 'react'

// 앱 초기화
injectCSSVars('light')

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Dashboard />
    </ThemeProvider>
  )
}

function Dashboard() {
  const { theme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    updateCSSVars(newTheme)
  }

  return (
    <div className="min-h-screen bg-background text-text-primary p-8">
      <Card elevation="lg" padding="xl" className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h2">Dashboard</Typography>
          <Button
            variant="outline"
            onClick={toggleTheme}
            className="dark:bg-gray-800 dark:border-gray-700"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </div>

        {/* Search */}
        <Input
          label="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search..."
          className="mb-6"
        />

        {/* Actions */}
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" className="hover:shadow-lg transition-shadow">
            Primary Action
          </Button>
          <Button variant="secondary" className="hover:shadow-lg transition-shadow">
            Secondary Action
          </Button>
          <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            Ghost Action
          </Button>
          <Button variant="outline" className="hover:border-gray-400">
            Outline Action
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default App
```

## 핵심 장점

1. **CSS Variables**: 런타임 테마 전환 지원
2. **className prop**: Tailwind, CSS Modules 등과 쉽게 통합
3. **자동 테마**: `.dark` 클래스로 자동 다크 모드
4. **타입 안전성**: TypeScript 타입 지원
5. **유연성**: 원하는 스타일 방식 선택 가능

## shadcn/ui와의 차이점

- **HI Design System**: 바닐라 CSS + CSS Variables 기반, 프레임워크 의존성 없음
- **shadcn/ui**: Tailwind 의존적, Radix UI 기반

HI Design System은 더 가볍고 유연하며, 어떤 스타일링 방식과도 잘 작동합니다!
