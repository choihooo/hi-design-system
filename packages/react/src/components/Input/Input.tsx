/**
 * Input - Text input with label, helper text, and validation states
 *
 * @usage
 * <Input
 *   label="Email"
 *   state="error"
 *   errorText="Invalid email"
 * />
 */

import type { InputProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useId, useState } from 'react'
import './Input.css'

const useInputValue = (value: string | undefined, defaultValue: string | undefined) => {
  const [internalValue, setInternalValue] = useState(() => defaultValue || '')
  const isControlled = value !== undefined

  return {
    value: isControlled ? value : internalValue,
    setValue: (nextValue: string) => {
      if (!isControlled) setInternalValue(nextValue)
    },
  }
}

const getInputClass = (props: {
  variant: string
  size: string
  state: string
  focused: boolean
  disabled: boolean
  readOnly: boolean
  className?: string
}) =>
  clsx(
    'input',
    `input--${props.variant}`,
    `input--${props.size}`,
    `input--${props.state}`,
    props.focused && 'input--focused',
    props.disabled && 'input--disabled',
    props.readOnly && 'input--read-only',
    props.className,
  )

const getContainerClass = (props: { size: string; fullWidth: boolean }) =>
  clsx(
    'input__container',
    `input__container--${props.size}`,
    props.fullWidth && 'input__container--full-width',
  )

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
      readOnly = false,
      label,
      helperText,
      errorText,
      className,
      onChange,
      onChangeText,
      onSubmit,
      onFocus,
      onBlur,
      testID,
      name,
      ...rest
    },
    ref,
  ) => {
    const inputId = useId()
    const { value: currentValue, setValue } = useInputValue(value, defaultValue)
    const [isFocused, setIsFocused] = useState(false)

    const showError = state === 'error' && !!errorText
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value
      setValue(nextValue)
      onChange?.(event)
      onChangeText?.(nextValue)
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(event)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') onSubmit?.(event)
    }

    return (
      <div className={getContainerClass({ size, fullWidth })}>
        {label && (
          <label className="input__label" htmlFor={inputId}>
            <span>{label}</span>
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
          type={type === 'textarea' ? 'text' : type}
          className={getInputClass({
            variant,
            size,
            state,
            focused: isFocused,
            disabled,
            readOnly,
            className,
          })}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
