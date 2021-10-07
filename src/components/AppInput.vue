<template>
  <b-field
    :label="labelText"
    custom-class="has-text-grey-lighter is-4"
    :type="{ 'is-danger': errorMsg }"
    :message="errorMsg"
    label-for="app-input"
  >
    <b-input
      v-model="cityName"
      placeholder="Enter city name"
      id="app-input"
      icon="../assets/psbrella.png"
      @keypress.enter.native="addCity"
    >
    </b-input>
    <b-button type="is-primary" @click="addCity">{{ buttonText }}</b-button>
  </b-field>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    buttonText: String,
    labelText: String,
  },
  data() {
    return {
      cityName: '',
    };
  },
  computed: {
    errorMsg() {
      return this.$store.getters.errorMsg;
    },
  },
  watch: {
    cityName(newVal, oldVal) {
      if (this.errorMsg && newVal !== oldVal) {
        this.$store.commit('UNSET_ERROR');
      }
    },
  },
  methods: {
    addCity() {
      this.$store.dispatch('checkCityAvailability', this.cityName);
      if (this.errorMsg === '') {
        this.cityName = '';
      }
    },
  },
};
</script>

<style lang="scss">
.help.is-danger {
  font-weight: bold;
}
</style>
