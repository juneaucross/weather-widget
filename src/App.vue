<template>
  <div id="app">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(Buefy);

import store from './store';

import Buefy from 'buefy';
// import './buefy/dist/buefy.min.css';
// import './@mdi/font/css/materialdesignicons.css';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  store,
  Buefy,
  Vuex,
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<style src="./assets/chunk.css"></style>
<style lang="scss">
#app {
  position: absolute;
  right: 0;
  top: 60px;
  width: 312px;
  height: 500px;
  background-color: rgb(21, 25, 27);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border-radius: 13px 0 0 13px;
}
</style>
