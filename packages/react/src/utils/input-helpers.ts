/**
 * Input component utilities and shared logic
 * Extracts common patterns from input components to reduce duplication
 */

import { useMemo, useState } from 'react'
import { generateUniqueId } from './common'

// Input state hook
export function useInputState(
  initialValue?: string,
  controlledValue?: string,
) {
  const [internalValue, setInternalValue] = useState(() => initialValue || '')
  const finalValue = controlledValue !== undefined ? controlledValue : internalValue

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value
    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }
  }

  return {
    value: finalValue,
    internalValue,
    setInternalValue,
    handleChange,
  }
}

// Input focus hook
export function useInputFocus() {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return {
    isFocused,
    handleFocus,
    handleBlur,
  }
}

// Input validation state
export function useInputValidation(
  state: 'default' | 'error' | 'success',
  showError: boolean,
) {
  const hasError = state === 'error'

  return {
    hasError,
    shouldShowError: showError && hasError,
  }
}

// Input accessibility IDs
export function useInputAccessibilityIds(testID?: string) {
  const inputId = useMemo(() => testID || generateUniqueId('input'), [testID])
  const helperId = useMemo(() => `${inputId}-helper`, [inputId])
  const errorId = useMemo(() => `${inputId}-error`, [inputId])

  return {
    inputId,
    helperId,
    errorId,
  }
}

// Input class name generator
export function generateInputClassName(
  base: string,
  size: string,
  variant: string,
  state: string,
  fullWidth: boolean,
  disabled: boolean,
  readOnly: boolean,
  isFocused: boolean,
  shouldShowError: boolean,
  additionalClasses?: string,
) {
  const classes = [
    base,
    `${base}--${size}`,
    `${base}--${variant}`,
    `${base}--${state}`,
    fullWidth && `${base}--full-width`,
    disabled && `${base}--disabled`,
    readOnly && `${base}--read-only`,
    isFocused && `${base}--focused`,
    shouldShowError && `${base}--error-visible`,
  ].filter(Boolean).join(' ')

  return additionalClasses ? `${classes} ${additionalClasses}` : classes
}

// Container class name generator
export function generateContainerClassName(
  base: string,
  fullWidth: boolean,
  additionalClasses?: string,
) {
  const classes = [
    base,
    fullWidth && `${base}--full-width`,
  ].filter(Boolean).join(' ')

  return additionalClasses ? `${classes} ${additionalClasses}` : classes
}

// Password toggle hook
export function usePasswordToggle(initialVisible = false) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(initialVisible)

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const getPasswordType = () => {
    return isPasswordVisible ? 'text' : 'password'
  }

  return {
    isPasswordVisible,
    togglePassword,
    getPasswordType,
  }
}