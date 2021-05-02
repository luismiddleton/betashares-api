import axios from 'axios';
import { baseUrl } from '../constants';
import { PathTypes } from '../types';

export const fetchData = async (ticker, type) => {
  if (!ticker) return;

  let path;

  switch (type) {
    case PathTypes.HOLDING:
      path =
        baseUrl +
        '/files/csv/' +
        ticker.toUpperCase() +
        '_Portfolio_Holdings.csv';
      break;
    case PathTypes.NAV:
      path = baseUrl + '/files/nav/' + ticker.toUpperCase() + '_History.csv';
      break;
    default:
      path = '';
  }

  const { data } = await axios.get(path);
  return data;
};
