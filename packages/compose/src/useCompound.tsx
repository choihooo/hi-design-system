/**
 * useCompound Hook
 * @description Helper for implementing compound component pattern
 *
 * @usage
 * ```tsx
 * const Parent = ({ children }) => {
 *   const state = useCompound({
 *     active: null,
 *     setActive: (id) => state.active = id
 *   });
 *   return <CompoundContext.Provider value={state}>
 *     {children}
 *   </CompoundContext.Provider>;
 * };
 * ```
 */
import { createContext, useContext as useContextReact, useState } from 'react'

export interface CompoundState<T = unknown> {
  [key: string]: T
}

export function useCompound<T extends CompoundState = CompoundState>(initialState: T): T {
  const [state, setState] = useState<T>(initialState)

  // Create proxy to allow direct mutation (for convenience)
  return new Proxy(state, {
    set(target, property, value) {
      setState({ ...target, [property as string]: value })
      return true
    },
    get(target, property) {
      return target[property as string]
    },
  }) as T
}

/**
 * createCompoundContext
 * @description Creates a context for compound components
 */
export function createCompoundContext<T extends CompoundState = CompoundState>(
  displayName: string,
) {
  const Context = createContext<T | null>(null)

  function useCompoundContext() {
    const context = useContextReact(Context)
    if (!context) {
      throw new Error(`useCompoundContext must be used within ${displayName}Provider`)
    }
    return context
  }

  const Provider = ({ value, children }: { value: T; children: React.ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  )

  Context.displayName = displayName
  Provider.displayName = `${displayName}Provider`

  return { Context, Provider, useCompoundContext }
}
