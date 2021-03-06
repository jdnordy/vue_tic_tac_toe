import Vue from "vue";
import Board from "./Board.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Board),
}).$mount("#app");
