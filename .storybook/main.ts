import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../packages/react/src/**/*.stories.@(js|jsx|mjs|tsx|ts)',
    '../apps/react-demo/src/**/*.stories.@(js|jsx|mjs|tsx|ts)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
      },
    },
  },
}

export default config
