import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter('formatDate', function(dt){
  if (dt && dt.indexOf("T")>=0) return dt.split("T")[0]
})
new Vue({
  render: h => h(App)
}).$mount("#app");
