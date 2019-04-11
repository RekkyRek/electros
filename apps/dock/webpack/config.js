const path = require('path')

module.exports = {
  target: 'electron-renderer',
  context: path.join(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../bundle'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'App'
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
  }
}
