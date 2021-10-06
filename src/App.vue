<template>
  <article id="app">
    <app-header />
    <app-main />
  </article>
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
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  position: fixed;
  right: 0;
  top: 60px;
  width: 312px;
  height: 530px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #bdbdbd;
  background-color: #121212;
  text-align: center;
  border-radius: 13px 0 0 13px;
}
</style>
