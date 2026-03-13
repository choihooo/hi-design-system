import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    include: ['**/*.test.tsx', '**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', '**/*.test.{ts,tsx}', '**/types/', 'vitest.setup.ts'],
    },
  },
  resolve: {
    alias: {
      '@hi-design/tokens': '../../tokens/src/index.ts',
      '@hi-design/types': '../../types/src/index.ts',
    },
  },
})
