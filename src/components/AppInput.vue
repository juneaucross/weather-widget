<template>
  <v-form @submit.prevent="addCity">
    <!-- <v-container> -->
    <v-row>
      <v-col cols="12" class="pb-0 pt-0">
        <v-text-field
          v-model="cityName"
          :label="labelText"
          placeholder="Enter city name"
          outlined
          color="purple darken-6"
          :prepend-inner-icon="icons.mdiMapMarker"
          :error-messages="this.errorMsg"
        >
          <!-- <template v-slot:append v-if="buttonText === 'Yeah!'">
            <v-btn color="orange" outlined small @click="addCity">
              {{ buttonText }}
            </v-btn>
          </template> -->
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-0" v-if="buttonText !== 'Yeah!'">
      <!-- <v-col cols="12" class="d-flex flex-row-reverse pt-0"> -->
      <v-btn color="orange" outlined large @click="addCity">
        {{ buttonText }}
      </v-btn>
      <!-- </v-col> -->
    </v-row>
    <!-- </v-container> -->
  </v-form>
</template>

<script>
import { mdiMapMarker } from '@mdi/js';

export default {
  name: 'AppInput',
  props: {
    buttonText: String,
    labelText: String,
  },
  data() {
    return {
      cityName: '',
      icons: {
        mdiMapMarker,
      },
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
