/**
 * @component ModalContent
 * @description Modal content area component
 * @platform React (Web)
 * @type {React.FC<ModalContentProps>}
 * @prop {React.ReactNode} children - Modal content
 * @prop {string} size - Modal size ('sm' | 'md' | 'lg' | 'xl')
 * @prop {boolean} prefersReduced - Whether user prefers reduced motion
 * @prop {string} testID - Test identifier
 * @usage
 * ```tsx
 * <ModalContent size="md" prefersReduced={prefersReduced}>
 *   <p>Modal content goes here</p>
 * </ModalContent>
 * ```
 */

import type { BaseComponentProps } from '../../utils/common'
import { clsx } from 'clsx'
import './Modal.css'

export interface ModalContentProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  prefersReduced?: boolean
  children: React.ReactNode
  modalId?: string
  titleId?: string
}

export const ModalContent: React.FC<ModalContentProps> = ({
  size = 'md',
  prefersReduced = false,
  children,
  className,
  testID,
  modalId,
  titleId,
}) => {
  const contentClassName = clsx(
    'modal',
    `modal--${size}`,
    prefersReduced && 'modal--no-animation',
    className,
  )

  return (
    <div
      className={contentClassName}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      id={modalId}
      data-testid={testID || 'modal-content'}
    >
      {children}
    </div>
  )
}