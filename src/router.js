import { Router } from 'express';
import { Headers } from './constants/';
import { fetchData, scrubResult, withOptions } from './utils';

const router = Router();

export default router.get(
  '/:path/:ticker',
  async ({ params: { path, ticker } }, res) => {
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
  }
);
