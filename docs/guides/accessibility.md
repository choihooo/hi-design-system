# Accessibility Guide

HI Design System은 모든 사용자가 접근 가능한 인터페이스를 만들기 위해 WCAG 2.1 AA 표준을 따릅니다.

## Overview

### WCAG 2.1 AA 준수

HI Design System의 모든 컴포넌트는 WCAG 2.1 AA 수준의 접근성 기준을 충족합니다:

- **Perceivable**: 정보를 사용자가 인지할 수 있음
- **Operable**: 사용자가 조작할 수 있음
- **Understandable**: 사용자가 이해할 수 있음
- **Robust**: 다양한 사용자 도구와 호환

### 기본 제공 기능

- ✅ 키보드 내비게이션
- ✅ 스크린 리더 지원
- ✅ 색상 대비비 4.5:1 이상
- ✅ 포커스 관리
- ✅ ARIA 속성
- ✅ 고대비 모드 지원

## Keyboard Navigation

### 기본 패턴

모든 인터랙티브 요소는 키보드로 접근하고 조작할 수 있어야 합니다.

**지원되는 키:**
- `Tab` - 다음 요소로 이동
- `Shift + Tab` - 이전 요소로 이동
- `Enter` / `Space` - 활성화
- `Escape` - 닫기/취소
- `Arrow Keys` - 옵션 탐색

### 예시

```tsx
// ✅ GOOD - 키보드 접근 가능
<Button
  variant="primary"
  onPress={handleClick}
  aria-label="Submit form"
>
  Submit
</Button>

// Modal에서 Esc 키로 닫기
<Modal
  visible={showModal}
  onClose={handleClose}
  // Esc 키 자동 지원
>
  Content
</Modal>
```

## Focus Management

### 포커스 표시

포커스 가능한 모든 요소는 명확하게 표시되어야 합니다.

```css
/* 자동 제공되는 포커스 스타일 */
.hi-button:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}
```

### 포커스 트랩

Modal, Dialog 등에서 포커스가 안에서만 움직이도록 합니다.

```tsx
// ✅ 자동으로 포커스 관리
<Modal visible={showModal} onClose={handleClose}>
  {/* 포커스가 모달 안에서만 움직임 */}
  <Input label="Name" />
  <Button onPress={handleSubmit}>Submit</Button>
</Modal>
```

### 포커스 이동

```tsx
// Dialog가 열리면 자동으로 첫 번째 인터랙티브 요소에 포커스
// Dialog가 닫히면 포커스를 열린 곳으로 복원
```

## Color Contrast

### 최소 대비비

텍스트와 배경의 대비비는 최소 4.5:1이어야 합니다 (WCAG AA).

**제공되는 색상:**
- 모든 시맨틱 색상은 WCAG AA 준수
- 텍스트 색상은 자동으로 대비비 보장
- 고대비 모드 지원

### 색상만으로 정보 전달 금지

```tsx
// ❌ BAD - 색상만으로 상태 표시
<span style={{ color: 'red' }}>Error</span>

// ✅ GOOD - 아이콘과 텍스트로 상태 표시
<Toast variant="error" icon={<AlertCircle />}>
  Error occurred
</Toast>
```

## ARIA Attributes

### 자동으로 제공되는 ARIA 속성

HI Design System 컴포넌트는 필요한 ARIA 속성을 자동으로 포함합니다.

**Button:**
```tsx
<Button
  variant="primary"
  onPress={handleClick}
  // 자동으로 추가됨:
  // role="button"
  // tabIndex={0}
  // aria-disabled={disabled}
>
  Click me
</Button>
```

**Input:**
```tsx
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  errorText="Invalid email"
  // 자동으로 추가됨:
  // aria-invalid={hasError}
  // aria-describedby="helper-id"
  // aria-required={required}
/>
```

**Modal:**
```tsx
<Modal
  visible={showModal}
  onClose={handleClose}
  title="Dialog Title"
  // 자동으로 추가됨:
  // role="dialog"
  // aria-modal="true"
  // aria-labelledby="title-id"
>
  Content
</Modal>
```

### 추가 ARIA 속성

필요한 경우 추가 ARIA 속성을 사용할 수 있습니다.

```tsx
// 명시적 라벨
<Button aria-label="Close dialog" onPress={onClose}>
  <XIcon />
</Button>

// 설명 추가
<Input
  label="Password"
  aria-describedby="password-requirements"
/>
<div id="password-requirements">
  Must be at least 8 characters
</div>
```

## Screen Reader Support

### 스크린 리더 호환

모든 컴포넌트는 주요 스크린 리더와 호환됩니다:

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

### 예시

```tsx
// ✅ GOOD - 스크린 리더가 내용을 명확히 전달
<Button onPress={handleAdd}>
  <PlusIcon aria-hidden="true" />
  <span>Add to cart</span>
</Button>

// ❌ BAD - 스크린 리더가 아이콘만 읽음
<Button onPress={handleAdd}>
  <PlusIcon />
</Button>
```

## Semantic HTML

### 올바른 HTML 요소 사용

```tsx
// ✅ GOOD - 시맨틱 HTML
<Button>Click</Button>  // <button>
<Input />              // <input>
<Typography variant="h1">Title</Typography>  // <h1>

// ❌ BAD - 비시맨틱 HTML
<div onClick={handleClick}>Click</div>
<div role="button">Click</div>
```

## Reduced Motion

### 사용자의 모션 설정 존중

`prefers-reduced-motion` 설정을 존중합니다.

```tsx
// 자동으로 지원됨
import { useReducedMotion } from '@hi-design/hooks'

function AnimatedComponent() {
  const prefersReduced = useReducedMotion()

  return (
    <div
      style={{
        transition: prefersReduced ? 'none' : 'all 0.3s ease'
      }}
    >
      Content
    </div>
  )
}
```

## Form Accessibility

### 라벨과 설명

```tsx
// ✅ GOOD - 명확한 라벨과 설명
<Input
  label="Email address"
  placeholder="you@example.com"
  helperText="We'll never share your email"
  required
/>

// 자동으로 추가됨:
// - label과 input 연결
// - aria-describedby로 helperText 연결
// - required일 때 aria-required="true"
```

### 에러 상태

```tsx
// ✅ GOOD - 명확한 에러 메시지
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  state="error"
  errorText="Please enter a valid email address"
/>

// 자동으로 추가됨:
// - aria-invalid="true"
// - 에러 메시지와 aria-describedby 연결
// - role="alert"로 에러 알림
```

## Testing Accessibility

### 자동화된 테스트

```typescript
// 접근성 테스트 예시
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('button is accessible', () => {
  render(<Button onPress={handleClick}>Click me</Button>)

  const button = screen.getByRole('button', { name: 'Click me' })
  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('type', 'button')
})
```

### 수동 테스트 체크리스트

- [ ] 키보드로 모든 인터랙티브 요소에 접근 가능
- [ ] `Tab` 키로 논리적인 순서로 이동
- [ ] `Enter`/`Space`로 버튼 활성화
- [ ] 포커스가 명확하게 표시됨
- [ ] 스크린 리더로 내용을 이해할 수 있음
- [ ] 색상 대비비가 충분함
- [ ] 모든 이미지에 alt 텍스트가 있음
- [ ] 폼 입력에 명확한 라벨이 있음
- [ ] 에러 메시지가 명확하고 이해하기 쉬움

## Best Practices

### 1. 항상 라벨 제공

```tsx
// ✅ GOOD
<Button aria-label="Close dialog">
  <XIcon />
</Button>

// ❌ BAD
<Button>
  <XIcon />
</Button>
```

### 2. 색상만 의존하지 않기

```tsx
// ✅ GOOD - 텍스트 + 색상
<Toast variant="error">
  <AlertIcon />
  Error occurred
</Toast>

// ❌ BAD - 색상만
<span style={{ color: 'red' }}>Error</span>
```

### 3. 포커스 관리

```tsx
// ✅ GOOD - Modal이 열리면 포커스 이동
<Modal visible={showModal} onClose={handleClose}>
  {/* 자동으로 포커스 관리 */}
</Modal>
```

### 4. 키보드 단축키 문서화

```tsx
// 사용자 가이드에 단축키 설명
/**
 * Keyboard shortcuts:
 * - Enter/Space: Activate button
 * - Escape: Close modal/dialog
 * - Arrow keys: Navigate options
 */
```

## Tools and Resources

### 접근성 테스트 도구

- **axe DevTools**: Chrome 확장 - 자동으로 접근성 문제 감지
- **WAVE**: Chrome 확장 - 시각적 피드백
- **NVDA / JAWS**: Windows 스크린 리더 테스트
- **VoiceOver**: macOS/iOS 스크린 리더 테스트

### 더 학습하기

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [Inclusive Components](https://inclusive-components.design/)

## Support

접근성과 관련된 문제나 제안은 GitHub Issues에 등록해주세요.

---

HI Design System은 접근성을 지속적으로 개선하고 있습니다.
