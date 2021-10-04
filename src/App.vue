<template>
  <v-app id="app">
    <app-header />
    <app-main />
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<style>
#app {
  position: fixed;
  right: 0;
  top: 60px;
  width: 312px;
  height: 530px;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border-radius: 13px 0 0 13px;
}
</style>
