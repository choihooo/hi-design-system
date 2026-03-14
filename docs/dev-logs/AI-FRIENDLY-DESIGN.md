# AI 친화적 라이브러리 설계 원칙

> AI가 이해하고 사용하기 쉬운 라이브러리를 만들기 위한 핵심 가이드라인
> 작성일: 2026-03-14

---

## 🎯 핵심 원칙 7가지

### 1. **명확한 네이밍 (Clear Naming)**

#### 좋은 예
```javascript
// ✅ 직관적이고 설명적
const useTheme = () => { ... }
const Button = ({ variant, size }) => { ... }
const toggleTheme = () => { ... }

// ✅ AI가 쉽게 예측 가능
const HiButton // AI가 "Hi" 접두사로 컴포넌트임 인지
```

#### 나쁜 예
```javascript
// ❌ 의미 불명확
const doSomething = () => { ... }
const MagicComponent = () => { ... }
const handleClick = () => { ... } // 어떤 버튼?
```

### 2. **일관된 API (Consistent API)**

#### 패턴 유지
```javascript
// 모든 컴포넌트 동일한 props 패턴
const Button = ({ variant, size, disabled, children }) => { ... }
const Input = ({ variant, size, disabled, value }) => { ... }
const Card = ({ variant, size, padding }) => { ... }

// 항상 동일한 변형 옵션
// 'primary', 'secondary', 'ghost', 'outline'
// 'sm', 'md', 'lg'
```

#### 일관된 이벤트 핸들링
```javascript
// ✅ 모든 인터랙티브 컴포넌트 동일한 이벤트
onPress, onHover, onFocus, onBlur
// ✅ 모든 컴포넌트 disabled 상태 일관적
```

### 3. **강력한 타이핑 (Strong Typing)**

#### TypeScript 최적화
```typescript
// ✅ 명시적 타입 정의
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
}

// ✅ 유니온 타입으로 예측 가능
type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

// ✅ 제네릭으로 재사용성
interface Hook<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}
```

### 4. **자기 설명적 코드 (Self-Documenting)**

#### JSDoc 활용
```typescript
/**
 * 테마를 전환하는 커스텀 훅
 * @returns {object} 테마 관련 상태와 함수
 * @property {string} currentTheme - 현재 테마 ('light' | 'dark')
 * @property {function} toggleTheme - 테마 전환 함수
 * @example
 * const { currentTheme, toggleTheme } = useTheme();
 * return <button onClick={toggleTheme}>Toggle Theme</button>
 */
export const useTheme = () => { ... }
```

#### 의미 있는 변수명
```typescript
// ✅ AI가 쉽게 이해
const themeContext = createContext<ThemeContextType>();
const [isDarkMode, setDarkMode] = useState(false);
const buttonStyles = getButtonStyles(variant);

// ❌ 추측이 필요
const ctx = createContext();
const dm = useState(false);
const btn = getBtnStl(v);
```

### 5. **단순한 아키텍처 (Simple Architecture)**

#### 계층적 설계
```
📁 Design System
├── 📁 tokens          // 디자인 토큰 (Raw → Scale → Semantic)
├── 📁 components     // 기본 컴포넌트
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
├── 📁 hooks          // 커스텀 훅
│   ├── useTheme.ts
│   └── useToggle.ts
└── 📁 utils          // 유틸리티
    └── cn.ts
```

#### 단일 책임 원칙
```typescript
// ✅ 각 파일 하나의 명확한 역할
// Button.tsx - 버튼 UI만 관리
// useTheme.ts - 테마 상태만 관리
// theme.ts - 테마 토큰만 정의

// ❌ 여러 역할 혼재
// theme.ts (토큰 + 상태 + 유틸리티)
```

### 6. **예측 가능한 동작 (Predictable Behavior)**

#### 상태 변명 명확하게
```typescript
// ✅ 명확한 상태 전환
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState(null);

// ✅ 명시적인 에러 처리
try {
  const result = await fetchData();
  setData(result);
} catch (error) {
  setError(error);
  setIsLoading(false);
}

// ❌ 예측 불가능한 상태
let data = null;
fetchData().then(res => data = res); // 언제 완료?
```

### 7. **높은 재사용성 (High Reusability)**

#### 컴포지팅 패턴
```typescript
// ✅ 높은 응집도, 낮은 결합도
const BaseButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

const PrimaryButton = ({ children, ...props }) => {
  return (
    <BaseButton
      variant="primary"
      {...props}
    >
      {children}
    </BaseButton>
  );
};

// ✅ 커스텀 가능한 디자인 토큰
const theme = {
  button: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-gray-800'
  }
};
```

---

## 🧠 AI가 이해하기 쉬운 패턴

### 1. **디자인 패턴 활용**

#### Observer Pattern (상태 관리)
```typescript
// ✅ AI가 쉽게 인지할 수 있는 패턴
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### Compound Pattern (복합 컴포넌트)
```typescript
// ✅ 구조가 명확하게 드러남
<Card>
  <Card.Header>
    <Card.Title>제목</Card.Title>
  </Card.Header>
  <Card.Body>내용</Card.Body>
  <Card.Footer>푸터</Card.Footer>
</Card>
```

### 2. **데이터 구조 최적화**

#### 간결한 Props 구조
```typescript
// ✅ 평면한 구조 (Flat Structure)
interface ButtonProps {
  variant: string;
  size: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

// ❌ 깊은 중첩 구조
interface ComplexButtonProps {
  style: {
    variant: {
      type: 'primary' | 'secondary';
      theme: 'light' | 'dark';
    };
    size: {
      width: number;
      height: number;
    };
  };
}
```

### 3. **에러 처리 전략**

#### 명확한 에러 타입
```typescript
// ✅ 에러 종류 구분 명확
class ThemeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ThemeError';
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}
```

---

## 📊 AI 친화성 체크리스트

### 코드 레벨
- [ ] 네이밍이 직관적인가?
- [ ] 타입 정의가 명확한가?
- [ ] 주석이 충분한가?
- [ ] 에러 처리가 명확한가?

### 아키텍처 레벨
- [ ] 모듈 간 의존성이 낮은가?
- [ ] 단일 책임 원칙을 따르는가?
- [ ] 확장이 용이한가?
- [ ] 테스트하기 쉬운가?

### 문서 레벨
- [ ] JSDoc이 포함되어 있는가?
- [ ] 사용 예시가 제공되는가?
- [ ] 타입 정의가 문서화되어 있는가?
- [ ] 에러 메시지가 도움이 되는가?

---

## 🚀 HI Design System 적용 사례

### 1. **디자인 토큰 시스템**
```typescript
// ✅ 3-레이어 시스템이 AI에게 명확
tokens.semantic.color.brand.primary  // 의미 이해 용이
tokens.scale.color.primary[500]      // 값 이해 용이
tokens.raw.values['#0ea5e9']        // 원시값 직접 접근
```

### 2. **일관된 컴포넌트 패턴**
```typescript
// 모든 컴포넌트 동일한 구조
const HiButton = ({ variant, size, disabled, children }) => {
  // 동일한 로직
  const styles = getButtonStyles({ variant, size, disabled });

  return (
    <button style={styles} disabled={disabled}>
      {children}
    </button>
  );
};
```

### 3. **훅 시스템**
```typescript
// ✅ 예측 가능한 훅 패턴
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// ✅ 명시적인 반환 타입
interface UseThemeReturn {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

---

## 🔍 AI가 어려워하는 부분

### 1. **암묵적인 규칙**
```typescript
// ❌ AI가 예측하기 어려움
const magicNumber = 42; // 왜 42?
const config = { x: 1, y: 2, z: 3 }; // 각 값의 의미?
```

### 2. **복잡한 상태 관리**
```typescript
// ❌ 여러 상태가 복잡하게 얽혀있음
const [state, setState] = useState({
  loading: false,
  data: null,
  error: null,
  meta: {
    page: 1,
    total: 0,
    lastUpdated: null
  }
});
```

### 3. **동적 동작**
```typescript
// ❌ 런타임에 결정되는 복잡한 로직
function complexLogic(props) {
  if (Math.random() > 0.5) {
    return doSomething();
  } else if (someCondition()) {
    return doSomethingElse();
  }
  // ...
}
```

---

## 🎯 개선을 위한 구체적 제안

### 1. **명명 규칙 표준화**
```typescript
// 패키지별 접두사 규칙
@hi-design/* // 모든 패키지 Hi 접두사 사용

// 컴포넌트 명명 규칙
Hi{ComponentName} // HiButton, HiInput, HiCard

// 훅 명명 규칙
use{Purpose} // useTheme, useToggle, useMediaQuery
```

### 2. **타입 시스템 강화**
```typescript
// 상태를 위한 명시적 타입
type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Props에 대한 상세한 설명
interface ButtonProps {
  /** 버튼의 시각적 스타일 */
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  /** 버튼의 크기 */
  size: 'sm' | 'md' | 'lg';
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 버튼 내용 */
  children: React.ReactNode;
}
```

### 3. **문서화 자동화**
```bash
# 추천 도구
- Storybook: 컴포넌트 문서화
- Typedoc: 타입 기반 문서 생성
- RemarkLint: 마크다운 문서 검사
```

---

## 💡 결론

AI 친화적 라이브러리의 핵심은 **"예측 가능성"** 입니다. AI가 다음을 쉽게 예측할 수 있어야 합니다:

1. **이름이 무엇을 의미하는가**
2. **어떻게 사용해야 하는가**
3. **어떤 값을 반환하는가**
4. **에러가 발생하면 어떻게 처리하는가**

명확함이 최고의 복잡성 해결책입니다. 🚀

---

**참고**: 이 가이드는 실제 AI 개발 경험을 바탕으로 작성되었습니다. 사용 사례에 따라 적절히 수정하시길 권장합니다.