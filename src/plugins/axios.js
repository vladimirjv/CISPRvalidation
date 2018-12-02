/* jshint esversion: 6 */
import axios from 'axios';

export default ({ Vue }) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.baseURL = 'https: //floating-sea-76017.herokuapp.com';
  Vue.prototype.$axios = axios;
};
