import { createStore } from 'vuex'

export default createStore({
  state: {
    projectNav: []
  },
  getters: {
  },
  mutations: {
    setProjectNav(state, nav) {
      state.projectNav = nav;
    }
  },
  actions: {
    loadPage({ commit }, nav) {
      commit('setProjectNav', nav);
    }
  },
  modules: {
  }
})
