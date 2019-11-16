/* eslint-disable global-require */
const dotenv = require('dotenv');

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  module.exports = require('./webpack.config.prod');
} else {
  console.log('development');
  module.exports = require('./webpack.config.dev');
}
