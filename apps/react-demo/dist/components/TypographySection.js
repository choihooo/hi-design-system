import { Card, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function TypographySection() {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Typography' }),
      _jsx(Card, {
        padding: 'lg',
        children: _jsxs('div', {
          className: 'typography-demo',
          children: [
            _jsx(Typography, { variant: 'h1', children: 'Heading 1' }),
            _jsx(Typography, { variant: 'h2', children: 'Heading 2' }),
            _jsx(Typography, { variant: 'h3', children: 'Heading 3' }),
            _jsx(Typography, { variant: 'h4', children: 'Heading 4' }),
            _jsx(Typography, { variant: 'h5', children: 'Heading 5' }),
            _jsx(Typography, { variant: 'h6', children: 'Heading 6' }),
            _jsx(Typography, { variant: 'body1', children: 'Body 1 - Regular paragraph text' }),
            _jsx(Typography, { variant: 'body2', children: 'Body 2 - Smaller paragraph text' }),
            _jsx(Typography, {
              variant: 'caption',
              children: 'Caption text for labels and annotations',
            }),
            _jsx(Typography, { variant: 'overline', children: 'OVERLINE TEXT' }),
          ],
        }),
      }),
    ],
  })
}
//# sourceMappingURL=TypographySection.js.map
