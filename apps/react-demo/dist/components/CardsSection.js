import { Card, Typography } from '@hi-design/react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export function CardsSection() {
  return _jsxs('section', {
    className: 'section',
    children: [
      _jsx(Typography, { variant: 'h3', style: { marginBottom: '24px' }, children: 'Cards' }),
      _jsxs('div', {
        className: 'card-grid',
        children: [
          _jsxs(Card, {
            elevation: 'sm',
            padding: 'md',
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Small Elevation' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card has a small shadow for subtle depth.',
              }),
            ],
          }),
          _jsxs(Card, {
            elevation: 'md',
            padding: 'md',
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Medium Elevation' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card has a medium shadow for standard depth.',
              }),
            ],
          }),
          _jsxs(Card, {
            elevation: 'lg',
            padding: 'md',
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Large Elevation' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card has a large shadow for prominent depth.',
              }),
            ],
          }),
          _jsxs(Card, {
            elevation: 'xl',
            padding: 'md',
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Extra Large Elevation' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card has an extra large shadow for maximum depth.',
              }),
            ],
          }),
          _jsxs(Card, {
            elevation: 'md',
            padding: 'md',
            pressable: true,
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Pressable Card' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card can be clicked and has hover effects.',
              }),
            ],
          }),
          _jsxs(Card, {
            elevation: 'md',
            padding: 'lg',
            children: [
              _jsx(Typography, { variant: 'h5', children: 'Large Padding' }),
              _jsx(Typography, {
                variant: 'body2',
                children: 'This card has more internal spacing for content.',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
//# sourceMappingURL=CardsSection.js.map
