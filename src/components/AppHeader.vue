<template>
  <div class="header">
    <div class="header__title">
      <img
        alt="logo"
        class="header__logo"
        src="../assets/psbrella.png"
        height="50"
      />
      <h1 class="header__heading">PS weather</h1>
    </div>
    <div class="header__settings" v-show="citiesList.length >= 1">
      <app-button large blue @click.native="toggleSettings" />
    </div>
  </div>
</template>

<script>
import { mdiCog } from '@mdi/js';
import AppButton from './AppButton.vue';

export default {
  name: 'AppHeader',
  components: {
    AppButton,
  },
  data() {
    return {
      icons: {
        mdiCog,
      },
    };
  },
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

  &__heading {
    font-weight: bold;
  }
}
</style>
