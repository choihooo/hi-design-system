/**
 * useClickOutside Hook
 * @description Hook for detecting clicks outside a component
 */
import { type RefObject, useEffect } from 'react'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent) => void,
): void {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [ref, callback])
}
