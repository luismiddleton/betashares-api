const axios = require('axios');
const baseUrl = require('../constants/domain');

const fetchHoldings = async ticker => {
  if (!ticker) return;
  const { data } = await axios.get(
    baseUrl + '/files/csv/' + ticker.toUpperCase() + '_Portfolio_Holdings.csv'
  );
  return data;
};

module.exports = fetchHoldings;
