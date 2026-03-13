/**
 * @component Input
 * @description Text input component with label, helper text, and error states for React Native
 * @platform React Native (iOS/Android)
 * @usage
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChangeText={setEmail}
 *   state="error"
 *   errorText="Invalid email format"
 * />
 * ```
 */

import { borderRadius, colors, spacing } from '@hi-design/tokens'
import type { InputProps } from '@hi-design/types'
import type React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native'

export const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  placeholder,
  variant = 'outline',
  size = 'md',
  state = 'default',
  disabled = false,
  fullWidth = false,
  readOnly = false,
  label,
  helperText,
  errorText,
  onChangeText,
  onFocus,
  onBlur,
  onSubmit,
  testID,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  const [isFocused, setIsFocused] = useState(false)

  const currentValue = value !== undefined ? value : internalValue
  const showError = state === 'error' && !!errorText

  const handleChange = (text: string) => {
    if (value === undefined) {
      setInternalValue(text)
    }
    onChangeText?.(text)
  }

  const handleFocus = () => {
    setIsFocused(true)
    onFocus?.()
  }

  const handleBlur = () => {
    setIsFocused(false)
    onBlur?.()
  }

  const handleSubmit = () => {
    onSubmit?.()
  }

  const containerStyle = StyleSheet.flatten([styles.container, fullWidth && styles.fullWidth])

  const inputStyle = StyleSheet.flatten([
    styles.input,
    styles[variant],
    styles[size],
    isFocused && styles.focused,
    state === 'error' && styles.error,
    state === 'success' && styles.success,
    disabled && styles.disabled,
  ])

  return (
    <View style={containerStyle} testID={testID}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={inputStyle}
        value={currentValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral[400]}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmitEditing={handleSubmit}
        editable={!disabled && !readOnly}
        {...(rest as TextInputProps)}
      />
      {(helperText || showError) && (
        <Text style={showError ? styles.errorText : styles.helperText}>
          {showError ? errorText : helperText}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  fullWidth: {
    maxWidth: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.neutral[800],
    marginBottom: spacing[1],
  },
  input: {
    width: '100%',
    borderRadius: borderRadius.md,
    fontSize: 16,
    paddingHorizontal: spacing[4],
    borderWidth: 2,
  },
  outline: {
    backgroundColor: '#fff',
    borderColor: colors.neutral[200],
  },
  filled: {
    backgroundColor: colors.neutral[50],
    borderColor: 'transparent',
  },
  focused: {
    borderColor: colors.primary[500],
  },
  error: {
    borderColor: colors.semantic.error.main,
  },
  success: {
    borderColor: colors.semantic.success.main,
  },
  disabled: {
    backgroundColor: colors.neutral[100],
    opacity: 0.6,
  },
  sm: {
    paddingVertical: spacing[2],
    minHeight: 36,
    fontSize: 14,
  },
  md: {
    paddingVertical: spacing[3],
    minHeight: 44,
  },
  lg: {
    paddingVertical: spacing[4],
    minHeight: 52,
  },
  helperText: {
    fontSize: 13,
    color: colors.neutral[500],
    marginTop: spacing[1],
  },
  errorText: {
    fontSize: 13,
    color: colors.semantic.error.main,
    marginTop: spacing[1],
  },
})
