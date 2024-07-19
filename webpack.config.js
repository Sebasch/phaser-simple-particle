// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/main.ts', // Update the entry point to your .ts file
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },  
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
  };
  