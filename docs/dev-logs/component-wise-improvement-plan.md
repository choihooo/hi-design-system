# 컴포넌트별 개선 상세 계획

## 📋 개요

각 컴포넌트별로 구체적인 개선 방안과 예상 점수 상승량을 상세히 계획했습니다.

---

## 1. Button 컴포넌트

### 현재 상태
- **점수**: 16/100
- **세부 점수**: 명명(21) 타입(18) 문서(20) 구조(12) 일관성(2)
- **문제점**: 구조 점수 낮음, 일관성 부족

### 개선 전략

#### 1.1 구조 개선 (목표: 40점, +24점)
**현재**: 259줄 → **목표**: 50줄 이하

```typescript
// 분할 전 (259줄)
export const Button = {
  Primary: ...,
  Secondary: ...,
  Ghost: ...,
  Outline: ...,
  Disabled: ...,
}

// 분할 후 (목표 50줄 + 4개 하위 컴포넌트)
export const Button = {
  Primary: ButtonPrimary,      // 40줄
  Secondary: ButtonSecondary,  // 30줄
  Ghost: ButtonGhost,         // 30줄
  Outline: ButtonOutline,     // 30줄
  Disabled: ButtonDisabled,   // 20줄
}
```

#### 1.2 공통 로직 추출
```typescript
// packages/react/src/components/Button/ButtonBase.tsx
interface ButtonBaseProps {
  variant: Variant;
  size: Size;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  onPress: () => void;
  className?: string;
  children: React.ReactNode;
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({ ... }) => {
  // 공통 로직
  const handleClick = () => { ... };

  return (
    <button onClick={handleClick} className={...}>
      {children}
    </button>
  );
};
```

#### 1.3 이벤트 핸들러 표준화
```typescript
// 변경 전
onClick: (e) => { ... }

// 변경 후
onPress: () => { ... }
onFocus: (e) => { ... }
onBlur: (e) => { ... }
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 21 | 25 | +4 |
| 타입 | 18 | 23 | +5 |
| 문서 | 20 | 20 | 0 |
| 구조 | 12 | 18 | +6 |
| 일관성 | 2 | 8 | +6 |
| **총점** | **16** | **40** | **+24** |

---

## 2. Card 컴포넌트

### 현재 상태
- **점수**: 14/100
- **세부 점수**: 명명(15) 타입(17) 문서(20) 구조(12) 일관성(0)
- **문제점**: 일관성 점수 0, 구조 점수 낮음

### 개선 전략

#### 2.1 네임스페이스 구조 완성 (목표: 35점, +21점)
```typescript
// packages/react/src/components/Card/Card.tsx
interface CardComponent {
  Base: React.ForwardRefExoticComponent<CardProps>;
  Header: React.FC<CardHeaderProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
}

export const Card: CardComponent = {
  Base: CardBase,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
};
```

#### 2.2 Props 인터페이스 확장
```typescript
interface CardProps {
  elevation?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  pressable?: boolean;
  onPress?: () => void;
  className?: string;
  children: React.ReactNode;
  testID?: string;
}
```

#### 2.3 공통 패턴 적용
```typescript
// BaseComponentProps 적용
interface CardBaseProps extends BaseComponentProps {
  elevation?: Elevation;
  padding?: Padding;
  radius?: Radius;
  pressable?: boolean;
  onPress?: () => void;
}
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 15 | 20 | +5 |
| 타입 | 17 | 22 | +5 |
| 문서 | 20 | 20 | 0 |
| 구조 | 12 | 15 | +3 |
| 일관성 | 0 | 7 | +7 |
| **총점** | **14** | **35** | **+21** |

---

## 3. Input 컴포넌트

### 현재 상태
- **점수**: 15/100
- **세부 점수**: 명명(25) 타입(16) 문서(15) 구조(8) 일관성(3)
- **문제점**: 구조 점수 매우 낮음 (600줄), 타입 점수 부족

### 개선 전략

#### 3.1 컴포넌트 완전 분할 (목표: 45점, +30점)
```typescript
// packages/react/src/components/Input/
// 600줄 → 5개 컴포넌트로 분할

// Input.tsx (60줄)
export const Input = {
  Text: InputText,
  Password: InputPassword,
  Textarea: InputTextarea,
};

// InputText.tsx (80줄)
export const InputText: React.FC<InputTextProps> = ({ ... }) => { ... };

// InputLabel.tsx (30줄)
export const InputLabel: React.FC<InputLabelProps> = ({ ... }) => { ... };

// InputError.tsx (30줄)
export const InputError: React.FC<InputErrorProps> = ({ ... }) => { ... };

// InputWrapper.tsx (40줄)
export const InputWrapper: React.FC<InputWrapperProps> = ({ ... }) => { ... };
```

#### 3.2 제네릭 타입 도입
```typescript
interface InputProps<V = string> {
  value?: V;
  onChange?: (value: V) => void;
  type?: 'text' | 'password' | 'textarea';
}

interface InputTextProps extends InputProps<string> {
  placeholder?: string;
  label?: string;
}
```

#### 3.3 유틸리티 함수 완전 적용
```typescript
// 모든 로직 유틸리티로 전환
const {
  value: finalValue,
  handleChange,
  isFocused,
  inputClassName,
} = useInputState(props.value, props.defaultValue);

const { shouldShowError } = useInputValidation(props.state, props.showError);
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 25 | 25 | 0 |
| 타입 | 16 | 22 | +6 |
| 문서 | 15 | 18 | +3 |
| 구조 | 8 | 18 | +10 |
| 일관성 | 3 | 8 | +5 |
| **총점** | **15** | **45** | **+30** |

---

## 4. Modal 컴포넌트

### 현재 상태
- **점수**: 10/100
- **세부 점수**: 명명(7) 타입(16) 문서(15) 구조(7) 일관성(0.5)
- **문제점**: 구조 점수 최악 (250줄), 일관성 거의 없음

### 개선 전략

#### 4.1 완전한 아키텍처 리빌드 (목표: 40점, +30점)
```typescript
// packages/react/src/components/Modal/
// 250줄 → 5개 컴포넌트로 분할

// Modal.tsx (60줄)
export const Modal: ModalComponent = {
  Base: ModalBase,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
};

// ModalProvider.tsx (50줄)
// Context 제공
export const ModalProvider: React.FC = ({ children }) => { ... };

// ModalContext.tsx (30줄)
// Context 타입 정의
interface ModalContextType { ... }
```

#### 4.2 포털 시스템 개선
```typescript
// useModal 훅 도입
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  return { isOpen, open, close, modalRef };
};
```

#### 4.3 이벤트 핸들러 통일
```typescript
// 변경 전
onClose: () => { ... }

// 변경 후
onPress: () => { ... }
onBackdropPress: () => { ... }
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 7 | 18 | +11 |
| 타입 | 16 | 20 | +4 |
| 문서 | 15 | 20 | +5 |
| 구조 | 7 | 18 | +11 |
| 일관성 | 0.5 | 8 | +7.5 |
| **총점** | **10** | **40** | **+30** |

---

## 5. Toast 컴포넌트

### 현재 상태
- **점수**: 15/100
- **세부 점수**: 명명(22) 타입(16) 문서(15) 구조(9) 일관성(3)
- **문제점**: 구조 점수 낮음, 일관성 부족

### 개선 전략

#### 5.1 컴포넌트 구조 개선 (목표: 35점, +20점)
```typescript
// packages/react/src/components/Toast/
// 220줄 → 4개 컴포넌트로 분할

// Toast.tsx (50줄)
export const Toast: ToastComponent = {
  Base: ToastBase,
  Success: ToastSuccess,
  Error: ToastError,
  Warning: ToastWarning,
};

// ToastIcon.tsx (30줄)
export const ToastIcon: React.FC<ToastIconProps> = ({ variant }) => { ... };

// ToastMessage.tsx (30줄)
export const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => { ... };

// ToastContainer.tsx (40줄)
export const ToastContainer: React.FC<ToastContainerProps> = ({ position }) => { ... };
```

#### 5.2 애니메이션 시스템 개선
```typescript
// useToastAnimation 훅 도입
export const useToastAnimation = (duration: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 애니메이션 로직
  return { isVisible, isExiting, show, hide };
};
```

#### 5.3 제네릭 타입 도입
```typescript
interface ToastProps<T = string> {
  message: T;
  duration?: number;
  position?: Position;
  onClose?: () => void;
}
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 22 | 24 | +2 |
| 타입 | 16 | 20 | +4 |
| 문서 | 15 | 18 | +3 |
| 구조 | 9 | 16 | +7 |
| 일관성 | 3 | 7 | +4 |
| **총점** | **15** | **35** | **+20** |

---

## 6. Typography 컴포넌트

### 현재 상태
- **점수**: 14/100
- **세부 점수**: 명명(18) 타입(15) 문서(15) 구조(12) 일관성(1)
- **문제점**: 타입 점수 낮음, 일관성 부족

### 개선 전략

#### 6.1 타입 시스템 강화 (목표: 30점, +16점)
```typescript
// packages/react/src/components/Typography/Typography.tsx

// 제네릭 타입 도입
interface TypographyProps<T = string> {
  variant: Variant;
  children: React.ReactNode;
  color?: string;
  align?: Alignment;
  weight?: FontWeight;
  className?: string;
  testID?: string;
}

// 글꼴 시스템 개선
interface TypographySystem {
  fontFamily: string;
  fontSize: Record<Variant, string>;
  fontWeight: Record<Variant, number>;
  lineHeight: Record<Variant, number>;
  letterSpacing: Record<Variant, string>;
}
```

#### 6.2 테마 시스템 통합
```typescript
// useTypographyTheme 훅 도입
export const useTypographyTheme = () => {
  const theme = useTheme();
  return {
    fontFamily: theme.typography.fontFamily,
    colors: theme.typography.colors,
  };
};
```

#### 6.3 유틸리티 함수 도입
```typescript
// typography-helpers.ts
export const getTypographyStyles = (props: TypographyProps) => {
  const theme = useTypographyTheme();
  return {
    ...theme.typography[props.variant],
    color: props.color || theme.colors.text,
    textAlign: props.align,
  };
};
```

### 예상 점수 상승
| 항목 | 현재 | 개선 후 | 상승분 |
|------|------|---------|--------|
| 명명 | 18 | 22 | +4 |
| 타입 | 15 | 22 | +7 |
| 문서 | 15 | 18 | +3 |
| 구조 | 12 | 14 | +2 |
| 일관성 | 1 | 6 | +5 |
| **총점** | **14** | **30** | **+16** |

---

## 📊 종합 예상 결과

### 개선 후 예상 점수

| 컴포넌트 | 현재 점수 | 개선 후 점수 | 상승분 |
|---------|---------|-------------|--------|
| Button | 16 | 40 | +24 |
| Card | 14 | 35 | +21 |
| Input | 15 | 45 | +30 |
| Modal | 10 | 40 | +30 |
| Toast | 15 | 35 | +20 |
| Typography | 14 | 30 | +16 |
| **평균** | **14.0** | **37.5** | **+23.5** |

### 개선 우선순위

1. **최우선**: Modal (+30) - 구조 개선으로 가장 큰 효과
2. **우선순위 1**: Input (+30) - 분할로 구조 점수 크게 향상
3. **우선순위 2**: Button (+24) - 기존 구조 유지하며 개선
4. **우선순위 3**: Card (+21) - 일관성 개선
5. **우선순위 4**: Toast (+20) - 구조 개선
6. **우선순위 5**: Typography (+16) - 타입 강화

### 실행 계획

1. **1주차**: Modal + Input 리팩토링 (예상 평균: 25/100)
2. **2주차**: Button + Card 개선 (예상 평균: 35/100)
3. **3주차**: Toast + Typography 개선 (예상 평균: 45/100)
4. **4주차**: 전체 최적화 및 목표 달성 (예상 평균: 60/100)

이 계획을 철저히 실행하면 AI 친화성 점수를 크게 개선할 수 있습니다.

---

**작성일**: 2026-03-14
**다음 업데이트**: 첫 번째 우선순위 작업 시작 후