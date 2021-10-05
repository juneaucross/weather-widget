<template>
  <div class="header">
    <div class="header__title">
      <img
        alt="logo"
        class="header__logo"
        src="../assets/psbrella.png"
        height="50"
      />
      <h1 class="grey--text text--lighten-1 text-h5">PS weather</h1>
    </div>
    <div class="header__settings" v-show="citiesList.length >= 1">
      <v-btn
        color="blue"
        elevation="2"
        icon
        large
        rounded
        tile
        @click="toggleSettings"
      >
        <v-icon large>
          {{ icons.mdiCog }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mdiCog } from '@mdi/js';

export default {
  name: 'AppHeader',
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
}
</style>
