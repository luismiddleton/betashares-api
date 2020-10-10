const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');
const router = require('./router');
const isProduction = require('./utils/environment');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger);

app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
