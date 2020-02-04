import Vue from "vue";
import App from "./App.vue";
import router from './router'

Vue.config.productionTip = false;

Vue.filter('formatDate', function(dt){
  if (dt && dt.indexOf("T")>=0) return dt.split("T")[0]
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
