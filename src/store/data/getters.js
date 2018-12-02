/* jshint esversion:6 */
import * as types from './types';
export const getters = {
  [types.FRECUENCIA]: (state) => {
    return state.frecuencia;
  },
  [types.PK]: (state) => {
    return state.pk;
  },
  [types.QP]: (state) => {
    return state.qp;
  },
  [types.AVG]: (state) => {
    return state.avg;
  }
};