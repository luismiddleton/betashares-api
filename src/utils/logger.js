import morgan from 'morgan';
import { MorganTypes } from '../types';
import { isProduction } from './environment';

const { COMMON, DEV } = MorganTypes;

export const logger = isProduction ? morgan(COMMON) : morgan(DEV);
