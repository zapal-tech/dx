import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'prettier/index': 'src/prettier/index.ts',
    'eslint/index': 'src/eslint/index.ts',
    'commitlint/index': 'src/commitlint/index.ts',
  },
  outDir: '.',
  format: 'esm',
  platform: 'node',
  treeshake: true,
  dts: true,
  sourcemap: true,
  clean: false,
})
