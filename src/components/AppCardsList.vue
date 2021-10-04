<template>
  <ul class="cards-list">
    <template v-if="!isLoading">
      <app-city-card
        v-for="city in sortedWeatherArr"
        :key="city.id"
        :currentWeather="city"
      />
    </template>
    <b-skeleton
      size="is-large"
      height="204.5"
      :count="citiesList.size"
      :active="isLoading"
    ></b-skeleton>
  </ul>
</template>


<script>
import AppCityCard from './AppCityCard.vue';

// import Vue from 'vue';
// import { Skeleton } from 'buefy';

// Vue.use(Skeleton);

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

<style scoped>
.cards-list {
  height: 400px;
  overflow-y: auto;
  border-radius: 13px;
}

.cards-list::-webkit-scrollbar {
  display: none;
}

.b-skeleton-item.is-rounded {
  border-radius: 13px !important;
  margin-top: 10px !important;
}

.b-skeleton-item:nth-child(1n) {
  animation-delay: 1.3s !important;
  background-image: linear-gradient(
    90deg,
    rgb(87, 17, 92) 25%,
    rgb(110, 110, 110) 50%,
    rgb(87, 17, 92) 75%
  ) !important;
}

.b-skeleton-item:nth-child(2n) {
  animation-delay: 1.4s !important;
  background-image: linear-gradient(
    90deg,
    rgb(34, 5, 94) 25%,
    rgb(110, 110, 110) 50%,
    rgb(34, 5, 94) 75%
  ) !important;
}

.b-skeleton-item:nth-child(3n) {
  animation-delay: 1.5s !important;
  background-image: linear-gradient(
    90deg,
    rgb(16, 54, 99) 25%,
    rgb(110, 110, 110) 50%,
    rgb(16, 54, 99) 75%
  ) !important;
}
</style>
