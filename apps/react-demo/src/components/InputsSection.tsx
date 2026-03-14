import { Card, Input, Typography } from '@hi-design/react'

export function InputsSection() {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Inputs
      </Typography>
      <div className="input-grid">
        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Outline</Typography>
            <Input
              label="Email"
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Error State</Typography>
            <Input
              label="Password"
              placeholder="Enter your password"
              state="error"
              errorText="Password is required"
            />
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Filled</Typography>
            <Input label="Username" placeholder="Enter your username" variant="filled" />
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Disabled</Typography>
            <Input label="Disabled Input" placeholder="This input is disabled" isDisabled />
          </div>
        </Card>
      </div>
    </section>
  )
}
