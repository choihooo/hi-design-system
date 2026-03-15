/**
 * Alert - Notification banner composed of Box + Icon + Text primitives
 *
 * @usage
 * <Alert variant="info" title="Info" onClose={handleClose}>
 *   Important message
 * </Alert>
 */

import { Box } from '@hi-design/primitives'
import { Icon } from '@hi-design/primitives'
import { Text } from '@hi-design/primitives'
import { Pressable } from '@hi-design/primitives'
import clsx from 'clsx'
import { forwardRef } from 'react'
import './Alert.css'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  onClose?: () => void
  className?: string
  children?: React.ReactNode
  testID?: string
}

const getAlertClass = (props: {
  variant: string
  hasTitle: boolean
  className?: string
}) => clsx(
  'alert',
  `alert--${props.variant}`,
  props.hasTitle && 'alert--has-title',
  props.className,
)

const getIconName = (variant: string) => {
  const icons = {
    info: 'info',
    success: 'check-circle',
    warning: 'alert-triangle',
    error: 'alert-circle',
  }
  return icons[variant as keyof typeof icons] || 'info'
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      onClose,
      className,
      children,
      testID,
    },
    ref,
  ) => {
    const hasTitle = !!title

    return (
      <Box
        ref={ref}
        className={getAlertClass({ variant, hasTitle, className })}
        testID={testID}
      >
        <Icon name={getIconName(variant)} size="md" className="alert__icon" aria-hidden="true" />

        <div className="alert__content">
          {title && (
            <Text variant="h6" className="alert__title">
              {title}
            </Text>
          )}
          {children && (
            <Text variant="body2" className="alert__message">
              {children}
            </Text>
          )}
        </div>

        {onClose && (
          <Pressable
            onPress={onClose}
            className="alert__close"
            aria-label="Close alert"
          >
            <Icon name="x" size="sm" aria-hidden="true" />
          </Pressable>
        )}
      </Box>
    )
  },
)

Alert.displayName = 'Alert'

export default Alert
