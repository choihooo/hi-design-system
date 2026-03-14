import { Button, Card, Input, Modal, Toast, Typography } from '@hi-design/react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    variant: 'success' as 'success' | 'error' | 'warning' | 'info',
  })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Typography variant="h1">HI Design System</Typography>
          <Typography variant="body2" color="neutral.500">
            React Native Demo
          </Typography>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Buttons</Typography>
          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Primary</Typography>
              <View style={styles.buttonRow}>
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </View>
            </Card>
          </View>

          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Secondary</Typography>
              <View style={styles.buttonRow}>
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="md">
                  Medium
                </Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
              </View>
            </Card>
          </View>

          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Ghost</Typography>
              <View style={styles.buttonRow}>
                <Button variant="ghost" size="sm">
                  Small
                </Button>
                <Button variant="ghost" size="md">
                  Medium
                </Button>
                <Button variant="ghost" size="lg">
                  Large
                </Button>
              </View>
            </Card>
          </View>

          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Outline</Typography>
              <View style={styles.buttonRow}>
                <Button variant="outline" size="sm">
                  Small
                </Button>
                <Button variant="outline" size="md">
                  Medium
                </Button>
                <Button variant="outline" size="lg">
                  Large
                </Button>
              </View>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Inputs</Typography>
          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Outline</Typography>
              <Input
                label="Email"
                placeholder="Enter your email"
                helperText="We'll never share your email"
              />
            </Card>
          </View>

          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Error State</Typography>
              <Input
                label="Password"
                placeholder="Enter your password"
                state="error"
                errorText="Password is required"
              />
            </Card>
          </View>

          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Filled</Typography>
              <Input label="Username" placeholder="Enter your username" variant="filled" />
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Cards</Typography>
          <View style={styles.cardGrid}>
            <Card elevation="sm" padding="md">
              <Typography variant="h5">Small Elevation</Typography>
              <Typography variant="body2">This card has a small shadow.</Typography>
            </Card>

            <Card elevation="md" padding="md">
              <Typography variant="h5">Medium Elevation</Typography>
              <Typography variant="body2">This card has a medium shadow.</Typography>
            </Card>

            <Card elevation="lg" padding="md">
              <Typography variant="h5">Large Elevation</Typography>
              <Typography variant="body2">This card has a large shadow.</Typography>
            </Card>

            <Card elevation="xl" padding="md">
              <Typography variant="h5">XL Elevation</Typography>
              <Typography variant="body2">This card has an XL shadow.</Typography>
            </Card>

            <Card elevation="md" padding="md" pressable onPress={() => {}}>
              <Typography variant="h5">Pressable</Typography>
              <Typography variant="body2">This card can be clicked.</Typography>
            </Card>

            <Card elevation="md" padding="lg">
              <Typography variant="h5">Large Padding</Typography>
              <Typography variant="body2">This card has more spacing.</Typography>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Typography</Typography>
          <Card padding="lg">
            <View style={styles.typographyDemo}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="body1">Body 1 - Regular paragraph text</Typography>
              <Typography variant="body2">Body 2 - Smaller paragraph text</Typography>
              <Typography variant="caption">Caption text for labels</Typography>
              <Typography variant="overline">OVERLINE TEXT</Typography>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Modals</Typography>
          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Modal Sizes</Typography>
              <View style={styles.buttonRow}>
                <Button
                  onPress={() => {
                    setModalSize('sm')
                    setModalOpen(true)
                  }}
                >
                  Small
                </Button>
                <Button
                  onPress={() => {
                    setModalSize('md')
                    setModalOpen(true)
                  }}
                >
                  Medium
                </Button>
                <Button
                  onPress={() => {
                    setModalSize('lg')
                    setModalOpen(true)
                  }}
                >
                  Large
                </Button>
              </View>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h3">Toasts</Typography>
          <View style={styles.spacing}>
            <Card padding="md">
              <Typography variant="h6">Toast Variants</Typography>
              <View style={styles.buttonRow}>
                <Button
                  color="success"
                  onPress={() =>
                    setToast({ visible: true, message: 'Success!', variant: 'success' })
                  }
                >
                  Success
                </Button>
                <Button
                  color="error"
                  onPress={() => setToast({ visible: true, message: 'Error!', variant: 'error' })}
                >
                  Error
                </Button>
                <Button
                  color="warning"
                  onPress={() =>
                    setToast({ visible: true, message: 'Warning!', variant: 'warning' })
                  }
                >
                  Warning
                </Button>
                <Button
                  color="secondary"
                  onPress={() => setToast({ visible: true, message: 'Info!', variant: 'info' })}
                >
                  Info
                </Button>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>

      {/* Modal Example */}
      <Modal
        visible={modalOpen}
        title="Demo Modal"
        size={modalSize}
        onClose={() => setModalOpen(false)}
      >
        <Typography variant="body1">This is a {modalSize} modal dialog.</Typography>
        <Typography variant="body2">Tap outside or press the X to close.</Typography>
      </Modal>

      {/* Toast Example */}
      <Toast
        visible={toast.visible}
        message={toast.message}
        variant={toast.variant}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    gap: 8,
  },
  section: {
    marginBottom: 40,
    gap: 16,
  },
  spacing: {
    gap: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  cardGrid: {
    gap: 16,
  },
  typographyDemo: {
    gap: 16,
  },
})
