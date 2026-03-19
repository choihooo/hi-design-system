# HI Design System Skills Index

HI Design System의 모든 스킬을 나열하고 각 스킬의 용도를 설명합니다.

## 📚 스킬 목록 (13개 완료)

### Phase 1: 핵심 스킬 (Core Skills)

#### component-creation ✅
- **용도**: HI Design System 컴포넌트 생성 가이드
- **사용 시기**: 새 컴포넌트 생성, 컴포넌트 수정
- **위치**: `.skills/component-creation/`
- **주요 내용**:
  - 타입 정의 → React 구현 → 테스트 → 문서화
  - Primitives 사용 패턴
  - JSDoc 포맷
  - 공통 props 패턴

#### testing ✅
- **용도**: 테스트 작성 가이드
- **사용 시기**: 테스트 작성, 커버리지 개선
- **위치**: `.skills/testing/`
- **주요 내용**:
  - Vitest + Testing Library 사용법
  - 테스트 패턴 (랜더링, 상호작용, 접근성)
  - 80% 커버리지 목표

#### documentation ✅
- **용도**: 문서화 가이드
- **사용 시기**: 컴포넌트 문서화, API 문서 작성
- **위치**: `.skills/documentation/`
- **주요 내용**:
  - JSDoc 주석 작성법
  - Storybook 스토리 작성법
  - TypeScript 타입 주석

#### token-usage ✅
- **용도**: 3-레이어 토큰 시스템 사용법
- **사용 시기**: 컴포넌트 스타일링, 테마 전환
- **위치**: `.skills/token-usage/`
- **주요 내용**:
  - Raw → Scale → Semantic 아키텍처
  - 시맨틱 토큰 우선 사용
  - 라이트/다크 모드 지원

### Phase 2: 워크플로우 스킬 (Workflow Skills)

#### pr-workflow ✅
- **용도**: PR 생성 및 머지 프로세스
- **사용 시기**: PR 생성, 코드 리뷰
- **위치**: `.skills/pr-workflow/`
- **주요 내용**:
  - Conventional Commits 형식
  - PR 생성 체크리스트
  - 머지 규칙

#### release-workflow ✅
- **용도**: 릴리스 프로세스 가이드
- **사용 시기**: 버전 릴리스, changelog 작성
- **위치**: `.skills/release-workflow/`
- **주요 내용**:
  - SemVer 버전 관리
  - changelog 작성
  - npm 배포

#### debug-workflow ✅
- **용도**: 디버깅 절차 및 일반적인 문제 해결
- **사용 시기**: 버그 수정, 문제 해결
- **위치**: `.skills/debug-workflow/`
- **주요 내용**:
  - 디버깅 절차
  - 일반적인 이슈와 해결법
  - 로그 분석

### Phase 3: 패턴 스킬 (Pattern Skills)

#### react-patterns ✅
- **용도**: React 컴포넌트 패턴
- **사용 시기**: React 컴포넌트 개발
- **위치**: `.skills/react-patterns/`
- **주요 내용**:
  - forwardRef 사용
  - Primitives 패턴
  - 컴포지션 가이드

#### typescript-patterns ✅
- **용도**: TypeScript 타입 안전성 가이드
- **사용 시기**: 타입 정의, 제네릭 사용
- **위치**: `.skills/typescript-patterns/`
- **주요 내용**:
  - 타입 추론
  - 제네릭 패턴
  - 타입 가드

#### styling-patterns ✅
- **용도**: 스타일링 패턴과 모범 사례
- **사용 시기**: 컴포넌트 스타일링
- **위치**: `.skills/styling-patterns/`
- **주요 내용**:
  - 시맨틱 토큰 활용
  - 반응형 디자인
  - 스타일 병합

#### type-definitions ✅
- **용도**: 타입 정의 패턴
- **사용 시기**: 컴포넌트 타입 정의
- **위치**: `.skills/type-definitions/`
- **주요 내용**:
  - 인터페이스 정의
  - 제네릭 활용
  - 타입 문서화

### Phase 4: 자동화 스킬 (Automation Skills)

#### ci-automation ✅
- **용도**: CI/CD 워크플로우 가이드
- **사용 시기**: CI 실패 해결, 워크플로우 수정
- **위치**: `.skills/ci-automation/`
- **주요 내용**:
  - CI 파이프라인 구조
  - 품질 게이트
  - 문제 해결

#### testing-automation ✅
- **용도**: 테스트 자동화 가이드
- **사용 시기**: 테스트 설정, 자동화 개선
- **위치**: `.skills/testing-automation/`
- **주요 내용**:
  - 테스트 설정
  - CI 테스트 실행
  - 커버리지 리포트

## 🎯 스킬 사용 방법

AI에게 작업을 요청할 때 스킬을 참조하도록 지시할 수 있습니다:

```
# 컴포넌트 생성
"component-creation 스킬을 참조하여 HiBadge 컴포넌트를 만들어줘"

# 테스트 작성
"testing 스킬을 참조하여 HiBadge 테스트를 작성해줘"

# 문서화
"documentation 스킬을 참조하여 HiBadge JSDoc을 작성해줘"

# 토큰 사용
"token-usage 스킬을 참조하여 시맨틱 토큰을 적용해줘"

# PR 생성
"pr-workflow 스킬을 참조하여 PR을 만들어줘"
```

## 📂 스킬 구조

모든 스킬은 동일한 구조를 따릅니다:

```
.skills/[skill-name]/
├── SKILL.md                    # 스킬 정의 (필수)
└── references/                 # 상세 가이드
    ├── guide.md               # 전체 가이드
    ├── patterns.md            # 패턴과 예시
    └── checklist.md           # 체크리스트
```

## 🏗️ 시스템 아키텍처

### 단일 원천 원칙

`.skills/` 디렉토리가 스킬의 유일한 저장소입니다.

### 심볼릭 링크

`.claude/skills.d/`에는 프로젝트 스킬에 대한 심볼릭 링크가 있습니다:

```
.claude/
├── skills                      # 스킬 설명 파일
├── skills.d/                   # 심볼릭 링크 디렉토리
│   ├── component-creation -> ../../.skills/component-creation
│   ├── testing -> ../../.skills/testing
│   └── ...
```

### Seed Design 컨벤션 준수

HI Design System 스킬 시스템은 [Seed Design](https://github.com/daangn/seed-design/tree/dev/skills)의 컨벤션을 따릅니다:

1. **kebab-case 디렉토리명**: `component-creation`, `pr-workflow`
2. **SKILL.md 필수**: 각 스킬 디렉토리에 반드시 포함
3. **frontmatter**: `name`, `description` 필드 필수
4. **references/ 하위**: 상세 가이드 분리
5. **실행 절차 명시**: 1-2-3-4 단계로 절차 기술

## 📖 추가 학습 자료

### 프로젝트 문서
- `CLAUDE.md` - 전체 프로젝트 가이드
- `.skills/QUICK_START.md` - 빠른 시작 가이드
- `SKILL_SYSTEM_SUMMARY.md` - 시스템 상세 요약

### 외부 참고 문헌
- [Seed Design Skills](https://github.com/daangn/seed-design/tree/dev/skills)
- [Seed Design Token System](https://www.npmjs.com/package/@seed-design/design-token)

## ✨ 혜택

1. **향상된 AI 성능**: 명확한 절차와 포괄적인 가이드
2. **효율적인 컨텍스트 사용**: 모듈식 스킬
3. **향상된 코드 품질**: 일관된 패턴과 테스트 표준
4. **개발자 경험 개선**: 예측 가능한 AI 동작

---

**마지막 업데이트**: 2026-03-16
**스킬 시스템 버전**: 1.0.0
**완료된 스킬**: 13/13 (100%)
