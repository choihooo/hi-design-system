/**
 * HI Design System - Presets & Configurations
 */

export { base as eslintBase, react as eslintReact } from './eslint'
export { default as tailwindPreset } from './tailwind'
export {
  base as tsconfigBase,
  react as tsconfigReact,
  reactNative as tsconfigReactNative,
} from './tsconfig'
export type { HiDesignPluginOptions } from './vite'
export { hiDesignPlugin } from './vite'
