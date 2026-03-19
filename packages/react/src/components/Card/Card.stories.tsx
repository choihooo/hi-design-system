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

export const SurfaceStack: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        maxWidth: '520px',
        padding: '16px',
        background: '#f7f7f8',
        borderRadius: '24px',
      }}
    >
      <Card elevation="none" padding="md" radius="md">
        <h3>Neutral Surface</h3>
        <p>Base card for low-emphasis layout grouping.</p>
      </Card>
      <Card elevation="md" padding="lg" radius="lg">
        <h3>Elevated Surface</h3>
        <p>Default card for product surfaces and content modules.</p>
      </Card>
      <Card elevation="lg" padding="lg" radius="lg" pressable onPress={() => {}}>
        <h3>Interactive Surface</h3>
        <p>Pressable card for selection, navigation, and overview lists.</p>
      </Card>
    </div>
  ),
}
