import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

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
    },
  },
})
