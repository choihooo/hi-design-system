import { Button, Card, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function ButtonsSection() {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Buttons' }),
      _jsxs('div', {
        className: 'button-grid',
        children: [
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Primary' }),
                _jsxs('div', {
                  className: 'button-row',
                  children: [
                    _jsx(Button, { variant: 'primary', size: 'sm', children: 'Small' }),
                    _jsx(Button, { variant: 'primary', size: 'md', children: 'Medium' }),
                    _jsx(Button, { variant: 'primary', size: 'lg', children: 'Large' }),
                  ],
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Secondary' }),
                _jsxs('div', {
                  className: 'button-row',
                  children: [
                    _jsx(Button, { variant: 'secondary', size: 'sm', children: 'Small' }),
                    _jsx(Button, { variant: 'secondary', size: 'md', children: 'Medium' }),
                    _jsx(Button, { variant: 'secondary', size: 'lg', children: 'Large' }),
                  ],
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Ghost' }),
                _jsxs('div', {
                  className: 'button-row',
                  children: [
                    _jsx(Button, { variant: 'ghost', size: 'sm', children: 'Small' }),
                    _jsx(Button, { variant: 'ghost', size: 'md', children: 'Medium' }),
                    _jsx(Button, { variant: 'ghost', size: 'lg', children: 'Large' }),
                  ],
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Outline' }),
                _jsxs('div', {
                  className: 'button-row',
                  children: [
                    _jsx(Button, { variant: 'outline', size: 'sm', children: 'Small' }),
                    _jsx(Button, { variant: 'outline', size: 'md', children: 'Medium' }),
                    _jsx(Button, { variant: 'outline', size: 'lg', children: 'Large' }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
}
//# sourceMappingURL=ButtonsSection.js.map
