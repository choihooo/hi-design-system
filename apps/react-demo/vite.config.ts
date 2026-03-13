import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@hi-design/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@hi-design/types': path.resolve(__dirname, '../../packages/types/src'),
      '@hi-design/react': path.resolve(__dirname, '../../packages/react/src'),
    },
  },
})
