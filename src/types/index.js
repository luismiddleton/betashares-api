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
  NOTIONAL_VALUE: 'notionalValue',
  NAV: 'nav',
  DATE: 'date',
  DISTRIBUTION: 'distribution',
  TOTAL_FUND_RETURN: 'totalFundReturn',
  FUND: 'fund'
};

const PathTypes = {
  HOLDING: 'holdings',
  NAV: 'nav'
};

const EnvironmentTypes = {
  PRODUCTION: 'production',
  TEST: 'test'
};

const MorganTypes = {
  DEV: 'dev',
  COMMON: 'common'
};

module.exports = { HeaderTypes, EnvironmentTypes, MorganTypes, PathTypes };
