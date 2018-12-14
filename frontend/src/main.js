import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

// add support for asynchronously computed properties
// npm i -S vue-async-computed
import AsyncComputed from "vue-async-computed";
Vue.use(AsyncComputed);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
