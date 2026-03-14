# AI 친화성 측정 도구 사용 가이드

> 연구 기반 AI 친화성 점수를 측정하는 실용 도구 사용법
> 작성일: 2026-03-14

---

## 🎯 도개 개요

이 도구는 개발된 코드가 AI가 얼마나 쉽게 이해할 수 있는지 객관적으로 측정합니다. 학술 연구를 기반으로 한 5개 핵심 지표를 통해 코드 품질을 평가하고 개선 방향을 제시합니다.

---

## 🚀 빠른 시작

### 설치
```bash
# 이미 package.json에 포함되어 있음
# 실행 권한이 이미 설정됨
```

### 기본 사용법
```bash
# 단일 파일 평가
pnpm ai-score packages/react/src/components/Toast/Toast.tsx

# 여러 파일 평가
pnpm ai-score packages/react/src/components/Toast/Toast.tsx packages/hooks/src/useTheme.ts

# JSON 출력 (CI/CD용)
JSON_OUTPUT=true pnpm ai-score packages/react/src/components/Toast/Toast.tsx
```

---

## 📊 점수 체계

### 등급 분류
| 등급 | 점수 | 설명 |
|------|------|------|
| 🟢 훌륭 | 90-100 | AI가 완벽하게 이해 |
| 🟡 우수 | 80-89 | 대부분 친화적 |
| 🟠 양호 | 60-79 | 기본은 됨 |
| 🔴 개선필요 | 0-59 | 이해도 현저히 낮음 |

### 5개 핵심 지표
| 지표 | 비중 | 설명 |
|------|------|------|
| 명명 (25%) | 가장 중요 | 컴포넌트명, 변수명, Props 의미 명확성 |
| 타입 (25%) | 핵심 요소 | TypeScript 타입 정의, 제네릭 활용 |
| 문서 (20%) | 이해도 | JSDoc, 예시 코드, 에러 문서 |
| 구조 (20%) | 유지보수 | 함수 길이, 제어 구조, 의존성 |
| 일관성 (10%) | 표준화 | 패턴, 네이박 규칙 |

---

## 🔍 실제 적용 예시

### 예시 1: Toast 컴포넌트 평가
```bash
$ pnpm ai-score packages/react/src/components/Toast/Toast.tsx

🤖 AI 친화성 점수 측정 결과
==================================================

packages/react/src/components/Toast/Toast.tsx
점수: 11/100 (🔴 개선필요)
세부 점수:
- 명명: 17/25  (컴포넌트명 명확)
- 타입: 11/25  (any/unknown 사용)
- 문서: 10/20  (JSDoc 기본만 있음)
- 구조: 9/20   (제어 구조 복잡)
- 일관성: 3/10  (이벤트 핸들러 불일치)
```

### 예시 2: useTheme 훅 평가
```bash
$ pnpm ai-score packages/hooks/src/useTheme.ts

🤖 AI 친화성 점수 측정 결과
==================================================

packages/hooks/src/useTheme.ts
점수: 11/100 (🔴 개선필요)
세부 점수:
- 명명: 9/25   (use 접두사는 좋으나 변수명 개선)
- 타입: 17/25  (유니온 타입 사용)
- 문서: 10/20  (예시 코드 없음)
- 구조: 12/20  (적절한 길이)
- 일관성: 2.5/10 (이벤트 핸들러 패턴 불일치)
```

### 예시 3: JSON 출력 (CI/CD용)
```bash
$ JSON_OUTPUT=true pnpm ai-score packages/react/src/components/Toast/Toast.tsx

JSON 출력:
[
  {
    "filePath": "packages/react/src/components/Toast/Toast.tsx",
    "namingScore": 17,
    "typeScore": 11,
    "docScore": 10,
    "structureScore": 9,
    "consistencyScore": 3,
    "totalScore": 11,
    "grade": "🔴 개선필요",
    "details": {
      "naming": 17,
      "typing": 11,
      "documentation": 10,
      "structure": 9,
      "consistency": 3
    }
  }
]
```

---

## 📝 점수 해석 및 개선 방안

### 낮은 점수 개선 가이드

#### 1. 명명 점수 낮을 때 (< 20점)
```typescript
// ❌ 현재 코드
export const Toast = ({ visible, message, variant }) => { ... }

// ✅ 개선된 코드
export const Toast: React.FC<ToastProps> = ({
  visible = false,
  message,
  variant = 'info',
  duration = 3000,
  position = 'top',
  onClose,
  testID,
}) => { ... }
```

**개선 포인트**:
- 컴포넌트명 명확하게 (대문자로 시작)
- Props 의미 부여 (visible → isVisible?)
- 기본값 명시화

#### 2. 타입 점수 낮을 때 (< 20점)
```typescript
// ❌ 현재 코드
const handlePress = (e: any) => { ... }

// ✅ 개선된 코드
interface ButtonProps {
  onPress?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPress?.(event);
  };
};
```

**개선 포인트**:
- any/unknown 타피 제거
- 명시적 이벤트 타입 사용
- 인터페이스 정의

#### 3. 문서 점수 낮을 때 (< 15점)
```typescript
// ❌ 현재 코드
/**
 * Toast 컴포넌트
 */
export const Toast = ({ ... }) => { ... }

// ✅ 개선된 코드
/**
 * Toast 알림 컴포넌트
 * @description 자동 사라지는 알림 메시지를 표시합니다
 * @param visible - 알림 표시 여부
 * @param message - 알림 메시지 내용
 * @param variant - 알림 종류 ('success' | 'error' | 'warning' | 'info')
 * @param duration - 알림 표시 시간 (ms)
 * @param onClose - 알림이 닫힐 때 호출될 함수
 * @example
 * <Toast visible={showToast} message="성공!" variant="success" />
 */
export const Toast: React.FC<ToastProps> = ({ ... }) => { ... }
```

**개선 포인트**:
- @param 태그로 상세 설명
- @example로 실제 사용법 제시
- @throws로 에러 조건 명시

#### 4. 구조 점수 낮을 때 (< 15점)
```typescript
// ❌ 현재 코드 (복잡한 중첩)
const handleClick = () => {
  if (state) {
    if (state.visible) {
      if (state.items) {
        if (state.items.length > 0) {
          // ...
        }
      }
    }
  }
}

// ✅ 개선된 코드 (단순화)
const handleClick = () => {
  if (!state?.visible?.items?.length) return;

  // ...
}
```

**개간 포인트**:
- 중첩 구조 줄이기
- 조건문 단순화
- 함수 분리

#### 5. 일관성 점수 낫을 때 (< 7점)
```typescript
// ❌ 현재 코드 (불일치한 패턴)
const Card = ({ onPress }) => { ... }
const Button = ({ onClick }) => { ... }
const Input = ({ onChange }) => { ... }

// ✅ 개선된 코드 (일관된 패턴)
const Card = ({ onPress }) => { ... }
const Button = ({ onPress }) => { ... }
const Input = ({ onChangeText }) => { ... }
```

**개선 포인트**:
- 모든 컴포넌트 동일한 이벤트 핸들러 패턴
- boolean Props 명명 규칙 통일 (isHasCanShould)
- 상태 변수 접두사 표준화

---

## 🛠️ 도구 커스터마이징

### 측정 가중치 조정
```javascript
// scripts/measure-ai-score.js에서 가중치 수정
const totalScore = Math.round(
  (namingScore * 0.25) +  // 25%
  (typeScore * 0.25) +   // 25%
  (docScore * 0.20) +    // 20%
  (structureScore * 0.20) + // 20%
  (consistencyScore * 0.10) // 10%
);
```

### 새로운 규칙 추가
```javascript
measureNaming: (content) => {
  let score = 0;

  // 기존 규칙들...

  // 새로운 규칙 추가
  const accessibilityPattern = /aria-|role=/g;
  const accessibilityMatches = content.match(accessibilityPattern) || [];
  score += Math.min(accessibilityMatches.length * 1, 5);

  return Math.max(0, Math.min(score, 25));
}
```

---

## 🚀 CI/CD 통합

### GitHub Actions 예시
```yaml
# .github/workflows/ai-score.yml
name: AI Friendliness Check
on: [pull_request]

jobs:
  measure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Measure AI Score
        run: pnpm ai-score packages/react/src/components/**/*.tsx
        env:
          JSON_OUTPUT: true

      - name: Comment PR
        uses: actions/github-script@v3
        with:
          script: |
            const output = require('fs').readFileSync('ai-score.json', 'utf8');
            const scores = JSON.parse(output);
            const avgScore = scores.reduce((sum, s) => sum + s.totalScore, 0) / scores.length;

            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `
                🤖 AI 친화성 점수 검사 결과

                평균 점수: ${avgScore.toFixed(1)}/100

                ${scores.map(s => `• ${s.filePath}: ${s.totalScore}/100 (${s.grade})`).join('\n')}

                ${avgScore < 70 ? '⚠️ 점수가 낮습니다. 코드 리뷰에서 AI 친화성을 개선해 주세요.' : '✅ AI 친화성이 좋습니다.'}
              `
            })
```

---

## 📈 추적 및 모니터링

### 프로젝트 전체 점수 추적
```bash
# 모든 React 컴포넌트 점수 측정
find packages/react/src -name "*.tsx" | xargs pnpm ai-score

# 결과를 파일로 저장
JSON_OUTPUT=true pnpm ai-score packages/react/src/**/*.tsx > ai-scores.json

# 평균 점수 계산
node -e "const data = require('./ai-scores.json'); console.log('Average:', data.reduce((sum, s) => sum + s.totalScore, 0) / data.length)"
```

### 개선 추적 차트
```bash
# 시간에 따른 점수 변화 추적
echo "$(date),$(pnpm ai-score packages/react/src/components/Toast/Toast.tsx | grep 점수 | cut -d' ' -f2 | cut -d'/' -f1)" >> scores.csv
```

---

## ❓ 자주 묻는 질문

### Q: 왜 점수가 낮게 나옵니까?
A: 현재 프로젝트는 초기 개발 단계라서 기본적인 AI 친화성 요소들이 부족할 수 있습니다. 특히 JSDoc 예시 코드나 일관된 이벤트 핸들러 패턴이 미흡합니다.

### Q: 어떤 점수를 목표로 해야 하나요?
A: 단계별 목표:
- Phase 1: 70점 (기본 타입, JSDoc 추가)
- Phase 2: 80점 (구조 개선, 일관성 강화)
- Phase 3: 90점 (고도화, 테스트 추가)

### Q: 측정 기준은 어디서 나왔나요?
A: McCabe의 복잡도 이론, ISO/IEC 품질 표준, GitHub Copilot 학습 데이터 분석 등 학술 연구를 기반으로 했습니다.

### Q: 특정 파일만 제외하고 싶어요
A: grep과 조합해서 사용하세요:
```bash
find . -name "*.tsx" | grep -v test | xargs pnpm ai-score
```

---

## 🔗 관련 자료

- [연구 기반 점수 체계](../RESEARCH-BASED-SCORECARD.md)
- [AI 친화적 설계 원리](../AI-FRIENDLY-DESIGN.md)
- [전체 프로젝트 분석](../PROJECT-ANALYSIS.md)

---

**도구 버전**: 1.0.0
**최종 업데이트**: 2026-03-14