const HeaderTypes = {
  TICKER: 'ticker',
  SEDOL: 'sedol',
  NAME: 'name',
  ASSET_CLASS: 'assetClass',
  SECTOR: 'sector',
  COUNTRY: 'country',
  CURRENCY: 'currency',
  WEIGHT: 'weight',
  UNITS: 'units',
  MARKET_VALUE: 'marketValue',
  NOTIONAL_VALUE: 'notionalValue'
};

const EnvironmentTypes = {
  PRODUCTION: 'production',
  TEST: 'test'
};

const MorganTypes = {
  DEV: 'dev',
  COMMON: 'common'
};

module.exports = { HeaderTypes, EnvironmentTypes, MorganTypes };
