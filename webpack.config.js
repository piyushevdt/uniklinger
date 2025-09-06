const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,        // Apply this rule to all .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript files
         
        },
      },
      {
        test: /\.css$/, // Apply this rule to all .css files
        use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template to use
      publicPath: '/'
    }),
  ],
  output: {
    publicPath: '/'
  },
  
  mode: 'development', // Set to 'production' for production builds
};
