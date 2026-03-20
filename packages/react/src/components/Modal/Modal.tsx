/**
 * Modal - Focused layers that dim the canvas, sharpen the decision
 *
 * From design-tokens.pen 1UBrU - HI Modals - Focused Layers
 * "Focused layers that dim the canvas, sharpen the decision, and keep actions tight and legible."
 *
 * @platform React
 * @usage
 * ```tsx
 * <Modal
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="Delete account?"
 *   description="This action cannot be undone."
 *   primaryAction="Delete"
 *   onPrimary={handleDelete}
 *   secondaryAction="Cancel"
 *   onSecondary={() => setOpen(false)}
 * />
 * ```
 */

import { scale } from '@hi-design/tokens'
import { forwardRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  // Basic
  open: boolean
  onClose: () => void

  // Content
  title: string
  description?: string
  children?: React.ReactNode

  // Size & Pattern
  size?: 'sm' | 'md' | 'lg'
  pattern?: 'default' | 'destructive' | 'loading' | 'form'

  // Actions
  primaryAction?: string
  onPrimary?: () => void
  secondaryAction?: string
  onSecondary?: () => void

  // Options
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
  testID?: string
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      children,
      size = 'md',
      pattern = 'default',
      primaryAction,
      onPrimary,
      secondaryAction,
      onSecondary,
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
      testID,
    },
    ref,
  ) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const previousActiveElement = useRef<HTMLElement | null>(null)

    // Handle escape key
    useEffect(() => {
      if (!open || !closeOnEscape) return

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, closeOnEscape, onClose])

    // Focus trap
    useEffect(() => {
      if (!open) return

      // Save previous active element
      previousActiveElement.current = document.activeElement as HTMLElement

      // Focus modal
      modalRef.current?.focus()

      // Restore focus on unmount
      return () => {
        previousActiveElement.current?.focus()
      }
    }, [open])

    // Prevent body scroll
    useEffect(() => {
      if (!open) return

      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }, [open])

    if (!open) return null

    // Sizes from design-tokens.pen 1UBrU
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        maxWidth: 400, // Confirmation dialogs
      },
      md: {
        maxWidth: 560, // Structured forms (default)
      },
      lg: {
        maxWidth: 720, // Richer workflows
      },
    }

    // Overlay styles
    const overlayStyle: React.CSSProperties = {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // More subtle overlay
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 24,
    }

    // Modal card styles from design-tokens.pen
    const modalStyle: React.CSSProperties = {
      backgroundColor: scale.color.neutral[50], // $surface-elevated
      borderRadius: 16, // From design-tokens.pen
      boxShadow: scale.shadow.xl,
      width: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
      overflow: 'hidden',
      ...sizeStyles[size],
    }

    // Header styles (padding: 20 from design-tokens.pen)
    const headerStyle: React.CSSProperties = {
      padding: 20,
      borderBottom: `1px solid ${scale.color.neutral[200]}`,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
    }

    const titleStyle: React.CSSProperties = {
      margin: 0,
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.3,
      color: scale.color.neutral[900],
      flex: 1,
    }

    const closeButtonStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      border: 'none',
      borderRadius: 8,
      backgroundColor: 'transparent',
      color: scale.color.neutral[500],
      cursor: 'pointer',
      transition: 'all 150ms ease',
      padding: 0,
    }

    // Body styles (padding: 20 from design-tokens.pen)
    const bodyStyle: React.CSSProperties = {
      padding: 20,
      overflowY: 'auto',
      flex: 1,
    }

    const descriptionStyle: React.CSSProperties = {
      margin: 0,
      marginTop: 4,
      fontSize: 14,
      lineHeight: 1.5,
      color: scale.color.neutral[600],
    }

    // Footer styles (padding: 20 from design-tokens.pen)
    const footerStyle: React.CSSProperties = {
      padding: 20,
      borderTop: `1px solid ${scale.color.neutral[200]}`,
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end', // Primary on right (System Note 3)
    }

    const buttonBaseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      border: 'none',
      borderRadius: 999,
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 150ms ease',
    }

    const primaryButtonStyle: React.CSSProperties = {
      ...buttonBaseStyle,
      backgroundColor:
        pattern === 'destructive'
          ? scale.color.error[500]
          : scale.color.primary[500],
      color: scale.color.neutral[50],
    }

    const secondaryButtonStyle: React.CSSProperties = {
      ...buttonBaseStyle,
      backgroundColor: scale.color.neutral[100],
      color: scale.color.neutral[900],
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    }

    const modalContent = (
      <div style={overlayStyle} onClick={handleOverlayClick} data-test-id={testID}>
        <div
          ref={(node) => {
            // Handle both refs
            if (node) {
              modalRef.current = node
              if (typeof ref === 'function') {
                ref(node)
              } else if (ref) {
                ref.current = node
              }
            }
          }}
          style={modalStyle}
          className={className}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby={description ? 'modal-description' : undefined}
        >
          {/* Header - System Note 2: Title explains the decision */}
          <div style={headerStyle}>
            <div style={{ flex: 1 }}>
              <h2 id="modal-title" style={titleStyle}>
                {title}
              </h2>
              {description && (
                <p id="modal-description" style={descriptionStyle}>
                  {description}
                </p>
              )}
            </div>
            {showCloseButton && (
              <button
                style={closeButtonStyle}
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Body - Content area */}
          {children && <div style={bodyStyle}>{children}</div>}

          {/* Footer - Actions */}
          {(primaryAction || secondaryAction) && (
            <div style={footerStyle}>
              {/* Secondary on left (System Note 3) */}
              {secondaryAction && onSecondary && (
                <button style={secondaryButtonStyle} onClick={onSecondary}>
                  {secondaryAction}
                </button>
              )}

              {/* Primary on right (System Note 1: Single primary action) */}
              {primaryAction && onPrimary && (
                <button
                  style={primaryButtonStyle}
                  onClick={onPrimary}
                  disabled={pattern === 'loading'}
                >
                  {pattern === 'loading' && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 14,
                        height: 14,
                        border: '2px solid currentColor',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite',
                      }}
                    />
                  )}
                  {primaryAction}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    )

    return createPortal(modalContent, document.body)
  },
)

Modal.displayName = 'Modal'

export default Modal
