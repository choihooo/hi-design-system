import type { Meta, StoryObj } from '@storybook/react'
import Toast from './Toast'

/**
 * Toast Component Stories
 */
const meta = {
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    visible: true,
    message: 'Toast notification',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

// Variants
export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operation successful!',
  },
}

export const ErrorState: Story = {
  args: {
    variant: 'error',
    message: 'An error occurred.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Warning message.',
  },
}

// Position example
export const Positions: Story = {
  render: () => (
    <div style={{ padding: '200px 0', textAlign: 'center', color: '#666' }}>
      <p>Use Controls panel to change position:</p>
      <small>top, bottom, top-left, top-right, bottom-left, bottom-right</small>
    </div>
  ),
}
