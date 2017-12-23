const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin("bundle.css");

module.exports = [
  {
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
  },
  {
    entry: path.join(__dirname, 'src/styles/app.scss'),
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: "style-loader",
              use: ["css-loader", "sass-loader"]
            }
          )
        }
      ]
    },
    plugins: [
      extractSass
    ]
  }
];
