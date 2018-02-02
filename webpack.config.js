
/**
 * As our first step, we'll pull in the user's webpack.mix.js
 * file. Based on what the user requests in that file,
 * a generic config object will be constructed for us.
 */

require('./node_modules/laravel-mix/src/index');
require(Mix.paths.mix());

const path = require('path')
/**
 * Just in case the user needs to hook into this point
 * in the build process, we'll make an announcement.
 */

Mix.dispatch('init', Mix);

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
/**
 * Now that we know which build tasks are required by the
 * user, we can dynamically create a configuration object
 * for Webpack. And that's all there is to it. Simple!
 */


let WebpackConfig = require('./node_modules/laravel-mix/src/builder/WebpackConfig');

const webpackConfig = new WebpackConfig().build()


module.exports = Object.assign(webpackConfig, {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': resolve('resources/assets/js')
    }
  }
})
