import { Button, Card, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function ModalsSection({ onOpenModal }) {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Modals' }),
      _jsx('div', {
        className: 'button-grid',
        children: _jsx(Card, {
          padding: 'md',
          children: _jsxs('div', {
            className: 'component-group',
            children: [
              _jsx(Typography, { variant: 'h6', children: 'Modal Sizes' }),
              _jsxs('div', {
                className: 'button-row',
                children: [
                  _jsx(Button, { onClick: () => onOpenModal('sm'), children: 'Small Modal' }),
                  _jsx(Button, { onClick: () => onOpenModal('md'), children: 'Medium Modal' }),
                  _jsx(Button, { onClick: () => onOpenModal('lg'), children: 'Large Modal' }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  })
}
//# sourceMappingURL=ModalsSection.js.map
