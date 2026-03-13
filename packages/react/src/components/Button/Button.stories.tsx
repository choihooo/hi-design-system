import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

/**
 * Button Component Stories
 */
const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'md',
    onPress: () => {},
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Primary variants
export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

// Size example
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
