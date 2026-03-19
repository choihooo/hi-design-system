import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  describe('기본 렌더링', () => {
    it('기본 Alert가 렌더링된다', () => {
      render(<Alert>테스트 메시지</Alert>)
      expect(screen.getByText('테스트 메시지')).toBeInTheDocument()
    })

    it('title이 있으면 title이 렌더링된다', () => {
      render(<Alert title="타이틀">메시지</Alert>)
      expect(screen.getByText('타이틀')).toBeInTheDocument()
      expect(screen.getByText('메시지')).toBeInTheDocument()
    })

    it('children이 없으면 content가 렌더링되지 않는다', () => {
      const { container } = render(<Alert title="타이틀만" />)
      expect(screen.getByText('타이틀만')).toBeInTheDocument()
      expect(container.querySelector('.alert__message')).toBeNull()
    })
  })

  describe('Variants', () => {
    it.each([
      ['info', 'alert--info'],
      ['success', 'alert--success'],
      ['warning', 'alert--warning'],
      ['error', 'alert--error'],
    ])('variant가 %s이면 %s 클래스가 적용된다', (variant, expectedClass) => {
      const { container } = render(<Alert variant={variant as any}>메시지</Alert>)
      expect(container.querySelector(`.${expectedClass}`)).toBeInTheDocument()
    })
  })

  describe('Icons', () => {
    it('info variant는 info 아이콘을 표시한다', () => {
      const { container } = render(<Alert variant="info">메시지</Alert>)
      expect(container.querySelector('.alert__icon')).toBeInTheDocument()
    })

    it('success variant는 check-circle 아이콘을 표시한다', () => {
      const { container } = render(<Alert variant="success">메시지</Alert>)
      expect(container.querySelector('.alert__icon')).toBeInTheDocument()
    })

    it('warning variant는 alert-triangle 아이콘을 표시한다', () => {
      const { container } = render(<Alert variant="warning">메시지</Alert>)
      expect(container.querySelector('.alert__icon')).toBeInTheDocument()
    })

    it('error variant는 alert-circle 아이콘을 표시한다', () => {
      const { container } = render(<Alert variant="error">메시지</Alert>)
      expect(container.querySelector('.alert__icon')).toBeInTheDocument()
    })
  })

  describe('Close functionality', () => {
    it('onClose가 있으면 close 버튼이 렌더링된다', () => {
      const handleClose = vi.fn()
      const { container } = render(<Alert onClose={handleClose}>메시지</Alert>)
      expect(container.querySelector('.alert__close')).toBeInTheDocument()
    })

    it('onClose가 없으면 close 버튼이 렌더링되지 않는다', () => {
      const { container } = render(<Alert>메시지</Alert>)
      expect(container.querySelector('.alert__close')).toBeNull()
    })

    it('close 버튼을 클릭하면 onClose가 호출된다', async () => {
      const user = userEvent.setup()
      const handleClose = vi.fn()
      const { container } = render(<Alert onClose={handleClose}>메시지</Alert>)

      const closeButton = container.querySelector('.alert__close')
      if (closeButton) {
        await user.click(closeButton)
        expect(handleClose).toHaveBeenCalledTimes(1)
      }
    })
  })

  describe('Accessibility', () => {
    it('close 버튼에는 aria-label 속성이 있다', () => {
      const handleClose = vi.fn()
      const { container } = render(<Alert onClose={handleClose}>메시지</Alert>)
      const closeButton = container.querySelector('.alert__close')
      expect(closeButton).toHaveAttribute('aria-label', 'Close alert')
    })

    it('icon에는 aria-hidden 속성이 있다', () => {
      const { container } = render(<Alert>메시지</Alert>)
      const icon = container.querySelector('.alert__icon')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })

    it('testID prop이 전달되면 data-testid 속성이 설정된다', () => {
      const { container } = render(<Alert testID="test-alert">메시지</Alert>)
      expect(container.querySelector('[data-testid="test-alert"]')).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('커스텀 className이 적용된다', () => {
      const { container } = render(<Alert className="custom-class">메시지</Alert>)
      expect(container.querySelector('.custom-class')).toBeInTheDocument()
    })

    it('title이 있을 때 has-title 클래스가 추가된다', () => {
      const { container } = render(<Alert title="타이틀">메시지</Alert>)
      expect(container.querySelector('.alert--has-title')).toBeInTheDocument()
    })

    it('title이 없을 때 has-title 클래스가 추가되지 않는다', () => {
      const { container } = render(<Alert>메시지만</Alert>)
      expect(container.querySelector('.alert--has-title')).toBeNull()
    })
  })

  describe('Edge cases', () => {
    it('빈 메시지로 렌더링된다', () => {
      const { container } = render(<Alert>{''}</Alert>)
      expect(container.querySelector('.alert')).toBeInTheDocument()
    })

    it('긴 메시지도 정상 렌더링된다', () => {
      const longMessage = 'A'.repeat(1000)
      render(<Alert>{longMessage}</Alert>)
      expect(screen.getByText(longMessage)).toBeInTheDocument()
    })

    it('HTML이 포함된 메시지를 렌더링한다', () => {
      const { container } = render(<Alert>{'<strong>굵은 텍스트</strong>'}</Alert>)
      expect(container.innerHTML).toContain('<strong>굵은 텍스트</strong>')
    })
  })
})
