/**
 * @component Modal
 * @description A modal dialog component with backdrop, close button, and size variants
 * @platform React (Web)
 * @type {React.FC<ModalProps>}
 * @prop {boolean} visible - Whether the modal is visible
 * @prop {string} title - Modal title
 * @prop {string} size - Modal size ('sm' | 'md' | 'lg' | 'xl')
 * @prop {boolean} closeOnBackdropPress - Whether to close when backdrop is pressed
 * @prop {boolean} showCloseButton - Whether to show the close button
 * @prop {Function} onClose - Callback when modal is closed
 * @prop {React.ReactNode} children - Modal content
 * @prop {string} testID - Test identifier
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
import type React from 'react'
import { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from '../../utils/animations'
import { ModalBody } from './ModalBody'
import { ModalContent } from './ModalContent'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalOverlay } from './ModalOverlay'
import { ModalProvider } from './ModalProvider'

const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader
  Content: typeof ModalContent
  Overlay: typeof ModalOverlay
  Provider: typeof ModalProvider
  Body: typeof ModalBody
  Footer: typeof ModalFooter
} = ({
  visible = false,
  title,
  size = 'md',
  closeOnBackdropPress = true,
  showCloseButton = true,
  onClose = () => {},
  children,
  testID = 'modal',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const reactId = useId()
  const modalId = `${testID || 'modal'}-${reactId}`
  const titleId = title ? `${modalId}-title` : undefined
  const descriptionId = children ? `${modalId}-description` : undefined

  if (!visible || typeof document === 'undefined') {
    return null
  }

  const modalContent = (
    <ModalProvider visible={visible} onClose={onClose} modalRef={modalRef}>
      <ModalOverlay
        closeOnBackdropPress={closeOnBackdropPress}
        onClose={onClose}
        prefersReducedMotion={prefersReducedMotion}
        testID={testID}
      >
        <ModalContent
          size={size}
          prefersReducedMotion={prefersReducedMotion}
          testID={testID}
          modalId={modalId}
          titleId={titleId}
          descriptionId={descriptionId}
          modalRef={modalRef}
        >
          {(title || showCloseButton) && (
            <ModalHeader
              title={title}
              titleId={titleId}
              showCloseButton={showCloseButton}
              onClose={onClose}
              testID={testID}
            />
          )}
          <ModalBody descriptionId={descriptionId} testID={testID}>
            {children}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </ModalProvider>
  )

  return createPortal(modalContent, document.body)
}

Modal.displayName = 'Modal'

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Overlay = ModalOverlay
Modal.Provider = ModalProvider
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
