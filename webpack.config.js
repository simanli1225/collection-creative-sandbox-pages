const { getWebpackConfig } = require('@sqs/febs-build-config')
const webpack = require('webpack')
const path = require('path')
const { exemptFunctionNames } = require('@sqs/sl-translation-markers')
const {
  mergeWithCustomize,
  customizeArray,
  customizeObject,
} = require('webpack-merge')

module.exports = (env, argv) => {
  const appPaths = argv.paths

  // generate the default base config from FEBS:
  const baseConfig = getWebpackConfig(env, argv)

  // make sure to prepend the error reporter entry point so that the html
  // webpack plugin injects it first in our generated html
  const mergeWithStrategy = mergeWithCustomize({
    customizeArray: customizeArray({
      'entry.*': 'prepend',
    }),
    customizeObject: customizeObject({
      entry: 'prepend',
    }),
  })

  const customConfig = {
    devtool: 'source-map',
    devServer: {
      contentBase: appPaths.public,
      publicPath: '/',
      port: 1337,
      historyApiFallback: true,
      open: false,
    },
    output: {
      path: appPaths.dist,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        // 添加字体文件处理规则
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/, // 匹配字体文件类型
          type: 'asset/resource', // 使用 Webpack 的资源模块
          generator: {
            filename: 'assets/fonts/[name][ext]', // 指定输出目录和文件名
          },
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        SENTRY_ENVIRONMENT: process.env.NODE_ENV || 'development',
        SENTRY_RELEASE: '',
      }),
      new webpack.ProvidePlugin({
        sl_tr_end: '@sqs/sl-translation-markers',
        sl_tr_start: '@sqs/sl-translation-markers',
      }),
    ],
  }

  if (process.env.NODE_ENV === 'production') {
    customConfig.externals = {
      react: 'react',
      'react-dom': 'react-dom',
    }
  }

  const enhancedConfig = mergeWithStrategy(baseConfig, customConfig)

  enhancedConfig.plugins = enhancedConfig.plugins.map((plugin) => {
    if (
      plugin.constructor &&
      plugin.constructor.name === 'MiniCssExtractPlugin'
    ) {
      plugin.options.chunkFilename = '[name].css'
      plugin.options.filename = '[name].css'
    }

    return plugin
  })

  enhancedConfig.optimization.minimizer =
    enhancedConfig.optimization.minimizer.map((minimizer) => {
      if (
        minimizer.constructor &&
        minimizer.constructor.name === 'TerserPlugin'
      ) {
        minimizer.options.terserOptions = {
          ...minimizer.options.terserOptions,
          mangle: {
            ...minimizer.options.terserOptions.mangle,
            reserved: exemptFunctionNames,
          },
        }
      }

      return minimizer
    })

  return enhancedConfig
}
