import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './index'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
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
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

// Unchecked (Default)
export const Unchecked: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
  },
}

// Checked
export const Checked: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    checked: true,
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    value: 'disabled',
    disabled: true,
  },
}

// Disabled Checked
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked option',
    value: 'disabled-checked',
    checked: true,
    disabled: true,
  },
}

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Email notifications',
    value: 'email',
    checked: true,
    helperText: 'Receive email updates about your account',
  },
}

// With Error
export const WithError: Story = {
  args: {
    label: 'Invalid option',
    value: 'invalid',
    errorText: 'This option is not available',
  },
}

// Required
export const Required: Story = {
  args: {
    label: 'Required selection',
    value: 'required',
    required: true,
    helperText: 'This field is required',
  },
}

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio label="Small radio" value="sm" size="sm" />
      <Radio label="Medium radio" value="md" size="md" />
      <Radio label="Large radio" value="lg" size="lg" />
    </div>
  ),
}

// All States
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio label="Unchecked" value="unchecked" />
      <Radio label="Checked" value="checked" checked />
      <Radio label="Disabled" value="disabled" disabled />
      <Radio label="Disabled Checked" value="disabled-checked" checked disabled />
    </div>
  ),
}

// Radio Group Example
export const RadioGroupExample: Story = {
  render: () => {
    const [value, setValue] = useState('starter')

    return (
      <RadioGroup
        name="plan"
        value={value}
        onChange={setValue}
        label="Choose your plan"
        helperText="Select the plan that best fits your needs"
      >
        <Radio value="starter" label="Starter Plan" helperText="$9/month" />
        <Radio value="pro" label="Pro Plan" helperText="$29/month" />
        <Radio value="enterprise" label="Enterprise Plan" helperText="Contact us" />
      </RadioGroup>
    )
  },
}

// Radio Group - Horizontal
export const RadioGroupHorizontal: Story = {
  render: () => {
    const [value, setValue] = useState('option1')

    return (
      <RadioGroup
        name="horizontal-choice"
        value={value}
        onChange={setValue}
        label="Select an option"
        orientation="horizontal"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  },
}

// Radio Group - With Error
export const RadioGroupWithError: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <RadioGroup
        name="plan-with-error"
        value={value}
        onChange={setValue}
        label="Choose your plan"
        errorText="Please select a plan to continue"
        required
      >
        <Radio value="starter" label="Starter Plan" />
        <Radio value="pro" label="Pro Plan" />
        <Radio value="enterprise" label="Enterprise Plan" />
      </RadioGroup>
    )
  },
}

// Radio Group - Disabled
export const RadioGroupDisabled: Story = {
  render: () => (
    <RadioGroup
      name="disabled-group"
      defaultValue="option2"
      disabled
      label="Disabled radio group"
      helperText="All options are disabled"
    >
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
}

// Form Example
export const FormExample: Story = {
  render: () => {
    const [plan, setPlan] = useState('starter')
    const [billing, setBilling] = useState('monthly')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 500 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Subscribe to a plan</h3>

        <RadioGroup
          name="plan"
          value={plan}
          onChange={setPlan}
          label="Select your plan"
          required
        >
          <Radio value="starter" label="Starter" helperText="Perfect for individuals" />
          <Radio value="pro" label="Pro" helperText="Best for small teams" />
          <Radio value="enterprise" label="Enterprise" helperText="For large organizations" />
        </RadioGroup>

        <RadioGroup
          name="billing"
          value={billing}
          onChange={setBilling}
          label="Billing cycle"
          helperText="Choose how often to pay"
        >
          <Radio value="monthly" label="Monthly" helperText="Pay monthly" />
          <Radio value="yearly" label="Yearly" helperText="Save 20% with yearly billing" />
        </RadioGroup>

        <div style={{ fontSize: 14, color: '#666' }}>
          Selected: <strong>{plan}</strong> plan with <strong>{billing}</strong> billing
        </div>
      </div>
    )
  },
}

// Size Variants in Group
export const SizeVariantsInGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioGroup name="sm-group" defaultValue="sm1" label="Small size">
        <Radio value="sm1" label="Small option 1" size="sm" />
        <Radio value="sm2" label="Small option 2" size="sm" />
        <Radio value="sm3" label="Small option 3" size="sm" />
      </RadioGroup>

      <RadioGroup name="md-group" defaultValue="md1" label="Medium size">
        <Radio value="md1" label="Medium option 1" size="md" />
        <Radio value="md2" label="Medium option 2" size="md" />
        <Radio value="md3" label="Medium option 3" size="md" />
      </RadioGroup>

      <RadioGroup name="lg-group" defaultValue="lg1" label="Large size">
        <Radio value="lg1" label="Large option 1" size="lg" />
        <Radio value="lg2" label="Large option 2" size="lg" />
        <Radio value="lg3" label="Large option 3" size="lg" />
      </RadioGroup>
    </div>
  ),
}

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [notification, setNotification] = useState('email')
    const [frequency, setFrequency] = useState('daily')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 400 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Notification Settings</h3>

        <RadioGroup
          name="notification"
          value={notification}
          onChange={setNotification}
          label="Notification method"
        >
          <Radio value="email" label="Email" helperText="Receive notifications via email" />
          <Radio value="sms" label="SMS" helperText="Receive notifications via SMS" />
          <Radio value="push" label="Push" helperText="Receive push notifications" />
        </RadioGroup>

        <RadioGroup
          name="frequency"
          value={frequency}
          onChange={setFrequency}
          label="Frequency"
        >
          <Radio value="instant" label="Instant" />
          <Radio value="daily" label="Daily digest" />
          <Radio value="weekly" label="Weekly summary" />
        </RadioGroup>

        <div style={{ fontSize: 14, color: '#666', padding: 12, background: '#f5f5f5', borderRadius: 8 }}>
          You will receive <strong>{frequency}</strong> notifications via <strong>{notification}</strong>
        </div>
      </div>
    )
  },
}

// Comparison Example
export const ComparisonExample: Story = {
  render: () => {
    const [choice1, setChoice1] = useState('a')
    const [choice2, setChoice2] = useState('x')

    return (
      <div style={{ display: 'flex', gap: '32px' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0' }}>Radio (Single Choice)</h4>
          <RadioGroup name="radio-choice" value={choice1} onChange={setChoice1}>
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px 0' }}>Checkbox (Multiple Choices)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={choice2 === 'x'} onChange={() => setChoice2('x')} />
              Option X
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={choice2 === 'y'} onChange={() => setChoice2('y')} />
              Option Y
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={choice2 === 'z'} onChange={() => setChoice2('z')} />
              Option Z
            </label>
          </div>
        </div>
      </div>
    )
  },
}
