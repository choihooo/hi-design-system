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
  },
  resolve: {
    alias: {
      '@hi-design/tokens': path.resolve(__dirname, './packages/tokens/src'),
      '@hi-design/types': path.resolve(__dirname, './packages/types/src'),
      '@hi-design/react': path.resolve(__dirname, './packages/react/src'),
    },
  },
})
