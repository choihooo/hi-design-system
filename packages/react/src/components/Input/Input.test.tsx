/**
 * Input Component Tests
 */

import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Input from './Input'
import '@testing-library/jest-dom'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders with placeholder', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    })

    it('renders with helper text', () => {
      render(<Input helperText="We'll never share your email" />)
      expect(screen.getByText("We'll never share your email")).toBeInTheDocument()
    })

    it('renders with error state', () => {
      render(<Input state="error" errorText="This field is required" />)
      expect(screen.getByRole('alert')).toHaveTextContent('This field is required')
    })
  })

  describe('Interactions', () => {
    it('calls onChangeText when value changes', () => {
      const handleChange = vi.fn()
      render(<Input onChangeText={handleChange} />)

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(handleChange).toHaveBeenCalledWith('test')
    })

    it('calls onFocus when focused', () => {
      const handleFocus = vi.fn()
      render(<Input onFocus={handleFocus} />)

      fireEvent.focus(screen.getByRole('textbox'))
      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', () => {
      const handleBlur = vi.fn()
      render(<Input onBlur={handleBlur} />)

      fireEvent.blur(screen.getByRole('textbox'))
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('calls onSubmit when Enter key is pressed', () => {
      const handleSubmit = vi.fn()
      render(<Input onSubmit={handleSubmit} />)

      fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' })
      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accessibility', () => {
    it('has aria-invalid when in error state', () => {
      render(<Input state="error" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('has aria-required when required', () => {
      render(<Input required label="Email" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
    })

    it('has aria-describedby for helper text', () => {
      render(<Input helperText="Help text" testID="test-input" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby')
    })

    it('has aria-describedby for error text', () => {
      render(<Input state="error" errorText="Error message" testID="test-input" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby')
    })

    it('error text has role="alert"', () => {
      render(<Input state="error" errorText="Error message" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  describe('States', () => {
    it('is disabled when disabled prop is true', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('is read-only when readOnly prop is true', () => {
      render(<Input readOnly />)
      expect(screen.getByRole('textbox')).toHaveAttribute('readOnly')
    })

    it('has focused state when focused', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')

      act(() => {
        input.focus()
      })

      expect(input).toHaveClass('input--focused')
    })
  })

  describe('Controlled vs Uncontrolled', () => {
    it('works as controlled input', () => {
      render(<Input value="test" />)
      expect(screen.getByRole('textbox')).toHaveValue('test')
    })

    it('works as uncontrolled input', () => {
      render(<Input defaultValue="test" />)
      expect(screen.getByRole('textbox')).toHaveValue('test')
    })
  })
})
