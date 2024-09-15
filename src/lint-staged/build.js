// @ts-check

const linterCommandsMap = {
  eslint: 'eslint --fix',
  prettier: 'prettier --write',
}

/** @type {(lintNames: Array<keyof typeof linterCommandsMap>) => string[]} */
const applyLinterCommands = (lintNames = []) =>
  lintNames.map((/** @type {keyof typeof linterCommandsMap} */ lint) => linterCommandsMap[lint]).filter((command) => command)

const languagesSupport = ['ts', 'js', 'tsx', 'jsx', 'json', 'yml', 'css', 'scss', 'sass', 'less', 'md', 'dockerfile']

/** @type {(languages: string[]) => Record<string, string[]>} */
export const buildLintStagedConfig = (languages = languagesSupport) => {
  /** @type {Record<string, string[]>} */
  const config = {}

  for (const language of languages) {
    let regex = '*.'
    /** @type {string[]} */
    let commands = []

    switch (language) {
      case 'js':
      case 'ts':
      case 'jsx':
      case 'tsx':
        regex += language
        commands = applyLinterCommands(['eslint', 'prettier'])
        break
      case 'json':
      case 'yaml':
      case 'yml':
      case 'html':
      case 'css':
      case 'scss':
      case 'sass':
      case 'less':
      case 'md':
        regex += language
        commands = applyLinterCommands(['prettier'])
        break
      default:
        break
    }

    config[regex] = commands
  }

  return config
}
