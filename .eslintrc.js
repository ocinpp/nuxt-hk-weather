module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['prettier', 'wdio', 'cypress'],
  // add your custom rules here
  rules: {},
}
