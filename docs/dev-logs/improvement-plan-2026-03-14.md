# AI 친화성 점수 개선 계획

## 현재 상황 분석

### 📊 현재 점수 (2026-03-14)

**전체 평균: 14.0/100** (목표: 60/100)

| 컴포넌트 | 현재 점수 | 목표 점수 | 차이 | 주요 문제 |
|---------|---------|---------|------|---------|
| Button | 16 | 40 | +24 | 구조 개선 |
| Card | 14 | 35 | +21 | 일관성, 구조 |
| Input | 15 | 45 | +30 | 분할, 타입 |
| Modal | 10 | 40 | +30 | 완전 리팩토링 |
| Toast | 15 | 35 | +20 | 이벤트 핸들러 |
| Typography | 14 | 30 | +16 | 타입 개선 |

### 🔍 주요 병목 요인

1. **구조 문제 (가장 큰 영향)**
   - Modal: 250줄 → 목표: 30줄 이하
   - Input: 600줄 → 목표: 50줄 이하

2. **일관성 문제**
   - 이벤트 핸들러 불일치 (onPress vs onClose)
   - 상태 변수 패턴 불일치

3. **타입 시스템 약화**
   - React.Node 사용 부족
   - any 타입 존재

## 🎯 단계별 개선 계획

### 1단계: 기본 개선 (2~3일)
**목표 평균: 25/100**

#### 1.1 모달 컴포넌트 분할 (가장 높은 ROI)
**영향: Modal 10 → 35 (+25점)**

```typescript
// 분할 전
Modal (250줄) → 10점

// 분할 후
Modal (50줄) - 35점
ModalHeader (30줄) - 30점
ModalBody (30줄) - 30점
ModalFooter (30줄) - 30점
```

**수행 작업:**
- Modal → Modal (컨테이너)
- Modal.Header, Modal.Content, Modal.Footer 생성
- 각 컴포넌트 30줄 이하 유지
- 공통 props 인터페이스 정의

#### 1.2 이벤트 핸들러 표준화
**영향: 모든 컴포넌트 +5~10점**

```typescript
// 변경 전
onClose, onChangeText, onClick

// 변경 후
onPress (기본 이벤트)
onFocus, onBlur (포커스 이벤트)
onChange (값 변경 이벤트)
```

#### 1.3 Input 컴포넌트 기본 리팩토링
**영향: Input 15 → 25 (+10점)**

- 중복 코드 제거
- 유틸리티 함수 완전 적용
- 300줄 → 100줄로 축소

### 2단계: 심화 개선 (3~4일)
**목표 평균: 40/100**

#### 2.1 완전한 컴포넌트 아키텍처 개선
**영향: 모든 컴포넌트 +10~15점**

```typescript
// 새 아키텍처
interface BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
  testID?: string;
}

// 모든 컴포넌트에 적용
```

#### 2.2 타입 시스템 강화
**영향: 모든 컴포넌트 +5~10점**

```typescript
// 제네릭 도입
interface ComponentProps<T = string> {
  value?: T;
  onChange?: (value: T) => void;
}

// React.Node 적극 사용
interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}
```

#### 2.3 유틸리티 함수 확장
**영향: 코드 중복 90% 감소, 유지보수성 향상**

- 유효성 검증 유틸리티
- 애니메이션 유틸리티
- 테스트 유틸리티

### 3단계: 최적화 (2~3일)
**목표 평균: 60/100**

#### 3.1 성능 최적화
**영향: 구조 점수 +5~10점**

- React.memo 적용
- useCallback, useMemo 최적화
- 컴포넌트 분할 최적화

#### 3.2 접근성 강화
**영향: 문서 점수 +5점**

- ARIA 속성 완벽히 적용
- 키보드 네비게이션 개선
- 스크린 리더 지원

#### 3.3 테스트 커버리지 향상
**영향: 구조 점수 +5점**

- 단위 테스트 90%+ 커버리지
- 스냅샷 테스트
- 접근성 테스트

## 📋 상세 작업 계획

### Week 1: 기본 개선 (2~3일)

#### Day 1-2: Modal 리팩토링
1. **Modal 분할**
   ```typescript
   // packages/react/src/components/Modal/
   - Modal.tsx (50줄)
   - ModalHeader.tsx (30줄)
   - ModalContent.tsx (30줄)
   - ModalFooter.tsx (30줄)
   - ModalContext.tsx (20줄)
   ```

2. **Props 인터페이스 통일**
   ```typescript
   interface ModalProps {
     visible: boolean;
     onClose: () => void; // onPress로 변경?
     children: React.ReactNode;
   }
   ```

#### Day 2-3: Input 리팩토링
1. **Input 분할**
   ```typescript
   // packages/react/src/components/Input/
   - Input.tsx (100줄)
   - InputLabel.tsx (30줄)
   - InputField.tsx (50줄)
   - ErrorMessage.tsx (30줄)
   ```

2. **유틸리티 함수 완전 적용**
   - input-helpers.ts 모든 함수 사용
   - 중복 코드 90% 제거

### Week 2: 심화 개선 (3~4일)

#### Day 4-5: 컴포넌트 아키텍처
1. **BaseComponentProps 적용**
   - 모든 컴포넌트에 적용
   - 공통 props 정의

2. **이벤트 핸들러 표준화**
   - onPress 기준으로 통일
   - 예외적인 경우 명확히 문서화

#### Day 6-7: 타입 시스템
1. **제네릭 도입**
   ```typescript
   interface InputProps<V = string> {
     value?: V;
     onChange?: (value: V) => void;
   }
   ```

2. **React.Node 적극 사용**
   - 모든 children에 적용
   - any 타입 제거

### Week 3: 최적화 (2~3일)

#### Day 8-9: 성능 최적화
1. **React.memo 적용**
   - 모든 컴포넌트에 적용
   - 불필요한 렌더링 방지

2. **훅 최적화**
   - useCallback, useMemo 적절히 사용

#### Day 10: 테스트 및 접근성
1. **테스트 커버리지 90%+**
   - 단위 테스트
   - 통합 테스트

2. **접근성 강화**
   - ARIA 속성 검증
   - 키보드 네비게이션

## 🎯 예상 점수 전망

### 단계별 예상 점수

| 단계 | 컴포넌트 | 예상 점수 | 상승분 |
|------|---------|---------|--------|
| 현재 | 평균 | 14.0 | - |
| 1단계 | Button | 30 | +14 |
| 1단계 | Card | 25 | +11 |
| 1단계 | Input | 30 | +15 |
| 1단계 | Modal | 35 | +25 |
| 1단계 | Toast | 25 | +10 |
| 1단계 | Typography | 25 | +11 |
| **1단계 평균** | | **28.3** | **+14.3** |
| 2단계 | 모든 컴포넌트 | 40 | +11.7 |
| 3단계 | 모든 컴포넌트 | 60 | +20 |
| **최종 목표** | | **60.0** | **+46.0** |

## 🚀 성공 요건

### 1. 철저한 코드 분할
- 모든 컴포넌트 50줄 이하
- 단일 책임 원칙 준수

### 2. 일관성 유지
- 이벤트 핸들러 이름 통일
- 상태 변수 패턴 표준화

### 3. 타입 안전성
- any/unknown 제거
- 제네릭 적극 사용

### 4. 문서화 완성
- JSDoc 100% 커버리지
- @example 태그 모든 메소드에 적용

## ⚠️ 리스크 관리

### 1. 시간 관리 리스크
- 각 단계별 예상 시간 설정
- 버퍼 시간 20% 추가

### 2. 품질 저하 리스크
- 기존 기능 유지
- 테스트 커버리지 유지

### 3. 호환성 문제
- 기존 API 유지
- Deprecated API 천천히 제거

## 📊 성지표

### 주요 성과 지표 (KPI)

1. **코드 라인 수**
   - 현재: 평균 200줄
   - 목표: 평균 50줄

2. **일관성 점수**
   - 현재: 평균 1.5/10
   - 목표: 평균 8/10

3. **타입 안전성**
   - 현재: any 타입 존재
   - 목표: 100% 명시적 타입

4. **테스트 커버리지**
   - 현재: 약 50%
   - 목표: 90%+

## 🎉 성공 시나리오

1. **2주 내**: 25/100 달성
2. **3주 내**: 40/100 달성
3. **4주 내**: 60/100 달성

이 계획을 철저히 실행하면 AI 친화성 점수를 크게 개선하고, 더 나아가 전체 코드 품질을 향상시킬 수 있습니다.

---

**작성일**: 2026-03-14
**작성자**: HI Design System Team
**다음 업데이트**: 1단계 완료 후