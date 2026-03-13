import { Button, Card, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function ToastsSection({ onShowToast }) {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Toasts' }),
      _jsx('div', {
        className: 'button-grid',
        children: _jsx(Card, {
          padding: 'md',
          children: _jsxs('div', {
            className: 'component-group',
            children: [
              _jsx(Typography, { variant: 'h6', children: 'Toast Variants' }),
              _jsxs('div', {
                className: 'button-row',
                children: [
                  _jsx(Button, {
                    color: 'success',
                    onClick: () => onShowToast('Success! Operation completed.', 'success'),
                    children: 'Success',
                  }),
                  _jsx(Button, {
                    color: 'error',
                    onClick: () => onShowToast('Error! Something went wrong.', 'error'),
                    children: 'Error',
                  }),
                  _jsx(Button, {
                    color: 'warning',
                    onClick: () => onShowToast('Warning! Please review.', 'warning'),
                    children: 'Warning',
                  }),
                  _jsx(Button, {
                    color: 'secondary',
                    onClick: () => onShowToast('Info! Here is a notification.', 'info'),
                    children: 'Info',
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  })
}
//# sourceMappingURL=ToastsSection.js.map
