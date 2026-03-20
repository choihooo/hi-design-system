/**
 * Select - Dropdown selection component
 *
 * From design-tokens.pen xsgzN - HI Selects - Guided Choice
 * "Guided choice patterns that stay calm when closed and become highly legible when opened."
 *
 * @platform React
 * @usage
 * ```tsx
 * <Select
 *   label="Category"
 *   options={options}
 *   value={value}
 *   onChange={handleChange}
 * />
 * ```
 */

import { scale } from '@hi-design/tokens'
import type { SelectProps as SelectPropsType } from '@hi-design/types'
import { forwardRef, useId, useRef, useState, useEffect } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<SelectPropsType, 'options'> {
  options: SelectOption[]
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = 'Select...',
      size = 'md',
      state = 'default',
      disabled = false,
      searchable = false,
      label,
      helperText,
      errorText,
      onChange,
      className,
      testID,
      name,
    },
    ref,
  ) => {
    const selectId = useId()
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : defaultValue

    const showError = state === 'error' && !!errorText

    // Filter options based on search query
    const filteredOptions = searchable
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : options

    // Get selected option
    const selectedOption = options.find((opt) => opt.value === currentValue)

    const handleSelect = (optionValue: string) => {
      const option = options.find((opt) => opt.value === optionValue)
      if (option && !option.disabled) {
        onChange?.(optionValue)
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen)
        setSearchQuery('')
      }
    }

    // Close on click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    // Keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setIsOpen(true)
        }
        return
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev,
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0))
          break
        case 'Enter':
          event.preventDefault()
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex].value)
          }
          break
        case 'Escape':
          event.preventDefault()
          setIsOpen(false)
          break
      }
    }

    // Size styles from design-tokens.pen xsgzN
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        minHeight: 32,
        fontSize: 13,
      },
      md: {
        minHeight: 40,
        fontSize: 14,
      },
      lg: {
        minHeight: 48,
        fontSize: 16,
      },
    }

    // Trigger styles (System Note 2: "Keep the trigger calm")
    const triggerStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      minHeight: sizeStyles[size].minHeight,
      padding: '10px 12px',
      border: '1px solid',
      borderColor: isOpen
        ? scale.color.primary[500] // Focus uses Iris
        : state === 'error'
          ? scale.color.error[500]
          : scale.color.neutral[300],
      borderRadius: 8,
      backgroundColor: disabled ? scale.color.neutral[100] : scale.color.neutral[0],
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: sizeStyles[size].fontSize,
      color: selectedOption ? scale.color.neutral[900] : scale.color.neutral[500],
      transition: 'all 150ms ease',
      boxSizing: 'border-box',
    }

    const dropdownStyle: React.CSSProperties = {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 4,
      backgroundColor: scale.color.neutral[50], // $surface-elevated
      border: '1px solid',
      borderColor: scale.color.neutral[200], // $border-default
      borderRadius: 16, // From design-tokens.pen f1zzZ
      boxShadow: scale.shadow.lg,
      maxHeight: 240,
      overflowY: 'auto',
      zIndex: 1000,
      padding: 8, // From design-tokens.pen f1zzZ
    }

    const optionStyle = (isSelected: boolean, isHighlighted: boolean, isDisabled: boolean): React.CSSProperties => ({
      padding: '12px 14px', // From design-tokens.pen f1zzZ: [12,14]
      fontSize: sizeStyles[size].fontSize,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      backgroundColor: isSelected
        ? '#E0E7FF' // $brand-100 - Iris 100단계 (연한 보라)
        : isHighlighted
          ? scale.color.neutral[100]
          : 'transparent',
      color: isDisabled
        ? scale.color.neutral[400]
        : isSelected
          ? scale.color.primary[700] // $brand-primary-active
          : scale.color.neutral[900], // $text-primary
      fontWeight: isSelected ? 600 : 400, // Selected: 600, Normal: normal (400)
      borderRadius: 12, // From design-tokens.pen f1zzZ
      transition: 'all 150ms ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    })

    // Container styles
    const containerStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
    }

    // Label styles (System Note 4: "Labels should stay visible")
    const labelStyle: React.CSSProperties = {
      fontSize: 13,
      fontWeight: 500,
      color: scale.color.neutral[900],
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    }

    const requiredStyle: React.CSSProperties = {
      color: scale.color.error[500],
    }

    // Helper text styles
    const helperTextStyle: React.CSSProperties = {
      fontSize: 13,
      color: scale.color.neutral[600],
    }

    const errorTextStyle: React.CSSProperties = {
      fontSize: 13,
      color: scale.color.error[500],
    }

    return (
      <div
        ref={containerRef}
        style={containerStyle}
        className={className}
        data-test-id={testID}
      >
        {/* Label (System Note 4: Labels stay visible) */}
        {label && (
          <label style={labelStyle} htmlFor={selectId}>
            {label}
            {name && <span style={requiredStyle}>*</span>}
          </label>
        )}

        {/* Select Trigger */}
        <div ref={ref} tabIndex={disabled ? -1 : 0}>
          <div
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-labelledby={label ? selectId : undefined}
            tabIndex={0}
            style={triggerStyle}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
          >
            <span>{selectedOption ? selectedOption.label : placeholder}</span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              style={{
                transition: 'transform 200ms ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div style={dropdownStyle} role="listbox">
              {/* Search input (if searchable) */}
              {searchable && (
                <div style={{ padding: '8px 12px', borderBottom: `1px solid ${scale.color.neutral[200]}` }}>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      border: `1px solid ${scale.color.neutral[300]}`,
                      borderRadius: 6,
                      fontSize: sizeStyles[size].fontSize,
                      outline: 'none',
                    }}
                    autoFocus
                  />
                </div>
              )}

              {/* Options */}
              {filteredOptions.length === 0 ? (
                <div style={{ padding: '12px', color: scale.color.neutral[500], fontSize: sizeStyles[size].fontSize }}>
                  No options found
                </div>
              ) : (
                filteredOptions.map((option, index) => (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={option.value === currentValue}
                    style={optionStyle(
                      option.value === currentValue,
                      index === highlightedIndex,
                      option.disabled || false,
                    )}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <span>{option.label}</span>
                    {option.value === currentValue && (
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Helper/Error text */}
        {(helperText || showError) && (
          <div style={{ fontSize: 13 }}>
            {showError ? (
              <span style={errorTextStyle}>{errorText}</span>
            ) : (
              <span style={helperTextStyle}>{helperText}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'

export default Select
