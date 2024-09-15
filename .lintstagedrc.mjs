export default {
  '*.{json,html,md}': 'prettier --write',
  '*.{js,ts}': ['prettier --write', 'eslint'],
}
