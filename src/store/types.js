/* jshint esversion: 6 */
import * as typesRutas from './rutas/types';
import * as typesData from './data/types';

const NAVIGATION = 'rutas/';
const DATA = 'data/';
//getters
export const RUTA_ACTUAL = NAVIGATION + typesRutas.RUTA_ACTUAL;
export const FRECUENCIA = DATA + typesData.FRECUENCIA;
export const PK = DATA + typesData.PK;
export const QP = DATA + typesData.QP;
export const AVG = DATA + typesData.AVG;
export const EVAL_FRQ = DATA +  typesData.EVAL_FRQ;
export const EVAL_PK = DATA + typesData.EVAL_PK;
//mutations
export const MUTATE_RUTA = NAVIGATION + typesRutas.MUTATE_RUTA;
export const MUTATE_FRECUENCIA = DATA + typesData.MUTATE_FRECUENCIA;
export const MUTATE_PK = DATA + typesData.MUTATE_PK;
export const MUTATE_QP = DATA + typesData.MUTATE_QP;
export const MUTATE_AVG = DATA + typesData.MUTATE_AVG;
export const MUTATE_EVAL_FRQ = DATA + typesData.MUTATE_EVAL_FRQ;
export const MUTATE_EVAL_PK = DATA + typesData.MUTATE_EVAL_PK;
// actions
export const UPDATE_RUTA = NAVIGATION + typesRutas.UPDATE_RUTA;
export const UPDATE_FRECUENCIA = DATA + typesData.UPDATE_FRECUENCIA;
export const UPDATE_PK = DATA + typesData.UPDATE_PK;
export const UPDATE_QP = DATA + typesData.UPDATE_QP;
export const UPDATE_AVG = DATA + typesData.UPDATE_AVG;
export const UPDATE_EVAL_FRQ = DATA + typesData.UPDATE_EVAL_FRQ;
export const UPDATE_EVAL_PK = DATA + typesData.UPDATE_EVAL_PK;
