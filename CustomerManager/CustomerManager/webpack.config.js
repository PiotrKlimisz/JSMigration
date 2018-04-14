const path = require('path');

module.exports = {
  entry: './Scripts/main.js',
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['.', 'node_modules']
  },
};
