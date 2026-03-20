/**
 * Checkbox - Independent choice control component
 *
 * From design-tokens.pen screen 4hnIV: HI Choice Controls - Checkbox Radio
 * "Choice controls that stay quiet in forms, clear in lists, and unmistakable when state changes matter."
 *
 * Checkbox Use: "Independent options where more than one item can be on, off, or partially selected."
 *
 * @platform React
 * @usage
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={checked}
 *   onChange={setIsChecked}
 *   helperText="You must accept before continuing"
 * />
 * ```
 */

import { semantic } from '@hi-design/tokens';
import type { CheckboxProps } from '@hi-design/types';
import { forwardRef, useId, useState, type CSSProperties } from 'react';

type IconProps = {
  size: number;
  color: string;
};

const CheckIcon = ({ size, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', pointerEvents: 'none' }}
    aria-hidden="true"
  >
    <polyline points="2.5 8.5 6.5 12 13.5 4.5" />
  </svg>
);

const MinusIcon = ({ size, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', pointerEvents: 'none' }}
    aria-hidden="true"
  >
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      disabled = false,
      required = false,
      label,
      helperText,
      errorText,
      size = 'md',
      onChange,
      className,
      testID,
      name,
      value,
      style,
      ...rest
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const labelId = useId();
    const helperId = useId();

    const hasError = Boolean(errorText);
    const isIndeterminate = indeterminate;
    const isChecked = checked && !isIndeterminate;

    const sizeStyles = {
      sm: {
        controlSize: 16,
        iconSize: 12,
        fontSize: 14,
        gap: 6,
        borderRadius: 5,
      },
      md: {
        controlSize: 20,
        iconSize: 14,
        fontSize: 16,
        gap: 8,
        borderRadius: 6,
      },
      lg: {
        controlSize: 24,
        iconSize: 16,
        fontSize: 18,
        gap: 10,
        borderRadius: 7,
      },
    } as const;

    const currentSize = sizeStyles[size];

    const handlePress = () => {
      if (disabled) return;

      const newChecked = isIndeterminate ? true : !checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked);
    };

    const getControlStyle = (): CSSProperties => {
      const base: CSSProperties = {
        width: currentSize.controlSize,
        height: currentSize.controlSize,
        minWidth: currentSize.controlSize,
        minHeight: currentSize.controlSize,
        borderRadius: currentSize.borderRadius,
        border: '1.5px solid',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        flexShrink: 0,
        boxSizing: 'border-box',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition:
          'background-color 150ms ease-in-out, border-color 150ms ease-in-out, box-shadow 150ms ease-in-out',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
      };

      if (disabled) {
        base.backgroundColor = semantic.color.background.disabled;
        base.borderColor = semantic.color.border.muted;
        return base;
      }

      if (hasError) {
        base.borderColor = semantic.color.border.error;
        base.backgroundColor =
          isChecked || isIndeterminate
            ? semantic.color.errorBg
            : semantic.color.background.primary;
        return base;
      }

      if (isChecked) {
        base.backgroundColor = semantic.color.brand.primary;
        base.borderColor = semantic.color.brand.primary;
        return base;
      }

      if (isIndeterminate) {
        base.backgroundColor = '#E0E7FF';
        base.borderColor = semantic.color.brand.primary;
        return base;
      }

      base.backgroundColor = semantic.color.background.primary;
      base.borderColor = semantic.color.border.default;
      return base;
    };

    const getIconColor = (): string => {
      if (disabled) return semantic.color.text.disabled;
      if (hasError) return semantic.color.error;
      if (isIndeterminate) return semantic.color.brand.primaryHover;
      return semantic.color.text.inverse;
    };

    const containerStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      ...style,
    };

    const rowStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: currentSize.gap,
    };

    const controlWrapperStyle: CSSProperties = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'flex-start',
      flexShrink: 0,
    };

    const focusRingStyle: CSSProperties = {
      position: 'absolute',
      top: -3,
      left: -3,
      right: -3,
      bottom: -3,
      borderRadius: currentSize.borderRadius + 3,
      pointerEvents: 'none',
      transition: 'box-shadow 150ms ease-in-out',
    };

    const labelStyle: CSSProperties = {
      fontSize: currentSize.fontSize,
      fontWeight: 400,
      color: disabled
        ? semantic.color.text.disabled
        : hasError
          ? semantic.color.error
          : semantic.color.text.primary,
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.5,
    };

    const helperStyle: CSSProperties = {
      fontSize: 14,
      color: disabled
        ? semantic.color.text.disabled
        : hasError
          ? semantic.color.error
          : semantic.color.text.secondary,
      marginTop: semantic.spacing.tight,
      marginLeft: currentSize.controlSize + currentSize.gap,
      fontFamily: 'Inter, -apple-system, sans-serif',
      lineHeight: 1.4,
    };

    return (
      <div style={containerStyle} className={className}>
        <div style={rowStyle}>
          <div style={controlWrapperStyle}>
            <div style={focusRingStyle} data-focus-ring />
            <button
              ref={ref}
              type="button"
              role="checkbox"
              name={name}
              value={value}
              aria-checked={isIndeterminate ? 'mixed' : checked ? 'true' : 'false'}
              aria-required={required}
              aria-invalid={hasError}
              aria-disabled={disabled}
              aria-describedby={helperText || errorText ? helperId : undefined}
              aria-labelledby={label ? labelId : undefined}
              disabled={disabled}
              onClick={handlePress}
              data-test-id={testID || 'checkbox'}
              style={getControlStyle()}
              onFocus={(e) => {
                const focusRing = e.currentTarget.parentElement?.querySelector(
                  '[data-focus-ring]'
                ) as HTMLElement | null;

                if (focusRing) {
                  focusRing.style.boxShadow = `0 0 0 3px ${semantic.color.brand.primary}33`;
                }
              }}
              onBlur={(e) => {
                const focusRing = e.currentTarget.parentElement?.querySelector(
                  '[data-focus-ring]'
                ) as HTMLElement | null;

                if (focusRing) {
                  focusRing.style.boxShadow = 'none';
                }
              }}
              {...rest}
            >
              {isChecked && (
                <CheckIcon size={currentSize.iconSize} color={getIconColor()} />
              )}
              {isIndeterminate && (
                <MinusIcon size={currentSize.iconSize} color={getIconColor()} />
              )}
            </button>
          </div>

          {label && (
            <label
              id={labelId}
              onClick={(e) => {
                if (disabled) return;
                e.preventDefault();
                handlePress();
              }}
              style={labelStyle}
            >
              {label}
              {required && (
                <span style={{ color: semantic.color.error, marginLeft: 2 }}>*</span>
              )}
            </label>
          )}
        </div>

        {(helperText || errorText) && (
          <div id={helperId} style={helperStyle}>
            {errorText || helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;