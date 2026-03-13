/**
 * createContext Helper
 * @description Enhanced React createContext with hooks and display names
 *
 * @usage
 * ```tsx
 * const { Context, Provider, useContext } = createContext({
 *   displayName: 'MyContext',
 *   defaultValue: { value: 0 }
 * });
 *
 * // In component
 * const { value } = useContext();
 * ```
 */
import {
  createContext as createContextReact,
  type ReactNode,
  useContext as useContextReact,
} from 'react'

export interface CreateContextOptions<T> {
  displayName: string
  defaultValue: T
  strict?: boolean
  errorMessage?: string
}

export interface CreatedContext<T> {
  Context: React.Context<T | null>
  Provider: ({ children, value }: { children: ReactNode; value: T }) => JSX.Element
  useContext: () => T
}

/**
 * Enhanced createContext with automatic hook generation
 */
export function createContext<T>({
  displayName,
  defaultValue,
  strict = true,
  errorMessage,
}: CreateContextOptions<T>): CreatedContext<T> {
  const Context = createContextReact<T | null>(null)

  function useContext(): T {
    const context = useContextReact(Context)

    if (strict && !context) {
      throw new Error(errorMessage || `useContext must be used within ${displayName}Provider`)
    }

    // In non-strict mode, return context if available, otherwise return defaultValue
    return context || defaultValue
  }

  const Provider = ({ children, value }: { children: ReactNode; value: T }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  )

  Context.displayName = displayName
  Provider.displayName = `${displayName}Provider`

  return { Context, Provider, useContext }
}

/**
 * createNonStrictContext
 * @description Creates a context that doesn't require provider
 */
export function createNonStrictContext<T>({
  displayName,
  defaultValue,
}: CreateContextOptions<T>): CreatedContext<T> {
  return createContext({
    displayName,
    defaultValue,
    strict: false,
  })
}
