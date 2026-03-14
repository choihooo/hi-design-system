# Typography 컴포넌트 AI 친화성 개선 (점수: 13/100)

## 📊 현재 상태
- **총점수**: 13/100 (개선필요)
- **명명**: 12/25 (낮음)
- **타입**: 15/25 (양호)
- **문서**: 16/20 (우수)
- **구조**: 15/20 (우수)
- **일관성**: 0.5/10 (매우 낮음)

## ✅ 강점
- **문서화 우수**: JSDoc 주석 완성도 높음
- **타입 안전성**: 기본적인 타입 지원
- **구조적 유지보수성**: 적절한 함수 길이

## 🔧 개선 필요사항 (가장 급함)

### 1. 명명 규칙 심각 문제 (가장 시급)
**문제점**: 변수명이 의미 전달 실패, 다른 컴포넌트와 완전히 불일치
```tsx
// 현재 Typography (예시)
const Typography = forwardRef<HTMLElement, TypographyProps>(({
  variant = 'body1',
  className,
  children,
  testID,
  ...rest
}) => {
  const classes = clsx('typography', className)
  return (
    <p className={classes}>{children}</p>
  )
})

// 문제점:
// - 'typography'라는 클래스명이 너무 일반적
// - variant 이름이 의미 전달 부족 ('body1' → 'body'로 충분)
// - 다른 컴포넌트들과 네이밍 패턴 완전히 다름
```

### 2. 일관성 최하위 (0.5/10)
**문제점**: 프로젝트 내에서 가장 일관성이 떨어짐
```tsx
// Typography: 간단한 구조
const Typography = () => <p className="typography">Text</p>

// Button: 복잡한 상태 관리
const Button = () => {
  const [isPressed, setIsPressed] = useState(false)
  return <button onClick={handleClick}>Button</button>
}
```

**개선 방안**:
- Typography도 다른 컴포넌트와 동일한 패턴 적용
- `variant`를 더 명시적인 이름으로 변경

### 3. CSS 클래스명 불일치
**문제점**: 다른 컴포넌트들과 CSS 클래스명 패턴 완전히 다름
```css
/* Typography */
.typography { ... }
.typography--h1 { ... }

/* Button */
.button { ... }
.button--primary { ... }
```

**개선 방안**:
- 전체 프로젝트 CSS 클래스명 패턴 통일
- BEM 규칙 적용

## 🎯 추천 작업 (가장 높은 우선순위)
1. **즉시**: 변수명 명시화 (`variant` → `textVariant`)
2. **즉시**: CSS 클래스명 패턴 통일 (`typography` → `text`)
3. **빠르게**: 다른 컴포넌트와의 일관성 확보
4. **중기**: Typography도 상태 관리 도입 (선택적)

## 📝 관련 파일
- `packages/react/src/components/Typography/Typography.tsx`
- `packages/react/src/components/Typography/Typography.css`

---

## 체크리스트 (가장 급함)
- [ ] 변수명 명시화 (variant → textVariant)
- [ ] CSS 클래스명 패턴 통일화
- [ ] 다른 컴포넌트와의 네이밍 규칙 통일
- [ ] Typography 컴포넌트 구조 개선

⚠️ **이슈 우선순위**: 가장 높음 (일관성 0.5/10, 최하위 점수)

작업 완료 후: `pnpm ai-score-full` 재실행하여 점수 확인