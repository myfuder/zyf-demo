import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "zrender/lib/svg/svg";
import "element-ui/lib/theme-chalk/index.css";
// import GlobelQuote from "./router/GlobelQuote";
import api from "./service/api";
import tools from "./utils/tools";
import store from "./store";
import "flex.css";
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$tool = tools;
Vue.use(ElementUI);
// Vue.use(GlobelQuote);
const errorHandler = (error, vm) => {
    console.error(vm);
    console.error(error);
};
if (process.env.NODE_ENV != "development") {
    console.log = function() {};
}
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = error => errorHandler(error, this);
// Vue.filter('dataformat', function (avg) {
//   return (avg && avg.isNaN) || avg === "NaN" || avg === undefined ? "--" : avg;
// })
new Vue({
    el: "#app",
    router: router,
    store: store,
    template: "<App/>",
    components: { App }
});
