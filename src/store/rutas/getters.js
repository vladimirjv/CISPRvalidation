/* jshint esversion:6 */
import * as types from './types';
export const getters = {
  [types.RUTA_ACTUAL]: state => {
    return state.ruta;
  },
};
