# Publishing Guide

HI Design System 패키지를 npm과 pub.dev에 배포하는 방법입니다.

## Prerequisites

### 1. NPM Token (npm 배포용)

```bash
# NPM Access Token 생성
npm login
# 또는
npm token create

# GitHub Secret에 추가
# Repository → Settings → Secrets → New secret
# Name: NPM_TOKEN
# Value: npm_xxxxxxxxxxxxxx
```

### 2. GitHub Token (자동화용)

이미 자동으로 제공됩니다. `GITHUB_TOKEN`은 자동으로 주입됩니다.

## Publishing Workflow

### 방법 1: Changesets로 자동 배포 (권장)

Changesets를 사용하면 PR을 통해 자동으로 버전을 관리하고 배포할 수 있습니다.

#### 1단계: Changeset 만들기

```bash
# 변경 사항에 대한 changeset 생성
pnpm changeset

# 질문에 답변:
# 🦋  What kind of change is this for @hi-design/react?
#   - patch: Bug fixes (0.0.x)
#   - minor: New features, backward compatible (0.x.0)
#   - major: Breaking changes (x.0.0)
#
# 📝  Please enter a summary for this change:
#   Add new loading state to Button component
#
# ✅  Finish! Create .changeset/xxxx.md
```

#### 2단계: 커밋하고 PR 생성

```bash
git add .
git commit -m "feat: add button loading state"
git push origin feature/button-loading
```

GitHub에서 Pull Request 생성.

#### 3단계: PR 병합 후 자동화

```bash
# PR이 병합되면:
# 1. Changesets가 자동으로 "Version Packages" PR 생성
# 2. 해당 PR을 병합하면:
#    - 버전이 자동으로 증가
#    - CHANGELOG.md가 자동 생성
#    - GitHub Release가 자동 생성
#    - npm에 자동 배포
```

### 방법 2: 수동 배포

개발 중이나 긴급하게 배포해야 할 때 사용합니다.

```bash
# 1. 버전 업데이트
cd packages/react
npm version patch  # 또는 minor, major

# 2. 빌드
pnpm build

# 3. 배포
cd dist
npm publish

# 4. Git 태그
git tag v0.0.2
git push origin v0.0.2
```

## Package Names

배포되는 패키지 이름:

```json
{
  "@hi-design/tokens": "Design tokens",
  "@hi-design/types": "TypeScript types",
  "@hi-design/react": "React web components",
  "@hi-design/react-native": "React Native components",
  "@hi-design/theme": "Theme management",
  "@hi-design/utils": "Utility functions",
  "@hi-design/hooks": "Custom React hooks",
  "@hi-design/compose": "Composition patterns",
  "@hi-design/test-utils": "Testing utilities",
  "@hi-design/presets": "Configuration presets"
}
```

## Version Strategy

Semantic Versioning (Semver) 따름:

- **MAJOR (x.0.0)**: Breaking changes
  - API 변경
  - 삭제된 기능
  - 호환성 깨지는 변경

- **MINOR (0.x.0)**: New features, backward compatible
  - 새로운 컴포넌트
  - 새로운 props
  - 기존 기능 확장

- **PATCH (0.0.x)**: Bug fixes
  - 버그 수정
  - 문서 업데이트
  - 성능 개선

## Pre-publishing Checklist

배포 전 확인 사항:

- [ ] 모든 테스트 통과 (`pnpm test`)
- [ ] 타입 체크 통과 (`pnpm type-check`)
- [ ] 린트 통과 (`pnpm lint`)
- [ ] 빌드 성공 (`pnpm build`)
- [ ] Changeset 작성 (`pnpm changeset`)
- [ ] CHANGELOG 업데이트 확인
- [ ] 버전 번호 확인
- [ ] npm에 중복된 이름 없는지 확인

## Troubleshooting

### 1. 배포 권한 없음

```bash
# npm 로그인
npm login

# 또는 토큰 갱신
npm token create
```

### 2. 패키지 이름 이미 존재

```bash
# npm에서 이름 검색
npm search @hi-design/react

# 이름이 이미 있다면:
# 1. 다른 이름 선택
# 2. 또는 소유자에게 연락
```

### 3. EACCESS 오류

```bash
# 패키지가 이미 다른 사람에 의해 배포된 경우
# 조직으로 전환 필요:
npm org create hi-design-system
npm owner add hi-design-system @hi-design/react
```

### 4. 404 Not Found on install

```bash
# 패키지가 public으로 설정되었는지 확인
# package.json:
{
  "publishConfig": {
    "access": "public"
  }
}
```

## After Publishing

### 1. 확인

```bash
# 패키지 설치 테스트
npm install @hi-design/react

# 정보 확인
npm info @hi-design/react
```

### 2. GitHub Release 확인

https://github.com/hi-design-system/hi-design-system/releases

### 3. Changelog 확인

CHANGELOG.md가 자동으로 업데이트되었는지 확인.

## Rollback (배포 취소)

```bash
# 잘못 배포한 경우
# 1. 해당 버전 deprecate
npm deprecate @hi-design/react@0.0.2 "Critical bug, use 0.0.3"

# 2. 수정 후 새 버전 배포
pnpm changeset
# ... PR merge ...
```

## CI/CD

CI/CD 파이프라인이 자동으로 처리합니다:

- ✅ PR 생성 시: 자동 테스트 & 빌드
- ✅ PR 병합 시: Version Packages PR 생성
- ✅ Version PR 병합 시: 자동 배포

자세한 내용은 [.github/workflows/release.yml](../.github/workflows/release.yml)를 확인하세요.

## Support

배포 문제가 있나요?

- [GitHub Issues](https://github.com/hi-design-system/hi-design-system/issues)
- [npm Documentation](https://docs.npmjs.com/)
