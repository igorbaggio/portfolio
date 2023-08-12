import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = new Vuetify(); // Crie uma instância do Vuetify

new Vue({
  vuetify, // Passe a instância do Vuetify aqui
  render: (h) => h(App),
}).$mount("#app");
