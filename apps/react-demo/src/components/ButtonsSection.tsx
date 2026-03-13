import { Button, Card, Typography } from '@hi-design/react'

export function ButtonsSection() {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Buttons
      </Typography>
      <div className="button-grid">
        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Primary</Typography>
            <div className="button-row">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Secondary</Typography>
            <div className="button-row">
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="md">
                Medium
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Ghost</Typography>
            <div className="button-row">
              <Button variant="ghost" size="sm">
                Small
              </Button>
              <Button variant="ghost" size="md">
                Medium
              </Button>
              <Button variant="ghost" size="lg">
                Large
              </Button>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Outline</Typography>
            <div className="button-row">
              <Button variant="outline" size="sm">
                Small
              </Button>
              <Button variant="outline" size="md">
                Medium
              </Button>
              <Button variant="outline" size="lg">
                Large
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
