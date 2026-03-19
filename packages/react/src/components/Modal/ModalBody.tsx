/**
 * @component ModalBody
 * @description Modal body component for content
 * @platform React (Web)
 * @type {React.FC<ModalBodyProps>}
 * @prop {React.ReactNode} children - Modal body content
 * @prop {string} className - Additional CSS classes
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <ModalBody>
 *   <p>Content goes here</p>
 * </ModalBody>
 * ```
 */

import { clsx } from 'clsx'
import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalBodyProps extends BaseComponentProps {
  children: React.ReactNode
  descriptionId?: string
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  testID,
  descriptionId,
}) => {
  return (
    <div
      className={clsx('modal__body', className)}
      data-testid={testID ? `${testID}-body` : 'modal-body'}
      id={descriptionId}
    >
      {children}
    </div>
  )
}
