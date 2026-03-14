import type { Meta, StoryObj } from '@storybook/react'
import { IconsSection } from './IconsSection'

const meta = {
  title: 'Demo/Icons Gallery',
  component: IconsSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Gallery: Story = {}
