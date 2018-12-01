/* jshint esversion: 6 */
import * as types from './types';
export const mutations = {
  [types.MUTATE_RUTA]: (state, payload) => {
    state.ruta = payload;
  }
};
