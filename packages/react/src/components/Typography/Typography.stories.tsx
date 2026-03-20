import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body-large',
        'body',
        'body-small',
        'caption',
        'overline',
        'label',
        'button',
        'input',
        'helper',
        'xs',
      ],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    noWrap: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

// Display
export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Display Text',
  },
}

// Headings
export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1 - The quick brown fox</Typography>
      <Typography variant="h2">Heading 2 - The quick brown fox</Typography>
      <Typography variant="h3">Heading 3 - The quick brown fox</Typography>
      <Typography variant="h4">Heading 4 - The quick brown fox</Typography>
      <Typography variant="h5">Heading 5 - The quick brown fox</Typography>
      <Typography variant="h6">Heading 6 - The quick brown fox</Typography>
    </div>
  ),
}

// Body Text
export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Typography variant="body-large">
        Large body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body">
        Default body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body-small">
        Small body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
}

// Text Weights
export const TextWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="body" weight="light">
        Light weight text (300)
      </Typography>
      <Typography variant="body" weight="regular">
        Regular weight text (400)
      </Typography>
      <Typography variant="body" weight="medium">
        Medium weight text (500)
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold weight text (600)
      </Typography>
      <Typography variant="body" weight="bold">
        Bold weight text (700)
      </Typography>
    </div>
  ),
}

// Text Alignment
export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" align="left">
        Left aligned heading
      </Typography>
      <Typography variant="body" align="center">
        Center aligned text paragraph that spans multiple lines to demonstrate the center alignment.
      </Typography>
      <Typography variant="h3" align="right">
        Right aligned heading
      </Typography>
      <Typography variant="body" align="justify">
        Justified text that automatically adjusts spacing between words to ensure both left and right edges
        are aligned, creating a clean and uniform appearance across multiple lines of text content.
      </Typography>
    </div>
  ),
}

// Caption & Overline
export const CaptionAndOverline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography variant="overline">Overline Text</Typography>
        <Typography variant="h3">Main Heading</Typography>
        <Typography variant="caption">Caption text providing additional context</Typography>
      </div>
    </div>
  ),
}

// Label Text
export const LabelText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="label">Email Address</Typography>
      <Typography variant="body">user@example.com</Typography>
      <Typography variant="label">Password</Typography>
      <Typography variant="body">••••••••</Typography>
    </div>
  ),
}

// Component Typography
export const ComponentTypography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography variant="label">Form Label</Typography>
        <Typography variant="input">Input placeholder text</Typography>
        <Typography variant="helper">Helper text provides guidance</Typography>
      </div>
      <div>
        <Typography variant="button">Button Text</Typography>
      </div>
    </div>
  ),
}

// Truncated Text
export const TruncatedText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Typography variant="body" noWrap>
        This text will be truncated with an ellipsis when it exceeds the container width
      </Typography>
      <Typography variant="body" numberOfLines={2}>
        This text will be truncated after two lines when it exceeds the container width. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </div>
  ),
}

// Color Variants
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="h1" color="#5E6AD2">
        Custom colored heading
      </Typography>
      <Typography variant="body" color="#22C55E">
        Success message in green
      </Typography>
      <Typography variant="body" color="#EF4444">
        Error message in red
      </Typography>
      <Typography variant="body" color="#F59E0B">
        Warning message in amber
      </Typography>
    </div>
  ),
}

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'body',
    children: 'Lorem ipsum dolor sit amet',
  },
}
