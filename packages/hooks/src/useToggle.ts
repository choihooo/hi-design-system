/**
 * useToggle Hook
 * @description Hook for toggling boolean values
 */
import { useCallback, useState } from 'react'

export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, toggle] as const
}
