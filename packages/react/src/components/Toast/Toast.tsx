/**
 * @component Toast
 * @description A toast notification component with auto-dismiss and variant styles
 * @platform React
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

import type { ToastProps } from '@hi-design/types'
import { AlertTriangle, CheckCircle, Info, X, XCircle } from 'lucide-react'
import type React from 'react'
import { memo, useEffect, useState } from 'react'
import { useReducedMotion } from '../../utils/animations'
import './Toast.css'

export const Toast: React.FC<ToastProps> = ({
  visible = false,
  message,
  variant = 'info',
  duration = 3000,
  position = 'top',
  onClose,
  testID,
}) => {
  const [isVisible, setIsVisible] = useState(visible)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const prefersReduced = useReducedMotion()

  const handleAnimateOut = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 300) // Wait for animation to complete
  }

  useEffect(() => {
    if (visible) {
      setIsVisible(true)
      setIsAnimatingOut(false)
    }
  }, [visible])

  useEffect(() => {
    if (isVisible && duration > 0 && !isAnimatingOut) {
      const timer = setTimeout(() => {
        handleAnimateOut()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, isAnimatingOut, handleAnimateOut])

  const handleClose = () => {
    handleAnimateOut()
  }

  if (!isVisible || !message) return null

  const getIcon = () => {
    const iconProps = {
      width: 24,
      height: 24,
      strokeWidth: 2,
    }

    switch (variant) {
      case 'success':
        return <CheckCircle {...iconProps} />
      case 'error':
        return <XCircle {...iconProps} />
      case 'warning':
        return <AlertTriangle {...iconProps} />
      default:
        return <Info {...iconProps} />
    }
  }

  return (
    <div
      className={`hi-toast hi-toast--${variant} hi-toast--${position} ${isAnimatingOut ? 'hi-toast--exiting' : ''} ${prefersReduced ? 'hi-toast--no-animation' : ''}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      data-testid={testID || 'hi-toast'}
    >
      <div className="hi-toast__icon">{getIcon()}</div>
      <div className="hi-toast__message">{message}</div>
      <button
        className="hi-toast__close"
        onClick={handleClose}
        aria-label="Close toast"
        type="button"
      >
        <X width={16} height={16} strokeWidth={2} />
      </button>
    </div>
  )
}

export default memo(Toast)
