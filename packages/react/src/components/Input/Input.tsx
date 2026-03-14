/**
 * @component Input
 * @description Text input component with label, helper text, and error states
 * @platform React (Web)
 * @AI-friendly: High - Form input with clear states and validation
 *
 * This component provides a complete form input solution:
 * - Built-in validation states (default, error, success)
 * - Accessible form controls with proper labels
 * - Helper text and error messaging
 * - Keyboard navigation support
 *
 * @composition
 * ```tsx
 * Input composition pattern:
 * <div container>
 *   <label>{label}</label>
 *   <input />
 *   <div helper>
 *     {errorText || helperText}
 *   </div>
 * </div>
 * ```
 *
 * @usage
 * ```tsx
 * import { Input } from '@hi-design/react'
 *
 * // Basic input
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 * onChange={setEmail}
 * />
 *
 * // With validation
 * <Input
 *   label="Password"
 *   type="password"
 *   state="error"
 *   errorText="Password must be at least 8 characters"
 *   value={password}
 *   onChange={setPassword}
 * />
 *
 * // Required field
 * <Input
 *   label="Full Name"
 *   required
 *   placeholder="Enter your full name"
 *   value={name}
 *   onChange={setName}
 * />
 *
 * // With helper text
 * <Input
 *   label="Username"
 * helperText="Choose a unique username"
 * placeholder="Enter username"
 *   value={username}
 *   onChange={setUsername}
 * />
 *
 * // Disabled input
 * <Input
 *   label="Read-only field"
 *   disabled
 *   value="Cannot change this"
 * />
 * ```
 *
 * @variants
 * - **outline**: Bordered input (default)
 * - **filled**: Solid background input
 *
 * @sizes
 * - **sm**: Small input (compact forms)
 * - **md**: Medium input (default)
 * - **lg**: Large input (prominent fields)
 *
 * @states
 * - **default**: Normal input state
 * - **error**: Error state with red border and error message
 * - **success**: Success state with green border (optional)
 *
 * @accessibility
 * - Labels: Proper label association with htmlFor
 * - Required fields: Visual indicator and aria-required
 * - Error states: aria-invalid and aria-describedby for screen readers
 * - Helper text: Linked via aria-describedby
 * - Keyboard: Full keyboard navigation support
 * - Focus states: Clear visual focus indicators
 *
 * @validation
 * ```tsx
 * // Email validation example
 * const [email, setEmail] = useState('')
 * const [emailError, setEmailError] = useState('')
 *
 * const validateEmail = (email: string) => {
 *   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *   return emailRegex.test(email)
 * }
 *
 * const handleEmailChange = (newEmail: string) => {
 *   setEmail(newEmail)
 *   if (!validateEmail(newEmail)) {
 *     setEmailError('Please enter a valid email address')
 *   } else {
 *     setEmailError('')
 *   }
 * }
 *
 * <Input
 *   label="Email Address"
 *   state={emailError ? 'error' : 'default'}
 *   errorText={emailError}
 *   value={email}
 * onChange={handleEmailChange}
 *   placeholder="you@example.com"
 *   required
 * />
 * ```
 *
 * @best-practices
 * - Always provide meaningful labels for accessibility
 * - Use helper text to provide additional context
 * - Show specific error messages for validation
 * - Group related inputs using fieldsets/legends
 * - Use appropriate input types (email, password, tel, etc.)
 * - Provide clear formatting hints when needed
 *
 * @see-also
 * - Box: Layout primitive for form containers
 * - Text: Typography primitive for labels
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
