import axios from 'axios';

// const SECURITY_CSRF_COOKIE = 'RESPONSE_TOKEN'
// const SECURITY_CSRF_HEADER = 'X-CSRFToken'

// cookieを付与
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRF-Token";

const Http = {
  name: 'http',
  get: function (url, params) {
    return axios.get(url, {params: params});
  },
  post: function (url, params) {
    let options = {};
    return axios.post(url, params, options);
  },
  patch: function (url, params) {
    let options = {};
    return axios.patch(url, params, options);
  },
  put: function (url, params) {
    let options = {};
    return axios.put(url, params, options);
  },
  delete: function (url, params) {
    return axios.delete(url, params);
  }
};

Http.install = function (Vue) {
  Vue.prototype.$http = Http;
};

export default Http;
