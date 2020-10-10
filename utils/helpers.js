const csv = require('csvtojson');
const options = require('../constants/options');

const scrubResult = async data => {
  if (!data) return;
  const arr = await csv(options).fromString(data);

  const result = arr
    .slice(6, -1)
    .filter(({ ticker }) => ticker !== '')
    .filter(
      ({ ticker }) =>
        ticker !==
        'BetaShares makes no representation or warranty of any kind, either express or implied, with respect to the holdings data,'
    )
    .filter(
      ({ ticker }) =>
        ticker !==
        'Total weights may not add up to 100% due to rounding or immateriality. Holdings, weights and values are subject to change.'
    );

  return result;
};

module.exports = scrubResult;
