import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'

/**
 * Modal Component Stories
 */
const meta = {
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    visible: true,
    title: 'Modal Title',
    children: <div>Modal content goes here.</div>,
    onClose: () => {},
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// Sizes
export const Small: Story = {
  args: { size: 'sm' },
}

export const Medium: Story = {
  args: { size: 'md' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

// States
export const WithoutCloseButton: Story = {
  args: {
    showCloseButton: false,
  },
}
