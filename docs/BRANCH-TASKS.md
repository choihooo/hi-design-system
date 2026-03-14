# 브랜별 작업 내용

## 🚀 생성된 브랜치 목록

### 1. `feature/consistency-improvement-phase1` (우선순위: 긴급)
**상태**: ✅ 생성됨 (아직 작업 시작 전)

**주요 작업**:
- 모든 컴포넌트의 이벤트 핸들러 패턴 통일
  - `onClick` → `handleClick` (명시적)
  - `onChange` → `handleChange`
- 변수명 규칙 통일
  - `visible` → `isVisible`
  - `disabled` → `isDisabled`
  - `pressable` → `isPressable`
- CSS 클래스명 BEM 패턴 적용

**대상 파일**: 모든 컴포넌트
**예상 점수 향상**: 29 → 40+

---

### 2. `feature/improve-typography-naming-consistency` (우선순위: 매우 높음)
**상태**: ✅ 커밋됨 (8c9d1c24)

**주요 작업**:
- Typography 컴포넌트 완전 개선
- `variant` → `textVariant` 변경
- `Typography` 클래스명 → `text`로 변경
- 다른 컴포넌트와 네이밍 패턴 통일

**대상 파일**:
- `packages/react/src/components/Typography/Typography.tsx`
- `packages/react/src/components/Typography/Typography.css`

**현재 점수**: 23/100 → 목표 35+

---

### 3. `feature/improve-card-modal-types` (우선순위: 높음)
**상태**: ✅ 생성됨 (아직 작업 전)

**주요 작업**:
- Card 컴포넌트:
  - `pressable` → `isPressable`
  - `onPress` → `onClick`
- Modal 컴포넌트:
  - ModalHeader Props 타입 수정 (title optional)
  - 변수명 명시화 (`visible` → `isVisible`)

**대상 파일**:
- `packages/react/src/components/Card/Card.tsx`
- `packages/react/src/components/Card/Card.css`
- `packages/react/src/components/Modal/Modal.tsx`
- `packages/react/src/components/Modal/ModalHeader.tsx`

**현재 점수**: Card 25/100, Modal 26/100 → 목표 각각 35+

---

### 4. `feature/standardize-event-handlers` (우선순위: 중기)
**상태**: ✅ 생성됨 (아직 작업 전)

**주요 작업**:
- 전역 이벤트 핸들러 표준화
- 명시적 이벤트 타입 적용
- 공용 이벤트 인터페이스 정의

**대상 파일**: 모든 컴포넌트 + 새로운 유틸리티

---

### 5. `feature/develop-common-utils` (우선순위: 중기)
**상태**: ✅ 커밋됨 (8c9d1c24)

**주요 작업**:
- 공통 유틸리티 함수 개발
- 이벤트 핸들러 유틸리티
- 상태 관리 유틸리티
- 접근성 유틸리티

**대상 파일**:
- `packages/react/src/utils/common.ts`
- `packages/react/src/utils/input-helpers.ts`

---

## 📋 작업 순서 권장

### Phase 1: 긴급 개선
1. `feature/consistency-improvement-phase1` 먼저 수행
   - 모든 컴포넌트에 동일한 패턴 적용
   - 가장 큰 영향력 예상

### Phase 2: 고위험 컴포넌트 개선
2. `feature/improve-typography-naming-consistency` 수행
   - 현재 가장 낮은 점수 (23/100)
3. `feature/improve-card-modal-types` 수행
   - 타입 안전성 문제 해결

### Phase 3: 구조 개선
4. `feature/standardize-event-handlers` 수행
5. `feature/develop-common-utils` 수행

## 🔍 각 브랜치 작업 확인 방법

```bash
# 브랜치별 작업 시작
git checkout <branch-name>

# 작업 진행 상황 확인
git log --oneline -3

# 변경사항 확인
git diff --stat

# AI 점수 확인 (작업 후)
pnpm ai-score <component-path>
```

## 💡 팁

1. **작업 전 항상 백업**:
   ```bash
   git checkout main
   git pull origin main
   ```

2. **작업 중 충돌 해결**:
   ```bash
   git rebase main
   ```

3. **작업 완료 후 병합**:
   ```bash
   git checkout main
   git merge <branch-name>
   pnpm ai-score-full
   ```

## 📊 성과 측정

각 브랜치 작업 완료 후 반드시 실행:
```bash
pnpm ai-score-full
```

목표: 29/100 → 60/100 달성