import { Card, Input, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function InputsSection() {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Inputs' }),
      _jsxs('div', {
        className: 'input-grid',
        children: [
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Outline' }),
                _jsx(Input, {
                  label: 'Email',
                  placeholder: 'Enter your email',
                  helperText: "We'll never share your email",
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Error State' }),
                _jsx(Input, {
                  label: 'Password',
                  placeholder: 'Enter your password',
                  state: 'error',
                  errorText: 'Password is required',
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Filled' }),
                _jsx(Input, {
                  label: 'Username',
                  placeholder: 'Enter your username',
                  variant: 'filled',
                }),
              ],
            }),
          }),
          _jsx(Card, {
            padding: 'md',
            children: _jsxs('div', {
              className: 'component-group',
              children: [
                _jsx(Typography, { variant: 'h6', children: 'Disabled' }),
                _jsx(Input, {
                  label: 'Disabled Input',
                  placeholder: 'This input is disabled',
                  disabled: true,
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
}
//# sourceMappingURL=InputsSection.js.map
