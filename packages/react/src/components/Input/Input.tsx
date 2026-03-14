/**
 * @component Input
 * @description Text input component with label, helper text, and error states
 * @platform React (Web)
 * @type {React.ForwardRefExoticComponent<InputProps>}
 * @prop {string} label - Input label text
 * @prop {string} placeholder - Input placeholder text
 * @prop {string} value - Input value (controlled component)
 * @prop {string} defaultValue - Default value (uncontrolled component)
 * @prop {string} type - Input type ('text' | 'password' | 'textarea')
 * @prop {string} variant - Input variant ('outline' | 'filled')
 * @prop {string} size - Input size ('sm' | 'md' | 'lg')
 * @prop {string} state - Input state ('default' | 'error' | 'success')
 * @prop {boolean} disabled - Disabled state
 * @prop {boolean} fullWidth - Full width option
 * @prop {boolean} readOnly - Read only state
 * @prop {boolean} required - Required state
 * @prop {Function} onChangeText - Text change handler
 * @prop {Function} onFocus - Focus handler
 * @prop {Function} onBlur - Blur handler
 * @param {string} testID - Test identifier
 * @param {string} name - Input name
 * @param {string} autoComplete - Autocomplete attribute
 * @param {number} minLength - Minimum length
 * @param {number} maxLength - Maximum length
 * @param {string} pattern - Validation pattern
 * @param {number} rows - Number of rows for textarea
 * @usage
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChangeText={setEmail}
 *   state="error"
 *   errorText="Invalid email format"
 * />
 * <Input.Password
 *   placeholder="Enter password"
 *   value={password}
 *   onChangeText={setPassword}
 * />
 * ```
 */

import type { InputProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import { useFocusState } from '../../utils/common'
import './Input.css'

const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  defaultValue,
  placeholder,
  type = 'text',
  variant = 'outline',
  size = 'md',
  state = 'default',
  disabled = false,
  fullWidth = false,
  readOnly = false,
  required = false,
  label,
  helperText,
  errorText,
  onChangeText,
  onFocus,
  onBlur,
  testID,
  name,
  autoComplete,
  minLength,
  maxLength,
  pattern,
  rows,
  className,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  const { isFocused } = useFocusState()

  const currentValue = value !== undefined ? value : internalValue
  const showError = state === 'error' && !!errorText

  const handleChange = (text: string) => {
    if (value === undefined) {
      setInternalValue(text)
    }
    onChangeText?.(text)
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleFocus(event)
    onFocus?.(event)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleBlur(event)
    onBlur?.(event)
  }

  const inputClassName = clsx(
    'input',
    `input--${variant}`,
    `input--${size}`,
    state && `input--${state}`,
    fullWidth && 'input--full-width',
    disabled && 'input--disabled',
    readOnly && 'input--read-only',
    isFocused && 'input--focused',
    showError && 'input--error',
    label && 'input--has-label',
    className,
  )

  const inputProps = {
    value: currentValue,
    defaultValue: value === undefined ? defaultValue : undefined,
    placeholder,
    disabled,
    readOnly,
    required,
    name,
    autoComplete,
    minLength,
    maxLength,
    pattern,
    'data-testid': testID,
    'aria-label': label || placeholder,
    'aria-required': required,
    'aria-invalid': state === 'error',
    ...rest,
  }

  if (type === 'textarea') {
    return (
      <div className={inputClassName}>
        {label && (
          <label className="input__label" htmlFor={testID}>
            {label}
            {required && <span className="input__required">*</span>}
          </label>
        )}
        <textarea
          className="input__control"
          rows={rows}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...inputProps}
        />
        {helperText && (
          <div className="input__helper">
            {helperText}
          </div>
        )}
        {showError && errorText && (
          <div className="input__error">
            {errorText}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={inputClassName}>
      {label && (
        <label className="input__label" htmlFor={testID}>
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className="input__control"
        onChange={(e) => handleChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
      {helperText && (
        <div className="input__helper">
          {helperText}
        </div>
      )}
      {showError && errorText && (
        <div className="input__error">
          {errorText}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input