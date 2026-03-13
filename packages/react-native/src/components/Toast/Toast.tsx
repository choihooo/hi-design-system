/**
 * @component Toast
 * @description A toast notification component with auto-dismiss and variant styles
 * @platform React Native
 * @usage
 * ```tsx
 * <Toast
 *   visible={showToast}
 *   message="Operation successful!"
 *   variant="success"
 *   duration={3000}
 *   position="top"
 *   onClose={() => setShowToast(false)}
 * />
 * ```
 */

import { borderRadius, colors, spacing, typography } from '@hi-design/tokens'
import type { ToastProps } from '@hi-design/types'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  AccessibilityInfo,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export const Toast: React.FC<ToastProps> = ({
  visible = false,
  message,
  variant = 'info',
  duration = 3000,
  position = 'top',
  onClose,
  testID,
}) => {
  const [isVisible, setIsVisible] = useState(visible)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(-50)).current

  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  useEffect(() => {
    if (isVisible) {
      // Announce to screen readers
      AccessibilityInfo.announceForAccessibility(`${variant}: ${message}`)

      // Animate in
      const slideValue = position === 'bottom' ? 50 : -50
      slideAnim.setValue(slideValue)
      fadeAnim.setValue(0)

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start()

      // Auto-dismiss
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose()
        }, duration)

        return () => clearTimeout(timer)
      }
    }
  }, [isVisible, duration, fadeAnim, handleClose, message, position, slideAnim, variant])

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: position === 'bottom' ? 50 : -50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsVisible(false)
      onClose?.()
    })
  }

  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return successStyle
      case 'error':
        return errorStyle
      case 'warning':
        return warningStyle
      default:
        return infoStyle
    }
  }

  if (!isVisible) return null

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return '✓'
      case 'error':
        return '✕'
      case 'warning':
        return '⚠'
      default:
        return 'ℹ'
    }
  }

  const getPositionStyle = () => {
    switch (position) {
      case 'bottom':
        return styles.positionBottom
      case 'center':
        return styles.positionCenter
      default:
        return styles.positionTop
    }
  }

  return (
    <Animated.View
      style={[
        styles.container,
        getPositionStyle(),
        getVariantStyle(),
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
      testID={testID || 'hi-toast'}
      accessible
      accessibilityRole="alert"
      accessibilityLabel={message}
    >
      <View style={styles.icon}>{getIcon()}</View>
      <Text style={styles.message} numberOfLines={3}>
        {message}
      </Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={handleClose}
        accessibilityLabel="Close toast"
        accessibilityRole="button"
      >
        <Text style={styles.closeIcon}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    minWidth: 300,
  },
  positionTop: {
    top: spacing.lg,
  },
  positionBottom: {
    bottom: spacing.lg,
  },
  positionCenter: {
    top: SCREEN_HEIGHT / 2,
    marginTop: -30,
  },
  icon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  message: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.white,
    lineHeight: typography.lineHeights.normal * typography.fontSizes.sm,
  },
  closeButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.sm,
  },
  closeIcon: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.8,
  },
})

// Variant-specific styles
const successStyle = {
  backgroundColor: colors.success,
}

const errorStyle = {
  backgroundColor: colors.error,
}

const warningStyle = {
  backgroundColor: colors.warning,
}

const infoStyle = {
  backgroundColor: colors.primary[500],
}
