/**
 * Modal Component Tests
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Modal from './Modal'
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
})

describe('Modal', () => {
  describe('Rendering', () => {
    it('does not render when visible is false', () => {
      render(
        <Modal visible={false} onClose={vi.fn()}>
          <div>Test Modal</div>
        </Modal>,
      )
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('renders when visible is true', () => {
      render(
        <Modal visible={true} onClose={vi.fn()} title="Test Modal">
          <div>Modal content</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Test Modal')).toBeInTheDocument()
      expect(screen.getByText('Modal content')).toBeInTheDocument()
    })

    it('renders with different sizes', () => {
      const { rerender } = render(
        <Modal visible={true} onClose={vi.fn()} size="sm">
          <div>Test</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toHaveClass('modal--sm')

      rerender(
        <Modal visible={true} onClose={vi.fn()} size="md">
          <div>Test</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toHaveClass('modal--md')

      rerender(
        <Modal visible={true} onClose={vi.fn()} size="lg">
          <div>Test</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toHaveClass('modal--lg')
    })
  })

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      const handleClose = vi.fn()
      render(
        <Modal visible={true} onClose={handleClose} title="Test">
          <div>Content</div>
        </Modal>,
      )

      const closeButton = screen.getByRole('button', { name: /close/i })
      fireEvent.click(closeButton)
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('calls onClose when backdrop is clicked', () => {
      const handleClose = vi.fn()
      render(
        <Modal visible={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>,
      )

      const backdrop = screen.getByTestId('modal-overlay')
      fireEvent.click(backdrop)
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('does not call onClose when content is clicked', () => {
      const handleClose = vi.fn()
      render(
        <Modal visible={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>,
      )

      const modal = screen.getByRole('dialog')
      fireEvent.click(modal)
      expect(handleClose).not.toHaveBeenCalled()
    })

    it('calls onClose when ESC key is pressed', () => {
      const handleClose = vi.fn()
      render(
        <Modal visible={true} onClose={handleClose}>
          <div>Content</div>
        </Modal>,
      )

      fireEvent.keyDown(document, { key: 'Escape' })
      expect(handleClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accessibility', () => {
    it('has role="dialog"', () => {
      render(
        <Modal visible={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('has aria-modal="true"', () => {
      render(
        <Modal visible={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>,
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('has aria-labelledby when title is provided', () => {
      render(
        <Modal visible={true} onClose={vi.fn()} title="Test Modal" testID="test-modal">
          <div>Content</div>
        </Modal>,
      )

      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-labelledby', 'test-modal-title')
      expect(screen.getByText('Test Modal')).toHaveAttribute('id', 'test-modal-title')
    })
  })

  describe('States', () => {
    it('is hidden when visible changes from true to false', () => {
      const { rerender } = render(
        <Modal visible={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>,
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()

      rerender(
        <Modal visible={false} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>,
      )

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('prevents body scroll when visible', () => {
      render(
        <Modal visible={true} onClose={vi.fn()}>
          <div>Content</div>
        </Modal>,
      )

      expect(document.body.style.overflow).toBe('hidden')
    })
  })

  describe('Props', () => {
    it('does not show close button when showCloseButton is false', () => {
      render(
        <Modal visible={true} onClose={vi.fn()} title="Test" showCloseButton={false}>
          <div>Content</div>
        </Modal>,
      )

      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
    })

    it('does not call onClose when backdrop is clicked and closeOnBackdropPress is false', () => {
      const handleClose = vi.fn()
      render(
        <Modal visible={true} onClose={handleClose} closeOnBackdropPress={false}>
          <div>Content</div>
        </Modal>,
      )

      const backdrop = screen.getByTestId('modal-overlay')
      fireEvent.click(backdrop)
      expect(handleClose).not.toHaveBeenCalled()
    })
  })
})
