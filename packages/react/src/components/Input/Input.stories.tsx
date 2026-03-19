import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

/**
 * Input Component Stories
 */
const meta = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Enter text...',
    label: 'Input Label',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

// States
export const Default: Story = {}

export const ErrorState: Story = {
  args: {
    state: 'error',
    errorText: 'This field has an error',
  },
}

export const SuccessState: Story = {
  args: {
    state: 'success',
    helperText: 'Everything looks correct',
    value: 'hello@hi.design',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Cannot edit',
  },
}

// With helper text
export const WithHelper: Story = {
  args: {
    helperText: 'This is helper text for the input',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    helperText: 'Filled inputs feel softer and more application-like',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Read-only value',
    helperText: 'Read-only fields remain legible but low-tension',
  },
}

// Size example
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" label="Small" placeholder="Small" />
      <Input size="md" label="Medium" placeholder="Medium" />
      <Input size="lg" label="Large" placeholder="Large" />
    </div>
  ),
}
