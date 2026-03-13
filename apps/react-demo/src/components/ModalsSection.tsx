import { Button, Card, Typography } from '@hi-design/react'

interface ModalsSectionProps {
  onOpenModal: (size: 'sm' | 'md' | 'lg') => void
}

export function ModalsSection({ onOpenModal }: ModalsSectionProps) {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Modals
      </Typography>
      <div className="button-grid">
        <Card padding="md">
          <div className="component-group">
            <Typography variant="h6">Modal Sizes</Typography>
            <div className="button-row">
              <Button onClick={() => onOpenModal('sm')}>Small Modal</Button>
              <Button onClick={() => onOpenModal('md')}>Medium Modal</Button>
              <Button onClick={() => onOpenModal('lg')}>Large Modal</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
