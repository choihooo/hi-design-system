/**
 * @component ModalProvider
 * @description Provider component for modal state management
 * @platform React (Web)
 * @type {React.FC<ModalProviderProps>}
 * @prop {boolean} visible - Whether the modal is visible
 * @prop {Function} onClose - Callback when modal is closed
 * @prop {React.RefObject} modalRef - Modal ref for focus management
 * @prop {React.RefObject} previousActiveElement - Previous focused element
 * @usage
 * ```tsx
 * <ModalProvider visible={isOpen} onClose={handleClose} modalRef={modalRef}>
 *   <Modal>Content</Modal>
 * </ModalProvider>
 * ```
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { ModalContext, ModalContextType } from './ModalContext'

export interface ModalProviderProps {
  visible: boolean
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  visible,
  onClose,
  modalRef,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(visible)
  const previousActiveElement = useRef<HTMLElement | null>(null)

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
    if (!visible || !modalRef.current) {
      return undefined
    }

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
      } else if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleTab)
      // Restore focus when modal closes
      previousActiveElement.current?.focus()
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

  const contextValue: ModalContextType = {
    isOpen: isModalOpen,
    onClose: useCallback(() => {
      setIsModalOpen(false)
      onClose()
    }, [onClose]),
    modalRef,
    previousActiveElement,
  }

  if (!visible) return null

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}