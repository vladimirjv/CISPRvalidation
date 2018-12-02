/*jshint esversion:6*/
import * as types from './types';
export const actions = {
  [types.UPDATE_FRECUENCIA]: ({commit},payload) => {
    commit(types.MUTATE_FRECUENCIA,payload);
  },
  [types.UPDATE_PK]: ({commit},payload) => {
    commit(types.MUTATE_PK,payload);
  },
  [types.UPDATE_QP]: ({commit},payload) => {
    commit(types.MUTATE_QP,payload);
  },
  [types.UPDATE_AVG]: ({commit},payload) => {
    commit(types.MUTATE_AVG,payload);
  },
};
