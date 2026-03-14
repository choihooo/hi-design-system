# 브랜치 작업 계획

## 📋 전체 브랜치 전략

### Phase 1: 긴급 개선 (즉시 해결)
**브랜치**: `feature/consistency-improvement-phase1`

#### 주요 작업
1. **일관성 문제 해결**
   - 모든 컴포넌트의 이벤트 핸들러 패턴 통일
   - 변수명 네이밍 규칙 적용 (is/has 접두사)
   - CSS 클래스명 패턴 표준화 (BEM)

#### 대상 컴포넌트
- Button
- Input
- Toast
- Card
- Modal
- Typography

#### 작업 체크리스트
- [ ] onPress → handleClick으로 통일
- [ ] visible → isVisible로 변경
- [ ] pressable → isPressable로 변경
- [ ] CSS 클래스명 BEM 패턴 적용
- [ ] 평가 재실행하여 점수 확인

---

### Phase 2: 컴포넌트별 개선 높은 우선순위

#### 브랜치: `feature/improve-typography-naming-consistency`
**우선순위**: 🔴 매우 높음 (13/100)

**주요 작업**
1. **명명 규칙 완전 개선**
   - `variant` → `textVariant`로 변경
   - `Typography` 클래스명 → `text`로 변경
   - 다른 컴포넌트와 네이밍 패턴 통일

2. **구조 개선**
   - Typography도 상태 관리 도입 (선택적)
   - CSS 클래스명 패턴 완전히 재설계

**대상 파일**
- `packages/react/src/components/Typography/Typography.tsx`
- `packages/react/src/components/Typography/Typography.css`

#### 브랜치: `feature/improve-card-modal-types`
**우선순위**: 🔴 높음 (14/100 각각)

**주요 작업**
1. **Card 컴포넌트**
   - `pressable` → `isPressable`로 변경
   - `onPress` → `onClick`으로 변경
   - CSS 클래스명 패턴 통일

2. **Modal 컴포넌트**
   - ModalHeader Props 타입 수정 (title optional로)
   - 변수명 명시화 (`visible` → `isVisible`)
   - 이벤트 핸들러명 통일 (`handleEscape` → `handleEscapePress`)

**대상 파일**
- `packages/react/src/components/Card/Card.tsx`
- `packages/react/src/components/Card/Card.css`
- `packages/react/src/components/Modal/Modal.tsx`
- `packages/react/src/components/Modal/ModalHeader.tsx`

---

### Phase 3: 중기 개선 목표 (2주 내)

#### 브랜치: `feature/standardize-event-handlers`
**작업**: 이벤트 핸들러 패턴 전체 통일

**주요 작업**
1. **전역 이벤트 핸들러 표준화**
   - 모든 컴포넌트에 `handle` 접두사 적용
   - React MouseEvent, ChangeEvent 등 명시적 타입 적용
   - 웹 환경에 맞는 이벤트 이름 사용

2. **타입 안전성 강화**
   - 이벤트 핸들러 인터페이스 정의
   - CustomEvent 등 확장 이벤트 타입 지원

#### 브랜치: `feature/develop-common-utils`
**작업**: 공통 유틸리티 함수 개발

**주요 작업**
1. **유틸리티 함수 개발**
   - `packages/react/src/utils/common.ts` 확장
   - 이벤트 핸들러 유틸리티
   - 상태 관리 유틸리티
   - 접근성 유틸리티

2. **공통 인터페이스 정의**
   - `packages/types/src/components.ts`에 공용 인터페이스 추가
   - BaseComponentProps 등 공통 타입 정의

---

## 🎯 실행 순서

1. **현재 브랜치**: `feature/consistency-improvement-phase1`
   - 일관성 문제 먼저 해결
   - 모든 컴포넌트에 동일한 패턴 적용

2. **다음 브랜치**: `feature/improve-typography-naming-consistency`
   - Typography 컴포넌트 개선 (가장 낮은 점수)

3. **그 다음**: `feature/improve-card-modal-types`
   - Card & Modal 타입 개선

4. **마지막**: 중기 개선 브랜치들

## 📊 예상 결과

- **단기**: 20/100 달성 (Phase 1 완료 후)
- **중기**: 40/100 달성 (Phase 2 완료 후)
- **장기**: 60/100 달성 (Phase 3 완료 후)

## 🔄 병합 전략

1. 각 브랜치 완료 후 `main`에 머지
2. 충돌 발생 시 `main` 최신 상태로 리베이스
3. CI/CD 파이프라인 통합 후 자동 배포