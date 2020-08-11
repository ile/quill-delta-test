const path = require('path');

const baseConfig = {
  mode: 'development',
  context: path.resolve(__dirname, '..'),
  entry: './quill-delta-test/input.js',
  output: {
    filename: './output-webpack.js',
    path: path.resolve(__dirname)
  }
};

module.exports = baseConfig;

