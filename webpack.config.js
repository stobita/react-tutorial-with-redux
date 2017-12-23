const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/app.jsx'),
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'www',
    port: 4000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
