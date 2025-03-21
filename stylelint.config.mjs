/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
}
