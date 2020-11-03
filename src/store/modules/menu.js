export default {
  namespaced: true,
  state: {
    currTab: "99",
    userName: ""
  },
  mutations: {
    reset(state, currTab) {
      state.currTab = currTab;
    },
    setName(state, name) {
      state.userName = name;
    }
  },
  actions: {
    set({ commit }, currTab) {
      commit("reset", currTab);
    },
    setName({ commit }, name) {
      commit("setName", name);
    }
  },
  modules: {}
};
