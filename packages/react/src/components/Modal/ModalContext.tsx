/**
 * @component ModalContext
 * @description Modal component context for state management
 * @platform React (Web)
 */

import { createContext, useContext } from 'react'

export interface ModalContextType {
  isOpen: boolean
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement>
  previousActiveElement: React.MutableRefObject<HTMLElement | null>
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}
