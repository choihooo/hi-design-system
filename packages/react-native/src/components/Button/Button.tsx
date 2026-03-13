/**
 * @component Button
 * @description Interactive button component with multiple variants and sizes for React Native
 * @platform React Native (iOS/Android)
 * @usage
 * ```tsx
 * <Button variant="primary" size="md" onPress={handleClick}>
 *   Click me
 * </Button>
 * ```
 */

import { borderRadius, colors, spacing } from '@hi-design/tokens'
import type { ButtonProps } from '@hi-design/types'
import type React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  type TextStyle,
  TouchableOpacity,
  type ViewStyle,
} from 'react-native'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  color = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  onPress,
  children,
  testID,
}) => {
  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress()
    }
  }

  const buttonStyle = StyleSheet.flatten([
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ])

  const textStyle = StyleSheet.flatten([
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
  ])

  return (
    <TouchableOpacity
      style={buttonStyle as ViewStyle}
      onPress={handlePress}
      disabled={disabled || loading}
      testID={testID}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size={size === 'sm' ? 'small' : 'large'}
          color={variant === 'ghost' || variant === 'outline' ? colors.primary[500] : '#fff'}
        />
      ) : (
        <Text style={textStyle as TextStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },

  // Variants
  primary: {
    backgroundColor: colors.primary[500],
  },
  primaryText: {
    color: '#fff',
  },
  secondary: {
    backgroundColor: colors.secondary[500],
  },
  secondaryText: {
    color: '#fff',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: colors.primary[500],
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary[500],
  },
  outlineText: {
    color: colors.primary[500],
  },

  // Sizes
  sm: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    minHeight: 36,
  },
  smText: {
    fontSize: 14,
  },
  md: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    minHeight: 44,
  },
  mdText: {
    fontSize: 16,
  },
  lg: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[6],
    minHeight: 52,
  },
  lgText: {
    fontSize: 16,
  },

  // Modifiers
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
})
