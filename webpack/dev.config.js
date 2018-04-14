const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  target: 'web',
  devtool: '#source-map',
  context: path.join(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' }
      },
      {
        exclude: /node_modules/,
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: { historyApiFallback: true },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      {
        from: './src/res/assets',
        to: 'res'
      }
    ])
  ]
}
