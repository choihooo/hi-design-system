import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Typography } from '../Typography'
import { Button } from '../Button'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    pressable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

// Basic Card
export const Basic: Story = {
  args: {
    elevation: 'md',
    padding: 'md',
    children: (
      <div>
        <Typography variant="h3">Card Title</Typography>
        <Typography variant="body">This is a basic card with some content.</Typography>
      </div>
    ),
  },
}

// All Elevations
export const AllElevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Card elevation="none" padding="md">
        <Typography variant="h4">None</Typography>
        <Typography variant="body-small">No shadow</Typography>
      </Card>
      <Card elevation="sm" padding="md">
        <Typography variant="h4">Small</Typography>
        <Typography variant="body-small">Subtle shadow</Typography>
      </Card>
      <Card elevation="md" padding="md">
        <Typography variant="h4">Medium</Typography>
        <Typography variant="body-small">Medium shadow</Typography>
      </Card>
      <Card elevation="lg" padding="md">
        <Typography variant="h4">Large</Typography>
        <Typography variant="body-small">Large shadow</Typography>
      </Card>
      <Card elevation="xl" padding="md">
        <Typography variant="h4">X-Large</Typography>
        <Typography variant="body-small">Extra large shadow</Typography>
      </Card>
    </div>
  ),
}

// All Padding Sizes
export const AllPaddingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card elevation="md" padding="sm">
        <Typography variant="h4">Small Padding</Typography>
        <Typography variant="body-small">Compact spacing</Typography>
      </Card>
      <Card elevation="md" padding="md">
        <Typography variant="h4">Medium Padding</Typography>
        <Typography variant="body-small">Normal spacing</Typography>
      </Card>
      <Card elevation="md" padding="lg">
        <Typography variant="h4">Large Padding</Typography>
        <Typography variant="body-small">Relaxed spacing</Typography>
      </Card>
    </div>
  ),
}

// All Border Radius
export const AllRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Card elevation="md" padding="md" radius="sm">
        <Typography variant="h4">Small Radius</Typography>
        <Typography variant="body-small">4px border radius</Typography>
      </Card>
      <Card elevation="md" padding="md" radius="md">
        <Typography variant="h4">Medium Radius</Typography>
        <Typography variant="body-small">8px border radius</Typography>
      </Card>
      <Card elevation="md" padding="md" radius="lg">
        <Typography variant="h4">Large Radius</Typography>
        <Typography variant="body-small">12px border radius</Typography>
      </Card>
      <Card elevation="md" padding="md" radius="xl">
        <Typography variant="h4">X-Large Radius</Typography>
        <Typography variant="body-small">16px border radius</Typography>
      </Card>
    </div>
  ),
}

// Pressable Card
export const Pressable: Story = {
  args: {
    elevation: 'md',
    padding: 'md',
    pressable: true,
    children: (
      <div>
        <Typography variant="h3">Pressable Card</Typography>
        <Typography variant="body">Click this card to see interaction</Typography>
      </div>
    ),
  },
}

// Content Card Example
export const ContentCard: Story = {
  render: () => (
    <Card elevation="md" padding="lg" style={{ width: '320px' }}>
      <Typography variant="h3" style={{ marginBottom: '12px' }}>
        Featured Article
      </Typography>
      <Typography variant="body" style={{ marginBottom: '16px', color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </Typography>
      <Button variant="primary" size="sm">
        Read More
      </Button>
    </Card>
  ),
}

// Profile Card
export const ProfileCard: Story = {
  render: () => (
    <Card elevation="lg" padding="lg" style={{ width: '280px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#5E6AD2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '32px',
          }}
        >
          JD
        </div>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4">John Doe</Typography>
          <Typography variant="body-small" style={{ color: '#666' }}>
            Software Engineer
          </Typography>
        </div>
        <Button variant="outline" size="sm">
          View Profile
        </Button>
      </div>
    </Card>
  ),
}

// Stats Card
export const StatsCard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Card elevation="md" padding="lg" style={{ width: '200px' }}>
        <Typography variant="h2" style={{ color: '#5E6AD2', marginBottom: '8px' }}>
          1,234
        </Typography>
        <Typography variant="body-small" style={{ color: '#666' }}>
          Total Users
        </Typography>
      </Card>
      <Card elevation="md" padding="lg" style={{ width: '200px' }}>
        <Typography variant="h2" style={{ color: '#22C55E', marginBottom: '8px' }}>
          98.5%
        </Typography>
        <Typography variant="body-small" style={{ color: '#666' }}>
          Success Rate
        </Typography>
      </Card>
      <Card elevation="md" padding="lg" style={{ width: '200px' }}>
        <Typography variant="h2" style={{ color: '#F59E0B', marginBottom: '8px' }}>
          42
        </Typography>
        <Typography variant="body-small" style={{ color: '#666' }}>
          Pending Tasks
        </Typography>
      </Card>
    </div>
  ),
}

// Interactive Playground
export const Playground: Story = {
  args: {
    elevation: 'md',
    padding: 'md',
    radius: 'md',
    pressable: false,
    children: (
      <div>
        <Typography variant="h3">Card Title</Typography>
        <Typography variant="body">This is a basic card with some content.</Typography>
      </div>
    ),
  },
}
