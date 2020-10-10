const morgan = require('morgan');
const { MorganTypes } = require('../types');
const isProduction = require('./environment');

const { COMMON, DEV } = MorganTypes;

const logger = isProduction ? morgan(COMMON) : morgan(DEV);

module.exports = logger;
