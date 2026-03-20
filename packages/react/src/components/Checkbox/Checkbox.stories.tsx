import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

// Unchecked (Default)
export const Unchecked: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

// Checked
export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
}

// Indeterminate
export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
}

// Disabled Checked
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked option',
    checked: true,
    disabled: true,
  },
}

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Email notifications',
    checked: true,
    helperText: 'Receive email updates about your account',
  },
}

// With Error
export const WithError: Story = {
  args: {
    label: 'Accept terms',
    errorText: 'You must accept the terms to continue',
  },
}

// Required
export const Required: Story = {
  args: {
    label: 'Required agreement',
    required: true,
    helperText: 'This field is required',
  },
}

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Small checkbox" size="sm" />
      <Checkbox label="Medium checkbox" size="md" />
      <Checkbox label="Large checkbox" size="lg" />
    </div>
  ),
}

// All States
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" checked disabled />
    </div>
  ),
}

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(true)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          label="Toggle me"
          checked={checked}
          onChange={setChecked}
          helperText={checked ? 'Checked!' : 'Not checked'}
        />
        <Checkbox
          label="Indeterminate state"
          indeterminate={indeterminate}
          onChange={(checked) => {
            setIndeterminate(false)
            setChecked(checked)
          }}
          helperText="Click to change state"
        />
      </div>
    )
  },
}

// Form Example
export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      email: false,
      sms: false,
      push: true,
    })

    const handleChange = (key: string, checked: boolean) => {
      setPreferences((prev) => ({ ...prev, [key]: checked }))
    }

    const allChecked = Object.values(preferences).every(Boolean)
    const someChecked = Object.values(preferences).some(Boolean)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 400 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Notification Preferences</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>Choose how you want to be notified</p>

        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={!allChecked && someChecked}
          onChange={(checked) => {
            setPreferences({
              email: checked,
              sms: checked,
              push: checked,
            })
          }}
        />

        <div style={{ paddingLeft: 16 }}>
          <Checkbox
            label="Email notifications"
            checked={preferences.email}
            onChange={(checked) => handleChange('email', checked)}
            helperText="Receive updates via email"
          />
          <Checkbox
            label="SMS notifications"
            checked={preferences.sms}
            onChange={(checked) => handleChange('sms', checked)}
            helperText="Receive updates via SMS"
          />
          <Checkbox
            label="Push notifications"
            checked={preferences.push}
            onChange={(checked) => handleChange('push', checked)}
            helperText="Receive push notifications"
          />
        </div>
      </div>
    )
  },
}

// Error States
export const ErrorStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        label="Invalid option"
        errorText="This selection is not allowed"
      />
      <Checkbox
        label="Checked with error"
        checked
        errorText="Please review your selection"
      />
      <Checkbox
        label="Required field"
        required
        errorText="This field is required"
      />
    </div>
  ),
}

// Vertical Layout
export const VerticalLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Option 1" helperText="First option description" />
      <Checkbox label="Option 2" helperText="Second option description" />
      <Checkbox label="Option 3" helperText="Third option description" />
    </div>
  ),
}
