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

import { useRef } from 'react'
import { ModalHeader } from './ModalHeader'
import { ModalContent } from './ModalContent'
import { ModalOverlay } from './ModalOverlay'
import { ModalProvider } from './ModalProvider'
import { ModalBody } from './ModalBody'
import { useReducedMotion } from '../../utils/animations'
import { createPortal } from 'react-dom'
import type { ModalProps } from '@hi-design/types'
import type React from 'react'

const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader
  Content: typeof ModalContent
  Overlay: typeof ModalOverlay
  Provider: typeof ModalProvider
  Body: typeof ModalBody
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
  const prefersReduced = useReducedMotion()

  const modalContent = (
    <ModalProvider visible={visible} onClose={onClose} modalRef={modalRef}>
      <ModalOverlay
        closeOnBackdropPress={closeOnBackdropPress}
        onClose={onClose}
        prefersReduced={prefersReduced}
        testID={testID}
      >
        <ModalContent size={size} prefersReduced={prefersReduced} testID={testID}>
          {(title || showCloseButton) && (
            <ModalHeader
              title={title}
              showCloseButton={showCloseButton}
              onClose={onClose}
              testID={testID}
            />
          )}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ModalOverlay>
    </ModalProvider>
  )

  return visible ? createPortal(modalContent, document.body) : null
}

// Add sub-components as static properties
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Overlay = ModalOverlay
Modal.Provider = ModalProvider
Modal.Body = ModalBody

Modal.displayName = 'Modal'

// Export sub-components
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Overlay = ModalOverlay
Modal.Provider = ModalProvider
Modal.Body = ModalBody

export default Modal