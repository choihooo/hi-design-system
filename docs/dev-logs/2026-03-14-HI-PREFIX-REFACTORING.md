# Hi 접두사 제거 및 AI 친화적 네이박 적용 작업 기록

> 작성일: 2026-03-14

## 작업 개요

이 문서는 HI Design System에서 "Hi" 접두사를 제거하고 AI 친화적인 네이박스 기반 구조로 전환한 작업을 기록합니다.

## 배경

이전 분석에 따르면 "Hi" 접두사는 AI 친화적이지 않은 다음과 같은 문제점이 있었습니다:

- 토큰 낭비: 50% 더 많은 토큰 사용
- 예측 저해: 컴포넌트 예측 정확도 95% → 78% 하락
- 학습 부담: 새로운 접두사 패턴 학습 필요

## 전략

### 네이박스 기반 구조 도입

```typescript
// ❌ 이전 방식 (Hi 접두사)
const HiButton = ({ variant, children }) => { ... }
const HiInput = ({ type, value }) => { ... }

// ✅ 새로운 방식 (네이박스)
const Button = {
  Primary: ({ children, ...props }) => <button className="button button--primary" {...props}>{children}</button>,
  Secondary: ({ children, ...props }) => <button className="button button--secondary" {...props}>{children}</button>,
  Ghost: ({ children, ...props }) => <button className="button button--ghost" {...props}>{children}</button>,
}

const Input = {
  Text: ({ value, onChange, ...props }) => <input className="input input--text" {...props} />,
  Password: ({ value, onChange, ...props }) => <input type="password" className="input input--password" {...props} />,
  Textarea: ({ value, onChange, ...props }) => <textarea className="input input--textarea" {...props} />,
}
```

### 이점

1. **AI 친화성**: 컴포넌트 이름이 더 직관적
2. **브랜드 유지**: 패키지 레벨에서 여전히 "@hi-design" 브랜드 유지
3. **확장성**: 네이박스를 통한 체계적인 구조
4. **호환성**: Legacy 컴포넌트를 통한 점진적 마이그레이션

## 수행 작업

### 1. Button 컴포넌트 리팩토링

**변경 전:**
```typescript
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)

// 사용법
<Button variant="primary" onPress={handleClick}>Click me</Button>
```

**변경 후:**
```typescript
export const Button = {
  Primary: forwardRef<HTMLButtonElement, ButtonProps>(...),
  Secondary: forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(...),
  Ghost: forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(...),
  Outline: forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(...),
  Disabled: forwardRef<HTMLButtonElement, { children?: React.ReactNode }>(...),
}

// 사용법
<Button.Primary onPress={handleClick}>Click me</Button.Primary>
```

**CSS 변경:**
```css
/* 변경 전 */
.hi-button { ... }
.hi-button--primary { ... }
.hi-button__spinner { ... }

/* 변경 후 */
.button { ... }
.button--primary { ... }
.button__spinner { ... }
```

### 2. Input 컴포넌트 리팩토링

**변경 전:**
```typescript
export const Input = {
  Text: forwardRef<HTMLInputElement, InputProps>(...),
  Password: forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(...),
  Textarea: forwardRef<HTMLTextAreaElement, Omit<InputProps, 'type'>>(...),
}
```

**변경 후:**
```typescript
export const Input = {
  Text: forwardRef<HTMLInputElement, InputProps>(...),
  Password: forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(...),
  Textarea: forwardRef<HTMLTextAreaElement, Omit<InputProps, 'type'>>(...),
}

// 사용법은 동일 (이미 네이박스 구조였음)
```

**CSS 변경:**
```css
/* 변경 전 */
.hi-input__container { ... }
.hi-input--md { ... }
.hi-input__error { ... }

/* 변경 후 */
.input__container { ... }
.input--md { ... }
.input__error { ... }
```

### 3. Card, Modal, Toast, Typography 컴포넌트 리팩토링

모든 컴포넌트를 네이박스 기반으로 변경하고 CSS 클래스에서 "hi-" 접두사 제거:

```typescript
export const Component = {
  Base: forwardRef<HTMLElement, ComponentProps>(...),
}

// Legacy 호환성 유지
export const ComponentLegacy = forwardRef<HTMLElement, ComponentProps>(...)
```

## CSS 클래스 정리

### 변경된 패턴

```css
/* 공통 접두사 제거 */
.hi-button     → .button
.hi-input      → .input
.hi-card       → .card
.hi-modal      → .modal
.hi-toast      → .toast
.hi-typography → .typography

/* Helper 클래스도 동일 적용 */
.hi-button__content → .button__content
.hi-input__helper   → .input__helper
```

### 애니메이션 이름

```css
/* 변경 전 */
@keyframes hi-button-spin { ... }
@keyframes hi-modal-fade-in { ... }

/* 변경 후 */
@keyframes button-spin { ... }
@keyframes modal-fade-in { ... }
```

## 호환성 유지

Legacy 컴포넌트를 통해 기존 코드와의 호환성을 유지:

```typescript
// 기존 사용자는 계속 사용 가능
import { ButtonLegacy as Button } from '@hi-design/react'
import { InputLegacy as Input } from '@hi-design/react'

// 새로운 사용자는 네이박스 사용
import { Button } from '@hi-design/react'
import { Input } from '@hi-design/react'
```

## 성과

### 1. AI 친화성 개선

- 컴포넌트 이름 직관성 향상
- 토큰 사용량 감소 (예: `HiButton` → `Button`)
- 코드 예측성 향상

### 2. 유지보수성 향상

- 체계적인 네이박스 구조
- CSS 클래스명 단순화
- 확장성 개선

### 3. 브랜드 유지

- 패키지 레벨에서 "Hi" 브랜드 유지
- 컴포넌트 레벨에서는 순수한 네이박 사용

## 테스트

### 변경된 파일

1. `packages/react/src/components/Button/Button.tsx`
2. `packages/react/src/components/Button/Button.css`
3. `packages/react/src/components/Input/Input.tsx`
4. `packages/react/src/components/Input/Input.css`
5. `packages/react/src/components/Card/Card.tsx`
6. `packages/react/src/components/Card/Card.css`
7. `packages/react/src/components/Modal/Modal.tsx`
8. `packages/react/src/components/Modal/Modal.css`
9. `packages/react/src/components/Toast/Toast.tsx`
10. `packages/react/src/components/Toast/Toast.css`
11. `packages/react/src/components/Typography/Typography.tsx`
12. `packages/react/src/components/Typography/Typography.css`

### 검증 사항

- [x] 모든 CSS 클래스에서 "hi-" 접두사 제거
- [x] 네이박스 기반 구조 구현
- [x] Legacy 컴포넌트로 호환성 유지
- [x] JSDoc 문서 업데이트
- [x] TypeScript 타입 유지

## 다음 단계

1. **테스트 스위트 업데이트**: 기존 테스트를 새로운 네이박스 구조에 맞게 수정
2. **문서 업데이트**: 사용 예시와 가이드라인 업데이트
3. **데모 앱 업데이트**: 데모 앱에서 새로운 네이박스 사용법 반영
4. **React Native/Flutter 동기화**: 다른 플랫폼에도 동일한 변경 적용

## 결론

이 리팩토링을 통해:
- AI 친화성을 개선했으나
- 브랜드 정체성을 유지했으며
- 확장성과 유지보수성을 향상시켰습니다

점진적인 마이그레이션을 통해 기존 프로젝트의 파괴 없이 새로운 아키텍처로 전환할 수 있는 좋은 기준이 되었습니다.

---

**작성자**: Claude AI Assistant
**작성일**: 2026-03-14