import type { Meta, StoryObj } from '@storybook/react'
import Button from '../Button/Button'
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
    title: 'Publish changes?',
    showCloseButton: false,
    size: 'sm',
    children: (
      <>
        <p>Your latest draft will become visible to collaborators immediately.</p>
        <Modal.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Publish</Button>
        </Modal.Footer>
      </>
    ),
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
