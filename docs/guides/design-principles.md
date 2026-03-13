# Design Principles

HI Design System의 핵심 디자인 원칙과 철학을 소개합니다.

## Core Principles

### 1. AI-Friendly First 🤖

HI Design System은 AI 도구가 쉽게 이해하고 사용할 수 있도록 설계되었습니다.

**의도:**
- AI 코딩 어시스턴트가 컴포넌트를 쉽게 생성하고 수정할 수 있어야 함
- 코드 구조가 명확하고 예측 가능해야 함

**적용:**
- 일관된 네이밍 컨벤션 (`Hi` prefix)
- 명확한 타입 정의
- Semantic naming (intent-based)
- 문서화와 코드의 일치

**예시:**
```typescript
// ✅ GOOD - AI가 이해하기 쉬운 구조
import { Button } from '@hi-design/react'
import { tokens } from '@hi-design/tokens'

const button = {
  // 시맨틱 네이밍으로 의도가 명확함
  backgroundColor: tokens.semantic.color.brand.primary,
  padding: tokens.semantic.spacing.button.padding.md.vertical,
}

// ❌ BAD - AI가 이해하기 어려운 구조
const button = {
  bg: '#0ea5e9',  // 매직 넘버버
  p: 16,          // 약어 사용
}
```

### 2. Accessibility First ♿

웹 접근성은 선택 사항이 아니 필수입니다.

**의도:**
- 모든 사용자가 동등하게 접근 가능
- WCAG 2.1 AA 준수
- 키보드 내비게이션 지원
- 스크린 리더 호환

**적용:**
- ARIA 속성 자동 포함
- 키보드 내비게이션 지원
- 색상 대비비 4.5:1 이상
- 포커스 관리

**예시:**
```tsx
// ✅ GOOD - 접근성 고려
<Button
  variant="primary"
  onPress={handleClick}
  aria-label="Submit form"
>
  Submit
</Button>

// Modal에서 포커스 트랩
<Modal
  visible={showModal}
  onClose={handleClose}
  // 자동으로 포커스 관리
>
  {/* content */}
</Modal>
```

### 3. Cross-Platform Consistency 🌐

여러 플랫폼에서 일관된 경험을 제공합니다.

**의도:**
- React, React Native, Flutter에서 동일한 API
- 플랫폼별 최적화는 내부적으로 처리
- 개발자는 한 번의 코드만 작성

**적용:**
- 동일한 컴포넌트 이름
- 동일한 props 구조
- 플랫폼별 자동 적응

**예시:**
```typescript
// React (Web)
<Button variant="primary" size="md" onPress={handleClick}>
  Click me
</Button>

// React Native
<Button variant="primary" size="md" onPress={handleClick}>
  Click me
</Button>

// Flutter
HiButton(
  text: 'Click me',
  variant: HiButtonVariant.primary,
  size: HiButtonSize.md,
  onPressed: handleClick,
)
```

### 4. Semantic Over Specific 🎯

의도를 명확히 전달하는 시맨틱 네이밍을 사용합니다.

**의도:**
- 코드가 "무엇"인지 명확히 전달
- "어떻게" 보다는 "왜"에 집중
- 재사용성과 유지보수성 향상

**적용:**
- `brand.primary` (의도) vs `#0ea5e9` (구체적 값)
- `spacing.button.padding.md.vertical` (용도) vs `8px` (크기)

**예시:**
```typescript
// ✅ GOOD - 시맨틱 토큰 사용
const primaryColor = tokens.semantic.color.brand.primary
const buttonPadding = tokens.semantic.spacing.button.padding.md.vertical

// ❌ BAD - 구체적 값 사용
const primaryColor = '#0ea5e9'
const buttonPadding = 8
```

### 5. Runtime Customization ⚡

빌드 없이 런타임에 커스터마이징 가능합니다.

**의도:**
- 테마 변경 시 재빌드 불필요
- 다중 브랜드 지원
- 계절별 테마 전환

**적용:**
- CSS Variables 사용
- 런타임 토큰 오버라이드
- 테마 전환 API 제공

**예시:**
```typescript
// 테마 즉시 전환
import { updateCSSVars } from '@hi-design/tokens'

// 라이트 모드
updateCSSVars('light')

// 다크 모드
updateCSSVars('dark')

// 커스텀 테마
tokens.semantic.color.brand.primary = '#custom-color'
```

### 6. Performance Conscious 🚀

성능을 고려한 설계로 빠른 로딩과 상호작용을 보장합니다.

**의도:**
- 번들 사이즈 최적화
- 불필요한 리렌더링 방지
- 지연 로딩 지원

**적용:**
- Tree-shaking 가능한 구조
- React.memo 적절한 사용
- 지연 로딩 패턴

**예시:**
```typescript
// ✅ GOOD - 필요한 것만 임포트
import { Button } from '@hi-design/react'

// ❌ BAD - 전체 임포트
import * as HI from '@hi-design/react'

// 지연 로딩
const Modal = lazy(() => import('@hi-design/react').then(m => m.Modal))
```

### 7. Type Safety 🔒

TypeScript로 타입 안전성을 보장합니다.

**의도:**
- 컴파일 타임 오류 감지
- 자동 완성 지원
- 리팩토링 안전성

**적용:**
- 모든 컴포넌트 타입 정의
- 엄격한 타입 검사
- 제네릭 활용

**예시:**
```typescript
// ✅ 타입 안전
import type { ButtonProps } from '@hi-design/types'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  onPress: () => {},
  // 오타나면 TypeScript가 즉시 감지
}

// ❌ 타입 불안전
const buttonProps: any = {
  variunt: 'priamry',  // 오타를 감지 못함
}
```

## Design Decisions

### Why 3-Layer Token Architecture?

1. **유연성**: 런타임에 토큰 오버라이드 가능
2. **명확성**: 시맨틱 네이밍으로 의도 전달
3. **유지보수**: 변경 사항이 자동으로 전파
4. **확장성**: 새로운 테마 쉽게 추가
5. **플랫폼 독립성**: 모든 플랫폼에서 동일한 구조

### Why CSS Variables?

1. **런타임 변경**: 재빌드 없이 테마 전환
2. **브라우저 지원**: 최신 브라우저에서 완벽 지원
3. **개발자 경험**: 쉽게 커스터마이징
4. **성능**: 브라우저 네이티브 최적화
5. **통합**: Tailwind, CSS Modules 등과 쉽게 통합

### Why Monorepo?

1. **코드 공유**: 타입과 토큰 공유
2. **버전 동기화**: 모든 패키지 버전 일관성
3. **개발 경험**: 한 곳에서 모든 것 관리
4. **CI/CD**: 통합된 테스트와 배포

## Anti-Patterns

### ❌ 피해야 할 패턴

**1. 매직 넘버버 사용**
```typescript
// ❌ BAD
<div style={{ padding: 16, fontSize: 14 }}>

// ✅ GOOD
<div style={{
  padding: tokens.semantic.spacing.normal,
  fontSize: tokens.semantic.typography.body.default.fontSize
}}>
```

**2. 하드코딩된 색상**
```typescript
// ❌ BAD
<Button style={{ backgroundColor: '#0ea5e9' }}>

// ✅ GOOD
<Button style={{ backgroundColor: tokens.semantic.color.brand.primary }}>
```

**3. 접근성 무시**
```tsx
// ❌ BAD
<div onClick={handleClick}>Click</div>

// ✅ GOOD
<Button
  onPress={handleClick}
  aria-label="Perform action"
>
  Click
</Button>
```

**4. 플랫폼 종속 코드**
```typescript
// ❌ BAD
if (Platform.OS === 'web') {
  return <WebButton />
} else {
  return <NativeButton />
}

// ✅ GOOD
<Button>
  Click
</Button>
```

## Principles in Action

실제 프로젝트에서 이 원칙들이 어떻게 적용되는지 살펴보세요:

- [Component Examples](../components/) - 컴포넌트 예제
- [Best Practices](../best-practices/) - 모범 사례
- [Accessibility](./accessibility.md) - 접근성 가이드
- [Theming](./theming.md) - 테마 가이드

## Contributing

새로운 컴포넌트나 기능을 추가할 때 이 원칙들을 따르세요:

1. **AI-Friendly**: AI가 이해하기 쉬운가?
2. **Accessible**: 접근성 기준을 충족하는가?
3. **Cross-Platform**: 모든 플랫폼에서 작동하는가?
4. **Semantic**: 시맨틱 네이밍을 사용하는가?
5. **Customizable**: 런타임에 커스터마이징 가능한가?
6. **Performant**: 성능에 영향이 없는가?
7. **Type-Safe**: 타입 안전성을 보장하는가?

---

이 원칙들은 HI Design System의 모든 결정의 기반이 됩니다.
