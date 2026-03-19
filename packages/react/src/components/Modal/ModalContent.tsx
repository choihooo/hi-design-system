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

import { clsx } from 'clsx'
import type { BaseComponentProps } from '../../utils/common'
import './Modal.css'

export interface ModalContentProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  prefersReducedMotion?: boolean
  children: React.ReactNode
  modalId?: string
  titleId?: string
  descriptionId?: string
  modalRef?: React.RefObject<HTMLDivElement>
}

export const ModalContent: React.FC<ModalContentProps> = ({
  size = 'md',
  prefersReducedMotion = false,
  children,
  className,
  testID,
  modalId,
  titleId,
  descriptionId,
  modalRef,
}) => {
  const contentClassName = clsx(
    'modal',
    `modal--${size}`,
    prefersReducedMotion && 'modal--no-animation',
    className,
  )

  return (
    <div
      ref={modalRef}
      className={contentClassName}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-label={titleId ? undefined : 'Modal dialog'}
      id={modalId}
      data-testid={testID ? `${testID}-content` : 'modal-content'}
      tabIndex={-1}
    >
      {children}
    </div>
  )
}
