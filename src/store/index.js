import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme.js";
import menu from "./modules/menu.js";
import base from "./base.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ysb: {
      namespaced: true,
      modules: { theme, menu, base }
    }
  }
});
