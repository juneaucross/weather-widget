<template>
  <div class="header">
    <div class="header__title">
      <!-- <img
        alt="logo"
        class="header__logo"
        src="../assets/psbrella.png"
        height="50"
      /> -->
      <h1 class="title is-4 has-text-grey-lighter">PS weather</h1>
    </div>
    <div class="header__settings" v-show="citiesList.length >= 1">
      <button class="button is-info" size="is-small" @click="toggleSettings">
        <b-icon icon="cog" size="is-small"> </b-icon>
      </button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// import { Icon } from 'buefy';

// Vue.use(Icon);

export default {
  name: 'AppHeader',
  methods: {
    toggleSettings() {
      this.$store.commit('TOGGLE_SETTINGS');
    },
  },
  computed: {
    citiesList() {
      return this.$store.getters.citiesList;
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 285px;
  margin: 0 auto;
  height: 90px;

  &__title {
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 50px;
    margin-right: 7px;
  }
}
</style>
