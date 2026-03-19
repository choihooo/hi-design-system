import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Select from './Select'

const options = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]

describe('Select', () => {
  it('renders label and placeholder', () => {
    render(<Select label="Plan" placeholder="Choose a plan" options={options} />)
    expect(screen.getByLabelText('Plan')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /choose a plan/i })).toBeInTheDocument()
  })

  it('opens the menu and selects an option', () => {
    const handleValueChange = vi.fn()
    render(<Select label="Plan" options={options} onValueChange={handleValueChange} />)

    fireEvent.click(screen.getByLabelText('Plan'))
    fireEvent.click(screen.getByRole('option', { name: 'Pro' }))

    expect(handleValueChange).toHaveBeenCalledWith('pro', options[1])
    expect(screen.getByRole('button', { name: /pro/i })).toBeInTheDocument()
  })

  it('filters options when searchable', () => {
    render(
      <Select
        label="Country"
        variant="search"
        searchable
        searchPlaceholder="Search country"
        options={[
          { value: 'kr', label: 'Korea, Republic of', keywords: ['korea'] },
          { value: 'jp', label: 'Japan' },
        ]}
      />,
    )

    fireEvent.click(screen.getByLabelText('Country'))
    fireEvent.change(screen.getByPlaceholderText('Search country'), { target: { value: 'kor' } })

    expect(screen.getByRole('option', { name: 'Korea, Republic of' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Japan' })).toBeNull()
  })

  it('shows error messaging accessibly', () => {
    render(<Select label="Country" state="error" errorText="Choose a country" options={options} />)
    expect(screen.getByLabelText('Country')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('alert')).toHaveTextContent('Choose a country')
  })

  it('is disabled when disabled is true', () => {
    render(<Select label="Plan" disabled options={options} />)
    expect(screen.getByLabelText('Plan')).toBeDisabled()
  })
})
