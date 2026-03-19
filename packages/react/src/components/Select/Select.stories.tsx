import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const options = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]

const meta = {
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    label: 'Plan',
    placeholder: 'Choose a plan',
    options,
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const Searchable: Story = {
  args: {
    variant: 'search',
    searchable: true,
    searchPlaceholder: 'Search country',
    label: 'Country',
    options: [
      { value: 'kr', label: 'Korea, Republic of', keywords: ['korea', 'south korea'] },
      { value: 'jp', label: 'Japan' },
      { value: 'sg', label: 'Singapore' },
    ],
  },
}

export const ErrorState: Story = {
  args: {
    state: 'error',
    errorText: 'Choose a country',
    label: 'Country',
    placeholder: 'Country',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <Select size="sm" label="Small" placeholder="Role" options={options} />
      <Select size="md" label="Medium" placeholder="Workspace" options={options} />
      <Select size="lg" label="Large" placeholder="Select customer segment" options={options} />
    </div>
  ),
}
