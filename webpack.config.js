const path = require('path');

module.exports = () => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('dist'),
      publicPath: '/dist/'
    },
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      }]
    }
  }
}