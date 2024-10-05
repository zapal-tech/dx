# @zapal/dx

Zapal DX (Developer Experience) - opinionated and simple set of code quality tools' configurations, rule sets and utilities, to
make your life easier.

Used by Zapal internally, but open-sourced for everyone to use.

## Getting started

Tools for which configurations are provided:

- Prettier (`>=3 <4`)
- ESLint (`>=9 <10`)
- TypeScript (`>=4.8.0 <6`)
- Commitlint (`>=19 <20`)

_P.S.: The configurations by default may not suit your needs. You can extend them or override them with your own configurations_.

**IMPORTANT**: This package is not contains a tools itself as dependencies, only a set of configurations.

## Installation

```bash
# pnpm
pnpm add -D @zapal/dx
# npm
npm i -D @zapal/dx
# yarn
yarn add -D @zapal/dx
```

## Usage

All the configurations are available as named exports and default export (the base configurations) from the package
subdirectories.

**Separate directory for each tool's configurations:**

- **Prettier:** `@zapal/dx/prettier`
- **ESLint:** `@zapal/dx/eslint`
- **TypeScript:** `@zapal/dx/typescript`
- **Commitlint:** `@zapal/dx/commitlint`

**IMPORTANT**: There is no exports from the root of the package, only from the subdirectories.

### Prettier

Prettier configurations use `prettier-plugin-packagejson` and `@ianvs/prettier-plugin-sort-imports` plugins by default.

- `prettier-plugin-packagejson` is used to format `package.json` files and does not require any additional configuration.
- `@ianvs/prettier-plugin-sort-imports` is used to sort imports in TS/JS/React/Vue/Svelte files. It may require an additional
  configuration to provide the best development experience. Check the
  [plugin's documentation](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports) for more information.

The default configuration for `@ianvs/prettier-plugin-sort-imports` is:

```json
{
  "importOrderTypeScriptVersion": "5.0.0",
  "importOrder": [
    "<BUILTIN_MODULES>",
    "^(@zapal)(/.*)$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[.]",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$"
  ]
}
```

Using the default configuration:

<!-- prettier-ignore-start -->
```json5
// package.json
{
  "prettier": "@zapal/dx/prettier"
}
```
<!-- prettier-ignore-end -->

```js
// .prettierrc.js or .prettierrc.mjs
export { default } from '@zapal/dx/prettier'
```

```js
// .prettierrc.js or .prettierrc.mjs
export { sveltePrettierConfig as default } from '@zapal/dx/prettier'
```

Using the configuration with some custom options:

```js
// .prettierrc.js or .prettierrc.mjs
import { defaultPrettierConfig } from '@zapal/dx/prettier'

export default {
  ...defaultPrettierConfig,
  semi: false,
}
```

### ESLint

Principle is the same as for Prettier.

<!-- prettier-ignore-start -->
```json5
// package.json
{
  "eslintConfig": "@zapal/dx/eslint"
}
```
<!-- prettier-ignore-end -->

```js
// eslint.config.js or eslint.config.mjs
export { default } from '@zapal/dx/eslint'
```

### TypeScript

Available exports:

- `@zapal/dx/typescript` - default configuration
- `@zapal/dx/typescript/next` - configuration for Next.js, extending the default configuration
- `@zapal/dx/typescript/svelte` - configuration for Svelte-based projects, extending the default configuration

Using the default configuration:

<!-- prettier-ignore-start -->
```json5
// tsconfig.json
{
  "extends": "@zapal/dx/typescript"
}
```

Using the configuration for Next.js, for example:

```json5
// tsconfig.json
{
  "extends": "@zapal/dx/typescript/next"
}
```
<!-- prettier-ignore-end -->

### Commitlint

**IMPORTANT**: Unfortunately, the `commitlint` requires you to install extended dependencies directly in your project. Use
`devDependencies` for that.

Here is the list of the required `devDependencies` for the configurations:

- Default - `@commitlint/config-conventional`
- PNPM Workspace scopes - `@commitlint/config-conventional` and `@commitlint/config-pnpm-scopes`

Using the default configuration:

<!-- prettier-ignore-start -->
```json5
// .commitlintrc.json
{
  "extends": ["@zapal/dx/commitlint"]
}
```
<!-- prettier-ignore-end -->

```js
// commitlint.config.js or commitlint.config.mjs
export { default } from '@zapal/dx/commitlint'
```

Using the configuration with configuration for PNPM Workspace based scopes:

```js
// commitlint.config.js or commitlint.config.mjs
export { pnpmWorkspaceScopesCommitlintConfig as default } from '@zapal/dx/commitlint'
```
