// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    // vue files
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': 'off',
    },
  },
  {
    // ignore files in cypress directory
    ignores: ['**/cypress/**'],
  }
)
