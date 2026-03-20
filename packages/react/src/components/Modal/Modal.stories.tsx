import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { useState } from 'react'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    pattern: {
      control: 'select',
      options: ['default', 'destructive', 'loading', 'form'],
    },
    open: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

// Default Modal
// From design-tokens.pen 1UBrU: Default confirms progress
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete account?"
        description="This action cannot be undone. All your data will be permanently removed."
        primaryAction="Delete"
        onPrimary={() => {
          alert('Account deleted')
          setOpen(false)
        }}
        secondaryAction="Cancel"
        onSecondary={() => setOpen(false)}
      />
    )
  },
}

// All Sizes
// From design-tokens.pen 1UBrU: Three dialog widths cover confirmation, structured forms, and richer workflows
export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')

    return (
      <div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <button onClick={() => setSize('sm')}>Small (400px)</button>
          <button onClick={() => setSize('md')}>Medium (560px)</button>
          <button onClick={() => setSize('lg')}>Large (720px)</button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size={size}
          title="Modal Size"
          description={`This is a ${size} modal dialog.`}
          primaryAction="Confirm"
          onPrimary={() => setOpen(false)}
          secondaryAction="Cancel"
          onSecondary={() => setOpen(false)}
        />
      </div>
    )
  },
}

// Small Modal - Confirmation
export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="sm"
        title="Discard changes?"
        description="Your unsaved changes will be lost."
        primaryAction="Discard"
        onPrimary={() => setOpen(false)}
        secondaryAction="Keep editing"
        onSecondary={() => setOpen(false)}
      />
    )
  },
}

// Medium Modal - Structured Form
export const Medium: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="md"
        title="Create new project"
        description="Give your project a name and description to get started."
        primaryAction="Create"
        onPrimary={() => setOpen(false)}
        secondaryAction="Cancel"
        onSecondary={() => setOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
              Project name
            </label>
            <input
              type="text"
              placeholder="My awesome project"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
              Description
            </label>
            <textarea
              placeholder="What's this project about?"
              rows={4}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'vertical',
              }}
            />
          </div>
        </div>
      </Modal>
    )
  },
}

// Large Modal - Rich Content
export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="lg"
        title="Team Settings"
        description="Manage your team members and permissions."
        primaryAction="Save changes"
        onPrimary={() => setOpen(false)}
        secondaryAction="Cancel"
        onSecondary={() => setOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Team Members
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Alice Johnson', 'Bob Smith', 'Carol Williams'].map((name) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                >
                  <span>{name}</span>
                  <select style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
                    <option>Admin</option>
                    <option>Member</option>
                    <option>Viewer</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              Permissions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Read', 'Write', 'Delete', 'Share'].map((perm) => (
                <label key={perm} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" defaultChecked={perm !== 'Delete'} />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    )
  },
}

// Destructive Pattern
// From design-tokens.pen 1UBrU: Destructive raises tension
export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        pattern="destructive"
        title="Permanently delete account?"
        description="All your data, settings, and shared content will be permanently removed from our servers. This action cannot be undone."
        primaryAction="Delete account"
        onPrimary={() => {
          alert('Account deleted')
          setOpen(false)
        }}
        secondaryAction="Cancel"
        onSecondary={() => setOpen(false)}
      />
    )
  },
}

// Loading Pattern
// From design-tokens.pen 1UBrU: Loading holds the frame steady
export const Loading: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        pattern="loading"
        title="Processing..."
        description="Please wait while we complete your request. This may take a few moments."
        primaryAction="Processing"
        showCloseButton={false}
      />
    )
  },
}

// Form Pattern
// From design-tokens.pen 1UBrU: Long-form flows prioritize scannability
export const FormPattern: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        pattern="form"
        size="lg"
        title="Create new account"
        primaryAction="Create account"
        onPrimary={() => setOpen(false)}
        secondaryAction="Cancel"
        onSecondary={() => setOpen(false)}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
              Full name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
              Email *
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
              Password *
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>
          <div style={{ fontSize: '13px', color: '#6b7280' }}>
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </div>
        </form>
      </Modal>
    )
  },
}

// Long Content (Scrollable)
export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="md"
        title="Terms of Service"
        primaryAction="Accept"
        onPrimary={() => setOpen(false)}
        secondaryAction="Decline"
        onSecondary={() => setOpen(false)}
      >
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>1. Introduction</h3>
          <p style={{ marginBottom: '16px' }}>
            Welcome to our service. By using our service, you agree to these terms. Please read them carefully.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>2. Account Responsibilities</h3>
          <p style={{ marginBottom: '16px' }}>
            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>3. Privacy Policy</h3>
          <p style={{ marginBottom: '16px' }}>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>4. Content</h3>
          <p style={{ marginBottom: '16px' }}>
            You retain ownership of any content you submit. By submitting content, you grant us a license to use, modify, and display it.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>5. Termination</h3>
          <p style={{ marginBottom: '16px' }}>
            We reserve the right to terminate or suspend your account at any time, with or without cause, with or without notice.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>6. Limitation of Liability</h3>
          <p style={{ marginBottom: '16px' }}>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>7. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we are based.
          </p>
        </div>
      </Modal>
    )
  },
}

// Interactive Playground
export const Playground: Story = {
  args: {
    open: true,
    title: 'Modal Title',
    description: 'Modal description goes here.',
    size: 'md',
    pattern: 'default',
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel',
    showCloseButton: true,
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
}

// Design Tokens Showcase
// Matches design-tokens.pen screen 1UBrU: HI Modals - Focused Layers
export const DesignTokens: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const [demo, setDemo] = useState<'default' | 'destructive' | 'loading' | 'form'>('default')

    return (
      <div style={{ padding: '32px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '24px' }}>HI Modals - Focused Layers</h1>
        <p style={{ marginBottom: '32px', color: '#666' }}>
          Focused layers that dim the canvas, sharpen the decision, and keep actions tight and legible.
        </p>

        {/* Pattern Selection */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px' }}>Patterns</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button onClick={() => setDemo('default')}>Default</button>
            <button onClick={() => setDemo('destructive')}>Destructive</button>
            <button onClick={() => setDemo('loading')}>Loading</button>
            <button onClick={() => setDemo('form')}>Form</button>
          </div>
        </div>

        {/* Demo Modal */}
        {demo === 'default' && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Delete account?"
            description="This action cannot be undone. All your data will be permanently removed."
            primaryAction="Delete"
            onPrimary={() => setOpen(false)}
            secondaryAction="Cancel"
            onSecondary={() => setOpen(false)}
          />
        )}

        {demo === 'destructive' && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            pattern="destructive"
            title="Permanently delete account?"
            description="All your data will be lost forever. This action cannot be undone."
            primaryAction="Delete account"
            onPrimary={() => setOpen(false)}
            secondaryAction="Cancel"
            onSecondary={() => setOpen(false)}
          />
        )}

        {demo === 'loading' && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            pattern="loading"
            title="Processing..."
            description="Please wait while we complete your request."
            primaryAction="Processing"
            showCloseButton={false}
          />
        )}

        {demo === 'form' && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            pattern="form"
            size="lg"
            title="Create new project"
            primaryAction="Create"
            onPrimary={() => setOpen(false)}
            secondaryAction="Cancel"
            onSecondary={() => setOpen(false)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                  Project name
                </label>
                <input
                  type="text"
                  placeholder="My awesome project"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                  Description
                </label>
                <textarea
                  placeholder="What's this project about?"
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    )
  },
}
