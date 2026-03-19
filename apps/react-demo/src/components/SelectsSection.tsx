import { Card, Select, Typography } from '@hi-design/react'

const planOptions = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]

const countryOptions = [
  { value: 'kr', label: 'Korea, Republic of', keywords: ['korea', 'south korea'] },
  { value: 'jp', label: 'Japan' },
  { value: 'sg', label: 'Singapore' },
]

export function SelectsSection() {
  return (
    <section className="section select-system">
      <div className="select-system__header">
        <Typography variant="overline" className="select-system__kicker">
          COMPONENT DESIGN / SELECT
        </Typography>
        <Typography variant="h2">Select System</Typography>
        <Typography variant="body1" className="select-system__subtitle">
          Guided choice patterns that stay calm when closed and become highly legible when opened.
        </Typography>
      </div>

      <div className="select-overview-grid">
        <Card padding="lg">
          <div className="component-group">
            <Typography variant="h5">Choice Trigger</Typography>
            <Typography variant="body2" className="select-system__body">
              Use select when the user chooses from known options. If text input is required, move
              to combobox or search.
            </Typography>
            <Select
              label="Workspace plan"
              defaultValue="pro"
              options={planOptions}
              fullWidth
              testID="select-workspace-plan"
            />
          </div>
        </Card>

        <Card padding="lg">
          <div className="component-group">
            <Typography variant="h5">Menu Behavior</Typography>
            <Typography variant="body2" className="select-system__body">
              When open, the list should feel more scannable than the trigger. Spacing and contrast
              matter more than decoration.
            </Typography>
            <Select
              label="Plan"
              defaultValue="starter"
              options={planOptions}
              fullWidth
              testID="select-menu-behavior"
            />
          </div>
        </Card>
      </div>

      <Card padding="lg" className="select-system__card">
        <div className="component-group">
          <Typography variant="h4">Variants</Typography>
          <Typography variant="body2" className="select-system__body">
            Default select handles direct choice. Search select helps when the list grows and
            scanning cost rises.
          </Typography>
          <div className="select-demo-grid select-demo-grid--two">
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Default Select</Typography>
                <Typography variant="caption" className="select-system__body">
                  Best when the user can recognize the right option at a glance.
                </Typography>
                <Select
                  placeholder="Select a team"
                  options={planOptions}
                  fullWidth
                  testID="select-default-variant"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Search Select</Typography>
                <Typography variant="caption" className="select-system__body">
                  Use when labels are long or the menu exceeds quick visual scan range.
                </Typography>
                <Select
                  variant="search"
                  searchable
                  placeholder="Search country"
                  searchPlaceholder="Search country"
                  options={countryOptions}
                  fullWidth
                  testID="select-search-variant"
                />
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <Card padding="lg" className="select-system__card">
        <div className="component-group">
          <Typography variant="h4">Sizes</Typography>
          <Typography variant="body2" className="select-system__body">
            Keep select height aligned with inputs. The menu can grow, but the trigger should stay
            predictable.
          </Typography>
          <div className="select-demo-grid select-demo-grid--three">
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Small / 40</Typography>
                <Select
                  size="sm"
                  placeholder="Role"
                  options={planOptions}
                  fullWidth
                  testID="select-size-sm"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Medium / 52</Typography>
                <Select
                  size="md"
                  placeholder="Workspace"
                  options={planOptions}
                  fullWidth
                  testID="select-size-md"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Large / 60</Typography>
                <Select
                  size="lg"
                  placeholder="Select customer segment"
                  options={planOptions}
                  fullWidth
                  testID="select-size-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <Card padding="lg" className="select-system__card">
        <div className="component-group">
          <Typography variant="h4">States</Typography>
          <Typography variant="body2" className="select-system__body">
            Closed stays quiet, open maximizes scanability, selected confirms choice, and error or
            disabled only appear when necessary.
          </Typography>
          <div className="select-demo-grid select-demo-grid--five">
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Closed</Typography>
                <Select
                  placeholder="Country"
                  options={countryOptions}
                  fullWidth
                  testID="select-state-closed"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Open</Typography>
                <Select
                  variant="search"
                  searchable
                  placeholder="Country"
                  searchPlaceholder="Search country"
                  options={countryOptions}
                  fullWidth
                  testID="select-state-open"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Selected</Typography>
                <Select
                  defaultValue="kr"
                  options={countryOptions}
                  fullWidth
                  testID="select-state-selected"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Error</Typography>
                <Select
                  state="error"
                  errorText="Choose a country"
                  placeholder="Choose a country"
                  options={countryOptions}
                  fullWidth
                  testID="select-state-error"
                />
              </div>
            </Card>
            <Card padding="md" className="select-system__demo-card">
              <div className="component-group">
                <Typography variant="h6">Disabled</Typography>
                <Select
                  disabled
                  placeholder="Managed by admin"
                  options={countryOptions}
                  fullWidth
                  testID="select-state-disabled"
                />
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <Card padding="lg" className="select-system__card">
        <div className="component-group">
          <Typography variant="h4">System Notes</Typography>
          <Typography variant="body2" className="select-system__body">
            Select should reduce ambiguity, not create a scavenger hunt.
          </Typography>
          <Typography variant="body2" className="select-system__body">
            1. Use select for known options. If users need to remember or type values, choose a
            different control.
          </Typography>
          <Typography variant="body2" className="select-system__body">
            2. Keep the trigger calm. Spend visual contrast on the open menu and the chosen option.
          </Typography>
          <Typography variant="body2" className="select-system__body">
            3. If the list is long, add search or regroup the information architecture instead of
            shrinking the option rows.
          </Typography>
          <Typography variant="body2" className="select-system__body">
            4. Labels should stay visible in forms where the selected value alone might become
            ambiguous later.
          </Typography>
        </div>
      </Card>
    </section>
  )
}

export default SelectsSection
