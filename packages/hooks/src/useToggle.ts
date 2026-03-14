/**
 * useToggle Hook
 * @description Hook for toggling boolean values
 */
import { useCallback, useState } from 'react'

type ToggleHandler = (nextValue?: boolean) => void

export function useToggle(initialValue: boolean = false): [boolean, ToggleHandler] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback((nextValue?: boolean) => {
    if (typeof nextValue === 'boolean') {
      setValue(nextValue)
      return
    }

    setValue((prev) => !prev)
  }, [])

  return [value, toggle] as const
}
