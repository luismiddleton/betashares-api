const { HeaderTypes } = require('../types');

const {
  TICKER,
  SEDOL,
  NAME,
  ASSET_CLASS,
  SECTOR,
  COUNTRY,
  CURRENCY,
  WEIGHT,
  UNITS,
  MARKET_VALUE,
  NOTIONAL_VALUE
} = HeaderTypes;

const mockPayload = {
  [TICKER]: 'MOCK',
  [SEDOL]: 'B03MLX2',
  [NAME]: 'MOCK PLC',
  [ASSET_CLASS]: 'Equities',
  [SECTOR]: 'Energy',
  [COUNTRY]: 'United States',
  [CURRENCY]: 'USD',
  [WEIGHT]: '0.10',
  [UNITS]: '1000',
  [MARKET_VALUE]: '7396304.063429137',
  [NOTIONAL_VALUE]: '7396304.063429137'
};

module.exports = mockPayload;
