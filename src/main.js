import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement);

// import vueCustomElement from 'vue-custom-element';
// import 'document-register-element/build/document-register-element';

// Vue.use(vueCustomElement);
// App.store = store;
// App.vuetify = vuetify;
// Vue.customElement('weather-widget', App);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
