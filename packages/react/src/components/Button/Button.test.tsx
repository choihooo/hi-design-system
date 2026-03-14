/**
 * Button Component Tests
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Button from './Button'
import '@testing-library/jest-dom'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children text correctly', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('renders with default variant', () => {
      render(<Button>Test</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--primary')
    })

    it('renders with different variants', () => {
      const { rerender } = render(<Button variant="secondary">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--secondary')

      rerender(<Button variant="ghost">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--ghost')

      rerender(<Button variant="outline">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--outline')
    })

    it('renders with different sizes', () => {
      const { rerender } = render(<Button size="sm">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--sm')

      rerender(<Button size="md">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--md')

      rerender(<Button size="lg">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--lg')
    })

    it('renders with different colors', () => {
      const { rerender } = render(<Button color="success">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--success')

      rerender(<Button color="error">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--error')

      rerender(<Button color="warning">Test</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--warning')
    })
  })

  describe('Interactions', () => {
    it('calls onPress when clicked', () => {
      const handleClick = vi.fn()
      render(<Button onPress={handleClick}>Click me</Button>)

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onPress when disabled', () => {
      const handleClick = vi.fn()
      render(
        <Button onPress={handleClick} disabled>
          Click me
        </Button>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not call onPress when loading', () => {
      const handleClick = vi.fn()
      render(
        <Button onPress={handleClick} loading>
          Click me
        </Button>,
      )

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has aria-busy attribute when loading', () => {
      render(<Button loading>Test</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('has disabled attribute when disabled', () => {
      render(<Button disabled>Test</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })

    it('renders loading spinner with proper ARIA', () => {
      render(<Button loading>Loading</Button>)
      const spinner = screen.getByRole('status')
      expect(spinner).toHaveAttribute('aria-label', 'Loading')
    })
  })

  describe('States', () => {
    it('renders in full width when fullWidth is true', () => {
      render(<Button fullWidth>Full Width</Button>)
      expect(screen.getByRole('button')).toHaveClass('button--full-width')
    })

    it('shows spinner when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('applies color variant with primary variant', () => {
      render(
        <Button color="success" variant="primary">
          Success
        </Button>,
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--primary')
      expect(button).toHaveClass('button--success')
    })
  })
})
