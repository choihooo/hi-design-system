import { Card, Typography } from '@hi-design/react'

export function TypographySection() {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Typography
      </Typography>
      <Card padding="lg">
        <div className="typography-demo">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="body1">Body 1 - Regular paragraph text</Typography>
          <Typography variant="body2">Body 2 - Smaller paragraph text</Typography>
          <Typography variant="caption">Caption text for labels and annotations</Typography>
          <Typography variant="overline">OVERLINE TEXT</Typography>
        </div>
      </Card>
    </section>
  )
}
