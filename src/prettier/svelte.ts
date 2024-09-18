import type { Config } from 'prettier'

import { defaultPrettierConfig } from './default'

export const sveltePrettierConfig: Config = {
  ...defaultPrettierConfig,
  plugins: [...(defaultPrettierConfig?.plugins || []), 'prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
