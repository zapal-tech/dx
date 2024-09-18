import type { UserConfig } from '@commitlint/types'
import { defaultCommitlintConfig } from './default'

export const pnpmWorkspaceScopesCommitlintConfig: UserConfig = {
  ...defaultCommitlintConfig,
  extends: [...(defaultCommitlintConfig?.extends || []), '@commitlint/config-pnpm-scopes'],
}
