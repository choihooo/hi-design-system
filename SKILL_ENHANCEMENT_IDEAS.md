# 🚀 스킬 강화 아이디어 브레인스토밍

## 현재 상태 분석

### ✅ 현재 스킬이 잘하는 것
- 코드 단순화 (171줄 → 87줄)
- AI 점수 최적화 (27점 → 91점)
- 프리미티브 조합 패턴
- Helper 함수 추출

### ⚠️ 현재 스킬이 부족한 것
- 자동화가 완벽하지 않음 (수동 확인 필요)
- 에러 handling 가이드 부족
- 성능 최적화 가이드 부족
- 테스트 작성 자동화 부족
- 다양한 edge case 처리 부족

## 💡 스킬에 추가하면 좋은 규칙들

### 🎯 1. 자동화 강화 규칙

#### 1.1 자동 점수 계산
```yaml
규칙: "AI 점수 자동 계산"
설명: "컴포넌트 작성 후 자동으로 AI 점수 계산 스크립트 실행"
구현: |
  - wc -l으로 줄 수 자동 체크
  - documentation 라인 수 자동 계산  
  - primitive usage 자동 감지
  - forwardRef 사용 자동 확인
목표: "수동 확인 없이 자동으로 90+ 점 보장"
```

#### 1.2 자동 테스트 생성
```yaml
규칙: "테스트 파일 자동 생성"
설명: "컴포넌트 props 기반으로 기본 테스트 자동 생성"
구현: |
  - props interface 분석
  - 모든 variants 테스트 자동 생성
  - 기본 이벤트 핸들러 테스트 생성
  - accessibility 기본 테스트 생성
목표: "테스트 작성 시간 1시간 → 10분"
```

#### 1.3 자동 Storybook 생성
```yaml
규칙: "Storybook 파일 자동 생성"
설명: "props 기반으로 모든 variants 스토리 자동 생성"
구현: |
  - variant enum 분석
  - size enum 분석
  - 모든 조합 스토리 자동 생성
  - interactive 예시 자동 생성
목표: "스토리 작성 시간 30분 → 0분"
```

### 🛡️ 2. 에러 방지 규칙

#### 2.1 Common React Hooks 에러 방지
```yaml
규칙: "Hooks 호출 순서 보장"
설명: "Hooks가 항상 같은 순서로 호출되도록 강제"
금지: |
  - 조건문 내부의 hooks
  - loop 내부의 hooks
  - 중첩 함수 내부의 hooks
허용: |
  - 컴포넌트 최상위 레벨 hooks
  - custom hooks 내부 hooks
예시: |
  ❌ if (condition) { useEffect(...) }
  ✅ useEffect(() => { if (condition) { ... } }, [])
```

#### 2.2 TypeScript 에러 방지
```yaml
규칙: "Strict 타이핑 강제"
설명: "모든 props에 명시적 타입 required"
금지: |
  - any 타입 사용
  - 타입 단언 (as)
  - 타입 생략
허용: |
  - 명시적 interface
  - 제네릭 타입
  - union types
예시: |
  ❌ const props: any = {...}
  ✅ interface Props { name: string; }
```

#### 2.3 Import 에러 방지
```yaml
규칙: "Import 순서 및 경로 표준화"
설명: "일관된 import 순서와 상대 경로 사용"
순서: |
  1. React 관련
  2. 외부 라이브러리
  3. @hi-design/* 
  4. 상대 경로 (./, ../)
금지: |
  - 복잡한 상대 경로 (../../..)
  - 순환 의존성
예시: |
  ✅ import { forwardRef } from 'react'
  ✅ import { Box } from '@hi-design/primitives'
  ❌ import { Box } from '../../../packages/primitives/src'
```

### ⚡ 3. 성능 최적화 규칙

#### 3.1 Re-render 방지
```yaml
규칙: "불필요한 re-render 방지"
설명: "컴포넌트가 불필요하게 re-render되지 않도록 최적화"
적용: |
  - React.memo for pure components
  - useCallback for event handlers
  - useMemo for expensive calculations
  - Props spreading 최소화
예시: |
  ❌ const handleClick = () => { ... } // 매번 새로운 함수
  ✅ const handleClick = useCallback(() => { ... }, [])
```

#### 3.2 Bundle 크기 최적화
```yaml
규칙: "번들 크기 최소화"
설명: "불필요한 의존성 제거로 번들 크기 감소"
적용: |
  - tree-shaking 가능한 import
  - 필요한 것만 import
  - 중복 라이브러리 제거
예시: |
  ❌ import * as lodash from 'lodash'
  ✅ import { debounce } from 'lodash-es'
```

#### 3.3 CSS 최적화
```yaml
규칙: "CSS 효율성"
설명: "불필요한 CSS 제거 및 효율적인 selector 사용"
적용: |
  - CSS 변수 활용
  - 중복 스타일 제거
  - 단순 selector 우선
  - animation 최적화
예시: |
  ❌ .button .container .text .wrapper { ... }
  ✅ .button-text { ... }
```

### 🎨 4. 일관성 규칙

#### 4.1 네이밍 컨벤션
```yaml
규칙: "일관된 네이밍"
설명: "모든 파일, 변수, 함수에 일관된 네이밍 적용"
파일: |
  - PascalCase for components
  - kebab-case for files
  - camelCase for variables
  - UPPER_CASE for constants
예시: |
  ✅ Button.tsx, getButtonClass, PRIMARY_COLOR
  ❌ button.tsx, button_class, primary_color
```

#### 4.2 Props 구조 일관성
```yaml
규칙: "표준 props 구조"
설명: "모든 컴포넌트가 동일한 props 패턴 따르기"
기본 props: |
  - variant: 'primary' | 'secondary' | ...
  - size: 'sm' | 'md' | 'lg'
  - disabled: boolean
  - className: string
  - testID: string
  - children: ReactNode
선택 props: |
  - onPress: () => void
  - onFocus/ onBlur: () => void
  - icon?: string
  - loading?: boolean
```

#### 4.3 CSS 클래스 네이밍
```yaml
규칙: "BEM 기반 클래스 네이밍"
설명: "일관된 CSS 클래스 네이밍으로 충돌 방지"
패턴: |
  - component: .button
  - modifier: .button--primary
  - element: .button__icon
  - state: .button--disabled
예시: |
  ✅ <button class="button button--primary">
  ✅ <span class="button__icon">
  ❌ <button class="btn primary">
```

### 🧪 5. 테스트 규칙

#### 5.1 필수 테스트 커버리지
```yaml
규칙: "최소 테스트 커버리지"
설명: "모든 컴포넌트가 최소한의 테스트 커버리지 보장"
필수 테스트: |
  - 기본 렌더링 (1개)
  - 모든 variants (n개)
  - 모든 sizes (n개)
  - 이벤트 핸들러 (1개)
  - accessibility (2개)
  - edge cases (2개)
최소: "6 + 2n 개 테스트"
```

#### 5.2 테스트 네이밍
```yaml
규칙: "명확한 테스트 이름"
설명: "테스트 이름만으로 어떤 것을 테스트하는지 명확히"
패턴: |
  - describe("컴포넌트명")
  - describe("기능 카테고리")
  - it("구체적인 동작 설명")
예시: |
  ✅ describe("Button") -> describe("Click") -> it("onPress를 호출한다")
  ❌ describe("Button") -> it("works")
```

### 🔒 6. 보안 규칙

#### 6.1 XSS 방지
```yaml
규칙: "XSS 취약점 방지"
설명: "사용자 입력이 안전하게 처리되도록 보장"
금지: |
  - dangerouslySetInnerHTML (불가피한 경우 제외)
  - 사용자 입력을 그대로 HTML로 렌더링
보호: |
  - React 기본 escaping 활용
  - sanitization library 사용
  - CSP (Content Security Policy) 설정
```

#### 6.2 Props 검증
```yaml
규칙: "Props 타입 검증"
설명: "잘못된 props가 전달되지 않도록 검증"
검증: |
  - PropTypes 또는 TypeScript
  - runtime validation (필요시)
  - 개발 경고 메시지
예시: |
  ✅ variant가 'primary' | 'secondary' 외에 전달되면 에러
  ✅ size가 'sm' | 'md' | 'lg' 외에 전달되면 기본값 사용
```

### 📱 7. 반응형 규칙

#### 7.1 Breakpoints 표준화
```yaml
규칙: "일관된 반응형 breakpoints"
설명: "모든 컴포넌트가 동일한 breakpoints 사용"
표준: |
  - mobile: < 768px
  - tablet: 768px - 1024px
  - desktop: > 1024px
구현: |
  - CSS 미디어 쿼리 사용
  - container queries (지원 시)
  - responsive props (선택)
```

#### 7.2 Touch Targets
```yaml
규칙: "최소 터치 타겟 크기"
설명: "모든 interactive 요소가 최소 크기 보장"
최소: |
  - 44x44px (iOS 기준)
  - 48x48dp (Android 기준)
적용: |
  - buttons, links, touchable elements
  - padding으로 크기 확보
예시: |
  ✅ padding: 12px 16px (최소 44px 높이)
  ❌ padding: 4px 8px (너무 작음)
```

### 🌐 8. 접근성 규칙 강화

#### 8.1 ARIA 속성 자동화
```yaml
규칙: "필수 ARIA 속성 자동 추가"
설명: "접근성에 필요한 ARIA 속성을 자동으로 추가"
자동 추가: |
  - button: role="button"
  - link: role="link"
  - alert: role="alert", aria-live="polite"
  - icon: aria-hidden="true"
  - disabled: aria-disabled="true"
```

#### 8.2 Keyboard Navigation
```yaml
규칙: "키보드 네비게이션 보장"
설명: "모든 interactive 요소가 키보드로 조작 가능"
필수: |
  - Tab: focus 이동
  - Enter/Space: 활성화
  - Escape: 취소/닫기
  - 화살표 키: 옵션 선택 (dropdown 등)
```

### 📊 9. 모니터링 규칙

#### 9.1 Performance Budgets
```yaml
규칙: "성능 예산 준수"
설명: "컴포넌트가 성능 예산 내에서 동작하도록 제한"
예산: |
  - 렌더링 시간: < 16ms (60fps)
  - bundle 크기: < 10KB gzipped
  - 초기 렌더링: < 100ms
  - interaction: < 100ms
```

#### 9.2 Code Metrics
```yaml
규칙: "코드 메트릭 모니터링"
측정: |
  - 복잡도: cyclomatic complexity < 10
  - 길이: < 100 lines per component
  - depth: nesting depth < 4
  - dependencies: < 5 imports per file
```

## 🚀 구현 우선순위

### Phase 1: 즉시 구현 (높은 영향, 낮은 복잡도)
1. ✅ 에러 방지 규칙
2. ✅ 네이밍 컨벤션 강화
3. ✅ CSS 클래스 네이밍 표준화
4. ✅ Props 구조 일관성

### Phase 2: 단계적 구현 (중간 영향, 중간 복잡도)
5. ⚡ 성능 최적화 규칙
6. 🧪 테스트 자동화
7. 🔒 보안 규칙
8. 📱 반응형 규칙

### Phase 3: 장기적 구현 (높은 영향, 높은 복잡도)
9. 🤖 완전 자동화
10. 📊 모니터링 시스템
11. 🌐 접근성 자동화
12. ⚡ 실시간 성능 최적화

