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
import { clsx } from 'clsx'
import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalHeaderProps extends BaseComponentProps {
  title?: string
  showCloseButton?: boolean
  onClose?: () => void
  titleId?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  showCloseButton = true,
  onClose,
  titleId,
  className,
  testID,
}) => {
  if (!title && !showCloseButton) {
    return null
  }

  const headerClassName = clsx('modal__header', !title && 'modal__header--actions-only', className)

  return (
    <div className={headerClassName} data-testid={testID ? `${testID}-header` : 'modal-header'}>
      {title && (
        <h2 className="modal__title" id={titleId}>
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
