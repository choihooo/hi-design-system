/**
 * Input - Text input with label, helper text, and validation states
 *
 * @usage
 * <Input
 *   label="Email"
 *   state="error"
 *   errorText="Invalid email"
 *   value={email}
 *   onChange={setEmail}
 * />
 */

import type { InputProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import './Input.css'

const useInputState = (value: string | undefined, defaultValue: string | undefined) => {
  const [internalValue, setInternalValue] = useState(() => defaultValue || '')
  const isControlled = value !== undefined
  return {
    value: isControlled ? value : internalValue,
    setValue: (newValue: string) => {
      if (!isControlled) setInternalValue(newValue)
    },
  }
}

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
      required = false,
      label,
      helperText,
      errorText,
      className,
      onChange,
      onChangeText,
      onSubmit,
      testID,
      name,
      ...rest
    },
    ref,
  ) => {
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`
    const { value: currentValue, setValue } = useInputState(value, defaultValue)
    const [isFocused, setIsFocused] = useState(false)

    const showError = state === 'error' && !!errorText
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onChange?.(e)
      onChangeText?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') onSubmit?.(e)
    }

    const containerClass = clsx(
      'input__container',
      `input__container--${size}`,
      fullWidth && 'input__container--full-width',
    )

    const inputClass = clsx(
      'input',
      `input--${variant}`,
      `input--${size}`,
      `input--${state}`,
      isFocused && 'input--focused',
      disabled && 'input--disabled',
      className,
    )

    return (
      <div className={containerClass}>
        {label && (
          <label className="input__label" htmlFor={inputId}>
            {label}
            {required && <span className="input__required" aria-hidden="true"> *</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClass}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          data-testid={testID}
          name={name}
          aria-invalid={state === 'error'}
          aria-describedby={showError ? errorId : helperText ? helperId : undefined}
          aria-required={required}
          {...rest}
        />

        {(helperText || showError) && (
          <div className="input__helper" id={showError ? errorId : helperId}>
            {showError ? (
              <span className="input__error" role="alert">{errorText}</span>
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
