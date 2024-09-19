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

Using the default configuration:

```json
// package.json
{
  "prettier": "@zapal/dx/prettier"
}
```

```js
// .prettierrc.mjs
export { default } from '@zapal/dx/prettier'
```

```js
// .prettierrc.mjs
export { sveltePrettierConfig as default } from '@zapal/dx/prettier'
```

Using the configuration with some custom options:

```js
// .prettierrc.mjs
import { defaultPrettierConfig } from '@zapal/dx/prettier'

export default {
  ...defaultPrettierConfig,
  semi: false,
}
```

### ESLint

Principle is the same as for Prettier.

```json
// package.json
{
  "eslintConfig": "@zapal/dx/eslint"
}
```

```js
// eslint.config.mjs
export { default } from '@zapal/dx/eslint'
```

### TypeScript

Using the default configuration:

```json
// tsconfig.json
{
  "extends": "@zapal/dx/typescript"
}
```

Using the configuration for Next.js, for example:

```json
// tsconfig.json
{
  "extends": "@zapal/dx/typescript/next"
}
```

### Commitlint

Using the default configuration:

```json
// .commitlintrc.json
{
  "extends": ["@zapal/dx/commitlint"]
}
```

```js
// commitlint.config.mjs
export { default } from '@zapal/dx/commitlint'
```

Using the configuration with configuration for PNPM Workspace based scopes:

```js
// commitlint.config.mjs
export { pnpmWorkspaceScopesCommitlintConfig as default } from '@zapal/dx/commitlint'
```
