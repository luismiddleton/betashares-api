const { HeaderTypes } = require('../types');

const headers = [
  HeaderTypes.TICKER,
  HeaderTypes.SEDOL,
  HeaderTypes.NAME,
  HeaderTypes.ASSET_CLASS,
  HeaderTypes.SECTOR,
  HeaderTypes.COUNTRY,
  HeaderTypes.CURRENCY,
  HeaderTypes.WEIGHT,
  HeaderTypes.UNITS,
  HeaderTypes.MARKET_VALUE,
  HeaderTypes.NOTIONAL_VALUE
];

module.exports = headers;
