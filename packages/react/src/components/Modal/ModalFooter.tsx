import { clsx } from 'clsx'
import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalFooterProps extends BaseComponentProps {
  children: React.ReactNode
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, testID }) => {
  return (
    <div
      className={clsx('modal__footer', className)}
      data-testid={testID ? `${testID}-footer` : 'modal-footer'}
    >
      {children}
    </div>
  )
}
