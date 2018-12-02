/* jshint esversion: 6 */
import axios from 'axios';

export default ({ Vue }) => {
  Vue.prototype.$axios = axios;
};
