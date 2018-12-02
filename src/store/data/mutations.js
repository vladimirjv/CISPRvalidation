/* jshint esversion:6 */
import * as types from './types';
export const mutations = {
  [types.MUTATE_FRECUENCIA]: (sate,payload) =>{
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
  }
}
