import { EnvironmentTypes } from '../types';

export const isProduction =
  process.env.NODE_ENV === EnvironmentTypes.PRODUCTION;
