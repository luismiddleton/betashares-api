import { HeaderTypes, PathTypes } from '../types';

export const Headers = {
  [PathTypes.HOLDING]: [
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
  ],
  [PathTypes.NAV]: [
    HeaderTypes.FUND,
    HeaderTypes.DATE,
    HeaderTypes.NAV,
    HeaderTypes.DISTRIBUTION,
    HeaderTypes.TOTAL_FUND_RETURN
  ]
};
