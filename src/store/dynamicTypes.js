/* jshint esversion: 6 */
import * as typesRutas from './rutas/types';
const RUTA= 'ruta/';

var typesG={};
Object.keys(typesRutas).map(function (key,index) {
  typesG[key]= RUTA+typesRutas[key];
});

export const dynamicTypes = typesG;
