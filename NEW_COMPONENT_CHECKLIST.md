# 🆕 새 컴포넌트 추가 체크리스트

HI Design System에서 새 컴포넌트를 추가할 때 필요한 모든 테스트와 검증 단계

## 📋 1단계: 기본 구현 (코드 작성)

### 1.1 타입 정의
- [ ] `packages/types/src/components.ts`에 타입 인터페이스 추가
- [ ] 기본 Props 확장 (BaseComponentProps)
- [ ] 적절한 타입 제약 조건

### 1.2 컴포넌트 구현  
- [ ] `packages/react/src/components/ComponentName/` 디렉토리 생성
- [ ] AI 친화적 가이드라인 준수 (<100줄, <20줄 문서)
- [ ] 프리미티브 조합 사용
- [ ] forwardRef + strong typing
- [ ] Helper 함수 추출

### 1.3 스타일링
- [ ] CSS 파일 생성 (`ComponentName.css`)
- [ ] 테마 변수 사용 (var(--brand-primary), etc.)
- [ ] 반응형 고려
- [ ] 다크 모드 지원

## 🧪 2단계: 테스트 작성

### 2.1 유닛 테스트 (`ComponentName.test.tsx`)
```bash
# 필수 테스트 항목
- [ ] 기본 렌더링 테스트
- [ ] 모든 variants 렌더링
- [ ] 모든 sizes 렌더링  
- [ ] props 전달 테스트
- [ ] 이벤트 핸들러 테스트
- [ ] ref forwarding 테스트
- [ ] accessibility 속성 테스트
- [ ] edge cases 처리
```

### 2.2 Storybook 스토리 (`ComponentName.stories.tsx`)
```bash
# 필수 스토리 항목
- [ ] 기본 사용 예시 (Default)
- [ ] 모든 variants별 스토리
- [ ] 모든 sizes별 스토리
- [ ] interactive 상태 스토리
- [ ] edge case 스토리
- [ ] 실제 사용 예시 (실용적인 케이스)
```

## 🔨 3단계: 빌드 및 타입 체크

### 3.1 타입스크립트 체크
```bash
pnpm type-check  # 전체 패키지 타입 체크
```

### 3.2 빌드 테스트
```bash
pnpm build       # 모든 패키지 빌드
```

### 3.3 린트 체크
```bash
pnpm lint        # 코드 스타일 체크
pnpm format      # 코드 포맷팅
```

## 🧪 4단계: 테스트 실행

### 4.1 유닛 테스트 실행
```bash
# 전체 테스트
pnpm test

# 특정 컴포넌트 테스트만
pnpm test ComponentName

# 테스트 UI 모드
pnpm test:ui

# 커버리지 확인
pnpm coverage
```

### 4.2 Storybook 실행
```bash
# Storybook 개발 서버
pnpm storybook

# Storybook 빌드
pnpm build-storybook
```

## 📊 5단계: AI 친화성 점수 확인

### 5.1 자동 점수 계산
```bash
# AI 점수 계산 스크립트 실행
node ai-score-calculator.js

# 목표: 90+ 점
```

### 5.2 수동 체크리스트
- [ ] 코드 길이 < 100줄
- [ ] 문서화 < 20줄
- [ ] 프리미티브 조합 사용
- [ ] Helper 함수 추출
- [ ] Strong typing
- [ ] 테스트 파일 존재

## ♿ 6단계: 접근성 테스트

### 6.1 자동 접근성 체크
```bash
# Storybook-addon-a11y 실행
pnpm storybook  # -> Accessibility 탭 확인
```

### 6.2 수동 접근성 체크
- [ ] 키보드 네비게이션
- [ ] 스크린 리더 테스트
- [ ] 포커스 상태 확인
- [ ] ARIA 속성 확인
- [ ] 색상 대비율 확인

## 🌐 7단계: 브라우저 테스트

### 7.1 크로스 브라우징
- [ ] Chrome (최신)
- [ ] Firefox (최신)
- [ ] Safari (최신)
- [ ] Edge (최신)

### 7.2 반응형 테스트
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

## 🎨 8단계: 테마 테스트

### 8.1 라이트/다크 모드
- [ ] 라이트 모드에서 정상 렌더링
- [ ] 다크 모드에서 정상 렌더링
- [ ] 테마 전환 시 애니메이션

### 8.2 커스텀 테마
- [ ] 테마 오버라이드 테스트
- [ ] CSS 변수 반영 확인

## 📱 9단계: 통합 테스트

### 9.1 데모 앱 통합
- [ ] `apps/react-demo`에 컴포넌트 추가
- [ ] 실제 사용 시나리오 테스트
- [ ] 다른 컴포넌트와 조합 테스트

### 9.2 E2E 테스트
```bash
# Playwright E2E 테스트 (설정되어 있다면)
pnpm test:e2e
```

## 📝 10단계: 문서화

### 10.1 API 문서
- [ ] JSDoc 주석 완료
- [ ] Props 설명
- [ ] 사용 예시

### 10.2 가이드 문서 (선택)
- [ ] 사용 가이드 업데이트
- [ ] 디자인 가이드라인 업데이트
- [ ] 마이그레이션 가이드 (필요시)

## ✅ 최종 체크리스트

### 필수 항목 (모두 통과해야 함)
- [ ] 타입 에러 없음
- [ ] 빌드 성공
- [ ] 린트 통과
- [ ] 유닛 테스트 통과 (100% 커버리지 목표)
- [ ] AI 점수 90+
- [ ] 접근성 기준 통과
- [ ] 데모 앱에서 작동

### 권장 항목
- [ ] Storybook 스토리 작성
- [ ] E2E 테스트 작성
- [ ] 크로스 브라우저 테스트 완료
- [ ] 성능 벤치마크 기록

## 🚀 빠른 시작 템플릿

```bash
# 1. 컴포넌트 디렉토리 생성
mkdir -p packages/react/src/components/NewComponent

# 2. 필수 파일 생성
touch packages/react/src/components/NewComponent/NewComponent.tsx
touch packages/react/src/components/NewComponent/NewComponent.css
touch packages/react/src/components/NewComponent/NewComponent.test.tsx
touch packages/react/src/components/NewComponent/NewComponent.stories.tsx

# 3. 타입 추가
# packages/types/src/components.ts에 NewComponentProps 추가

# 4. 테스트 및 빌드
pnpm test NewComponent
pnpm build
pnpm storybook

# 5. AI 점수 확인
node ai-score-calculator.js
```

## ⏱️ 예상 소요 시간

- 기본 구현: 1-2시간
- 테스트 작성: 1-2시간
- AI 점수 최적화: 30분-1시간
- 접근성 테스트: 30분-1시간
- **총합: 3-6시간**

## 🎯 성공 기준

새 컴포넌트가 완성되었다고 판단하려면:

1. ✅ 모든 테스트 통과
2. ✅ AI 점수 90+ 달성
3. ✅ 접근성 기준 준수
4. ✅ 데모 앱에서 작동
5. ✅ 빌드 및 린트 에러 없음

