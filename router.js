const express = require('express');
const router = express.Router();

const fetchHoldings = require('./utils/fetch');
const scrubResult = require('./utils/helpers');

router.get('/holding/:ticker', async ({ params: { ticker } }, res) => {
  try {
    const data = await fetchHoldings(ticker);
    const result = await scrubResult(data);
    res.json(result);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
