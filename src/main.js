import Vue from "vue";
import VueCookies from 'vue-cookies'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import filters from "./filters";

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.$cookies.config('7d');

Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
