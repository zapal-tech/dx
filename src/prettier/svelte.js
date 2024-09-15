// @ts-check

import { defaultPrettierConfig } from './default.js'

/** @type {import('prettier').Config} */
export const sveltePrettierConfig = {
  ...defaultPrettierConfig,
  plugins: [...(defaultPrettierConfig?.plugins || []), 'prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
