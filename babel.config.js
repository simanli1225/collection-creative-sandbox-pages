/**
 * to learn about default and opt-in configurations added by the @sqs/babel-preset-febs:
 * https://github.com/sqsp/febs/blob/master/packages/babel-preset-febs/README.md
 */

module.exports = {
  presets: [
    '@sqs/febs',
  ],
  plugins: [
    [require.resolve('babel-plugin-module-resolver'), {
      alias: {
        '@': './src/',
      }
    }]
  ]
}
