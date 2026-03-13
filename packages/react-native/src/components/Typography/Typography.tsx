/**
 * @component Typography
 * @description Text component with predefined style variants for React Native
 * @platform React Native (iOS/Android)
 * @usage
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body1">Body text goes here</Typography>
 * <Typography variant="caption" color="neutral.500">
 *   Caption text
 * </Typography>
 * ```
 */

import { colors, typography } from '@hi-design/tokens'
import type { TypographyProps } from '@hi-design/types'
import type React from 'react'
import { StyleSheet, Text, type TextStyle } from 'react-native'

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  weight,
  color,
  align = 'left',
  noWrap = false,
  numberOfLines,
  children,
  testID,
}) => {
  const textStyle = typography.textStyles[variant]
  const fontWeight = weight || textStyle.fontWeight

  const textStyleFlattened = StyleSheet.flatten([
    styles[variant],
    {
      fontWeight: fontWeight as any,
      textAlign: align,
      color: color ? (colors as any)[color] || color : colors.neutral[900],
    },
  ] as TextStyle)

  return (
    <Text style={textStyleFlattened} numberOfLines={noWrap ? 1 : numberOfLines} testID={testID}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 60,
    fontWeight: '700' as any,
    lineHeight: 75,
    letterSpacing: -3,
  },
  h2: {
    fontSize: 48,
    fontWeight: '700' as any,
    lineHeight: 60,
    letterSpacing: -2.4,
  },
  h3: {
    fontSize: 36,
    fontWeight: '600' as any,
    lineHeight: 45,
    letterSpacing: -0.9,
  },
  h4: {
    fontSize: 30,
    fontWeight: '600' as any,
    lineHeight: 41,
    letterSpacing: 0,
  },
  h5: {
    fontSize: 24,
    fontWeight: '600' as any,
    lineHeight: 33,
    letterSpacing: 0,
  },
  h6: {
    fontSize: 20,
    fontWeight: '500' as any,
    lineHeight: 30,
    letterSpacing: 0,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400' as any,
    lineHeight: 24,
    letterSpacing: 0,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400' as any,
    lineHeight: 21,
    letterSpacing: 0,
  },
  button: {
    fontSize: 16,
    fontWeight: '600' as any,
    lineHeight: 24,
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as any,
    lineHeight: 18,
    letterSpacing: 0,
  },
  overline: {
    fontSize: 12,
    fontWeight: '500' as any,
    lineHeight: 18,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
})
