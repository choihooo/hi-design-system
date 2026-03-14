# Card 컴포넌트 AI 친화성 개선 (점수: 14/100)

## 📊 현재 상태
- **총점수**: 14/100 (개선필요)
- **명명**: 13/25 (낮음)
- **타입**: 15/25 (양호)
- **문서**: 16/20 (우수)
- **구조**: 18/20 (우수)
- **일관성**: 0.5/10 (매우 낮음)

## ✅ 강점
- **문서화 우수**: JSDoc 주석 완성도 높음
- **구조적 유지보수성**: 적절한 함수 길이, 조기 리턴 사용
- **타입 안전성**: 기본적인 타입 지원

## 🔧 개선 필요사항 (급함)

### 1. 명명 규칙 문제 (가장 시급)
**문제점**: 변수명이 의미를 전달하지 못함
```tsx
// 현재 (예시)
const Card = forwardRef<HTMLDivElement, CardProps>(({
  elevation,
  padding,
  radius,
  pressable,
  onPress,
  className,
  children,
  testID
}) => {
  // 변수명이 너무 일반적
})

// 개선안
const Card = forwardRef<HTMLDivElement, CardProps>(({
  elevation,
  padding,
  borderRadius,
  isPressable,
  onPress,
  className,
  children,
  testID
}) => {
  // 더 의미있는 변수명
})
```

### 2. 일관성 심각 부족 (0.5/10)
**문제점**: 다른 컴포넌트들과 네이밍, 이벤트 처리 완전히 다름
```tsx
// Card 컴포넌트
const Card = () => {
  return (
    <div className="card">...</div>
  )
}

// Button 컴포넌트
const Button = () => {
  const [isPressed, setIsPressed] = useState(false)
  return <button onClick={handleClick}>...</button>
}
```

**개선 방안**:
- `isPressable` → `isPressed` 로 통일
- `onPress` → `onClick`으로 변경 (웹 환경에 맞게)

### 3. CSS 클래스명 일관성
**문제점**: 다른 컴포넌트들과 CSS 클래스명 패턴이 다름
```css
/* Card */
.card { ... }
.card--md { ... }

/* Button */
.button { ... }
.button--primary { ... }
```

**개선 방안**:
- 전체 프로젝트 CSS 클래스명 통일
- BEM 패턴 적용

## 🎯 추천 작업 (우선순위 높음)
1. **즉시**: 변수명 의미 있게 변경 (`pressable` → `isPressable`)
2. **즉시**: 이벤트 핸들러 통일 (`onPress` → `onClick`)
3. **빠르게**: CSS 클래스명 패턴 통일
4. **중기**: 컴포넌트 구조 재설계

## 📝 관련 파일
- `packages/react/src/components/Card/Card.tsx`
- `packages/react/src/components/Card/Card.css`

---

## 체크리스트 (급함)
- [ ] 변수명 의미 있게 변경 (pressable → isPressable)
- [ ] 이벤트 핸들러명 통일 (onPress → onClick)
- [ ] CSS 클래스명 패턴 검토 및 통일
- [ ] 다른 컴포넌트와의 일관성 확보

⚠️ **이슈 우선순위**: 가장 높음 (일관성 0.5/10)

작업 완료 후: `pnpm ai-score-full` 재실행하여 점수 확인