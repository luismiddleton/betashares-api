const express = require('express');
const router = express.Router();
const Headers = require('./constants/headers');
const fetchData = require('./utils/fetch');
const scrubResult = require('./utils/helpers');
const withOptions = require('./utils/withOptions');

router.get('/:path/:ticker', async ({ params: { path, ticker } }, res) => {
  try {
    const data = await fetchData(ticker, path);
    const result = await scrubResult(
      data,
      withOptions({ headers: Headers[path] })
    );
    res.json(result);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
