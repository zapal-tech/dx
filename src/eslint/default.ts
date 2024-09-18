import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

export const defaultESLintConfig: Linter.Config[] = [js.configs.recommended, ...(ts.configs.recommended as Linter.Config[])]
