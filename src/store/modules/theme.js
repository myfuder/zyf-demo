export default {
    namespaced: true,
    state: {
        themeName: "ysb"
    },
    mutations: {
        dom(state) {
            document.body.className = `theme-${state.themeName}`;
        }
    },
    actions: {
        set({ state, commit }, themeName) {
            return new Promise(() => {
                // 检查这个主题在主题列表里是否存在
                state.themeName = [{ name: "ysb" }, { name: "ysback" }].find(
                    e => e.name === themeName
                )
                    ? themeName
                    : "ysb";
                // 将 vuex 中的主题应用到 dom
                commit("dom");
            });
        }
    },
    modules: {}
};
