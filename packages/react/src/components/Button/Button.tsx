/**
 * @component Button
 * @description Interactive button component with multiple variants and sizes
 * @platform React (Web)
 * @type {React.ForwardRefExoticComponent<ButtonProps>}
 * @prop {string} variant - Style variant ('primary' | 'secondary' | 'ghost' | 'outline')
 * @prop {string} size - Button size ('sm' | 'md' | 'lg')
 * @prop {boolean} disabled - Disabled state
 * @prop {boolean} loading - Loading state
 * @prop {boolean} fullWidth - Full width option
 * @prop {Function} onPress - Press handler (recommended)
 * @prop {Function} onClick - Click handler (legacy)
 * @prop {string} className - Additional CSS classes
 * @prop {React.ReactNode} children - Button content
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <Button variant="primary" onPress={handleClick}>Click me</Button>
 * <Button variant="secondary" size="lg">Secondary</Button>
 * <Button disabled>Disabled</Button>
 * ```
 */

import type { ButtonProps } from '@hi-design/types'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import './Button.css'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onPress,
  onClick,
  className,
  children,
  testID,
  ...rest
}, ref) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [hasFocus, setHasFocus] = useState<boolean>(false)

  const handleClick = (): void => {
    if (disabled || loading) return
    onPress?.()
    onClick?.()
  }

  const buttonClassName = clsx(
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    disabled && 'button--disabled',
    loading && 'button--loading',
    isPressed && 'button--pressed',
    hasFocus && 'button--focused',
    className,
  )

  const handleMouseDown = (): void => setIsPressed(true)
  const handleMouseUp = (): void => setIsPressed(false)
  const handleMouseLeave = (): void => setIsPressed(false)

  const handleFocus = (): void => setHasFocus(true)
  const handleBlur = (): void => setHasFocus(false)

  const disabledProps = disabled || loading ? { disabled: true } : {}
  const loadingProps = loading ? { 'data-loading': 'true' } : {}

  return (
    <button
      ref={ref}
      className={buttonClassName}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-testid={testID}
      type="button"
      {...disabledProps}
      {...loadingProps}
      {...rest}
    >
      {loading && <span className="button__spinner" />}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button