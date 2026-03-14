/**
 * @component ModalHeader
 * @description Modal header component with title and close button
 * @platform React (Web)
 * @type {React.FC<ModalHeaderProps>}
 * @prop {string} title - Modal title text
 * @prop {boolean} showCloseButton - Whether to show the close button
 * @prop {Function} onClose - Callback when modal is closed
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <ModalHeader title="Modal Title" showCloseButton onClose={handleClose} />
 * ```
 */

import { CloseIcon } from '@hi-design/icons'
import type { BaseComponentProps } from '../../utils/common'
import { clsx } from 'clsx'
import './Modal.css'

export interface ModalHeaderProps extends BaseComponentProps {
  title?: string
  showCloseButton?: boolean
  onClose?: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  showCloseButton = true,
  onClose,
  className,
  testID,
}) => {
  const headerClassName = clsx('modal__header', className)

  return (
    <div className={headerClassName} data-testid={testID}>
      {title && (
        <h2 className="modal__title" id={`${testID || 'modal'}-title`}>
          {title}
        </h2>
      )}
      {showCloseButton && (
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
          data-testid={testID ? `${testID}-close` : 'modal-close'}
        >
          <CloseIcon size={20} weight="regular" />
        </button>
      )}
    </div>
  )
}