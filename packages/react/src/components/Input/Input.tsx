/**
 * Input - Text input component
 *
 * From design-tokens.pen YNKAV - HI Inputs - Ink Canvas
 * "Calm fields built on Ink and Canvas, with Iris reserved for focus and validation kept restrained."
 *
 * @platform React
 * @usage
 * ```tsx
 * <Input
 *   label="Email"
 *   variant="outline"
 *   size="md"
 *   state="error"
 *   errorText="Invalid email"
 * />
 * ```
 */

import { scale } from '@hi-design/tokens'
import type { InputProps } from '@hi-design/types'
import { forwardRef, useId, useState } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      placeholder,
      type = 'text',
      variant = 'outline', // System Note 1: "Outline should be the default system field"
      size = 'md',
      state = 'default',
      disabled = false,
      fullWidth = false,
      required = false,
      readOnly = false,
      label,
      helperText,
      errorText,
      successText,
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
    const [internalValue, setInternalValue] = useState(defaultValue || '')
    const [isFocused, setIsFocused] = useState(false)

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const showError = state === 'error' && !!errorText
    const showSuccess = state === 'success' && !!successText
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`
    const successId = `${inputId}-success`

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value
      if (!isControlled) {
        setInternalValue(nextValue)
      }
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
      if (event.key === 'Enter') {
        onSubmit?.(event)
      }
    }

    // Base input styles
    const baseInputStyle: React.CSSProperties = {
      width: fullWidth ? '100%' : 'auto',
      boxSizing: 'border-box',
      border: '1px solid',
      outline: 'none',
      fontFamily: 'Inter, -apple-system, sans-serif',
      fontSize: 14, // From design-tokens.pen
      lineHeight: 1.5,
      transition: `all ${scale.animation.duration.normal}ms ${scale.animation.easing.ease}`,
      cursor: disabled ? 'not-allowed' : readOnly ? 'default' : 'text',
    }

    // Size variants from design-tokens.pen YNKAV (Input) & nKmNF (Textarea)
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        paddingTop: 10, // Compact for utilities
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8, // From design-tokens.pen: 16 / 2
        minHeight: 32,
      },
      md: {
        paddingTop: 14, // From design-tokens.pen: padding [14,16]
        paddingBottom: 14,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8, // From design-tokens.pen: 16 / 2
        minHeight: 40,
      },
      lg: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10, // From design-tokens.pen: 20 / 2
        minHeight: 48,
      },
    }

    // Textarea-specific sizes from design-tokens.pen nKmNF
    const textareaSizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        minHeight: 72, // From design-tokens.pen nKmNF: Compact / 72
      },
      md: {
        minHeight: 120, // From design-tokens.pen nKmNF: Default / 120
      },
      lg: {
        minHeight: 168, // From design-tokens.pen nKmNF: Large / 168
      },
    }

    // Variant styles from design-tokens.pen YNKAV (Input) & nKmNF (Textarea)
    const getVariantStyles = (): React.CSSProperties => {
      if (variant === 'filled') {
        // Filled: softer background for dense forms
        return {
          backgroundColor: disabled
            ? scale.color.neutral[100]
            : scale.color.neutral[50],
          border: 'none',
          borderBottom: isFocused
            ? `2px solid ${scale.color.primary[500]}` // Focus uses Iris
            : state === 'error'
              ? `2px solid ${scale.color.error[500]}` // Error scoped to border
              : state === 'success'
                ? `2px solid ${scale.color.success[500]}`
                : `2px solid ${scale.color.neutral[200]}`,
          borderRadius: `${sizeStyles[size].borderRadius as number}px ${sizeStyles[size].borderRadius as number}px 0 0`,
        }
      }

      // Outline (default): $bg-primary background, $border-default border
      return {
        backgroundColor: disabled
          ? scale.color.neutral[100]
          : scale.color.neutral[0], // $bg-primary
        border: isFocused
          ? `1px solid ${scale.color.primary[500]}` // Focus uses Iris (System Note 3)
          : state === 'error'
            ? `1px solid ${scale.color.error[500]}` // Error scoped to border (System Note 3)
            : state === 'success'
              ? `1px solid ${scale.color.success[500]}`
              : `1px solid ${scale.color.neutral[300]}`, // $border-default - "stays quiet"
      }
    }

    // State styles
    const getStateStyles = (): React.CSSProperties => {
      if (disabled) {
        return {
          opacity: 0.5,
          cursor: 'not-allowed',
        }
      }
      if (readOnly) {
        return {
          backgroundColor: scale.color.neutral[50],
          cursor: 'default',
        }
      }
      return {}
    }

    // Container styles
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 6, // Tight spacing
      width: fullWidth ? '100%' : 'auto',
    }

    // Label styles (System Note 2: "Labels stay visible in product forms")
    const labelStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 13,
      fontWeight: 500,
      color: scale.color.neutral[900],
    }

    const requiredStyle: React.CSSProperties = {
      color: scale.color.error[500],
      marginLeft: 2,
    }

    // Helper text styles (System Note 3: "Success and error stay scoped to helper copy")
    const helperTextStyle: React.CSSProperties = {
      fontSize: 13,
      color: scale.color.neutral[600],
    }

    const errorTextStyle: React.CSSProperties = {
      fontSize: 13,
      color: scale.color.error[500],
    }

    const successTextStyle: React.CSSProperties = {
      fontSize: 13,
      color: scale.color.success[500],
    }

    return (
      <div style={containerStyle} className={className}>
        {/* Label (System Note 2: Labels stay visible) */}
        {label && (
          <label style={labelStyle} htmlFor={inputId}>
            <span>{label}</span>
            {required && <span style={requiredStyle}>*</span>}
          </label>
        )}

        {/* Input/Textarea field */}
        {type === 'textarea' ? (
          <textarea
            ref={ref as any}
            id={inputId}
            style={{
              ...baseInputStyle,
              ...sizeStyles[size],
              ...textareaSizeStyles[size], // Textarea heights from nKmNF
              ...getVariantStyles(),
              ...getStateStyles(),
              resize: 'vertical', // Allow vertical resize (System Note 4)
              fontFamily: 'Inter, -apple-system, sans-serif',
            }}
            value={currentValue}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            onChange={handleChange as any}
            onFocus={handleFocus as any}
            onBlur={handleBlur as any}
            onKeyDown={handleKeyDown as any}
            data-testid={testID}
            name={name}
            aria-invalid={state === 'error'}
            aria-describedby={
              showError ? errorId : showSuccess ? successId : helperText ? helperId : undefined
            }
            aria-required={required}
            {...rest}
          />
        ) : (
          <input
            ref={ref}
            id={inputId}
            type={type}
            style={{
              ...baseInputStyle,
              ...sizeStyles[size],
              ...getVariantStyles(),
              ...getStateStyles(),
            }}
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
            aria-describedby={
              showError ? errorId : showSuccess ? successId : helperText ? helperId : undefined
            }
            aria-required={required}
            {...rest}
          />
        )}

        {/* Helper/Error/Success text (System Note 3: scoped to helper copy) */}
        {(helperText || showError || showSuccess) && (
          <div
            id={showError ? errorId : showSuccess ? successId : helperId}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {showError ? (
              <span style={errorTextStyle}>{errorText}</span>
            ) : showSuccess ? (
              <span style={successTextStyle}>{successText}</span>
            ) : (
              <span style={helperTextStyle}>{helperText}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
