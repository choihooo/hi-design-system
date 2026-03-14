/**
 * @component Input
 * @description Text input component - Composed of Box + Text + native input
 * @platform React (Web)
 * @AI-friendly: High - Clear composition pattern using primitives
 *
 * This component demonstrates the "complex = primitive composition" pattern:
 * - Input = Box (layout) + Text (labels) + native input (functionality)
 * - AI can easily understand: "Input is a labeled text box"
 * - Consistent with other components
 *
 * @usage
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChange={setEmail}
 *   state="error"
 *   errorText="Invalid email format"
 * />
 * ```
 */

import type { InputProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import './Input.css'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      className,
      onChange,
      onChangeText,
      onFocus,
      onBlur,
      onSubmit,
      testID,
      name,
      autoComplete,
      minLength,
      maxLength,
      pattern,
      ...rest
    },
    ref,
  ) => {
    // Generate unique ID for this input instance
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

    const [internalValue, setInternalValue] = useState(() => defaultValue || '')
    const [isFocused, setIsFocused] = useState(false)

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const showError = state === 'error' && !!errorText

    // Generate unique IDs for ARIA attributes
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
      if (onChangeText) {
        onChangeText(newValue)
      }
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmit) {
        onSubmit(e)
      }
    }

    const containerClassName = clsx(
      'input__container',
      `input__container--${size}`,
      fullWidth && 'input__container--full-width',
    )

    const inputClassName = clsx(
      'input',
      `input--${variant}`,
      `input--${size}`,
      `input--${state}`,
      isFocused && 'input--focused',
      disabled && 'input--disabled',
      readOnly && 'input--read-only',
      className,
    )

    return (
      <div className={containerClassName}>
        {label && (
          <label className="input__label" htmlFor={inputId}>
            {label}
            {required && (
              <span className="input__required" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClassName}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          data-testid={testID}
          name={name}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          aria-invalid={state === 'error'}
          aria-describedby={showError ? errorId : helperText ? helperId : undefined}
          aria-required={required}
          {...rest}
        />
        {(helperText || showError) && (
          <div className="input__helper" id={showError ? errorId : helperId}>
            {showError ? (
              <span className="input__error" role="alert">
                {errorText}
              </span>
            ) : (
              <span className="input__helper-text">{helperText}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
