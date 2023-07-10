import Vue from 'vue'

import App from './App.vue'
import Vuex from 'vuex'

import router from './router'
import VueScrollTo from 'vue-scrollto';
import  Slide  from 'vue-burger-menu'

import HTTP from './modules/axios'

import './assets/main.css'

Vue.config.productionTip = false;

Vue.use(HTTP);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    scrollFlag: true,
  },
  getters: {
    getScrollFlag: (state) => {
      return state.scrollFlag;
    },

  },
  actions: {
    chengeScrollFlag: function(context) {
      context.commit('chengeScrollFlag')
    },

  },
  mutations: {
    chengeScrollFlag: function(state) {
      state.scrollFlag= false;
    },
  },
  modules: {

  },
    // // `createPersistedState()`でインスタンス作成。引数に設定を書く
    // plugins: [createPersistedState(
    //   { // ストレージのキーを指定。デフォルトではvuex
    //     key: 'TMC',

    //     // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
    //     paths: [
    //     ],
    //     storage: window.localStorage
    //   }
    // )]
})

export default store;

Vue.component('slide', Slide);

Vue.use(VueScrollTo);

new Vue({
  router,
  Slide,
  store,
  render: (h) => h(App)
}).$mount('#app')
