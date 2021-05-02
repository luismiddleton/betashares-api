import express from 'express';
import cors from 'cors';
import { logger } from './utils';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger);

app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
