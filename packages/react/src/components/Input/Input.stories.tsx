import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

// Drafting Field
// From design-tokens.pen: Long-form fields that stay readable across drafting, review, and validation
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

// Outline Variant
// From design-tokens.pen: For general product forms
export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

// Filled Variant
// From design-tokens.pen: Helps when the surrounding surface is already busy with borders and cards
export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="outline" label="Outline" placeholder="General product forms" />
      <Input variant="filled" label="Filled" placeholder="When surface is busy with borders" />
    </div>
  ),
}

// All Sizes
// From design-tokens.pen: Use fixed minimum heights to stabilize forms, but allow content to grow
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Small" size="sm" placeholder="Small height" />
      <Input label="Medium" size="md" placeholder="Medium height (default)" />
      <Input label="Large" size="lg" placeholder="Large height" />
    </div>
  ),
}

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
}

// Error State
// From design-tokens.pen: Error guides recovery
export const Error: Story = {
  args: {
    label: 'Email',
    state: 'error',
    errorText: 'Please enter a valid email address',
  },
}

// Success State
export const Success: Story = {
  args: {
    label: 'Username',
    state: 'success',
    successText: 'Username is available',
  },
}

// Disabled State
// From design-tokens.pen: Disabled removes urgency
export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true,
  },
}

// All States
// From design-tokens.pen: Default stays quiet, focus clarifies the active field, error guides recovery, and disabled removes urgency
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Default" placeholder="Default stays quiet" />
      <Input label="Focus" placeholder="Focus clarifies the active field" state="default" />
      <Input label="Error" placeholder="Error guides recovery" state="error" errorText="This field has an error" />
      <Input label="Disabled" placeholder="Disabled removes urgency" disabled />
    </div>
  ),
}

// Required Field
export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
}

// Full Width
export const FullWidth: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

// Input Types
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Email" type="email" placeholder="user@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Number" type="number" placeholder="123" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="Tel" type="tel" placeholder="+1 234 567 890" />
      <Input label="Search" type="search" placeholder="Search..." />
    </div>
  ),
}

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    state: 'default',
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: false,
    required: false,
    fullWidth: false,
  },
}

// Design Tokens Showcase
// Matches design-tokens.pen screen: HI Textareas - Long Form Entry
export const DesignTokens: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
      {/* Overview */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Drafting Field</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          For explanations, notes, and messages that need breathing room and visible structure from the first sentence to the last.
        </p>
        <Input
          label="Project summary"
          type="textarea"
          placeholder="Enter your project summary..."
          variant="outline"
        />
      </div>

      {/* Variants */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Variants</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          Outline is for general product forms. Filled helps when the surrounding surface is already busy with borders and cards.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input variant="outline" type="textarea" label="Outline" placeholder="General product forms" />
          <Input variant="filled" type="textarea" label="Filled" placeholder="When surface is busy" />
        </div>
      </div>

      {/* Heights */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>Heights</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          Use fixed minimum heights to stabilize forms, but allow content to grow in longer drafting contexts.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input type="textarea" label="Small (72px)" size="sm" placeholder="Small height" />
          <Input type="textarea" label="Default (120px)" size="md" placeholder="Default height" />
          <Input type="textarea" label="Large (168px)" size="lg" placeholder="Large height" />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>States</h3>
        <p style={{ marginBottom: '16px', color: '#666' }}>
          Default stays quiet, focus clarifies the active field, error guides recovery, and disabled removes urgency.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input type="textarea" label="Default" placeholder="Default state" />
          <Input type="textarea" label="Focus" placeholder="Focus state (when focused)" />
          <Input type="textarea" label="Error" placeholder="Error state" state="error" errorText="This field has an error" />
          <Input type="textarea" label="Disabled" placeholder="Disabled state" disabled />
        </div>
      </div>

      {/* System Notes */}
      <div>
        <h3 style={{ marginBottom: '16px' }}>System Notes</h3>
        <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
          <li>Keep labels visible for forms and reviews</li>
          <li>Counters should reassure, not dominate</li>
          <li>Use filled only when the surrounding UI already has enough borders</li>
          <li>If the field becomes the main task, let it grow or move to a dedicated editor</li>
        </ul>
      </div>
    </div>
  ),
}
