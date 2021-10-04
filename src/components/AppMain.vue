<template>
  <section class="main">
    <app-greeting v-if="citiesList.length < 1" />
    <app-settings v-else-if="citiesList.length >= 1 && isSettings" />
    <app-cards-list v-else-if="citiesList.length >= 1" />
  </section>
</template>

<script>
import AppCardsList from './AppCardsList.vue';
import AppGreeting from './AppGreeting.vue';
import AppSettings from './AppSettings.vue';

export default {
  name: 'AppMain',
  components: {
    AppCardsList,
    AppGreeting,
    AppSettings,
  },
  computed: {
    citiesList() {
      return this.$store.getters.citiesList;
    },
    isSettings() {
      return this.$store.getters.isSettings;
    },
  },
  beforeMount() {
    this.$store.commit('GET_LOCAL_CITIES_LIST');
  },
};
</script>

<style>
.main {
  height: 400px;
  width: 285px;
  margin: 0 auto;
}
</style>
