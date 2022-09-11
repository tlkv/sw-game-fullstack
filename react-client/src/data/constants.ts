import { CounterState } from './types';

const DEFAULT_STATE: CounterState = {
  value: 0,
};

export const TARGETS_AMOUNT = 6;

export const MAX_LEVEL = 5;
export const TIME_TARGET_INTERVAL = 1600;
export const TIME_CHANGE = 200;
export const TIME_ROUND = 10000;
export const TIME_STEP = 1000;
export const RAND_TIME_STEP = 400;
export const AMMO_DEFAULT = 30;
export const BASE_URL = 'https://sw-json-serv.onrender.com';

export default DEFAULT_STATE;
