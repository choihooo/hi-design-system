/**
 * @component Modal
 * @description A modal dialog component with backdrop, close button, and size variants
 * @platform React Native
 * @usage
 * ```tsx
 * <Modal
 *   visible={isOpen}
 *   title="Modal Title"
 *   size="md"
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>Modal content goes here</Text>
 * </Modal>
 * ```
 */

import { borderRadius, colors, spacing, typography } from '@hi-design/tokens'
import type { ModalProps } from '@hi-design/types'
import type React from 'react'
import { useEffect } from 'react'
import {
  AccessibilityInfo,
  Dimensions,
  Modal as RNModal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title,
  size = 'md',
  closeOnBackdropPress = true,
  showCloseButton = true,
  onClose,
  children,
  testID,
}) => {
  // Announce modal to screen readers
  useEffect(() => {
    if (visible) {
      AccessibilityInfo.announceForAccessibility('Modal opened')
    }
  }, [visible])

  const getSizeWidth = () => {
    switch (size) {
      case 'sm':
        return '90%'
      case 'lg':
        return '95%'
      default:
        return '92%'
    }
  }

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      testID={testID || 'hi-modal'}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={closeOnBackdropPress ? onClose : undefined}
        testID={testID ? `${testID}-overlay` : 'hi-modal-overlay'}
      >
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={[
              styles.modal,
              { width: getSizeWidth() },
              size === 'sm' && styles.modalSm,
              size === 'lg' && styles.modalLg,
            ]}
          >
            {(title || showCloseButton) && (
              <View style={styles.header}>
                {title && (
                  <Text
                    style={styles.title}
                    testID="hi-modal-title"
                    accessible
                    accessibilityRole="header"
                  >
                    {title}
                  </Text>
                )}
                {showCloseButton && (
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                    accessibilityLabel="Close modal"
                    accessibilityRole="button"
                    testID="hi-modal-close-button"
                  >
                    <Text style={styles.closeIcon}>✕</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
            <View style={styles.body}>{children}</View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    maxHeight: SCREEN_HEIGHT * 0.9,
    width: '92%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  modalSm: {
    maxWidth: 400,
  },
  modalLg: {
    maxWidth: 800,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  title: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semibold,
    color: colors.neutral[900],
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.sm,
    marginLeft: spacing.md,
  },
  closeIcon: {
    fontSize: 20,
    color: colors.neutral[500],
    fontWeight: '300',
  },
  body: {
    padding: spacing.lg,
    flex: 1,
  },
})
