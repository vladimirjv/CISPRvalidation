/* jshint esversion:6 */
import * as types from './types';
export const mutations = {
  [types.MUTATE_FRECUENCIA]: (state,payload) =>{
    state.frecuencia = payload;
  },
  [types.MUTATE_PK]: (state,payload) => {
    state.pk=payload;
  },
  [types.MUTATE_QP]: (state,payload) => {
    state.qp=payload;
  },
  [types.MUTATE_AVG]: (state,payload) => {
    state.avg = payload;
  },
  [types.MUTATE_EVAL_FRQ]: (state,payload) => {
    state.eval_frq = payload;
  },
  [types.MUTATE_EVAL_PK]: (state, payload) => {
    state.eval_pk = payload;
  },
  [types.MUTATE_REAL_VALUE]: (state, payload) => {
    state.real_value = payload;
  },
  [types.MUTATE_DIFFERENCE]: (state,payload) => {
    state.difference= payload;
  },
  [types.MUTATE_MAPE]: (state,payload) => {
    state.mape=payload;
  }
};
