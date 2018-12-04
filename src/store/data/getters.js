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
  },
  [types.EVAL_FRQ]: state => {
    return state.eval_frq;
  },
  [types.EVAL_PK]: state => {
    return state.eval_pk;
  },
  [types.REAL_VALUE]: state => {
    return state.real_value;
  },
  [types.DIFFERENCE]: state => {
    return state.difference;
  },
  [types.MAPE]: state => {
    return state.mape;
  }
};
