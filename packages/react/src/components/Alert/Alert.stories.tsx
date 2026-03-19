import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational alert message.',
  },
}

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message with a title.',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review your changes before proceeding.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
}

export const WithCloseButton: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This alert can be closed.',
    onClose: () => console.log('Alert closed'),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" title="Info">
        This is an informational message.
      </Alert>
      <Alert variant="success" title="Success">
        Your operation was successful.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please pay attention to this warning.
      </Alert>
      <Alert variant="error" title="Error">
        An error has occurred.
      </Alert>
    </div>
  ),
}

export const CloseableAllVariants: Story = {
  render: () => {
    const handleClose = (variant: string) => {
      console.log(`${variant} alert closed`)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Alert variant="info" title="Info" onClose={() => handleClose('info')}>
          This info alert can be closed.
        </Alert>
        <Alert variant="success" title="Success" onClose={() => handleClose('success')}>
          This success alert can be closed.
        </Alert>
        <Alert variant="warning" title="Warning" onClose={() => handleClose('warning')}>
          This warning alert can be closed.
        </Alert>
        <Alert variant="error" title="Error" onClose={() => handleClose('error')}>
          This error alert can be closed.
        </Alert>
      </div>
    )
  },
}

export const WithoutTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info">Simple info message without title</Alert>
      <Alert variant="success">Simple success message without title</Alert>
      <Alert variant="warning">Simple warning message without title</Alert>
      <Alert variant="error">Simple error message without title</Alert>
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    variant: 'info',
    title: 'Detailed Information',
    children: `
      This is a longer alert message that contains multiple lines of text.
      It demonstrates how the Alert component handles content that wraps
      across multiple lines. The alert should maintain proper spacing and
      readability even with longer content.
    `,
  },
}

export const Interactive: Story = {
  render: () => {
    const [closedAlerts, setClosedAlerts] = React.useState<Record<string, boolean>>({})

    const handleClose = (id: string) => {
      setClosedAlerts(prev => ({ ...prev, [id]: true }))
    }

    const alerts = [
      { id: '1', variant: 'info' as const, title: 'Info', message: 'Information message' },
      { id: '2', variant: 'success' as const, title: 'Success', message: 'Success message' },
      { id: '3', variant: 'warning' as const, title: 'Warning', message: 'Warning message' },
      { id: '4', variant: 'error' as const, title: 'Error', message: 'Error message' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {alerts.map(alert => (
          !closedAlerts[alert.id] && (
            <Alert
              key={alert.id}
              variant={alert.variant}
              title={alert.title}
              onClose={() => handleClose(alert.id)}
            >
              {alert.message}
            </Alert>
          )
        ))}
        <p>Close the alerts to see them disappear!</p>
      </div>
    )
  },
}
