/**
 * RadioGroup Context
 *
 * Shared context between Radio and RadioGroup components.
 * Created as a separate file to avoid circular dependencies.
 */

import { createContext } from 'react'
import type { RadioGroupContextValue } from '@hi-design/types'

export const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined)
