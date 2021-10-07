<template>
  <div id="app">
    <app-header />
    <app-main />
  </div>
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
