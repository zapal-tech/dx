import type { Config } from 'prettier'

export const defaultPrettierConfig: Config = {
  printWidth: 130,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
  singleAttributePerLine: false,
  plugins: ['prettier-plugin-packagejson'],
}
