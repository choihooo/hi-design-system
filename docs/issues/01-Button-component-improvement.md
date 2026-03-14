# Button 컴포넌트 AI 친화성 개선 (점수: 18/100)

## 📊 현재 상태
- **총점수**: 18/100 (개선필요)
- **명명**: 25/25 (완벽)
- **타입**: 17/25 (양호)
- **문서**: 16/20 (우수)
- **구조**: 19/20 (매우 우수)
- **일관성**: 2.7/10 (매우 낮음)

## ✅ 강점
- **명명 규칙 완벽**: `isPressed`, `hasFocus` 등 좋은 네이백 사용
- **구조적 유지보수성**: 함수 길이 적절, 조기 리턴 사용
- **문서화 우수**: JSDoc 주석 완성도 높음

## 🔧 개선 필요사항

### 1. 일관성 문제 (가장 시급)
**문제점**: 다른 컴포넌트와 이벤트 핸들러 패턴이 다름
```tsx
// 현재 Button에서
onClick={handleClick}  // onClick 사용
onPress={onPress}     // onPress도 사용 중

// 다른 컴포넌트들에서는
onChangeText={onChangeText}  // onChangeText 사용
```

**개선 방안**:
- 모든 컴포넌트에서 `onClick`으로 통일
- 또는 React Native/React 웹 환경에 따라 분기

### 2. 타입 개선
**문제점**: 이벤트 핸들러 타입이 미흡
```tsx
// 현재
const handleClick = (): void => {
  if (disabled || loading) return
  onPress?.()
  onClick?.()
}

// 개선안
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  if (disabled || loading) return
  onPress?.()
  onClick?.()
  event.preventDefault()
}
```

## 🎯 추천 작업
1. 이벤트 핸들러 패턴 프로젝트 전체 통일
2. JSX 이벤트 핸들러에 명시적 타입 추가
3. `React.MouseEvent` 타입 명시화

## 📝 관련 파일
- `packages/react/src/components/Button/Button.tsx`
- `packages/react/src/components/Button/Button.css`

---

## 체크리스트
- [ ] 이벤트 핸들러 명명 규칙 프로젝트 전체 통일
- [ ] JSX 이벤트 핸들러 타입 명시화
- [ ] Button 컴포넌트의 CSS 클래스명 일관성 검토
- [ ] 다른 컴포넌트와의 일관성 비교 및 조정

작업 완료 후: `pnpm ai-score-full` 재실행하여 점수 확인