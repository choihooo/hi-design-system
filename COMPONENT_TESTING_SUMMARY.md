# 🧪 컴포넌트 테스팅 요약

## 🎯 새 컴포넌트 추가 시 필수 테스트 목록

### ✅ 1. 코드 품질 테스트 (가장 중요!)
```bash
# AI 친화성 점수 확인
node ai-score-calculator.js

# 목표: 90+ 점
# 핵심: <100줄, <20줄 문서화, 프리미티브 조합
```

### ✅ 2. 빌드 테스트
```bash
# 타입 체크
pnpm type-check

# 빌드 성공 확인
pnpm build

# 린트 통과
pnpm lint
```

### ✅ 3. 기능 테스트 (수동)
- [ ] 모든 variants 렌더링 확인
- [ ] 모든 sizes 렌더링 확인  
- [ ] 클릭/터치 이벤트 작동
- [ ] 키보드 네비게이션
- [ ] ref forwarding 동작

### ✅ 4. 접근성 테스트
```bash
# Storybook 실행
pnpm storybook

# Accessibility 탭에서 자동 체크
# 수동 체크: Tab 키로 네비게이션, 스크린 리더 테스트
```

### ✅ 5. 시각적 테스트
- [ ] 라이트 모드에서 정상
- [ ] 다크 모드에서 정상
- [ ] 모든 브라우저 (Chrome, Firefox, Safari, Edge)
- [ ] 반응형 (Desktop, Tablet, Mobile)

### ✅ 6. 통합 테스트
- [ ] 데모 앱에 추가해서 테스트
- [ ] 다른 컴포넌트와 조합 테스트
- [ ] 실제 사용 시나리오 테스트

## 📋 빠른 체크리스트

### 필수 (15분)
- [ ] 코드 작성 (<100줄)
- [ ] AI 점수 확인 (90+)
- [ ] 빌드 성공
- [ ] Storybook에서 시각 확인

### 권장 (1시간)
- [ ] 유닛 테스트 작성
- [ ] Accessibility 테스트
- [ ] 크로스 브라우저 테스트
- [ ] 데모 앱 통합

## 🚀 3단계 빠른 시작

### 1단계: 기본 구현 (30분)
```bash
# 1. 컴포넌트 파일 생성
mkdir -p packages/react/src/components/NewComponent
# NewComponent.tsx, NewComponent.css 작성

# 2. AI 친화적 가이드라인 따르기
# - <100줄 코드
# - <20줄 문서화  
# - 프리미티브 조합
# - Helper 함수 추출

# 3. 빌드 테스트
pnpm build
```

### 2단계: 시각 확인 (15분)
```bash
# 1. Storybook 스토리 작성
# NewComponent.stories.tsx

# 2. Storybook 실행
pnpm storybook

# 3. 모든 variants/sizes 확인
```

### 3단계: AI 점수 확인 (5분)
```bash
# AI 점수 계산
node ai-score-calculator.js

# 90+ 점 달성 확인
# 부족하면 코드 단순화
```

## 🎯 성공 기준

새 컴포넌트가 완성되려면:

1. ✅ **빌드 성공**: `pnpm build` 에러 없음
2. ✅ **AI 점수**: 90+ 점 달성
3. ✅ **시각적 완성**: Storybook에서 모든 variants 정상
4. ✅ **기능 작동**: 클릭, 포커스 등 기능 동작
5. ✅ **접근성**: 키보드 네비게이션 가능

## ⚡ 긴급일 때 최소 테스트

시간이 없으면 최소한 이것만:

```bash
# 1. 빌드 (필수)
pnpm build

# 2. AI 점수 (필수)
node ai-score-calculator.js

# 3. Storybook 확인 (필수)
pnpm storybook
```

**총 소요 시간: 10분**

## 📊 현재 상태

HI Design System의 현재 테스트 상태:

### ✅ 완료된 컴포넌트
- Button: 100/100 AI 점수
- Card: 98/100 AI 점수  
- Input: 94/100 AI 점수
- Typography: 94/100 AI 점수
- Alert: 90/100 AI 점수 (NEW!)

### 📁 필요한 파일
```bash
packages/react/src/components/NewComponent/
├── NewComponent.tsx       # 필수
├── NewComponent.css       # 필수
├── NewComponent.test.tsx  # 권장
└── NewComponent.stories.tsx # 권장
```

## 🔧 테스트 관련 명령어

```bash
# 전체 테스트
pnpm test

# 특정 컴포넌트 테스트
pnpm test ComponentName

# Storybook
pnpm storybook

# 빌드
pnpm build

# 타입 체크
pnpm type-check

# 린트
pnpm lint

# AI 점수
node ai-score-calculator.js
```

