import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { useState } from 'react'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    state: {
      control: 'select',
      options: ['default', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    searchable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

// Default Select
// From design-tokens.pen xsgzN: Default select handles direct choice
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
    ]

    return (
      <div style={{ width: '300px' }}>
        <Select
          label="Fruit"
          placeholder="Select a fruit..."
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

// All Sizes
// From design-tokens.pen xsgzN: Keep select height aligned with inputs
export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    const options = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Select
          label="Country (Small)"
          size="sm"
          options={options}
          value={value1}
          onChange={setValue1}
        />
        <Select
          label="Country (Medium)"
          size="md"
          options={options}
          value={value2}
          onChange={setValue2}
        />
        <Select
          label="Country (Large)"
          size="lg"
          options={options}
          value={value3}
          onChange={setValue3}
        />
      </div>
    )
  },
}

// Search Select
// From design-tokens.pen xsgzN: Search select helps when the list grows
export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'apricot', label: 'Apricot' },
      { value: 'avocado', label: 'Avocado' },
      { value: 'banana', label: 'Banana' },
      { value: 'blackberry', label: 'Blackberry' },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'cantaloupe', label: 'Cantaloupe' },
      { value: 'date', label: 'Date' },
      { value: 'elderberry', label: 'Elderberry' },
      { value: 'fig', label: 'Fig' },
      { value: 'grape', label: 'Grape' },
      { value: 'grapefruit', label: 'Grapefruit' },
      { value: 'guava', label: 'Guava' },
      { value: 'honeydew', label: 'Honeydew' },
    ]

    return (
      <div style={{ width: '300px' }}>
        <Select
          label="Fruit"
          placeholder="Search and select..."
          options={options}
          value={value}
          onChange={setValue}
          searchable
          helperText="Type to search through options"
        />
      </div>
    )
  },
}

// Error State
// From design-tokens.pen xsgzN: Error state when necessary
export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'maybe', label: 'Maybe' },
    ]

    return (
      <div style={{ width: '300px' }}>
        <Select
          label="Confirm"
          options={options}
          value={value}
          onChange={setValue}
          state="error"
          errorText="Please select an option"
        />
      </div>
    )
  },
}

// Disabled State
// From design-tokens.pen xsgzN: Disabled only when necessary
export const Disabled: Story = {
  render: () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]

    return (
      <div style={{ width: '300px' }}>
        <Select
          label="Disabled Select"
          options={options}
          placeholder="Cannot select..."
          disabled
        />
      </div>
    )
  },
}

// With Disabled Options
export const DisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'free', label: 'Free Plan' },
      { value: 'pro', label: 'Pro Plan' },
      { value: 'enterprise', label: 'Enterprise Plan (Sold out)' },
      { value: 'custom', label: 'Custom Plan (Contact sales)' },
    ]

    const optionsWithDisabled = options.map((opt) => ({
      ...opt,
      disabled: opt.value === 'enterprise' || opt.value === 'custom',
    }))

    return (
      <div style={{ width: '300px' }}>
        <Select
          label="Plan"
          options={optionsWithDisabled}
          value={value}
          onChange={setValue}
          helperText="Select a plan that suits your needs"
        />
      </div>
    )
  },
}

// All States
// From design-tokens.pen xsgzN: Closed, Open, Selected, Error, Disabled
export const AllStates: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('apple')
    const [value3, setValue3] = useState('')

    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
        <Select
          label="Closed (Default)"
          options={options}
          value={value1}
          onChange={setValue1}
        />
        <Select
          label="Selected"
          options={options}
          value={value2}
          onChange={setValue2}
        />
        <Select
          label="Error"
          options={options}
          value={value3}
          onChange={setValue3}
          state="error"
          errorText="This field is required"
        />
      </div>
    )
  },
}

// Interactive Playground
export const Playground: Story = {
  args: {
    label: 'Category',
    placeholder: 'Select...',
    size: 'md',
    state: 'default',
    disabled: false,
    searchable: false,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'tech', label: 'Technology' },
      { value: 'design', label: 'Design' },
      { value: 'business', label: 'Business' },
      { value: 'marketing', label: 'Marketing' },
    ]

    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          options={options}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

// Design Tokens Showcase
// Matches design-tokens.pen screen xsgzN: HI Selects - Guided Choice
export const DesignTokens: Story = {
  render: () => {
    const [defaultSelect, setDefaultSelect] = useState('')
    const [searchSelect, setSearchSelect] = useState('')

    const options = Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    }))

    return (
      <div style={{ padding: '32px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '16px' }}>HI Selects - Guided Choice</h1>
        <p style={{ marginBottom: '32px', color: '#666' }}>
          Guided choice patterns that stay calm when closed and become highly legible when opened.
        </p>

        {/* Variants */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>Variants</h3>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            Default select handles direct choice. Search select helps when the list grows and scanning cost rises.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '280px' }}>
              <Select
                label="Default Select"
                placeholder="Choose an option..."
                options={options.slice(0, 5)}
                value={defaultSelect}
                onChange={setDefaultSelect}
              />
            </div>
            <div style={{ width: '280px' }}>
              <Select
                label="Search Select"
                placeholder="Search and select..."
                options={options}
                value={searchSelect}
                onChange={setSearchSelect}
                searchable
              />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>Sizes</h3>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            Keep select height aligned with inputs. The menu can grow, but the trigger should stay predictable.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            <Select
              label="Small"
              size="sm"
              options={options.slice(0, 3)}
              placeholder="Small select"
            />
            <Select
              label="Medium"
              size="md"
              options={options.slice(0, 3)}
              placeholder="Medium select"
            />
            <Select
              label="Large"
              size="lg"
              options={options.slice(0, 3)}
              placeholder="Large select"
            />
          </div>
        </div>

        {/* States */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px' }}>States</h3>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            Closed stays quiet, open maximizes scanability, selected confirms choice, and error or disabled only appear when necessary.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '280px' }}>
              <Select
                label="Default"
                options={options.slice(0, 4)}
                placeholder="Closed state"
              />
            </div>
            <div style={{ width: '280px' }}>
              <Select
                label="Selected"
                options={options.slice(0, 4)}
                value="option-1"
              />
            </div>
            <div style={{ width: '280px' }}>
              <Select
                label="Error"
                options={options.slice(0, 4)}
                state="error"
                errorText="Please select an option"
              />
            </div>
            <div style={{ width: '280px' }}>
              <Select
                label="Disabled"
                options={options.slice(0, 4)}
                disabled
                placeholder="Cannot select"
              />
            </div>
          </div>
        </div>

        {/* System Notes */}
        <div>
          <h3 style={{ marginBottom: '16px' }}>System Notes</h3>
          <ul style={{ color: '#666', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>Use select for known options</li>
            <li>Keep the trigger calm. Spend visual contrast on the open menu.</li>
            <li>If the list is long, add search instead of shrinking option rows.</li>
            <li>Labels should stay visible in forms.</li>
          </ul>
        </div>
      </div>
    )
  },
}
