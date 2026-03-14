/**
 * @component Toast
 * @description A toast notification component with auto-dismiss and variant styles
 * @platform React (Web)
 * @type {React.ForwardRefExoticComponent<ToastProps>}
 * @prop {boolean} visible - Whether the toast is visible
 * @prop {string} message - Toast message content
 * @prop {string} variant - Toast variant ('info' | 'success' | 'warning' | 'error')
 * @prop {number} duration - Auto-dismiss duration in milliseconds
 * @prop {string} position - Toast position ('top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left')
 * @prop {Function} onClose - Callback when toast is closed
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <Toast
 *   visible={showToast}
 *   message="Operation successful!"
 *   variant="success"
 *   duration={3000}
 *   position="top"
 *   onClose={() => setShowToast(false)}
 * />
 * ```
 */

import {
  CheckCircleIcon,
  CloseIcon,
  ErrorCircleIcon,
  InfoIcon,
  WarningCircleIcon,
} from '@hi-design/icons'
import type { ToastProps } from '@hi-design/types'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { generateUniqueId, useReducedMotion } from '../../utils/common'
import './Toast.css'

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({
  visible = false,
  message,
  variant = 'info',
  duration = 3000,
  position = 'top',
  onClose,
  testID,
}, ref) => {
  const [isVisible, setIsVisible] = useState(visible)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const prefersReduced = useReducedMotion()
  const toastId = useMemo(() => testID || generateUniqueId('toast'), [testID])

  const handleAnimateOut = useCallback(() => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 300) // Wait for animation to complete
  }, [onClose])

  useEffect(() => {
    if (visible) {
      setIsVisible(true)
      setIsAnimatingOut(false)
    }
  }, [visible])

  useEffect(() => {
    if (!isVisible || duration <= 0 || isAnimatingOut) {
      return undefined
    }

    const timer = setTimeout(() => {
      handleAnimateOut()
    }, duration)

    return () => clearTimeout(timer)
  }, [isVisible, duration, isAnimatingOut, handleAnimateOut])

  const handleClose = () => {
    handleAnimateOut()
  }

  if (!isVisible || !message) return null

  const getIcon = () => {
    const iconProps = {
      size: 24,
      weight: 'regular' as const,
    }

    switch (variant) {
      case 'success':
        return <CheckCircleIcon {...iconProps} />
      case 'error':
        return <ErrorCircleIcon {...iconProps} />
      case 'warning':
        return <WarningCircleIcon {...iconProps} />
      default:
        return <InfoIcon {...iconProps} />
    }
  }

  return (
    <div
      ref={ref}
      className={`toast toast--${variant} toast--${position} ${isAnimatingOut ? 'toast--exiting' : ''} ${prefersReduced ? 'toast--no-animation' : ''}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      data-testid={toastId}
    >
      <div className="toast__icon">{getIcon()}</div>
      <div className="toast__message">{message}</div>
      <button
        className="toast__close"
        onClick={handleClose}
        aria-label="Close toast"
        type="button"
      >
        <CloseIcon size={16} weight="regular" />
      </button>
    </div>
  )
})

Toast.displayName = 'Toast'

export default memo(Toast)