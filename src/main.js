import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Vuesax, {
  // options here
  primary: "#5b3cc4",
  success: "rgb(23, 201, 100)",
  danger: "rgb(242, 19, 93)",
  warning: "rgb(255, 130, 0)",
  dark: "rgb(36, 33, 69)",
});

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
