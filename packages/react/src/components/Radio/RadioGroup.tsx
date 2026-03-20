/**
 * RadioGroup - Manages a group of radio buttons as a single mutually exclusive selection control
 *
 * From design-tokens.pen screen 4hnIV: HI Choice Controls - Checkbox Radio
 * Radio Use: "One committed choice inside a small, mutually exclusive set with clear alternatives."
 *
 * @platform React
 * @usage
 * ```tsx
 * <RadioGroup
 *   name="plan"
 *   defaultValue="starter"
 *   label="Choose your plan"
 *   helperText="Select the plan that best fits your needs"
 * >
 *   <Radio value="starter" label="Starter Plan" />
 *   <Radio value="pro" label="Pro Plan" />
 *   <Radio value="enterprise" label="Enterprise Plan" />
 * </RadioGroup>
 * ```
 */

import { semantic } from '@hi-design/tokens'
import type { RadioGroupProps, RadioGroupContextValue } from '@hi-design/types'
import { forwardRef, useState, useId } from 'react'
import { RadioGroupContext } from './RadioContext'

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value: controlledValue,
      defaultValue = '',
      disabled = false,
      required = false,
      orientation = 'vertical',
      gap,
      onChange,
      label,
      helperText,
      errorText,
      className,
      testID,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    // State management for controlled/uncontrolled pattern
    const [internalValue, setInternalValue] = useState(defaultValue)
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    // Handle change from child Radio
    const handleChange = (newValue: string) => {
      if (disabled) return

      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    // Generate unique IDs for accessibility
    const groupId = useId()
    const helperId = useId()

    // Context value for child Radio components
    const contextValue: RadioGroupContextValue = {
      name,
      value: currentValue,
      disabled,
      onChange: handleChange,
    }

    // Layout styles
    const groupStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: gap !== undefined ? gap : semantic.spacing.compact, // 8px default
      ...style,
    }

    // Label styles
    const labelStyle: React.CSSProperties = {
      fontSize: 16,
      fontWeight: 600,
      color: semantic.color.text.primary,
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.5,
      marginBottom: helperText || errorText ? semantic.spacing.tight : semantic.spacing.compact, // 4px or 8px
    }

    // Helper text styles
    const helperTextStyle: React.CSSProperties = {
      fontSize: 14,
      color: errorText ? semantic.color.error : semantic.color.text.secondary,
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.4,
      marginBottom: semantic.spacing.compact, // 8px
    }

    // Container styles
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
    }

    return (
      <div ref={ref} style={containerStyle} className={className} data-test-id={testID || 'radio-group'} {...rest}>
        {/* Group Label */}
        {label && (
          <label id={groupId} style={labelStyle}>
            {label}
            {required && <span style={{ color: semantic.color.error, marginLeft: 2 }}>*</span>}
          </label>
        )}

        {/* Helper Text / Error Text */}
        {(helperText || errorText) && (
          <div id={helperId} style={helperTextStyle}>
            {errorText || helperText}
          </div>
        )}

        {/* Radio Group */}
        <div
          role="radiogroup"
          aria-required={required}
          aria-invalid={!!errorText}
          aria-labelledby={label ? groupId : undefined}
          aria-describedby={helperText || errorText ? helperId : undefined}
          style={groupStyle}
        >
          <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>
        </div>
      </div>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
