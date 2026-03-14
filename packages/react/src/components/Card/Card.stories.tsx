import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

/**
 * Card Component Stories
 */
const meta = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    elevation: 'md',
    padding: 'lg',
    radius: 'lg',
    children: (
      <>
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </>
    ),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

// Elevations
export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card elevation="none" padding="md" radius="md">
        None
      </Card>
      <Card elevation="sm" padding="md" radius="md">
        Small
      </Card>
      <Card elevation="md" padding="md" radius="md">
        Medium
      </Card>
      <Card elevation="lg" padding="md" radius="md">
        Large
      </Card>
    </div>
  ),
}

// Interactive
export const Pressable: Story = {
  args: {
    pressable: true,
    onPress: () => {},
    children: (
      <>
        <h3>Click Me</h3>
        <p>This card is interactive</p>
      </>
    ),
  },
}
