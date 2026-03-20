/**
 * Radio - Mutually exclusive choice control component
 *
 * From design-tokens.pen screen 4hnIV: HI Choice Controls - Checkbox Radio
 * "Choice controls that stay quiet in forms, clear in lists, and unmistakable when state changes matter."
 *
 * Radio Use: "One committed choice inside a small, mutually exclusive set with clear alternatives."
 *
 * @platform React
 * @usage
 * ```tsx
 * <RadioGroup name="plan" defaultValue="starter">
 *   <Radio value="starter" label="Starter Plan" />
 *   <Radio value="pro" label="Pro Plan" />
 *   <Radio value="enterprise" label="Enterprise Plan" />
 * </RadioGroup>
 * ```
 */

import { semantic } from '@hi-design/tokens';
import type { RadioProps } from '@hi-design/types';
import { useContext } from 'react';
import { forwardRef, useState, useId } from 'react';

// Radio Group Context - imported from separate file to avoid circular dependency
import { RadioGroupContext } from './RadioContext';

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      disabled: propDisabled = false,
      required = false,
      label,
      helperText,
      errorText,
      size = 'md',
      value,
      onChange,
      className,
      testID,
      name: propName,
      style,
      ...rest
    },
    ref
  ) => {
    // Get context from RadioGroup if available
    const context = useContext(RadioGroupContext);

    // Determine if this radio is part of a group
    const isInGroup = !!context;

    // Use context values if in group, otherwise use individual props
    const groupValue = isInGroup ? context.value : controlledChecked;
    const groupDisabled = isInGroup ? context.disabled || propDisabled : propDisabled;
    const groupOnChange = isInGroup ? context.onChange : undefined;

    // State management for uncontrolled standalone radio
    const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isInGroup
      ? groupValue === value
      : isControlled
      ? controlledChecked === true
      : internalChecked;

    // Generate unique IDs for accessibility
    const radioId = useId();
    const helperId = useId();

    // Handle press/click
    const handlePress = () => {
      if (groupDisabled) return;

      if (isInGroup && value) {
        // In group: notify parent of value change
        (groupOnChange as ((value: string) => void) | undefined)?.(value);
      } else {
        // Standalone: toggle local state
        const newChecked = !checked;
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        onChange?.(newChecked);
      }
    };

    // Size variants - control size, dot size, font size
    const sizeStyles = {
      sm: {
        controlSize: 16,
        dotSize: 8,
        fontSize: 14,
        gap: 6,
      },
      md: {
        controlSize: 20, // Matches design
        dotSize: 10, // Matches design
        fontSize: 14, // Design shows 14px
        gap: 8, // 12px in design, using 8px for consistency
      },
      lg: {
        controlSize: 24,
        dotSize: 12,
        fontSize: 16,
        gap: 10,
      },
    };

    const currentSize = sizeStyles[size];

    // Determine visual state
    const hasError = !!errorText;

    // Control styles based on state
    const getControlStyle = (): React.CSSProperties => {
      const base: React.CSSProperties = {
        width: currentSize.controlSize,
        height: currentSize.controlSize,
        borderRadius: '50%',
        border: '1.5px solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 150ms ease-in-out',
        cursor: groupDisabled ? 'not-allowed' : 'pointer',
        boxSizing: 'border-box',
        position: 'relative',
      };

      if (groupDisabled) {
        base.backgroundColor = semantic.color.background.tertiary;
        base.borderColor = semantic.color.border.default;
        base.borderWidth = '1px';
      } else if (hasError) {
        base.borderColor = semantic.color.border.error;
      } else if (checked) {
        base.backgroundColor = semantic.color.background.primary;
        base.borderColor = semantic.color.brand.primary;
      } else {
        base.backgroundColor = semantic.color.background.primary;
        base.borderColor = semantic.color.border.default;
      }

      return base;
    };

    const getDotStyle = (): React.CSSProperties => {
      const base: React.CSSProperties = {
        width: currentSize.dotSize,
        height: currentSize.dotSize,
        minWidth: currentSize.dotSize,
        minHeight: currentSize.dotSize,
        borderRadius: '50%',
        display: 'block',
        flexShrink: 0,
        aspectRatio: '1 / 1',
        transition: 'background-color 150ms ease-in-out, transform 150ms ease-in-out',
      };

      if (groupDisabled) {
        base.backgroundColor = semantic.color.text.disabled;
      } else if (hasError) {
        base.backgroundColor = semantic.color.error;
      } else {
        base.backgroundColor = semantic.color.brand.primary;
      }

      return base;
    };

    // Control wrapper for focus ring
    const controlWrapperStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
    };

    const focusRingStyle: React.CSSProperties = {
      position: 'absolute',
      top: -3,
      left: -3,
      right: -3,
      bottom: -3,
      borderRadius: semantic.borderRadius.full,
      pointerEvents: 'none',
      transition: 'box-shadow 150ms ease-in-out',
    };

    // Label styles
    const labelStyle: React.CSSProperties = {
      fontSize: currentSize.fontSize,
      fontWeight: 'normal',
      color: hasError ? semantic.color.error : semantic.color.text.primary,
      cursor: groupDisabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.5,
    };

    // Helper text styles
    const helperStyle: React.CSSProperties = {
      fontSize: 14,
      color: hasError ? semantic.color.error : semantic.color.text.secondary,
      marginTop: semantic.spacing.tight, // 4px
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.4,
    };

    // Container styles
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      ...style,
    };

    // Row styles (control + label)
    const rowStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: currentSize.gap,
    };

    return (
      <div style={containerStyle} className={className}>
        <div style={rowStyle}>
          {/* Control wrapper with focus ring */}
          <div style={controlWrapperStyle}>
            <div style={focusRingStyle} data-focus-ring />
            <button
              ref={ref}
              type="button"
              role="radio"
              aria-checked={checked ? 'true' : 'false'}
              aria-required={required}
              aria-invalid={hasError}
              aria-describedby={helperText ? helperId : undefined}
              aria-labelledby={label ? radioId : undefined}
              disabled={groupDisabled}
              onClick={handlePress}
              data-test-id={testID || 'radio'}
              style={getControlStyle()}
              onFocus={(e) => {
                const focusRing = e.currentTarget.parentElement?.querySelector(
                  '[data-focus-ring]'
                ) as HTMLElement;
                if (focusRing) {
                  focusRing.style.boxShadow = `0 0 0 3px ${semantic.color.brand.primary}33`;
                }
              }}
              onBlur={(e) => {
                const focusRing = e.currentTarget.parentElement?.querySelector(
                  '[data-focus-ring]'
                ) as HTMLElement;
                if (focusRing) {
                  focusRing.style.boxShadow = 'none';
                }
              }}
              {...rest}
            >
              {/* Inner dot (shown when checked) */}
              {checked && <div style={getDotStyle()} />}
            </button>
          </div>

          {/* Label */}
          {label && (
            <label
              id={radioId}
              htmlFor={undefined} // We use button, not input
              onClick={(e) => {
                // Toggle when clicking label
                if (!groupDisabled) {
                  e.preventDefault();
                  handlePress();
                }
              }}
              style={labelStyle}
            >
              {label}
              {required && <span style={{ color: semantic.color.error, marginLeft: 2 }}>*</span>}
            </label>
          )}
        </div>

        {/* Helper text / Error text */}
        {(helperText || errorText) && (
          <div id={helperId} style={helperStyle}>
            {errorText || helperText}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
