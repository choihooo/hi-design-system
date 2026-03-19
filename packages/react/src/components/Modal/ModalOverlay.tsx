/**
 * @component ModalOverlay
 * @description Modal overlay with backdrop
 * @platform React (Web)
 * @type {React.FC<ModalOverlayProps>}
 * @prop {boolean} closeOnBackdropPress - Whether to close when backdrop is pressed
 * @prop {Function} onClose - Callback when modal is closed
 * @prop {boolean} prefersReduced - Whether user prefers reduced motion
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <ModalOverlay
 *   closeOnBackdropPress={true}
 *   onClose={handleClose}
 *   prefersReduced={prefersReduced}
 * />
 * ```
 */

import { clsx } from 'clsx'
import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalOverlayProps extends BaseComponentProps {
  closeOnBackdropPress?: boolean
  onClose?: () => void
  prefersReducedMotion?: boolean
  children?: React.ReactNode
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  closeOnBackdropPress = true,
  onClose,
  prefersReducedMotion = false,
  className,
  testID,
  children,
}) => {
  const overlayClassName = clsx(
    'modal-overlay',
    prefersReducedMotion && 'modal-overlay--no-animation',
    className,
  )

  return (
    <div
      className={overlayClassName}
      data-testid={testID ? `${testID}-overlay` : 'modal-overlay'}
      role="presentation"
    >
      {closeOnBackdropPress ? (
        <button
          className="modal-overlay__backdrop"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
          data-testid={testID ? `${testID}-backdrop` : 'modal-backdrop'}
        />
      ) : (
        <div className="modal-overlay__backdrop" aria-hidden="true" />
      )}
      {children}
    </div>
  )
}
