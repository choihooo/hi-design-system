/**
 * @component Card
 * @description Container component with elevation and padding options for React Native
 * @platform React Native (iOS/Android)
 * @usage
 * ```tsx
 * <Card elevation="md" padding="lg" pressable onPress={handleClick}>
 *   <Text>Card Title</Text>
 *   <Text>Card content goes here</Text>
 * </Card>
 * ```
 */

import { borderRadius, spacing } from '@hi-design/tokens'
import type { CardProps } from '@hi-design/types'
import type React from 'react'
import { StyleSheet, TouchableOpacity, View, type ViewStyle } from 'react-native'

export const Card: React.FC<CardProps> = ({
  elevation = 'md',
  padding = 'md',
  radius = 'md',
  pressable = false,
  onPress,
  children,
  testID,
}) => {
  const cardStyle = StyleSheet.flatten([
    styles.card,
    styles[`elevation_${elevation}`],
    styles[`padding_${padding}`],
    styles[`radius_${radius}`],
  ] as ViewStyle)

  if (pressable) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.7} testID={testID}>
        {children}
      </TouchableOpacity>
    )
  }

  return (
    <View style={cardStyle} testID={testID}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
  elevation_none: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    shadowOpacity: 0,
    elevation: 0,
  },
  elevation_sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  elevation_md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 4,
  },
  elevation_lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  elevation_xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 12,
  },
  padding_none: {
    padding: 0,
  },
  padding_sm: {
    padding: spacing[4],
  },
  padding_md: {
    padding: spacing[6],
  },
  padding_lg: {
    padding: spacing[8],
  },
  padding_xl: {
    padding: spacing[12],
  },
  radius_none: {
    borderRadius: 0,
  },
  radius_sm: {
    borderRadius: borderRadius.sm,
  },
  radius_md: {
    borderRadius: borderRadius.md,
  },
  radius_lg: {
    borderRadius: borderRadius.lg,
  },
  radius_xl: {
    borderRadius: borderRadius.xl,
  },
  radius_full: {
    borderRadius: 9999,
  },
})
