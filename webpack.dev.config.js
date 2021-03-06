const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'index.js'
  },
  devServer: {
    contentBase: './src',
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {

        test: /\.(jpg|png|gif|svg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(otf|woff|woff2|eot|ttf|svg|otf)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
};
