/**
 * Card Component Tests
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Card from './Card'
import '@testing-library/jest-dom'

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Card>
          <h2>Card Title</h2>
          <p>Card content</p>
        </Card>,
      )
      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('renders with different elevations', () => {
      const { rerender } = render(<Card elevation="none">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--elevation-none')

      rerender(<Card elevation="sm">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--elevation-sm')

      rerender(<Card elevation="md">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--elevation-md')

      rerender(<Card elevation="lg">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--elevation-lg')

      rerender(<Card elevation="xl">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--elevation-xl')
    })

    it('renders with different padding', () => {
      const { rerender } = render(<Card padding="none">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--padding-none')

      rerender(<Card padding="sm">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--padding-sm')

      rerender(<Card padding="md">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--padding-md')

      rerender(<Card padding="lg">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--padding-lg')

      rerender(<Card padding="xl">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--padding-xl')
    })

    it('renders with different radius', () => {
      const { rerender } = render(<Card radius="none">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--radius-none')

      rerender(<Card radius="sm">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--radius-sm')

      rerender(<Card radius="md">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--radius-md')

      rerender(<Card radius="lg">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--radius-lg')

      rerender(<Card radius="full">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('card--radius-full')
    })
  })

  describe('Interactions', () => {
    it('calls onPress when clicked in pressable mode', () => {
      const handleClick = vi.fn()
      render(
        <Card pressable onPress={handleClick}>
          Clickable
        </Card>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onPress when not pressable', () => {
      const handleClick = vi.fn()
      render(<Card onPress={handleClick}>Not clickable</Card>)

      fireEvent.click(screen.getByText('Not clickable'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('calls onPress when Enter key is pressed', () => {
      const handleClick = vi.fn()
      render(
        <Card pressable onPress={handleClick}>
          Clickable
        </Card>,
      )

      fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' })
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('calls onPress when Space key is pressed', () => {
      const handleClick = vi.fn()
      render(
        <Card pressable onPress={handleClick}>
          Clickable
        </Card>,
      )

      fireEvent.keyDown(screen.getByRole('button'), { key: ' ' })
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accessibility', () => {
    it('has role="button" when pressable', () => {
      render(<Card pressable>Clickable</Card>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('has tabIndex={0} when pressable', () => {
      render(<Card pressable>Clickable</Card>)
      expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '0')
    })

    it('does not have role="button" when not pressable', () => {
      render(<Card>Not clickable</Card>)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('States', () => {
    it('applies pressable class when pressable', () => {
      render(<Card pressable>Hover me</Card>)
      expect(screen.getByRole('button')).toHaveClass('card--pressable')
    })
  })

  describe('Combinations', () => {
    it('applies multiple style classes correctly', () => {
      render(
        <Card elevation="lg" padding="xl" radius="lg" pressable onPress={vi.fn()}>
          Styled Card
        </Card>,
      )
      const card = screen.getByRole('button')
      expect(card).toHaveClass('card--elevation-lg')
      expect(card).toHaveClass('card--padding-xl')
      expect(card).toHaveClass('card--radius-lg')
      expect(card).toHaveClass('card--pressable')
    })
  })

  describe('Custom Props', () => {
    it('passes through data-testid', () => {
      render(<Card testID="custom-card">Test</Card>)
      expect(screen.getByTestId('custom-card')).toBeInTheDocument()
    })

    it('preserves custom className', () => {
      render(<Card className="custom-class">Test</Card>)
      expect(screen.getByText('Test')).toHaveClass('custom-class')
    })
  })
})
