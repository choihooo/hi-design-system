/**
 * @component Modal
 * @description A modal dialog component with backdrop, close button, and size variants
 * @platform React
 * @usage
 * ```tsx
 * <Modal
 *   visible={isOpen}
 *   title="Modal Title"
 *   size="md"
 *   onClose={() => setIsOpen(false)}
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 * ```
 */

import type { ModalProps } from '@hi-design/types'
import { X } from 'lucide-react'
import type React from 'react'
import { memo, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from '../../utils/animations'
import './Modal.css'

export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title,
  size = 'md',
  closeOnBackdropPress = true,
  showCloseButton = true,
  onClose,
  children,
  testID,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()

  // Generate unique IDs for ARIA attributes
  const titleId = useMemo(() => `${testID || 'hi-modal'}-title`, [testID])
  const modalId = useMemo(() => testID || 'hi-modal', [testID])

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible && onClose) {
        onClose()
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleEscape)
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [visible, onClose])

  // Focus trap
  useEffect(() => {
    if (visible && modalRef.current) {
      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      firstElement?.focus()

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTab)

      return () => {
        document.removeEventListener('keydown', handleTab)
        // Restore focus when modal closes
        previousActiveElement.current?.focus()
      }
    }
  }, [visible])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  const modalContent = (
    <div
      className={`hi-modal-overlay ${prefersReduced ? 'hi-modal-overlay--no-animation' : ''}`}
      onClick={closeOnBackdropPress ? onClose : undefined}
      data-testid={testID ? `${testID}-overlay` : 'hi-modal-overlay'}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`hi-modal hi-modal--${size} ${prefersReduced ? 'hi-modal--no-animation' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        id={modalId}
        data-testid={modalId}
      >
        {(title || showCloseButton) && (
          <div className="hi-modal__header">
            {title && (
              <h2 id={titleId} className="hi-modal__title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className="hi-modal__close"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <X width={20} height={20} strokeWidth={2} />
              </button>
            )}
          </div>
        )}
        <div className="hi-modal__body">{children}</div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default memo(Modal)
