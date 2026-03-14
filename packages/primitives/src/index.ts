/**
 * @hi-design/primitives
 *
 * Core primitive components for HI Design System
 * Platform-agnostic building blocks for all UI components
 *
 * @AI-friendly: Maximum - Clear structure, single responsibility, predictable patterns
 *
 * Primitives are the foundation of all components:
 * - Box: Layout and structure
 * - Text: Typography and content
 * - Pressable: Interaction and states
 * - Icon: Visual symbols and graphics
 *
 * All complex components are combinations of these primitives:
 * - Button = Pressable + Text + (optional Icon)
 * - Input = Box + Text + Pressable
 * - Card = Box + (optional Pressable)
 * - Modal = Box + Pressable + Text
 *
 * Usage pattern:
 * 1. Start with Box for layout
 * 2. Add Text for content
 * 3. Wrap in Pressable for interaction
 * 4. Add Icon for visual elements
 */

// Core primitives
export { default as Box } from './Box/Box'

export { default as Text } from './Text/Text'

export { default as Pressable } from './Pressable/Pressable'

export { default as Icon } from './Icon/Icon'
