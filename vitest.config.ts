import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const reactPath = path.resolve(__dirname, './node_modules/.pnpm/react@18.3.1/node_modules/react')
const reactDomPath = path.resolve(
  __dirname,
  './node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom',
)

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '*.config.{js,ts,mjs}',
        '.storybook/',
        'dist/',
        'build/',
        'coverage/',
        '**/*.d.ts',
        '**/*.stories.{ts,tsx}',
        '**/types/',
        'apps/',
        'flutter/',
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
      // Fail the build if coverage drops below thresholds
      perFile: false,
      // Check coverage for all files together
      all: true,
      // Include all files, not just those with tests
    },
  },
  resolve: {
    alias: {
      '@hi-design/tokens': path.resolve(__dirname, './packages/tokens/src'),
      '@hi-design/types': path.resolve(__dirname, './packages/types/src'),
      '@hi-design/react': path.resolve(__dirname, './packages/react/src'),
      '@hi-design/primitives': path.resolve(__dirname, './packages/primitives/src'),
      react: reactPath,
      'react/jsx-runtime': path.join(reactPath, 'jsx-runtime.js'),
      'react/jsx-dev-runtime': path.join(reactPath, 'jsx-dev-runtime.js'),
      'react-dom': reactDomPath,
      'react-dom/client': path.join(reactDomPath, 'client.js'),
      'react-dom/test-utils': path.join(reactDomPath, 'test-utils.js'),
    },
  },
})
