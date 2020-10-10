const { EnvironmentTypes } = require('../types');

const isProduction = process.env.NODE_ENV === EnvironmentTypes.PRODUCTION;

module.exports = isProduction;
