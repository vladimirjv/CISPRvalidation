/* jshint esversion: 6 */
import * as types from './types';
export const actions ={
  [types.UPDATE_RUTA]: ({commit},payload) =>{
    commit(types.MUTATE_RUTA,payload);
    console.log(payload + 'ok');

  }
}
