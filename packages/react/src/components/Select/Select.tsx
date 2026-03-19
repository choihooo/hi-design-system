/**
 * Select - Guided choice trigger with optional search and inline menu
 *
 * @usage
 * <Select label="Country" options={options} onValueChange={setCountry} />
 */

import type { SelectOption, SelectProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react'
import './Select.css'

const useSelectValue = (value: string | undefined, defaultValue: string | undefined) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  return {
    value: isControlled ? value : internalValue,
    setValue: (nextValue: string) => !isControlled && setInternalValue(nextValue),
  }
}

const getContainerClass = (size: string, fullWidth: boolean) =>
  clsx(
    'select__container',
    `select__container--${size}`,
    fullWidth && 'select__container--full-width',
  )

const getTriggerClass = (props: {
  variant: string
  size: string
  state: string
  open: boolean
  disabled: boolean
  empty: boolean
  className?: string
}) =>
  clsx(
    'select__trigger',
    `select__trigger--${props.variant}`,
    `select__trigger--${props.size}`,
    `select__trigger--${props.state}`,
    props.open && 'select__trigger--open',
    props.disabled && 'select__trigger--disabled',
    props.empty && 'select__trigger--empty',
    props.className,
  )

const filterOptions = (options: SelectOption[], query: string) => {
  const term = query.trim().toLowerCase()
  if (!term) return options
  return options.filter((option) =>
    [option.label, ...(option.keywords || [])].some((value) => value.toLowerCase().includes(term)),
  )
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = 'Select an option',
      variant = 'default',
      size = 'md',
      state = 'default',
      disabled = false,
      fullWidth = false,
      required = false,
      label,
      helperText,
      errorText,
      searchable,
      searchPlaceholder = 'Search',
      emptyText = 'No matching options',
      className,
      testID,
      name,
      onValueChange,
      onOpenChange,
      onFocus,
      onBlur,
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)
    const inputId = useId()
    const listboxId = `${inputId}-listbox`
    const { value: currentValue, setValue } = useSelectValue(value, defaultValue)
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const isSearchable = searchable || variant === 'search'
    const selectedOption = useMemo(
      () => options.find((option) => option.value === currentValue),
      [currentValue, options],
    )
    const filteredOptions = useMemo(() => filterOptions(options, query), [options, query])
    const showError = state === 'error' && !!errorText
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    useEffect(() => {
      if (!open) return
      const handlePointerDown = (event: MouseEvent) => {
        if (!rootRef.current?.contains(event.target as Node)) {
          setOpen(false)
          onOpenChange?.(false)
        }
      }
      document.addEventListener('mousedown', handlePointerDown)
      return () => document.removeEventListener('mousedown', handlePointerDown)
    }, [open, onOpenChange])

    useEffect(() => {
      if (open && isSearchable) searchRef.current?.focus()
      if (!open) setQuery('')
    }, [isSearchable, open])

    const commitOpen = (nextOpen: boolean) => {
      setOpen(nextOpen)
      onOpenChange?.(nextOpen)
    }

    const handleSelect = (option: SelectOption) => {
      setValue(option.value)
      onValueChange?.(option.value, option)
      commitOpen(false)
    }

    return (
      <div className={getContainerClass(size, fullWidth)} ref={rootRef}>
        {label && (
          <label className="select__label" htmlFor={inputId}>
            {label}
            {required && (
              <span className="select__required" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {name && <input type="hidden" name={name} value={currentValue || ''} />}
        <button
          ref={ref}
          id={inputId}
          type="button"
          className={getTriggerClass({
            variant,
            size,
            state,
            open,
            disabled,
            empty: !selectedOption,
            className,
          })}
          disabled={disabled}
          onClick={() => commitOpen(!open)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              commitOpen(true)
            }
            if (event.key === 'Escape') commitOpen(false)
          }}
          data-testid={testID}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-invalid={state === 'error'}
          aria-describedby={showError ? errorId : helperText ? helperId : undefined}
        >
          <span className="select__value">{selectedOption?.label || placeholder}</span>
          <span className="select__chevron" aria-hidden="true" />
        </button>
        {open && (
          <div className="select__menu">
            {isSearchable && (
              <div className="select__search-shell">
                <input
                  ref={searchRef}
                  className="select__search"
                  value={query}
                  placeholder={searchPlaceholder}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            )}
            <div className="select__options" id={listboxId} role="listbox">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    className={clsx(
                      'select__option',
                      option.value === currentValue && 'select__option--selected',
                    )}
                    aria-selected={option.value === currentValue}
                    disabled={option.disabled}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </button>
                ))
              ) : (
                <div className="select__empty">{emptyText}</div>
              )}
            </div>
          </div>
        )}
        {(helperText || showError) && (
          <div className="select__helper" id={showError ? errorId : helperId}>
            {showError ? (
              <span className="select__error" role="alert">
                {errorText}
              </span>
            ) : (
              <span className="select__helper-text">{helperText}</span>
            )}
          </div>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'

export default Select
