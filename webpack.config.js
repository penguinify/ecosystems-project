const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
       {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name][hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: './css/bundle.css',
    }),
  ],
  devServer: {
      host: 'localhost',
    static: {
      directory: path.join(__dirname),
    },
    port: 9000,
    hot: true,

  },
  mode: 'development',
};
