/**
 * useKeyboard Hook
 * @description Hook for subscribing to keyboard events for a specific key
 */
import { useEffect } from 'react'

type KeyboardEventName = 'keydown' | 'keyup'
type KeyboardTarget = Pick<Window, 'addEventListener' | 'removeEventListener'>

export interface UseKeyboardOptions {
  enabled?: boolean
  event?: KeyboardEventName
  target?: KeyboardTarget | null
}

export function useKeyboard(
  key: string,
  handler: (event: KeyboardEvent) => void,
  options: UseKeyboardOptions = {},
): void {
  const { enabled = true, event = 'keydown', target } = options

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') {
      return undefined
    }

    const keyboardTarget = target ?? window
    const listener = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === key) {
        handler(keyboardEvent)
      }
    }

    keyboardTarget.addEventListener(event, listener)
    return () => keyboardTarget.removeEventListener(event, listener)
  }, [enabled, event, handler, key, target])
}
