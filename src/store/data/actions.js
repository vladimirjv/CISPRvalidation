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
  [types.UPDATE_EVAL_FRQ]: ({commit},payload) => {
    commit(types.MUTATE_EVAL_FRQ,payload);
  },
  [types.UPDATE_EVAL_PK]: ({commit},payload) => {
    commit(types.MUTATE_EVAL_PK,payload);
  },
  [types.UPDATE_REAL_VALUE]: ({commit},payload) => {
    commit(types.MUTATE_REAL_VALUE,payload);
  },
  [types.UPDATE_DIFFERENCE]: ({commit}, payload) => {
    commit(types.MUTATE_DIFFERENCE,payload);
  },
  [types.UPDATE_MAPE]: ({commit}, payload) => {
    commit(types.MUTATE_MAPE,payload);
  }
};
