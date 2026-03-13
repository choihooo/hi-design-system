import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HiDesign',
      fileName: (format) => `hi-design.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@hi-design/tokens', '@hi-design/types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@hi-design/tokens': 'HiDesignTokens',
          '@hi-design/types': 'HiDesignTypes',
        },
      },
    },
  },
})
