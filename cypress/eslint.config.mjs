import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  pluginCypress.configs.recommended,
  pluginCypress.configs.globals,
  {
    plugins: {
      cypress: pluginCypress,
    },
  },
]
