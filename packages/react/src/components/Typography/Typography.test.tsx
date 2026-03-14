/**
 * Typography Component Tests
 */

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Typography from './Typography'
import '@testing-library/jest-dom'

describe('Typography', () => {
  describe('Rendering', () => {
    it('renders text correctly', () => {
      render(<Typography>Test text</Typography>)
      expect(screen.getByText('Test text')).toBeInTheDocument()
    })

    it('renders with different variants', () => {
      const { rerender } = render(<Typography variant="h1">Heading 1</Typography>)
      expect(screen.getByText('Heading 1')).toHaveClass('typography--h1')

      rerender(<Typography variant="h2">Heading 2</Typography>)
      expect(screen.getByText('Heading 2')).toHaveClass('typography--h2')

      rerender(<Typography variant="h3">Heading 3</Typography>)
      expect(screen.getByText('Heading 3')).toHaveClass('typography--h3')

      rerender(<Typography variant="h4">Heading 4</Typography>)
      expect(screen.getByText('Heading 4')).toHaveClass('typography--h4')

      rerender(<Typography variant="h5">Heading 5</Typography>)
      expect(screen.getByText('Heading 5')).toHaveClass('typography--h5')

      rerender(<Typography variant="h6">Heading 6</Typography>)
      expect(screen.getByText('Heading 6')).toHaveClass('typography--h6')

      rerender(<Typography variant="body1">Body 1</Typography>)
      expect(screen.getByText('Body 1')).toHaveClass('typography--body1')

      rerender(<Typography variant="body2">Body 2</Typography>)
      expect(screen.getByText('Body 2')).toHaveClass('typography--body2')

      rerender(<Typography variant="caption">Caption</Typography>)
      expect(screen.getByText('Caption')).toHaveClass('typography--caption')

      rerender(<Typography variant="overline">Overline</Typography>)
      expect(screen.getByText('Overline')).toHaveClass('typography--overline')
    })
  })

  describe('HTML Tags', () => {
    it('renders correct HTML tag for heading variants', () => {
      const { rerender } = render(<Typography variant="h1">Heading 1</Typography>)
      expect(screen.getByText('Heading 1').tagName).toBe('H1')

      rerender(<Typography variant="h2">Heading 2</Typography>)
      expect(screen.getByText('Heading 2').tagName).toBe('H2')

      rerender(<Typography variant="h3">Heading 3</Typography>)
      expect(screen.getByText('Heading 3').tagName).toBe('H3')

      rerender(<Typography variant="h4">Heading 4</Typography>)
      expect(screen.getByText('Heading 4').tagName).toBe('H4')

      rerender(<Typography variant="h5">Heading 5</Typography>)
      expect(screen.getByText('Heading 5').tagName).toBe('H5')

      rerender(<Typography variant="h6">Heading 6</Typography>)
      expect(screen.getByText('Heading 6').tagName).toBe('H6')
    })

    it('renders paragraph tag for body variants', () => {
      const { rerender } = render(<Typography variant="body1">Body 1</Typography>)
      expect(screen.getByText('Body 1').tagName).toBe('P')

      rerender(<Typography variant="body2">Body 2</Typography>)
      expect(screen.getByText('Body 2').tagName).toBe('P')
    })

    it('renders paragraph tag for caption and overline', () => {
      const { rerender } = render(<Typography variant="caption">Caption</Typography>)
      // Note: Current implementation renders <p> for all non-heading variants
      expect(screen.getByText('Caption').tagName).toBe('P')

      rerender(<Typography variant="overline">Overline</Typography>)
      expect(screen.getByText('Overline').tagName).toBe('P')
    })
  })

  describe('Styles', () => {
    it('applies custom font weight when weight prop is provided', () => {
      render(<Typography weight="bold">Bold Text</Typography>)
      const element = screen.getByText('Bold Text')
      expect(element).toHaveStyle({ fontWeight: 'bold' })
    })

    it('applies custom color when color prop is provided', () => {
      render(<Typography color="#ff0000">Red Text</Typography>)
      const element = screen.getByText('Red Text')
      expect(element).toHaveStyle({ color: '#ff0000' })
    })

    it('applies text alignment when align prop is provided', () => {
      const { rerender } = render(<Typography align="left">Left</Typography>)
      expect(screen.getByText('Left')).toHaveStyle({ textAlign: 'left' })

      rerender(<Typography align="center">Center</Typography>)
      expect(screen.getByText('Center')).toHaveStyle({ textAlign: 'center' })

      rerender(<Typography align="right">Right</Typography>)
      expect(screen.getByText('Right')).toHaveStyle({ textAlign: 'right' })

      rerender(<Typography align="justify">Justify</Typography>)
      expect(screen.getByText('Justify')).toHaveStyle({ textAlign: 'justify' })
    })

    it('applies noWrap when noWrap prop is true', () => {
      render(<Typography noWrap>No wrap text</Typography>)
      const element = screen.getByText('No wrap text')
      expect(element).toHaveStyle({ whiteSpace: 'nowrap' })
    })

    it('applies line clamping when numberOfLines is provided', () => {
      render(<Typography numberOfLines={2}>Long text that should be clamped</Typography>)
      const element = screen.getByText(/Long text that should be clamped/)
      expect(element).toHaveStyle({
        WebkitLineClamp: '2',
        display: '-webkit-box',
      })
    })
  })

  describe('Accessibility', () => {
    it('preserves custom className', () => {
      render(<Typography className="custom-class">Custom Text</Typography>)
      expect(screen.getByText('Custom Text')).toHaveClass('custom-class')
    })

    it('passes through other props', () => {
      render(<Typography data-testid="custom-typography">Test</Typography>)
      expect(screen.getByTestId('custom-typography')).toBeInTheDocument()
    })
  })

  describe('Font Sizes', () => {
    it('applies correct font size for each variant', () => {
      const { rerender } = render(<Typography variant="h1">H1</Typography>)
      expect(screen.getByText('H1')).toHaveStyle({ fontSize: '60px' })

      rerender(<Typography variant="h2">H2</Typography>)
      expect(screen.getByText('H2')).toHaveStyle({ fontSize: '48px' })

      rerender(<Typography variant="h3">H3</Typography>)
      expect(screen.getByText('H3')).toHaveStyle({ fontSize: '36px' })

      rerender(<Typography variant="body1">Body</Typography>)
      expect(screen.getByText('Body')).toHaveStyle({ fontSize: '16px' })

      rerender(<Typography variant="caption">Caption</Typography>)
      expect(screen.getByText('Caption')).toHaveStyle({ fontSize: '12px' })
    })
  })
})
