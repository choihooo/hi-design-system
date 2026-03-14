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

import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalBodyProps extends BaseComponentProps {
  children: React.ReactNode
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  testID,
}) => {
  return (
    <div className={`modal__body ${className || ''}`} data-testid={testID}>
      {children}
    </div>
  )
}