const path = require('path')

const BUILD_ENV_KEY = 'BUILD_NUMBER'
const BRANCH_ENV_KEY = 'BRANCH_NAME'

const GRAPHITE_GROUP = 'PROD.all'
const GRAPHITE_KEY_ASSET_SIZE = 'v6-frontend-asset-sizes'
const GRAPHITE_KEY_GULP_STATS = 'v6-frontend-gulp-stats'
const GRAPHITE_KEY_WEBPACK_SPEED = 'v6-frontend-webpack-speed'

const GRAPHITE_HOST = 'graphite-query-vip.drt.ewr.prod.squarespace.net'
const GRAPHITE_PORT = 2023

const REPORTING = {
  GRAPHITE_GROUP,
  GRAPHITE_HOST,
  GRAPHITE_KEY_ASSET_SIZE,
  GRAPHITE_KEY_GULP_STATS,
  GRAPHITE_KEY_WEBPACK_SPEED,
  GRAPHITE_PORT,
}

const rootPath = path.join(__dirname, '..')

module.exports = {
  REPORTING,
  SENTRY_KEY: {
    dev: '',
    // THIS DOES NOT WORK RIGHT NOW.
    prod:
      'https://b178d27378c241c9b791c5d5361ce87a@sq-sentry.squarespace.com/4',
  },
  BUILD_ENV_KEY,
  BRANCH_ENV_KEY,
  paths: {
    root: path.join(rootPath, '.'),
    src: path.join(rootPath, 'src'),
    dist: path.join(rootPath, 'dist'),
    public: path.join(rootPath, 'public'),
    config: path.join(rootPath, 'config'),
    scripts: path.join(rootPath, 'scripts'),
    frontendBuildCache: path.join(rootPath, 'node_modules', '.cache', 'fbs'),
  },
}
