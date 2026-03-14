import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

/**
 * Typography Component Stories
 */
const meta = {
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// Heading variants
export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
}

// Body text
export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="body1">
        Body 1 - Standard body text with 16px font size for main content.
      </Typography>
      <Typography variant="body2">
        Body 2 - Secondary body text with 14px font size for descriptions.
      </Typography>
      <Typography variant="caption">Caption - Small text at 12px for helper text.</Typography>
    </div>
  ),
}

// Font weights
export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography weight="regular">Regular (400)</Typography>
      <Typography weight="medium">Medium (500)</Typography>
      <Typography weight="semibold">Semibold (600)</Typography>
      <Typography weight="bold">Bold (700)</Typography>
    </div>
  ),
}

// Alignment
export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
    </div>
  ),
}
