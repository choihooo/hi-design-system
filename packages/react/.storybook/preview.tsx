import type { Preview } from '@storybook/react'
import { applyTheme } from '@hi-design/tokens'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals
      React.useEffect(() => {
        applyTheme(theme as 'light' | 'dark', false)
      }, [theme])

      return (
        <div style={{ padding: '20px', minHeight: '100vh' }}>
          <Story />
        </div>
      )
    },
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'class',
    }),
  ],
}

export default preview
