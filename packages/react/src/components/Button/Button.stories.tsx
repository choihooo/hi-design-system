import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

// Primary Button
// From design-tokens.pen: padding [12,20], borderRadius 999, fontSize 14, fontWeight 600
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
}

// Secondary Button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
}

// Ghost Button
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

// Outline Button
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
  ),
}

// All Colors
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" color="primary">
        Primary
      </Button>
      <Button variant="primary" color="secondary">
        Secondary
      </Button>
      <Button variant="primary" color="success">
        Success
      </Button>
      <Button variant="primary" color="warning">
        Warning
      </Button>
      <Button variant="primary" color="error">
        Error
      </Button>
    </div>
  ),
}

// Disabled State
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>
        Disabled Primary
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="ghost" disabled>
        Disabled Ghost
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  ),
}

// Loading State
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" loading>
        Loading Primary
      </Button>
      <Button variant="secondary" loading>
        Loading Secondary
      </Button>
      <Button variant="ghost" loading>
        Loading Ghost
      </Button>
      <Button variant="outline" loading>
        Loading Outline
      </Button>
    </div>
  ),
}

// Full Width
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
}

// With Icon
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" icon="★">
        With Icon
      </Button>
      <Button variant="secondary" icon="⚡">
        Lightning
      </Button>
      <Button variant="ghost" icon="❤️">
        Heart
      </Button>
      <Button variant="outline" icon="✓">
        Check
      </Button>
    </div>
  ),
}

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    color: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
    children: 'Click me',
  },
}

// Design Tokens Showcase
// Matches design-tokens.pen screen 6: Component Specific - Button
export const DesignTokens: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Variants */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Four Roles</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          One brand action, one grounded secondary, one outline, and one ghost for low-emphasis control.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium (Default)
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>States</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          Default stays quiet, focus clarifies the active field, error guides recovery, and disabled removes urgency.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Loading
          </Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" icon="★">
            Star
          </Button>
          <Button variant="secondary" icon="⚡">
            Bolt
          </Button>
          <Button variant="outline" icon="✓">
            Check
          </Button>
          <Button variant="ghost" icon="❤️">
            Heart
          </Button>
        </div>
      </div>
    </div>
  ),
}
