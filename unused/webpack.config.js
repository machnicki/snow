const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/app.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.module\.scss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(scss)$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    }
  }
