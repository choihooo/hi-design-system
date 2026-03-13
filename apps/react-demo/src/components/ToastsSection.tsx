import { Button, Card, Typography } from '@hi-design/react'

interface ToastsSectionProps {
  onShowToast: (message: string, variant: 'success' | 'error' | 'warning' | 'info') => void
}

export function ToastsSection({ onShowToast }: ToastsSectionProps) {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Toasts
      </Typography>
      <div className="button-grid">
        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Toast Variants</Typography>
            <div className="button-row">
              <Button
                color="success"
                onClick={() => onShowToast('Success! Operation completed.', 'success')}
              >
                Success
              </Button>
              <Button
                color="error"
                onClick={() => onShowToast('Error! Something went wrong.', 'error')}
              >
                Error
              </Button>
              <Button
                color="warning"
                onClick={() => onShowToast('Warning! Please review.', 'warning')}
              >
                Warning
              </Button>
              <Button
                color="secondary"
                onClick={() => onShowToast('Info! Here is a notification.', 'info')}
              >
                Info
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
