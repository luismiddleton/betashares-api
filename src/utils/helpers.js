const csv = require('csvtojson');
const nonApplicables = require('../constants/values');

const scrubResult = async (data, opts = {}) => {
  if (!data) return;

  const arr = await csv(opts).fromString(data);

  const validate = new Set(nonApplicables);

  const result = arr.filter(slice => !validate.has(slice.ticker));

  return result;
};

module.exports = scrubResult;
