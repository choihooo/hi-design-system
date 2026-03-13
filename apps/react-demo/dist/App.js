import { Typography } from '@hi-design/react'
import { lazy, Suspense, useState } from 'react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
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
  const [modalSize, setModalSize] = useState('md')
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    variant: 'success',
  })
  return _jsxs('div', {
    className: 'app',
    children: [
      _jsxs('div', {
        className: 'container',
        children: [
          _jsxs('header', {
            className: 'header',
            children: [
              _jsx(Typography, { variant: 'h1', children: 'HI Design System' }),
              _jsx(Typography, {
                variant: 'body2',
                color: 'neutral.500',
                children: 'React Demo Application',
              }),
            ],
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Buttons...',
            }),
            children: _jsx(ButtonsSection, {}),
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Inputs...',
            }),
            children: _jsx(InputsSection, {}),
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Cards...',
            }),
            children: _jsx(CardsSection, {}),
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Typography...',
            }),
            children: _jsx(TypographySection, {}),
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Modals...',
            }),
            children: _jsx(ModalsSection, {
              onOpenModal: (size) => {
                setModalSize(size)
                setModalOpen(true)
              },
            }),
          }),
          _jsx(Suspense, {
            fallback: _jsx('div', {
              style: { textAlign: 'center', padding: '40px' },
              children: 'Loading Toasts...',
            }),
            children: _jsx(ToastsSection, {
              onShowToast: (message, variant) => setToast({ visible: true, message, variant }),
            }),
          }),
        ],
      }),
      _jsx(Suspense, {
        fallback: null,
        children: _jsxs(Modal, {
          visible: modalOpen,
          title: 'Demo Modal',
          size: modalSize,
          onClose: () => setModalOpen(false),
          children: [
            _jsxs(Typography, {
              variant: 'body1',
              style: { marginBottom: '16px' },
              children: [
                'This is a ',
                modalSize,
                ' modal dialog. You can put any content here including forms, images, or other components.',
              ],
            }),
            _jsx(Typography, {
              variant: 'body2',
              children:
                'Click the X button, click outside this modal, or press Escape to close it.',
            }),
          ],
        }),
      }),
      _jsx(Suspense, {
        fallback: null,
        children: _jsx(Toast, {
          visible: toast.visible,
          message: toast.message,
          variant: toast.variant,
          onClose: () => setToast({ ...toast, visible: false }),
        }),
      }),
    ],
  })
}
export default function AppWrapper() {
  return _jsx(AnalyticsProvider, {
    enabled: false,
    trackingId: 'G-XXXXXXXXXX',
    children: _jsx(App, {}),
  })
}
//# sourceMappingURL=App.js.map
