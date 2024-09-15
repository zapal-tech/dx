// @ts-check

import { defaultCommitlintConfig } from './default'

/** @type {import('@commitlint/types').UserConfig} */
export const pnpmWorkspaceScopesCommitlintConfig = {
  ...defaultCommitlintConfig,
  extends: [...(defaultCommitlintConfig?.extends || []), '@commitlint/config-pnpm-scopes'],
}
