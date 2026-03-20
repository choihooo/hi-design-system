/**
 * HI Design System - Component Type Definitions
 *
 * TypeScript types for all components in the design system.
 * These types are shared across React, React Native, and Flutter implementations.
 *
 * @design-tokens.pen reference: Component definitions from screen 6
 */

import type { CSSProperties, ReactNode } from 'react';

// ============================================
// BASE TYPES
// ============================================

/**
 * Base props for all components
 */
export interface BaseComponentProps {
  /** CSS class name (web only) */
  className?: string;
  /** Child content */
  children?: ReactNode;
  /** Test ID for testing */
  testID?: string;
  /** Inline styles */
  style?: CSSProperties;
}

/**
 * Interactive event handlers
 */
export interface InteractiveHandlers {
  /** Press/click handler */
  onPress?: () => void | Promise<void>;
  /** Click handler (alias for onPress) */
  onClick?: () => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void;
  /** Mouse down handler */
  onMouseDown?: (event: React.MouseEvent) => void;
  /** Mouse up handler */
  onMouseUp?: (event: React.MouseEvent) => void;
  /** Mouse enter handler */
  onMouseEnter?: (event: React.MouseEvent) => void;
  /** Mouse leave handler */
  onMouseLeave?: (event: React.MouseEvent) => void;
}

// ============================================
// COMMON VARIANT TYPES
// ============================================

/** Size variants */
export type SizeVariant = 'sm' | 'md' | 'lg';

/** Color variants */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

// ============================================
// BUTTON TYPES (design-tokens.pen screen 6)
// ============================================

/**
 * Button component props
 *
 * @design-tokens.pen screen 6: Component Specific - Button
 */
export interface ButtonProps extends BaseComponentProps, InteractiveHandlers {
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  /** Size variant */
  size?: SizeVariant;
  /** Color variant */
  color?: ColorVariant;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state (shows spinner) */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon name or element */
  icon?: string | ReactNode;
  /** Icon position */
  iconPosition?: 'left' | 'right';
}

// ============================================
// INPUT TYPES (design-tokens.pen screen 6)
// ============================================

/**
 * Input component props
 *
 * @design-tokens.pen screen 6: Component Specific - Input
 */
export interface InputProps extends BaseComponentProps, InteractiveHandlers {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'textarea';
  /** Visual variant */
  variant?: 'outline' | 'filled';
  /** Size variant */
  size?: SizeVariant;
  /** State variant */
  state?: 'default' | 'error' | 'success';
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text (shown below input) */
  helperText?: string;
  /** Error text (shown in error state) */
  errorText?: string;
  /** Success text (shown in success state) */
  successText?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Full width input */
  fullWidth?: boolean;
  /** Input value */
  value?: string;
  /** Default input value */
  defaultValue?: string;
  /** Name attribute (for forms) */
  name?: string;
  /** Auto-complete attribute */
  autoComplete?: string;
  /** Change handler (event) */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Change handler (text only) */
  onChangeText?: (value: string) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void;
  /** Submit handler (Enter key) */
  onSubmit?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Minimum length (validation) */
  minLength?: number;
  /** Maximum length (validation) */
  maxLength?: number;
  /** Password: show/hide password toggle */
  showPassword?: boolean;
  /** Password: on toggle password visibility */
  onTogglePassword?: () => void;
}

// ============================================
// CARD TYPES (design-tokens.pen screen 6)
// ============================================

/**
 * Card component props
 *
 * @design-tokens.pen screen 6: Component Specific - Card
 */
export interface CardProps extends BaseComponentProps {
  /** Elevation level (shadow) */
  elevation?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  /** Padding variant */
  padding?: SizeVariant;
  /** Border radius variant */
  radius?: SizeVariant;
  /** Pressable/interactive card (alias) */
  isPressable?: boolean;
  /** Pressable/interactive card */
  pressable?: boolean;
  /** Press handler */
  onPress?: () => void;
  /** Click handler */
  onClick?: () => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void;
  /** Mouse down handler */
  onMouseDown?: (event: React.MouseEvent) => void;
  /** Mouse up handler */
  onMouseUp?: (event: React.MouseEvent) => void;
  /** Mouse leave handler */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /** Border */
  border?: boolean;
  /** Background color */
  background?: 'primary' | 'secondary' | 'elevated';
  /** Pressable component element type */
  pressableAs?: 'button' | 'a';
  /** Additional pressable props */
  pressableProps?: Record<string, unknown>;
  /** Accessibility props */
  accessibleProps?: Record<string, unknown>;
}

// ============================================
// TYPOGRAPHY TYPES (design-tokens.pen screen 4)
// ============================================

/**
 * Typography component props
 *
 * @design-tokens.pen screen 4: Typography System
 */
export interface TypographyProps extends BaseComponentProps {
  /** Typography variant */
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-large' | 'body' | 'body-small' | 'caption' | 'overline' | 'label' | 'button' | 'input' | 'helper' | 'xs';
  /** Font size override */
  fontSize?: number | string;
  /** Font weight */
  fontWeight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Line height */
  lineHeight?: number | string;
  /** Truncate text */
  truncate?: boolean;
  /** Number of lines to show (with truncate) */
  lines?: number;
}

// ============================================
// MODAL TYPES (design-tokens.pen screen 1UBrU)
// ============================================

/**
 * Modal component props
 *
 * From design-tokens.pen 1UBrU - HI Modals - Focused Layers
 * "Focused layers that dim the canvas, sharpen the decision, and keep actions tight and legible."
 */
export interface ModalProps extends BaseComponentProps {
  /** Modal visibility */
  open: boolean;
  /** On close handler */
  onClose: () => void;

  // Content
  /** Modal title (System Note 2: "the title should explain the decision") */
  title: string;
  /** Modal description (System Note 2: "the body should explain the consequence") */
  description?: string;
  /** Modal content (children) */
  children?: ReactNode;

  // Size & Pattern
  /** Modal size */
  size?: 'sm' | 'md' | 'lg';
  /** Modal pattern */
  pattern?: 'default' | 'destructive' | 'loading' | 'form';

  // Actions
  /** Primary action button text */
  primaryAction?: string;
  /** Primary action handler */
  onPrimary?: () => void;
  /** Secondary action button text */
  secondaryAction?: string;
  /** Secondary action handler */
  onSecondary?: () => void;

  // Options
  /** Show close button in header */
  showCloseButton?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
}

/**
 * Modal header props
 */
export interface ModalHeaderProps extends BaseComponentProps {
  /** Header title */
  title?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** On close handler */
  onClose?: () => void;
}

/**
 * Modal body props
 */
export interface ModalBodyProps extends BaseComponentProps {
  /** Body content */
  children?: ReactNode;
}

/**
 * Modal footer props
 */
export interface ModalFooterProps extends BaseComponentProps {
  /** Footer content */
  children?: ReactNode;
}

// ============================================
// TOAST TYPES
// ============================================

/**
 * Toast component props
 */
export interface ToastProps extends BaseComponentProps {
  /** Toast variant */
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** Toast position */
  position?: 'top' | 'bottom' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Auto-dismiss duration (ms) */
  duration?: number;
  /** Show close button */
  showCloseButton?: boolean;
  /** Show icon */
  showIcon?: boolean;
  /** Toast title */
  title?: string;
  /** Toast message */
  message?: string;
  /** On close handler */
  onClose?: () => void;
  /** Custom icon */
  icon?: ReactNode;
}

// ============================================
// ALERT TYPES
// ============================================

/**
 * Alert component props
 */
export interface AlertProps extends BaseComponentProps {
  /** Alert variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Size variant */
  size?: SizeVariant;
  /** Show close button */
  showCloseButton?: boolean;
  /** Show icon */
  showIcon?: boolean;
  /** Alert title */
  title?: string;
  /** Alert message */
  message?: string;
  /** On close handler */
  onClose?: () => void;
  /** Custom icon */
  icon?: ReactNode;
}

// ============================================
// SELECT TYPES
// ============================================

/**
 * Select option type
 */
export interface SelectOption {
  /** Option value */
  value: string;
  /** Option label */
  label: string;
  /** Option disabled state */
  disabled?: boolean;
  /** Option icon */
  icon?: ReactNode;
}

/**
 * Select component props
 */
export interface SelectProps extends BaseComponentProps, InteractiveHandlers {
  /** Select options */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: SizeVariant;
  /** State variant */
  state?: 'default' | 'error' | 'success';
  /** Disabled state */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error text */
  errorText?: string;
  /** Enable search */
  searchable?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** On change handler */
  onChange?: (value: string) => void;
  /** On search handler */
  onSearch?: (query: string) => void;
}

// ============================================
// CHECKBOX & RADIO TYPES (design-tokens.pen screen 4hnIV)
// ============================================

/**
 * Checkbox component props
 *
 * @design-tokens.pen screen 4hnIV: HI Choice Controls - Checkbox Radio
 * "Choice controls that stay quiet in forms, clear in lists, and unmistakable when state changes matter."
 *
 * Checkbox Use: "Independent options where more than one item can be on, off, or partially selected."
 */
export interface CheckboxProps extends BaseComponentProps, InteractiveHandlers {
  /** Controlled checked state */
  checked?: boolean;
  /** Uncontrolled default checked state */
  defaultChecked?: boolean;
  /** Indeterminate (partially selected) state */
  indeterminate?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Required field */
  required?: boolean;
  /** Label text */
  label?: string;
  /** Helper text (shown below checkbox) */
  helperText?: string;
  /** Error text (shown in error state) */
  errorText?: string;
  /** Size variant */
  size?: SizeVariant;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Checkbox name (for forms) */
  name?: string;
  /** Checkbox value (for forms) */
  value?: string;
}

/**
 * Radio component props
 *
 * @design-tokens.pen screen 4hnIV: HI Choice Controls - Checkbox Radio
 *
 * Radio Use: "One committed choice inside a small, mutually exclusive set with clear alternatives."
 */
export interface RadioProps extends BaseComponentProps, InteractiveHandlers {
  /** Controlled checked state */
  checked?: boolean;
  /** Uncontrolled default checked state */
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Required field */
  required?: boolean;
  /** Label text */
  label?: string;
  /** Helper text (shown below radio) */
  helperText?: string;
  /** Error text (shown in error state) */
  errorText?: string;
  /** Size variant */
  size?: SizeVariant;
  /** Radio value (for form submission) */
  value?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Radio name (should match RadioGroup name) */
  name?: string;
}

/**
 * Radio Group component props
 *
 * Manages a group of radio buttons as a single mutually exclusive selection control.
 * Provides context for child Radio components to coordinate state.
 */
export interface RadioGroupProps extends BaseComponentProps {
  /** Group name (required, passed to child radios) */
  name: string;
  /** Controlled selected value */
  value?: string;
  /** Uncontrolled default selected value */
  defaultValue?: string;
  /** Disable all radios in group */
  disabled?: boolean;
  /** Mark group as required */
  required?: boolean;
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Gap between radios */
  gap?: number | string;
  /** Change handler (receives selected value) */
  onChange?: (value: string) => void;
  /** Group label (for accessibility) */
  label?: string;
  /** Group helper text */
  helperText?: string;
  /** Group error text */
  errorText?: string;
  /** Radio children */
  children: ReactNode;
}

/**
 * Radio Group Context (internal use)
 *
 * Context passed to child Radio components for group coordination.
 */
export interface RadioGroupContextValue {
  /** Group name */
  name: string;
  /** Currently selected value */
  value: string;
  /** Disabled state */
  disabled: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
}

// ============================================
// UTILITY TYPES
// ============================================

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Polymorphic component props (render as different HTML elements)
 */
export type PolymorphicProps<E extends React.ElementType, P = {}> = P & {
  /** Render as different HTML element */
  as?: E;
};

/**
 * Event handler type
 */
export type EventHandler<T, A extends any[] = any[]> = (target: T, ...args: A) => void;

// ============================================
// PRIMITIVE TYPES
// ============================================

/**
 * Box component props (layout primitive)
 */
export interface BoxProps extends BaseComponentProps {
  /** Display type */
  display?: 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
  /** Flex direction */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Justify content */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Align items */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** Flex wrap */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Gap */
  gap?: number | string;
  /** Padding */
  padding?: number | string;
  /** Margin */
  margin?: number | string;
  /** Width */
  width?: number | string | 'full';
  /** Height */
  height?: number | string | 'full';
  /** Min width */
  minWidth?: number | string;
  /** Max width */
  maxWidth?: number | string;
  /** Min height */
  minHeight?: number | string;
  /** Max height */
  maxHeight?: number | string;
  /** Overflow */
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  /** Position */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  /** Top */
  top?: number | string;
  /** Right */
  right?: number | string;
  /** Bottom */
  bottom?: number | string;
  /** Left */
  left?: number | string;
  /** Z-index */
  zIndex?: number;
  /** Background color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number | string;
  /** Border */
  border?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Opacity */
  opacity?: number;
  /** Cursor */
  cursor?: string;
  /** Responsive styles */
  responsive?: {
    mobile?: Partial<BoxProps>;
    tablet?: Partial<BoxProps>;
    desktop?: Partial<BoxProps>;
  };
}

/**
 * Text component props (typography primitive)
 */
export interface TextProps extends BaseComponentProps {
  /** Text content */
  children?: ReactNode;
  /** Text variant */
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-large' | 'body' | 'body-small' | 'caption' | 'overline' | 'label' | 'button' | 'input' | 'helper' | 'xs';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Font weight */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Line height */
  lineHeight?: number | string;
  /** Letter spacing */
  letterSpacing?: number | string;
  /** Text decoration */
  textDecoration?: 'none' | 'underline' | 'line-through';
  /** Text transform */
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  /** Truncate text */
  truncate?: boolean;
  /** Number of lines for truncation */
  lines?: number;
}

/**
 * Pressable component props (interactive primitive)
 */
export interface PressableProps extends Omit<BaseComponentProps, 'children' | 'style'> {
  /** Press handler */
  onPress?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Pressable styles (function receives current state) */
  style?: ((state: PressableState) => CSSProperties) | CSSProperties;
  /** Children as function (receives current state) */
  children?: ReactNode | ((state: PressableState) => ReactNode);
  /** Pressable in (hover/press disabled) */
  pressableIn?: boolean;
  /** Render as different element type (limited to button and a) */
  as?: 'button' | 'a';
}

/**
 * Pressable state (for render prop functions)
 */
export interface PressableState {
  /** Currently pressed */
  pressed: boolean;
  /** Currently hovered */
  hovered: boolean;
  /** Disabled state */
  disabled: boolean;
  /** Currently focused */
  focused: boolean;
}

// ============================================
// EXPORT ALL TYPES
// ============================================
