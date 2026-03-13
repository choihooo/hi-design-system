/**
 * useSlot Hook
 * @description Helper for implementing slot-based composition pattern
 *
 * @usage
 * ```tsx
 * const Card = ({ children }) => {
 *   const slots = useSlot({ header: null, body: null, footer: null });
 *   return <div>
 *     {slots.header}
 *     {slots.body}
 *     {slots.footer}
 *   </div>;
 * };
 *
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Action</Card.Footer>
 * </Card>
 * ```
 */
import { createContext, type ReactNode, useContext as useContextReact } from 'react'

export interface Slots {
  [slotName: string]: ReactNode | null
}

/**
 * Slot Context
 */
const SlotContext = createContext<Slots>({})

export function useSlot(initialSlots: Slots = {}): Slots {
  return initialSlots
}

/**
 * createSlotContext
 * @description Creates a context for slot-based components
 */
export function createSlotContext(displayName: string) {
  const Context = createContext<Slots>({})

  function useSlotContext() {
    return useContextReact(Context)
  }

  const Provider = ({ value, children }: { value: Slots; children: ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  )

  Context.displayName = displayName
  Provider.displayName = `${displayName}Provider`

  return { Context, Provider, useSlotContext }
}

/**
 * Slot Component
 * @description Component that registers itself in a slot
 */
export interface SlotProps {
  name: string
  children: ReactNode
}

export function Slot({ name, children }: SlotProps) {
  const slots = useContextReact(SlotContext)
  const updateSlots = useSlot({ ...slots, [name]: children })

  return <SlotContext.Provider value={updateSlots}>{children}</SlotContext.Provider>
}

Slot.displayName = 'Slot'
