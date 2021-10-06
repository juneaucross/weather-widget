<template>
  <v-app id="app">
    <app-header />
    <app-main />
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';
import store from './store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

// Vue.use(
//   new Vuetify({
//     theme: { dark: true },
//   })
// );

Vue.use(Vuex);

export default {
  Vuex,
  store,
  vuetify,
  // Vuetify,
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
};
// <style src="../node_modules/vuetify/dist/vuetify.min.css"></style>
</script>

<style src="./assets/chunk.css"></style>
<style>
/* @import '../node_modules/vuetify/dist/vuetify.min.css'; */
/* @import './assets/chunk.css'; */

#app {
  position: absolute;
  right: 0;
  top: 60px;
  width: 312px !important;
  height: 530px !important;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border-radius: 13px 0 0 13px;
}
</style>
