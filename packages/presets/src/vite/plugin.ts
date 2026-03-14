/**
 * Vite Plugin for HI Design System
 * @description Pre-configured Vite plugin bundle for design system projects
 *
 * @usage
 * ```js
 * import { defineConfig } from 'vite';
 * import { hiDesignPlugin } from '@hi-design/presets/vite';
 *
 * export default defineConfig({
 *   plugins: [hiDesignPlugin()],
 * });
 * ```
 */

import path from 'node:path'
import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'

export interface HiDesignPluginOptions {
  // Path to hi-design tokens package
  tokensPath?: string
  // Path to hi-design types package
  typesPath?: string
  // Enable TypeScript
  typescript?: boolean
  // Enable CSS modules
  cssModules?: boolean
}

/**
 * Hi Design System Vite Plugin
 *
 * Provides:
 * - React support with fast refresh
 * - Path aliases for design tokens and types
 * - CSS module support
 * - TypeScript support
 */
export function hiDesignPlugin(options: HiDesignPluginOptions = {}): PluginOption[] {
  const { tokensPath = '../../../tokens/src', typesPath = '../../../types/src' } = options

  return [
    react(),
    {
      name: 'hi-design:aliases',
      config() {
        return {
          resolve: {
            alias: {
              '@hi-design/tokens': path.resolve(__dirname, tokensPath),
              '@hi-design/types': path.resolve(__dirname, typesPath),
            },
          },
        }
      },
    },
  ]
}

/**
 * Default export with preset configuration
 */
export default hiDesignPlugin
