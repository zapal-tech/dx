// @ts-check

import js from '@eslint/js'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export const defaultESLintConfig = [js.configs.recommended, ...ts.configs.recommended];

