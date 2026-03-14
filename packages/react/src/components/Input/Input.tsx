/**
 * @component Input
 * @description Text input component with label, helper text, and error states
 * @platform React (Web)
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
import { forwardRef, useMemo, useState } from 'react'
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
      isDisabled = false,
      isFullWidth = false,
      isReadOnly = false,
      isRequired = false,
      label,
      helperText,
      errorText,
      className,
      onChange,
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
    const inputId = useMemo(
      () => testID || `input-${Math.random().toString(36).substr(2, 9)}`,
      [testID],
    )

    const [internalValue, setInternalValue] = useState(() => defaultValue || '')
    const [isFocused, setIsFocused] = useState(false)

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const showError = useMemo(() => {
      return state === 'error' && !!errorText
    }, [state, errorText])

    // Generate unique IDs for ARIA attributes
    const helperId = useMemo(() => `${inputId}-helper`, [inputId])
    const errorId = useMemo(() => `${inputId}-error`, [inputId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (value === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(e)
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
        onSubmit()
      }
    }

    const containerClassName = clsx(
      'input__container',
      `input__container--${size}`,
      isFullWidth && 'input__container--full-width',
    )

    const inputClassName = clsx(
      'input',
      `input--${variant}`,
      `input--${size}`,
      `input--${state}`,
      isFocused && 'input--focused',
      isDisabled && 'input--disabled',
      isReadOnly && 'input--read-only',
      className, // Allow custom className override (shadcn/ui style)
    )

    return (
      <div className={containerClassName}>
        {label && (
          <label className="hi-input__label" htmlFor={inputId}>
            {label}
            {required && (
              <span className="hi-input__required" aria-hidden="true">
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
          <div className="hi-input__helper" id={showError ? errorId : helperId}>
            {showError ? (
              <span className="hi-input__error" role="alert">
                {errorText}
              </span>
            ) : (
              <span className="hi-input__helper-text">{helperText}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
