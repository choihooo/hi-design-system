/**
 * Toast Component Tests
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Toast from './Toast'
import '@testing-library/jest-dom'

// Mock window.matchMedia for reduced motion
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
  vi.useFakeTimers()
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
})

describe('Toast', () => {
  describe('Rendering', () => {
    it('does not render when visible is false', () => {
      render(<Toast visible={false} message="Test message" />)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('does not render when message is empty', () => {
      render(<Toast visible={true} message="" />)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('renders when visible is true and message is provided', () => {
      render(<Toast visible={true} message="Success message" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByText('Success message')).toBeInTheDocument()
    })

    it('renders with different variants', () => {
      const { rerender } = render(<Toast visible={true} variant="success" message="Success" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--success')

      rerender(<Toast visible={true} variant="error" message="Error" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--error')

      rerender(<Toast visible={true} variant="warning" message="Warning" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--warning')

      rerender(<Toast visible={true} variant="info" message="Info" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--info')
    })

    it('renders close button', () => {
      render(<Toast visible={true} message="Test message" />)
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      const handleClose = vi.fn()
      render(<Toast visible={true} onClose={handleClose} message="Test message" />)

      const closeButton = screen.getByRole('button', { name: /close/i })
      fireEvent.click(closeButton)

      // Advance timers for exit animation
      vi.advanceTimersByTime(300)

      expect(handleClose).toHaveBeenCalled()
    })

    it('auto-dismisses after duration', () => {
      const handleClose = vi.fn()
      render(<Toast visible={true} onClose={handleClose} duration={3000} message="Test" />)

      vi.advanceTimersByTime(3000)
      vi.advanceTimersByTime(300) // Exit animation time

      expect(handleClose).toHaveBeenCalled()
    })

    it('does not auto-dismiss when duration is 0', () => {
      const handleClose = vi.fn()
      render(<Toast visible={true} onClose={handleClose} duration={0} message="Test" />)

      vi.advanceTimersByTime(10000)

      expect(handleClose).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has role="alert"', () => {
      render(<Toast visible={true} message="Test" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('has aria-atomic="true"', () => {
      render(<Toast visible={true} message="Test" />)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true')
    })

    it('has aria-live="polite"', () => {
      render(<Toast visible={true} message="Test" />)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite')
    })

    it('renders icons for different variants', () => {
      const { rerender } = render(<Toast visible={true} variant="success" message="Success" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--success')

      rerender(<Toast visible={true} variant="error" message="Error" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--error')

      rerender(<Toast visible={true} variant="warning" message="Warning" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--warning')
    })
  })

  describe('States', () => {
    it('is visible when visible is true and message exists', () => {
      render(<Toast visible={true} message="Test message" />)
      expect(screen.getByRole('alert')).toBeVisible()
    })

    it('is hidden when visible is false', () => {
      render(<Toast visible={false} message="Test message" />)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })
  })

  describe('Position', () => {
    it('renders with different positions', () => {
      const { rerender } = render(<Toast visible={true} position="top" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--top')

      rerender(<Toast visible={true} position="bottom" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--bottom')

      rerender(<Toast visible={true} position="top-left" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--top-left')

      rerender(<Toast visible={true} position="top-right" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--top-right')

      rerender(<Toast visible={true} position="bottom-left" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--bottom-left')

      rerender(<Toast visible={true} position="bottom-right" message="Test" />)
      expect(screen.getByRole('alert')).toHaveClass('toast--bottom-right')
    })
  })

  describe('Animation', () => {
    it('renders toast with proper classes', () => {
      render(<Toast visible={true} message="Test" />)
      const toast = screen.getByRole('alert')
      expect(toast).toHaveClass('toast')
      expect(toast).not.toHaveClass('toast--exiting')
    })
  })

  describe('Props', () => {
    it('uses custom testID', () => {
      render(<Toast visible={true} message="Test" testID="custom-toast" />)
      expect(screen.getByTestId('custom-toast')).toBeInTheDocument()
    })
  })
})
