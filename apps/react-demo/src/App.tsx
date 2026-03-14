import { Typography } from '@hi-design/react'
import { lazy, Suspense, useState } from 'react'
import { AnalyticsProvider } from './components/AnalyticsProvider'
import './App.css'

// 무거운 컴포넌트들은 다이나믹 임포트로 지연 로딩
const Modal = lazy(() => import('@hi-design/react').then((m) => ({ default: m.Modal })))
const Toast = lazy(() => import('@hi-design/react').then((m) => ({ default: m.Toast })))

// 섹션 컴포넌트들도 Lazy 로딩
const ButtonsSection = lazy(() =>
  import('./components/ButtonsSection').then((m) => ({ default: m.ButtonsSection })),
)
const InputsSection = lazy(() =>
  import('./components/InputsSection').then((m) => ({ default: m.InputsSection })),
)
const CardsSection = lazy(() =>
  import('./components/CardsSection').then((m) => ({ default: m.CardsSection })),
)
const IconsSection = lazy(() =>
  import('./components/IconsSection').then((m) => ({ default: m.IconsSection })),
)
const TypographySection = lazy(() =>
  import('./components/TypographySection').then((m) => ({ default: m.TypographySection })),
)
const ModalsSection = lazy(() =>
  import('./components/ModalsSection').then((m) => ({ default: m.ModalsSection })),
)
const ToastsSection = lazy(() =>
  import('./components/ToastsSection').then((m) => ({ default: m.ToastsSection })),
)

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    variant: 'success' as 'success' | 'error' | 'warning' | 'info',
  })

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <Typography variant="h1">HI Design System</Typography>
          <Typography variant="body2" color="neutral.500">
            React Demo Application
          </Typography>
        </header>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Buttons...</div>}
        >
          <ButtonsSection />
        </Suspense>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Inputs...</div>}
        >
          <InputsSection />
        </Suspense>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Cards...</div>}
        >
          <CardsSection />
        </Suspense>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Icons...</div>}
        >
          <IconsSection />
        </Suspense>

        <Suspense
          fallback={
            <div style={{ textAlign: 'center', padding: '40px' }}>Loading Typography...</div>
          }
        >
          <TypographySection />
        </Suspense>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Modals...</div>}
        >
          <ModalsSection
            onOpenModal={(size) => {
              setModalSize(size)
              setModalOpen(true)
            }}
          />
        </Suspense>

        <Suspense
          fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading Toasts...</div>}
        >
          <ToastsSection
            onShowToast={(message, variant) => setToast({ visible: true, message, variant })}
          />
        </Suspense>
      </div>

      {/* Modal Example */}
      <Suspense fallback={null}>
        <Modal
          visible={modalOpen}
          title="Demo Modal"
          size={modalSize}
          onClose={() => setModalOpen(false)}
        >
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            This is a {modalSize} modal dialog. You can put any content here including forms,
            images, or other components.
          </Typography>
          <Typography variant="body2">
            Click the X button, click outside this modal, or press Escape to close it.
          </Typography>
        </Modal>
      </Suspense>

      {/* Toast Example */}
      <Suspense fallback={null}>
        <Toast
          visible={toast.visible}
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast({ ...toast, visible: false })}
        />
      </Suspense>
    </div>
  )
}

export default function AppWrapper() {
  return (
    <AnalyticsProvider
      enabled={false} // Set to true and provide trackingId to enable analytics
      trackingId="G-XXXXXXXXXX"
    >
      <App />
    </AnalyticsProvider>
  )
}
