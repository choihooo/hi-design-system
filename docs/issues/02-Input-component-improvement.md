# Input 컴포넌트 AI 친화성 개선 (점수: 17/100)

## 📊 현재 상태
- **총점수**: 17/100 (개선필요)
- **명명**: 25/25 (완벽)
- **타입**: 17/25 (양호)
- **문서**: 16/20 (우수)
- **구조**: 16/20 (우수)
- **일관성**: 3.6/10 (낮음)

## ✅ 강점
- **명명 규칙 완벽**: `isFocused` 등 좋은 네이백 사용
- **타입 안전성**: `textarea` 타입 지원
- **문서화 우수**: JSDoc 주석 완성도 높음

## 🔧 개선 필요사항

### 1. 이벤트 핸들러 일관성 문제
**문제점**: 다른 컴포넌트와 패턴 불일치
```tsx
// 현재 Input에서
onChangeText={onChangeText}  // onChangeText 사용
onFocus={handleFocus}       // onFocus 사용

// Button에서는 onClick 사용
```

**개선 방안**:
- 모든 컴포넌트에서 `onChange`로 통일
- 또는 웹 환경에 맞는 `onChange` 사용

### 2. 타입 별 처리 개선
**문제점**: `textarea` 타입일 때 이벤트 핸들러 타입 처리
```tsx
// 현재
const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setIsFocused(true)
  onFocus?.(event)
}

// 개선안: 타입별 분기 처리
const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  setIsFocused(true)
  onFocus?.(event)
}

const handleFocusTextarea = (event: React.FocusEvent<HTMLTextAreaElement>) => {
  setIsFocused(true)
  onFocus?.(event)
}
```

### 3. 중복 코드 제거
**문제점**: `textarea`와 `input` 간 중복 코드 존재
```tsx
// 현재: 두 개의 다른 컴포넌트처럼 처리
// 개선안: 공통 유틸리티 함수 추출
```

## 🎯 추천 작업
1. 이벤트 핸들러 패턴 통일 (`onChangeText` → `onChange`)
2. 타입별 이벤트 핸들러 분리 또는 제네릭 활용
3. 공통 유틸리티 함수 추출 (focus/blur 처리)

## 📝 관련 파일
- `packages/react/src/components/Input/Input.tsx`
- `packages/react/src/utils/input-helpers.ts`

---

## 체크리스트
- [ ] 이벤트 핸들러 명명 규칙 통일
- [ ] 타입별 이벤트 핸들러 개선
- [ ] 중복 코드 제거 및 공통화
- [ ] Input 컴포넌트의 일관성 확보

작업 완료 후: `pnpm ai-score-full` 재실행하여 점수 확인