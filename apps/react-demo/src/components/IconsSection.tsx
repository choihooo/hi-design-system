import {
  CaretDownIcon,
  CheckCircleIcon,
  CloseIcon,
  ErrorCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  InfoIcon,
  MagnifyingGlassIcon,
  WarningCircleIcon,
} from '@hi-design/icons'
import { Card, Typography } from '@hi-design/react'

const icons = [
  { name: 'caret-down', Icon: CaretDownIcon },
  { name: 'check-circle', Icon: CheckCircleIcon },
  { name: 'close', Icon: CloseIcon },
  { name: 'error-circle', Icon: ErrorCircleIcon },
  { name: 'eye', Icon: EyeIcon },
  { name: 'eye-slash', Icon: EyeSlashIcon },
  { name: 'info', Icon: InfoIcon },
  { name: 'magnifying-glass', Icon: MagnifyingGlassIcon },
  { name: 'warning-circle', Icon: WarningCircleIcon },
] as const

export function IconsSection() {
  return (
    <section className="section">
      <Typography variant="h3" style={{ marginBottom: '24px' }}>
        Icons
      </Typography>
      <div className="icon-grid">
        {icons.map(({ name, Icon }) => (
          <Card key={name} padding="md">
            <div className="icon-card">
              <div className="icon-preview">
                <Icon size={28} weight="regular" />
              </div>
              <div className="icon-meta">
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="neutral.500">
                  Phosphor regular
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
