<template>
  <ul class="cards-list">
    <app-city-card
      v-for="city in sortedWeatherArr"
      :key="city.id"
      :currentWeather="city"
    />
  </ul>
</template>

<script>
import AppCityCard from './AppCityCard.vue';

export default {
  name: 'AppCardsList',
  components: {
    AppCityCard,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    sortedWeatherArr() {
      return this.$store.getters.sortedWeatherArr;
    },
    citiesList() {
      return this.$store.getters.citiesList;
    },
  },
  beforeMount() {
    this.$store.dispatch('getCurrentWeatherArr');
  },
};
</script>

<style lang="scss">
.cards-list {
  height: 430px;
  overflow-y: auto;
  border-radius: 13px;
  padding-left: 0 !important;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
