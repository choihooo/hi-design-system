import { Card, Typography } from '@hi-design/react'

export function CardsSection() {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Cards
      </Typography>
      <div className="card-grid">
        <Card elevation="sm" padding="md">
          <Typography variant="h5">Small Elevation</Typography>
          <Typography variant="body2">This card has a small shadow for subtle depth.</Typography>
        </Card>

        <Card elevation="md" padding="md">
          <Typography variant="h5">Medium Elevation</Typography>
          <Typography variant="body2">This card has a medium shadow for standard depth.</Typography>
        </Card>

        <Card elevation="lg" padding="md">
          <Typography variant="h5">Large Elevation</Typography>
          <Typography variant="body2">This card has a large shadow for prominent depth.</Typography>
        </Card>

        <Card elevation="xl" padding="md">
          <Typography variant="h5">Extra Large Elevation</Typography>
          <Typography variant="body2">
            This card has an extra large shadow for maximum depth.
          </Typography>
        </Card>

        <Card elevation="md" padding="md" isPressable>
          <Typography variant="h5">Pressable Card</Typography>
          <Typography variant="body2">This card can be clicked and has hover effects.</Typography>
        </Card>

        <Card elevation="md" padding="lg">
          <Typography variant="h5">Large Padding</Typography>
          <Typography variant="body2">This card has more internal spacing for content.</Typography>
        </Card>
      </div>
    </section>
  )
}
