import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollFlag: true,
  },
  getters: {
    getScrollFlag: (state) => {
      return state.scrollFlag;
    },
  },
  actions: {
    chengeScrollFlag:function(context) {
      context.commit('chengeScrollFlag');
    },

  },
  mutations: {
    chengeScrollFlag:function(state) {
      state.scrollFlag = false;
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